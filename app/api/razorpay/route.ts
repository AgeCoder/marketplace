import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: Request) {
  const { amount, currency, receipt } = await request.json();
  // console.log(amount, currency, receipt);

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in smallest currency unit
      currency: "INR",
      receipt: receipt,
    });
    // console.log(order);
    return NextResponse.json(order);
  } catch (error: any) {
    // console.log(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
