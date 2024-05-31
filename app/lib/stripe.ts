import Stripe from "stripe";

export const stripe = new Stripe(process.env.Strip_Secret_key as string, {
  apiVersion: "2024-04-10",
  typescript: true,
});
