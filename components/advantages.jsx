// "use client"
// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"
// import { FiZap, FiClock, FiTrendingUp, FiShield } from "react-icons/fi"

// const items = [
//   { icon: FiZap, title: "Performance-first", desc: "Lighthouse-friendly, snappy UX, and scalable patterns." },
//   { icon: FiClock, title: "On-time delivery", desc: "Reliable execution with transparent timelines." },
//   { icon: FiTrendingUp, title: "Business impact", desc: "Design and engineering that move your metrics." },
//   { icon: FiShield, title: "Security & quality", desc: "Best practices, audits, and solid testing culture." },
// ]

// export default function Advantages() {
//   return (
//     <section id="why" className="py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-4">
//         <SectionHeading eyebrow="Why Choose Us" title="Key advantages of partnering with VersaNex" />
//         <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {items.map(({ icon: Icon, title, desc }, i) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.45, delay: i * 0.05 }}
//               className="rounded-lg border p-5"
//             >
//               <div className="flex items-start gap-3">
//                 <div className="rounded-md bg-primary/10 p-2 text-primary">
//                   <Icon className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">{title}</h3>
//                   <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }











"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import {
  FiZap,
  FiClock,
  FiTrendingUp,
  FiShield,
  FiCode,
  FiUsers,
  FiSmartphone,
  FiGlobe,
} from "react-icons/fi"

const items = [
  {
    icon: FiZap,
    title: "Performance-first",
    desc: "Lightning-fast, optimized, and built to scale effortlessly.",
  },
  {
    icon: FiClock,
    title: "On-time Delivery",
    desc: "We commit to timelines — every project, every milestone.",
  },
  {
    icon: FiTrendingUp,
    title: "Business Impact",
    desc: "Design and code that help your brand grow and convert.",
  },
  {
    icon: FiShield,
    title: "Security & Quality",
    desc: "Secure, stable, and tested at every development stage.",
  },
  {
    icon: FiCode,
    title: "Modern Tech Stack",
    desc: "Next.js, React, Tailwind — the future-ready toolkit.",
  },
  {
    icon: FiUsers,
    title: "Collaborative Approach",
    desc: "We build with you, ensuring clarity and transparency.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect across all screens and devices.",
  },
  {
    icon: FiGlobe,
    title: "Global Standards",
    desc: "Built to perform and rank well — everywhere online.",
  },
]

export default function Advantages() {
  return (
    <section
      id="why"
      className="py-16 md:py-24 bg-gray-50 scroll-mt-20"
      aria-labelledby="why-heading"
    >
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeading
            eyebrow="Why Choose VersaNex"
            title="Your Trusted Partner in Digital Growth"
            align="center"
          />
        </div> */}


        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="text-center">
    <SectionHeading
      eyebrow={<span style={{ color: "#f2ad08" }}>Why Choose VersaNex</span>}
      title="Your Trusted Partner in Digital Growth"
      align="center"
    />
  </div>


        <div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label="VersaNex advantages"
        >
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:shadow-lg cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#f2ad08]/10 p-3 text-[#f2ad08] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
