import type { MetadataRoute } from "next"
import { site, topics } from "@/lib/site"
import { staticRoutes } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({ url: new URL(path, site.url).href })),
    ...topics.map((topic) => ({ url: `${site.url}/topics/${topic.slug}`, lastModified: topic.reviewedAt })),
  ]
}
