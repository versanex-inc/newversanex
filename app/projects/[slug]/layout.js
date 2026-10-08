import { notFound } from "next/navigation"
import { getProjectForSeo } from "@/lib/project-seo"
import { createPageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = await getProjectForSeo(slug)
  if (!project) notFound()
  const description = String(project.description || "Explore this VersaNex project and the work behind it.").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160)
  return createPageMetadata(project.title + " | VersaNex Projects", description, "/projects/" + encodeURIComponent(project.slug))
}

export default async function ProjectLayout({ children, params }) {
  const { slug } = await params
  if (!await getProjectForSeo(slug)) notFound()
  return children
}
