import type { Metadata } from "next"
import { site } from "@/lib/site"

export const staticRoutes = ["/", "/about", "/book", "/contact", "/courses", "/faq", "/free", "/guides", "/privacy", "/refunds", "/tahakkom", "/terms", "/topics"]

export function pageMetadata(path: string, metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : site.doctorName
  const description = metadata.description ?? site.description
  return {
    ...metadata,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "ar_SA", siteName: site.doctorName, title, description, url: path, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.doctorName }] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  }
}
