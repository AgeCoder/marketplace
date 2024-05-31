import prisma from "@/app/lib/db";
import { stripe } from "@/app/lib/stripe";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRECT as string
    );
  } catch (err) {
    return new Response("webhook issue", { status: 400 });
  }

  switch (event.type) {
    case "account.updated": {
      const account = event.data.object;

      const UserData = await prisma.user.update({
        where: {
          connectedAccountId: account.id,
        },
        data: {
          stripeConnectedLinked:
            account.capabilities?.transfers == "pending" ||
            account.capabilities?.transfers == "inactive"
              ? false
              : true,
        },
      });
      break;
    }
    default: {
      // console.log("Unhandled event in stripeconnect");
    }
  }

  return new Response(null, { status: 200 });
}
