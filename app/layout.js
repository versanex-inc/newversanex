import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";
import { Inter } from "next/font/google"
import GoogleAnalytics from '@/components/GoogleAnalytics'
import WhatsappButton from '@/components/WhatsappButton'
import CookieBaner from '@/components/CookieBanner'
const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "VersaNex — Software House | Web, Mobile, AI & Cloud Solutions",
  description:
    "VersaNex is a full-service software house delivering modern web, mobile, AI, and cloud solutions. We build fast, scalable products with a human-centered approach.",
  generator: "v0.app",
  keywords: [
    "VersaNex",
    "software house",
    "web development",
    "mobile apps",
    "AI",
    "cloud",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/favicon/site.webmanifest",
      },
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  openGraph: {
    title: "VersaNex — Software House",
    description:
      "We craft high-performance digital products: Web, Mobile, AI & Cloud.",
    url: "https://VersaNex.example", // replace when live
    siteName: "VersaNex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VersaNex — Software House",
    description:
      "Modern Web, Mobile, AI & Cloud solutions. Fast. Scalable. Human-centered.",
    creator: "@VersaNex", // update if available
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics/>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieBaner/>
        <WhatsappButton/>
        <Analytics />
      </body>
    </html>
  );
}
