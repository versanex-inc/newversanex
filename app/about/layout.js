import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata("About Us | VersaNex", "Meet VersaNex, the software development and digital product design team behind fast, scalable websites, mobile apps, and custom software.", "/about")

export default function PageLayout({ children }) {
  return children
}
