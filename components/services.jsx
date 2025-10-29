


"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import {
  FiCode,
  FiLayout,
  FiVideo,
  FiImage,
  FiTrendingUp,
  FiEdit3,
  FiShield,
} from "react-icons/fi"

const services = [
  {
    icon: FiCode,
    title: "Web Development",
    desc: "Modern, high-performance websites built with Next.js and React for optimal SEO, speed, and scalability.",
    slug: "web-apps",
  },
  {
    icon: FiLayout,
    title: "WordPress Development",
    desc: "Custom WordPress themes, plugins, and CMS-driven sites optimized for usability and Google Core Web Vitals.",
    slug: "wordpress-websites",
  },
  {
    icon: FiVideo,
    title: "Video Editing",
    desc: "Professional video production, motion graphics, and branded edits for engaging digital storytelling.",
    slug: "video-editing",
  },
  {
    icon: FiImage,
    title: "Graphic Designing",
    desc: "Creative visuals, UI/UX design, and branding assets crafted to elevate your digital presence.",
    slug: "graphic-designing",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    desc: "ROI-driven marketing strategies including SEO, SEM, PPC, and social media campaigns for business growth.",
    slug: "digital-marketing",
  },
  {
    icon: FiEdit3,
    title: "Content Writing",
    desc: "Compelling, SEO-optimized content that enhances brand authority and boosts audience engagement.",
    slug: "content-writing",
  },
  {
    icon: FiShield,
    title: "Software Quality Assurance",
    desc: "Comprehensive testing, automation, and performance audits ensuring secure, stable, and bug-free products.",
    slug: "software-quality-assurance",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="services-heading"
    >
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services Tailored to Your Business Goals"
        /> */}


        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <SectionHeading
    eyebrow={<span style={{ color: "#f2ad08" }}>What We Do</span>}
    title="Services Tailored to Your Business Goals"
  />



        {/* All content animates together */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Services Grid */}
          <div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {services.slice(0, 6).map(({ icon: Icon, title, desc, slug }) => (
              <Link
                key={title}
                href={`/services/${slug}`}
                className="group relative block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-[#f2ad08] focus:ring-offset-2 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-xl bg-[#f2ad08]/10 p-3 text-[#f2ad08] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View More Button */}
          {services.length > 6 && (
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-block rounded-full bg-[#f2ad08] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#d88f07] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50 cursor-pointer"
              >
                View More
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

