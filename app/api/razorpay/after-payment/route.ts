import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/app/lib/db";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { data } = await request.json();

    // Get the user session
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // Fetch the product link
    const productLink = await prisma.product.findUnique({
      where: {
        id: data.id,
      },
      select: {
        productfile: true,
      },
    });

    if (!productLink) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Fetch user data from the database
    const userData = await prisma.user.findUnique({
      where: { id: user?.id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    if (!userData) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check for required environment variables
    const { SMPT_PASSWORD, SMPT_EMAIL } = process.env;

    // Create a Nodemailer transport
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMPT_EMAIL,
        pass: SMPT_PASSWORD,
      },
    });

    // Prepare the email content
    const mailOptions = {
      from: SMPT_EMAIL,
      to: userData.email,
      subject: `AlightUI Product Delivery to ${userData.firstName} ${userData.lastName}`,
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
            <p>Dear ${userData.firstName} ${userData.lastName},</p>
            <p>Click the link below to download your file:</p>
            <p><a href="${productLink.productfile}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Download File</a></p>
            <p>If you have any questions or concerns, feel free to contact us.</p>
            <p>Best regards,<br>AlightUI</p>
          </div>
        </body>
        </html>
      `,
    };

    // Send the email
    const sentResult = await transport.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email Sent Successfully", sentResult },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to Send Email", error: error },
      { status: 500 }
    );
  }
}
