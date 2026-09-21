import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "Dr George Shaker | AI Patient Capture for Private Clinics",
  description:
    "Never lose another patient to a missed call. QURO's AI texts back every missed call within 60 seconds, answers enquiries 24/7 and sends patients straight to your booking page.",
  openGraph: {
    title: "Dr George Shaker | AI Patient Capture for Private Clinics",
    description:
      "AI missed-call text-back and enquiry assistant for UK private clinics. 5 booked appointments in 30 days — or you don't pay.",
    url: site.domain,
    siteName: site.company,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "QURO — AI Patient Capture" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
