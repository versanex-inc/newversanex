export const SITE_URL = "https://www.versanex.site"
export const SITE_TITLE = "VersaNex | Software Development & Digital Product Design"
export const SITE_DESCRIPTION = "VersaNex builds custom software, websites, SaaS products, mobile apps, UI/UX designs, and e-commerce platforms for growing businesses."

export function createPageMetadata(title, description, path) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title, description, url: path, siteName: "VersaNex", type: "website",
      images: [{ url: "/og-image.jpeg", width: 1200, height: 630, alt: "VersaNex - Software Development & Digital Product Design" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpeg"] },
  }
}
