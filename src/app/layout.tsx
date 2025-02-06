import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/layout/Footer";
import "./globals.css";
import { SessionProvider } from 'next-auth/react'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ["latin"] });

import Navbar from "../components/layout/Navbar";

export const metadata = {
  title: "Kuesuto: AI-powered quizzes on any topic, anytime!",
  description:
    "Welcome to Kuesuto, the revolutionary platform that transforms the way you learn and test your knowledge! Imagine having the power to create quizzes on literally anything under the sun, from the depths of ancient history to the latest pop culture phenomena. That's exactly what Kuesuto offers, and so much more!",
  openGraph: {
    type: "website",
    url: "https://kuesuto.vercel.app/",
    title: "Kuesuto: AI-powered quizzes on any topic, anytime!",
    description:
      "Welcome to Kuesuto, the revolutionary platform that transforms the way you learn and test your knowledge! Imagine having the power to create quizzes on literally anything under the sun, from the depths of ancient history to the latest pop culture phenomena. That's exactly what Kuesuto offers, and so much more!",
    images: ["/seo.jpg"], 
  },
  twitter: {
    card: "summary_large_image",
    site: "x.com/_kuesuto", 
    title: "Kuesuto: AI-powered quizzes on any topic, anytime!",
    description:
      "Welcome to Kuesuto, the revolutionary platform that transforms the way you learn and test your knowledge! Imagine having the power to create quizzes on literally anything under the sun, from the depths of ancient history to the latest pop culture phenomena. That's exactly what Kuesuto offers, and so much more!",
    images: ["/seo.jpg"], 
  },
  other: {
    "google-site-verification": "PNPubIbBFBlKdFdiJ2FTQB0tHZjxHE-KecYJ-ZBGpTo",
  },
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
     <Navbar />
      {children}
      <Footer />
      <Analytics />
      <SpeedInsights /></body>


      </SessionProvider>
    </html>
  );
}
