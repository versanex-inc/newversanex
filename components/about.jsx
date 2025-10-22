

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { FiCheck } from "react-icons/fi"

const bullets = [
  "Human-centered design meets rock-solid engineering.",
  "Transparent process, clear communication, predictable delivery.",
  "Performance, accessibility, SEO — baked in from day one.",
]

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white scroll-mt-20"
      aria-labelledby="about-heading"
    >
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
        <SectionHeading
          eyebrow="Who We Are"
          title="Building Digital Experiences That Drive Real Impact"
          align="center"
        /> */}



        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Section heading */}
  <SectionHeading
    eyebrow={<span style={{ color: "#f2ad08" }}>Who We Are</span>}
    title="Building Digital Experiences That Drive Real Impact"
    align="center"
  />



        {/* Content grid */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              At <strong>VersaNex</strong>, we craft fast, scalable, and beautiful
              digital products that drive real business results. From strategy
              and UX design to full-stack development, our multidisciplinary
              teams collaborate closely to transform ideas into impactful
              digital experiences.
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-gray-800 text-sm md:text-base leading-relaxed"
                >
                  <FiCheck className="mt-1 text-[#f2ad08] flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <Image
                src="https://res.cloudinary.com/dbbbve4y4/image/upload/v1760972371/about-our-studio-culture-and-process_fjhgzg.jpg"
                alt="Inside the VersaNex studio — our culture and process"
                width={800}
                height={600}
                priority
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}