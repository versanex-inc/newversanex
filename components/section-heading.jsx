"use client"
import { motion } from "framer-motion"

export default function SectionHeading({ eyebrow, title, align = "center" }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "left" ? "text-left" : "text-center"}`}>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="text-sm font-medium tracking-wide text-accent"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-2 text-3xl md:text-4xl font-semibold leading-tight text-pretty"
      >
        {title}
      </motion.h2>
    </div>
  )
}
