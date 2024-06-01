import { stripe } from "@/app/lib/stripe";
import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRECT_EMAIL as string
    );
  } catch (err) {
    // console.log(err);
    return new Response("webhook issue", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const linkToDownload = session.metadata?.NotFound;
      const userid = session.metadata?.UserID;

      const UserData = await prisma.user.findUnique({
        where: {
          id: userid,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
        },
      });

      try {
        const { SMPT_PASSWORD, SMPT_EMAIL } = process.env;

        const transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: SMPT_EMAIL,
            pass: SMPT_PASSWORD,
          },
        });

        const sentResult = await transport.sendMail({
          from: SMPT_EMAIL,
          to: UserData?.email,
          subject: `AlightUI Product Delivery to ${UserData?.firstName} ${UserData?.lastName}`,
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Product Details And Link To Download</title>
            </head>
            <body>
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2>Download Your File</h2>
                    <p>Dear ${UserData?.firstName},${UserData?.lastName}</p>
                    <p>Click the link below to download your file:</p>
                    <p><a href="${linkToDownload}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Download File</a></p>
                    <p>If you have any questions or concerns, feel free to contact us.</p>
                    <p>Best regards,<br>AlightUI</p>
                </div>
            </body>
            </html>
          `,
        });
        // console.log(sentResult);
        return NextResponse.json(
          { message: "Email Sent Successfully" },
          { status: 200 }
        );
      } catch (error) {
        console.log(error);
        return NextResponse.json(
          { message: "Failed to Send Email" },
          { status: 500 }
        );
      }
    }
    default: {
      // console.log("Unhandled event in stripeconnect");
    }
  }

  return new Response(null, { status: 200 });
}
