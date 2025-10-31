import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";
import { Inter } from "next/font/google"
import GoogleAnalytics from '@/components/GoogleAnalytics'
import MetaAnalytics from "@/components/MetaAnalytics";
import WhatsappButton from '@/components/WhatsappButton'
import CookieBaner from '@/components/CookieBanner'
const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "VersaNex — Software House | Web, Mobile & Digital Solutions",
  description:
    "VersaNex is a full-service software house providing website development, mobile apps, graphic designing, video editing, digital marketing, content writing, and software quality assurance. We create fast, scalable, and visually engaging digital experiences.",
  keywords: [
    "VersaNex",
    "software house",
    "web development",
    "mobile apps",
    "graphic designing",
    "video editing",
    "digital marketing",
    "content writing",
    "software quality assurance",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Pakistan software company",
    "IT solutions",
    "custom web applications"
  ],

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
openGraph: {
    title: "VersaNex — Software House | Web, Mobile & Digital Solutions",
    description:
      "We craft high-performance digital solutions — from websites and mobile apps to design, content, and marketing. Fast, scalable, and human-centered.",
    url: "https://www.versanex.site/",
    siteName: "VersaNex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.versanex.site/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "VersaNex — Software House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VersaNex — Software House | Web, Mobile & Digital Solutions",
    description:
      "Modern website, mobile app, and digital services — including design, marketing, and quality assurance — crafted by VersaNex.",
    creator: "@VersaNex",
    images: ["https://www.versanex.site/og-image.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <MetaAnalytics/>
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
