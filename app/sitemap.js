import { services } from "@/data/services"
import { SITE_URL } from "@/lib/seo"
import { publishedProjectFilter } from "@/lib/project-seo"
import connectDB from "@/lib/dbConnect"
import Project from "@/lib/model/Projects"

// Generate from the live database without requiring database access at build time.
export const dynamic = "force-dynamic"

export default async function sitemap() {
  const pages = ["", "/about", "/services", "/projects", "/contact", "/faqs", "/privacy-policy", "/terms-of-use"]
  const entries = pages.map((path) => ({ url: SITE_URL + path }))
  entries.push(...services.map((service) => ({ url: SITE_URL + "/services/" + service.slug })))
  await connectDB()
  const projects = await Project.find(publishedProjectFilter).select("slug updatedAt").lean()
  entries.push(...projects.filter((project) => project.slug).map((project) => ({
    url: SITE_URL + "/projects/" + encodeURIComponent(project.slug),
    ...(project.updatedAt ? { lastModified: project.updatedAt } : {}),
  })))
  return entries
}
