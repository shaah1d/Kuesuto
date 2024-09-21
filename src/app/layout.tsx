import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import "./globals.css";
import { SessionProvider } from 'next-auth/react'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Kuesuto",
  description: "Welcome to Kuesuto, the revolutionary platform that transforms the way you learn and test your knowledge! Imagine having the power to create quizzes on literally anything under the sun, from the depths of ancient history to the latest pop culture phenomena. That's exactly what Kuesuto offers, and so much more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
      <body className={inter.className}>

      {children}
      <Footer />
      <Analytics />
      <SpeedInsights /></body>


      </SessionProvider>
    </html>
  );
}
