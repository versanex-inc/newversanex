

"use client"

import { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"

const clips = [
  {
    id: 1,
    title: "Behind the scenes: shoot day tips",
    url: "https://www.instagram.com/",
    poster: "/instagram-reel-bts-1.jpg",
    width: 608,
    height: 1080,
    uploadDate: "2025-01-10",
    duration: "PT24S",
  },
  {
    id: 2,
    title: "Editing tricks that boost watch time",
    url: "https://www.instagram.com/",
    poster: "/instagram-reel-edit-2.jpg",
    width: 608,
    height: 1080,
    uploadDate: "2025-02-02",
    duration: "PT19S",
  },
  {
    id: 3,
    title: "Lighting for crisp mobile videos",
    url: "https://www.instagram.com/",
    poster: "/instagram-reel-lighting-3.jpg",
    width: 608,
    height: 1080,
    uploadDate: "2025-03-18",
    duration: "PT21S",
  },
  {
    id: 4,
    title: "Hook ideas for the first 3 seconds",
    url: "https://www.instagram.com/",
    poster: "/instagram-reel-hooks-4.jpg",
    width: 608,
    height: 1080,
    uploadDate: "2025-04-12",
    duration: "PT17S",
  },
]

export default function InstagramSection() {
  const prefersReduced = useReducedMotion()

  const jsonLd = useMemo(() => {
    const items = clips.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: c.url,
      item: {
        "@type": "VideoObject",
        name: c.title,
        thumbnailUrl: c.poster,
        uploadDate: c.uploadDate,
        contentUrl: c.url,
        duration: c.duration,
      },
    }))
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: items,
    }
  }, [])

  return (
    <section
      id="instagram"
      aria-label="Instagram Reels Showcase"
      className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-5 flex flex-col md:flex-row items-start justify-between gap-6 md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-[#f2ad08] uppercase">
              Instagram Reels
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Engaging Stories, Crafted to Capture Attention
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
            Learn about short, powerful reels that are meant to captivate and convert.
            Every clip is carefully designed for performance and virality, combining storytelling, emotion, and inventiveness.

            </p>
          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[#f2ad08] px-6 py-2 text-sm font-medium text-[#f2ad08] transition-all hover:bg-[#f2ad08] hover:text-white"
          >
            Follow us on Instagram
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Reels Grid */}
        <div className="mx-5 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clips.map((c, i) => (
            <motion.article
              key={c.id}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${c.title} on Instagram`}
                className="block"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-t-2xl">
                  <img
                    src={c.poster || "/placeholder.svg"}
                    alt={c.title}
                    width={c.width}
                    height={c.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm p-4">
                      <svg
                        className="h-10 w-10 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M10 8.5l6 3.5-6 3.5V8.5z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {c.title}
                  </h3>
                  <span className="mt-2 inline-block rounded-full border border-[#f2ad08] text-[#f2ad08] text-xs px-3 py-1 font-medium">
                    Reel
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* SEO JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  )
}
