"use client"

import { useMemo, useState, useEffect } from "react"
import SectionHeading from "./section-heading"
import Image from "next/image"

const ACCENT = "#d88f07"

// Active categories — only these 3 are shown on frontend
const displayCategories = ["All", "Web Development", "Mobile App Development", "UI/UX Design"]
const categoryMap = {
  "All": "All",
  "Web Development": "website-developing",
  "Mobile App Development": "mobile-app-development",
  "UI/UX Design": "ui-ux",
}

// Categories hidden from frontend display (kept in DB enum, not shown to visitors)
const HIDDEN_CATEGORIES = ["graphic-designing", "video-editing", "content-writing", "digital-marketing", "software-quality-assurance"]

export default function Portfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState("All")

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setProjects(data.data)
        }
      })
      .catch((err) => {
        console.error("Error fetching projects:", err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const filtered = useMemo(() => {
    // Start by filtering out hidden categories sitewide
    const visibleProjects = projects.filter((p) => !HIDDEN_CATEGORIES.includes(p.category))

    let filteredProjects = active === "All"
      ? visibleProjects
      : visibleProjects.filter((p) => p.category === categoryMap[active])

    return filteredProjects.slice(0, 8)
  }, [active, projects])

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
          {displayCategories.map((c) => {
            const selected = c === active
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                role="tab"
                aria-selected={selected ? "true" : "false"}
                id={`tab-${c.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  selected
                    ? "bg-[#d88f07] text-white shadow-md scale-105 border-[#d88f07]"
                    : "text-gray-600 dark:text-gray-300 hover:text-black hover:border-[#d88f07] dark:hover:text-white"
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* Project grid with min-height and reserved skeleton space to eliminate CLS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]">
          {loading ? (
            /* Skeleton cards matching exact dimensions during initial fetch */
            [...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-gray-100 bg-gray-50/50 dark:bg-neutral-900/50 overflow-hidden ${
                  i === 0 && active === "All" ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="aspect-video bg-gray-200 dark:bg-neutral-800 animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="h-6 w-3/4 bg-gray-200 dark:bg-neutral-800 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 dark:bg-neutral-800 rounded animate-pulse" />
                </div>
              </div>
            ))
          ) : filtered.length > 0 ? (
            filtered.map((p, i) => {
              const isFeatured = i === 0 && active === "All"
              return (
                <article
                  key={p.title || p.slug || i}
                  className={`group relative overflow-hidden rounded-2xl border bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <a href={`/projects/${p.slug}`} aria-label={`Open project: ${p.title}`} className="absolute inset-0 z-10" />

                  <div className="aspect-video overflow-hidden relative bg-gray-100 dark:bg-neutral-800">
                    <Image
                      src={p.images?.[0]?.url || "/placeholder.svg"}
                      alt={`${p.title} showcase image`}
                      width={1280}
                      height={720}
                      unoptimized
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
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
                    {p.category}
                  </span>

                  {/* Hover CTA */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
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
                </article>
              )
            })
          ) : (
            <article
              key="coming-soon"
              className="relative overflow-hidden rounded-2xl border bg-white dark:bg-neutral-900 shadow-sm col-span-full text-center p-12 min-h-[300px] flex flex-col items-center justify-center"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                Coming Soon
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Exciting projects in this category are on the way!
              </p>
            </article>
          )}
        </div>

        {/* SEO JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </section>
  )
}