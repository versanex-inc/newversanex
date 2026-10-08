import { SITE_URL } from "@/lib/seo"

export default function robots() {
  return {
    // Google must be able to fetch the public project data used by the pages.
    rules: { userAgent: "*", allow: ["/", "/api/projects"], disallow: ["/api/"] },
    sitemap: SITE_URL + "/sitemap.xml",
  }
}
