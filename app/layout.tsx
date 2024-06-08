import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "@/components/ui/sonner"
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "AlightUI",
    template: "%s | AlightUI",
  },
  description: "AlightUI - Innovative Website Solutions , We offers innovative website solutions to drive your business forward. Contact us for web design, development, and digital marketing services.",
  keywords: ["AlightUI", "alightUI", "vedant navale", "navale", "website agency", " web design", "web development", " digital marketing", "SEO", "online presence", "branding", "technology solutions"],
  author: [{ name: "Vedant Navale" }],
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors closeButton theme="light" position="top-center" />
      </body>
      <Script
        id="rzpscript"
        src="https://checkout.razorpay.com/v1/checkout.js"
      ></Script>
    </html>
  );
}
