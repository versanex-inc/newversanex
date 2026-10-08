"use client"

import { motion } from "framer-motion"

const advantages = [
  {
    num: "01",
    title: "End-to-End Ownership",
    desc: "From discovery to deployment and beyond — we own every phase so nothing falls through the cracks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Speed Without Compromise",
    desc: "We ship fast — without cutting corners on quality, performance, or security. Time to market matters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Strategy-First Thinking",
    desc: "Every line of code starts with a clear business objective. We build what actually moves your metrics.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Transparent Communication",
    desc: "No black boxes. You get real-time updates, clear timelines, and direct access to the people building your product.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Built to Scale",
    desc: "We architect every product to grow with your business — from 10 users to 10 million without rebuilding from scratch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Long-Term Partnership",
    desc: "We don't disappear after launch. We stay on as your growth partner — iterating, optimizing, and scaling alongside you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Advantages() {
  return (
    <section
      id="advantages"
      aria-labelledby="advantages-heading"
      className="py-20 sm:py-28 bg-[#0a0f0d] text-white antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F2AD08]" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-[#F2AD08]/70">
                Why VersaNex
              </span>
            </div>
            <h2
              id="advantages-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.05]"
            >
              Built different.<br />By design.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/40 leading-relaxed font-normal md:pb-1">
            Six reasons why product teams choose VersaNex to build, launch, and grow their most important digital work.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden"
        >
          {advantages.map((item) => (
            <motion.div
              key={item.num}
              variants={cardVariants}
              className="group relative bg-[#0a0f0d] hover:bg-[#111510] p-8 lg:p-10 flex flex-col gap-5 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-[#F2AD08] group-hover:border-[#F2AD08]/30 group-hover:bg-[#F2AD08]/10 transition-all duration-300">
                {item.icon}
              </div>

              {/* Number */}
              <span className="absolute top-7 right-8 text-[11px] font-mono text-white/20 tracking-widest">
                {item.num}
              </span>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Subtle hover line accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#F2AD08]/0 to-transparent group-hover:via-[#F2AD08]/40 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
