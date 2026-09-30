import type { Metadata, Viewport } from "next"
import { Readex_Pro, IBM_Plex_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { site } from "@/lib/site"

const readex = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-readex",
  display: "swap",
})

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.doctorName} — ${site.tagline}`,
    template: `%s | ${site.doctorName}`,
  },
  description: site.description,
  keywords: [
    "صحة الرجل",
    "ضعف الانتصاب",
    "سرعة القذف",
    "تضخم البروستاتا",
    "حصوات الكلى",
    "المسالك البولية",
    "دكتور جورج شاكر",
  ],
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: site.url,
    title: `${site.doctorName} — ${site.tagline}`,
    description: site.description,
    siteName: site.doctorName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.doctorName} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#14264a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${readex.variable} ${plexArabic.variable}`}>
      <body>{children}</body>
    </html>
  )
}
