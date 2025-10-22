"use client"

import { useMemo, useState } from "react"
import SectionHeading from "./section-heading"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const ACCENT = "#d88f07"

const projects = [
  {
    title: "Conversion-Focused Commerce",
    image: "/high-quality-ecommerce-conversion-project.jpg",
    tag: "Web App",
    description: "Headless storefront with blazing performance and optimized UX flows for higher conversion.",
    href: "/projects/commerce",
  },
  {
    title: "Mobile Health Companion",
    image: "/high-quality-mobile-health-project.jpg",
    tag: "Mobile",
    description: "Cross-platform wellness app with real-time tracking and offline-first design.",
    href: "/projects/health-app",
  },
  {
    title: "AI Operations Assistant",
    image: "/high-quality-ai-operations-project.jpg",
    tag: "AI",
    description: "Intelligent agent automations streamlining internal business workflows.",
    href: "/projects/ai-assistant",
  },
  {
    title: "SaaS Analytics Dashboard",
    image: "/high-quality-saas-analytics-project.jpg",
    tag: "Web App",
    description: "Real-time dashboards, anomaly detection, and exportable analytics for SaaS products.",
    href: "/projects/saas-analytics",
  },
  {
    title: "On-Demand Delivery Platform",
    image: "/high-quality-delivery-logistics-project.jpg",
    tag: "Mobile",
    description: "Smart route optimization and live courier tracking for delivery companies.",
    href: "/projects/delivery",
  },
  {
    title: "Vision Quality Control System",
    image: "/high-quality-computer-vision-project.jpg",
    tag: "AI",
    description: "Computer vision pipeline that reduces manufacturing defect rates by 40%.",
    href: "/projects/vision-qc",
  },
]

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.tag)))]

export default function Portfolio() {
  const [active, setActive] = useState("All")

  const filtered = useMemo(() => {
    return active === "All" ? projects : projects.filter((p) => p.tag === active)
  }, [active])

  const jsonLd = useMemo(() => {
    const itemListElement = filtered.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: p.href || "#",
      name: p.title,
    }))
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement,
    }
  }, [filtered])

  return (
    <section id="work" aria-labelledby="work-heading" className="py-20 md:py-28 bg-white dark:bg-[#0b0b0b]">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects That Speak for Themselves"
          description="Every project we build is crafted with strategy, creativity, and technology — delivering measurable business growth."
        /> */}



<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <SectionHeading
    eyebrow={<span style={{ color: "#f2ad08" }}>Our Work</span>}
    title="Projects That Speak for Themselves"
    description="Every project we build is crafted with strategy, creativity, and technology — delivering measurable business growth."
  />

        {/* Filter buttons */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((c) => {
            const selected = c === active
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${c}`}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  selected
                    ? "bg-[#d88f07] text-white shadow-md scale-105"
                    : "text-gray-600 dark:text-gray-300 hover:text-black hover:border-[#d88f07] dark:hover:text-white"
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const isFeatured = i === 0 && active === "All"
              return (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative overflow-hidden rounded-2xl border bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                    isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <a href={p.href} aria-label={`Open project: ${p.title}`} className="absolute inset-0 z-10" />

                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={p.image}
                      alt={`${p.title} showcase image`}
                      width={1280}
                      height={720}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="relative z-20 p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{p.description}</p>
                  </div>

                  {/* Tag badge */}
                  <span
                    className="absolute top-4 left-4 z-20 rounded-full px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm"
                    style={{
                      backgroundColor: "color-mix(in srgb, " + ACCENT + " 20%, transparent)",
                      color: ACCENT,
                      border: `1px solid ${ACCENT}40`,
                    }}
                  >
                    {p.tag}
                  </span>

                  {/* Hover CTA */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="rounded-full border px-3 py-1.5 text-xs font-medium text-gray-900 bg-white/80 backdrop-blur-md dark:bg-white/10 dark:text-white">
                      Case Study
                    </div>
                    <div
                      className="rounded-full px-3 py-1.5 text-xs font-medium"
                      style={{ backgroundColor: ACCENT, color: "#fff" }}
                    >
                      View Details →
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* SEO JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </section>
  )
}
