"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

const brands = [
  { id: 1,  name: "Apex",               logo: "/clients-logo/apex.png" },
  { id: 2,  name: "Fixit",              logo: "/clients-logo/fixit.jpeg" },
  { id: 3,  name: "Maxcoat",            logo: "/clients-logo/maxcoat.jpg" },
  { id: 4,  name: "Time Center",        logo: "/clients-logo/timecenter..png" },
  { id: 5,  name: "Future Client",      logo: "/placeholder-logo.png" },
  { id: 6,  name: "Future Client",      logo: "/placeholder-logo.png" },
  { id: 7,  name: "Future Client",      logo: "/placeholder-logo.png" },
  { id: 8,  name: "Future Client",      logo: "/placeholder-logo.png" },
  { id: 9,  name: "Future Client",      logo: "/placeholder-logo.png" },
  { id: 10, name: "Future Client",      logo: "/placeholder-logo.png" },
  { id: 11, name: "Future Client",      logo: "/placeholder-logo.png" },
]

// Arc curve: each brand positioned along a rainbow arc using x/y offsets + rotation
const arcPositions = [
  { x: -480, y:  80, rot: -16 },
  { x: -330, y:  30, rot: -10 },
  { x: -175, y:   8, rot:  -5 },
  { x:    0, y:   0, rot:   0 },
  { x:  175, y:   8, rot:   5 },
  { x:  330, y:  30, rot:  10 },
  { x:  480, y:  80, rot:  16 },
  { x: -280, y: 145, rot: -20 },
  { x:  -90, y: 120, rot:  -6 },
  { x:   90, y: 120, rot:   6 },
  { x:  280, y: 145, rot:  20 },
]

function BrandCard({ brand, style, extraClass }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div
      className={[
        "group relative flex items-center justify-center",
        "w-[110px] h-[68px] sm:w-[130px] sm:h-[78px]",
        "rounded-2xl bg-white dark:bg-[#111318]",
        "border border-slate-200/80 dark:border-neutral-800",
        "shadow-sm cursor-pointer overflow-hidden",
        "transition-all duration-300",
        "hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.06]",
        "hover:border-[#c86537]/50",
        extraClass || "",
      ].join(" ")}
      style={style}
    >
      {/* hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[#c86537]/10 via-transparent to-transparent" />

      {/* logo / name */}
      <div className="relative w-full h-full flex items-center justify-center transition-all duration-300">
        {!imgFailed && (
          <Image
            src={brand.logo}
            alt={brand.name}
            fill
            className="object-contain p-2"
            sizes="130px"
            onError={() => setImgFailed(true)}
          />
        )}
        <span
          className={[
            "text-[11px] font-bold tracking-wide",
            "text-slate-700 dark:text-slate-300",
            "group-hover:text-[#c86537] transition-colors z-10 text-center leading-tight px-1",
            imgFailed ? "block" : "sr-only",
          ].join(" ")}
        >
          {brand.name}
        </span>
      </div>
    </div>
  )
}

const techPartners = [
  { id: 1, name: "Amazon S3", logo: "/tech-partners/amazons3.webp", url: "https://aws.amazon.com/s3/" },
  { id: 2, name: "Cloudinary", logo: "/tech-partners/cloudanry.png", url: "https://cloudinary.com/" },
  { id: 3, name: "Cloudflare", logo: "/tech-partners/cloudflare.png", url: "https://www.cloudflare.com/" },
  { id: 4, name: "Hostinger", logo: "/tech-partners/hostinger.png", url: "https://www.hostinger.com/" },
  { id: 5, name: "MongoDB", logo: "/tech-partners/mongodb.webp", url: "https://www.mongodb.com/" },
  { id: 6, name: "Supabase", logo: "/tech-partners/supabase.webp", url: "https://supabase.com/" },
  { id: 7, name: "Vercel", logo: "/tech-partners/vercel.png", url: "https://vercel.com/" },
]

export default function BrandsSection() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  })
  // Both rows enter from the right along their arcs, then stop at alignment.
  const topRowRotation = useTransform(scrollYProgress, [0, 0.85], [8, 0], { clamp: true })
  const bottomRowRotation = useTransform(scrollYProgress, [0.12, 1], [10, 0], { clamp: true })

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#F9FAFB] dark:bg-[#0B0C0E] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14 border-b border-slate-200 dark:border-neutral-800 pb-8 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#c86537] dark:bg-[#c86537]" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                CLIENTS & PARTNERS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Trusted by companies <br className="hidden sm:block" />
              that move fast.
            </h2>
          </div>
          <div className="flex flex-col lg:items-end gap-4 max-w-sm">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed lg:text-right">
              We specialize in working with digital products and brands — from startups to established businesses achieving significant tech leverage.
            </p>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              04'
            </span>
          </div>
        </div>

        {/* Mobile grid (< md) */}
        <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-4 md:hidden">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Desktop rainbow arc (md+) */}
        <div
          className="hidden md:flex relative items-start justify-center mt-14"
          style={{ height: "260px" }}
          aria-label="Brand partners arranged in a rainbow arc"
        >
          {/* Decorative dashed arc lines */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="-600 -20 1200 280"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M -520 220 Q 0 -60 520 220"
              fill="none"
              stroke="#c86537"
              strokeWidth="1"
              strokeDasharray="5 7"
              opacity="0.12"
            />
            <path
              d="M -320 230 Q 0 40 320 230"
              fill="none"
              stroke="#c86537"
              strokeWidth="1"
              strokeDasharray="5 7"
              opacity="0.07"
            />
          </svg>

          {/* Stagger the two rows slightly and hold their aligned positions. */}
          {[brands.slice(0, 7), brands.slice(7)].map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="pointer-events-none absolute inset-0"
              style={{
                rotate: reduceMotion ? 0 : rowIndex === 0 ? topRowRotation : bottomRowRotation,
                transformOrigin: "50% 720px",
              }}
            >
              {row.map((brand, i) => {
                const pos = arcPositions[i + (rowIndex === 0 ? 0 : 7)]
                return (
                  <div
                    key={brand.id}
                    className="pointer-events-auto absolute"
                    style={{
                      top: 0,
                      left: "50%",
                      marginLeft: "-65px",
                      transform: `translateX(${pos.x}px) translateY(${pos.y}px)`,
                    }}
                  >
                    <BrandCard
                      brand={brand}
                      style={{ transform: `rotate(${pos.rot}deg)` }}
                    />
                    {/* connector dot */}
                    <div className="mx-auto mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-neutral-700" />
                  </div>
                )
              })}
            </motion.div>
          ))}
        </div>

        {/* Horizontal auto-scroll marquee */}
        <div className="mt-12 sm:mt-6 border-t border-slate-200/60 dark:border-neutral-800/60 pt-10 pb-6">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400 dark:text-slate-600 text-center mb-8">
            Our Tech Partners
          </p>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex gap-8 sm:gap-14 items-center animate-brand-scroll py-4 px-4"
              style={{ width: "max-content" }}
            >
              {[...techPartners, ...techPartners, ...techPartners].map((partner, idx) => (
                <a
                  key={`partner-${idx}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 flex-shrink-0"
                >
                  <div className="relative h-10 w-28 sm:h-12 sm:w-36 transition-all duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 112px, 144px"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes brand-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-brand-scroll {
          animation: brand-scroll 35s linear infinite;
          will-change: transform;
        }
        .animate-brand-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
