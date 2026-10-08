import { notFound } from "next/navigation"
import { getServiceBySlug } from "@/data/services"
import { createPageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()
  return createPageMetadata(service.title + " | VersaNex", service.description, "/services/" + service.slug)
}

export default async function ServiceLayout({ children, params }) {
  const { slug } = await params
  if (!getServiceBySlug(slug)) notFound()
  return children
}
