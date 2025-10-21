// "use client"
// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"
// import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer, SiNodedotjs } from "react-icons/si"

// const tech = [
//   { icon: SiNextdotjs, label: "Next.js" },
//   { icon: SiReact, label: "React" },
//   { icon: SiTailwindcss, label: "Tailwind CSS" },
//   { icon: SiFramer, label: "Framer Motion" },
//   { icon: SiNodedotjs, label: "Node.js" },
// ]

// export default function TechStack() {
//   return (
//     <section id="tech" className="py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-4">
//         <SectionHeading eyebrow="Tools We Use" title="Modern, proven tech stack" />
//         <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
//           {tech.map(({ icon: Icon, label }, i) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.4, delay: i * 0.04 }}
//               className="flex flex-col items-center gap-2"
//               aria-label={label}
//             >
//               <div className="rounded-lg border p-4">
//                 <Icon className="h-8 w-8" />
//               </div>
//               <span className="text-sm text-muted-foreground">{label}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// "use client"

// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"
// import {
//   SiNextdotjs,
//   SiReact,
//   SiTailwindcss,
//   SiFramer,
//   SiNodedotjs,
//   SiMongodb,
//   SiTypescript,
//   SiVercel,
//   SiGit,
//   SiOpenai,
// } from "react-icons/si"

// const tech = [
//   { icon: SiNextdotjs, label: "Next.js", color: "text-black" },
//   { icon: SiReact, label: "React", color: "text-[#61DAFB]" },
//   { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-[#06B6D4]" },
//   { icon: SiFramer, label: "Framer Motion", color: "text-[#FF00A0]" },
//   { icon: SiNodedotjs, label: "Node.js", color: "text-[#339933]" },
//   { icon: SiMongodb, label: "MongoDB", color: "text-[#47A248]" },
//   { icon: SiTypescript, label: "TypeScript", color: "text-[#3178C6]" },
//   { icon: SiVercel, label: "Vercel", color: "text-black" },
//   { icon: SiGit, label: "Git", color: "text-[#F05032]" },
//   { icon: SiOpenai, label: "OpenAI", color: "text-[#412991]" },
// ]

// export default function TechStack() {
//   return (
//     <section
//       id="tech"
//       className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-20"
//       aria-labelledby="tech-heading"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center">
//           <SectionHeading
//             eyebrow="Tools We Use"
//             title="Modern, Proven, and Scalable Tech Stack"
//             align="center"
//           />
//           <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
//             Our development process is powered by the most trusted and future-proof technologies — ensuring your product is fast, reliable, and built to scale beautifully.
//           </p>
//         </div>

//         {/* Tech Grid */}
//         <div
//           className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center"
//           role="list"
//           aria-label="Technology stack used by VersaNex"
//         >
//           {tech.map(({ icon: Icon, label, color }, i) => (
//             <motion.div
//               key={label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{
//                 duration: 0.4,
//                 delay: i * 0.07,
//                 ease: "easeOut",
//               }}
//               whileHover={{ scale: 1.05 }}
//               className="flex flex-col items-center text-center group cursor-pointer"
//             >
//               <div className="relative rounded-2xl bg-white border border-gray-200 p-8 w-28 h-28 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-[#f2ad08] hover:-translate-y-1">
//                 <Icon
//                   className={`h-12 w-12 ${color} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
//                   aria-hidden="true"
//                 />
//               </div>
//               <span className="mt-4 text-sm font-semibold text-gray-800 group-hover:text-[#f2ad08] transition-colors duration-300">
//                 {label}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* SEO Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "ItemList",
//             itemListElement: tech.map((t, i) => ({
//               "@type": "ListItem",
//               position: i + 1,
//               name: t.label,
//             })),
//           }),
//         }}
//       />
//     </section>
//   )
// }
















"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiVercel,
  SiOpenai,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiMongodb,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiExpress,
} from "react-icons/si"
import { FaServer, FaFlask, FaBug } from "react-icons/fa"

const tech = [
  { icon: SiNextdotjs, label: "Next.js", color: "text-black" },
  { icon: SiReact, label: "React", color: "text-[#61DAFB]" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-[#339933]" },
  { icon: SiExpress, label: "Express", color: "text-gray-700" },
  { icon: SiVercel, label: "Vercel", color: "text-black" },
  { icon: SiOpenai, label: "OpenAI", color: "text-[#412991]" },
  { icon: SiAdobepremierepro, label: "Premiere Pro", color: "text-[#9999FF]" },
  { icon: SiAdobephotoshop, label: "Photoshop", color: "text-[#31A8FF]" },
  { icon: SiAdobeillustrator, label: "Illustrator", color: "text-[#FF9A00]" },
  { icon: SiMongodb, label: "MongoDB", color: "text-[#47A248]" },
  { icon: SiGit, label: "Git", color: "text-[#F05032]" },
  { icon: SiGithub, label: "GitHub", color: "text-gray-800" },
  { icon: FaBug, label: "JMeter", color: "text-[#D22128]" }, // Using FaBug for JMeter
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-[#06B6D4]" },
  { icon: SiFramer, label: "Framer Motion", color: "text-[#FF00A0]" },
  { icon: SiTypescript, label: "TypeScript", color: "text-[#3178C6]" },
  { icon: FaServer, label: "API Dev", color: "text-[#6B7280]" },
  { icon: FaFlask, label: "Testing", color: "text-[#F59E0B]" },
]

export default function TechStack() {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen width for responsive logic
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const visibleTech = isMobile && !showAll ? tech.slice(0, 6) : tech

  return (
    <section
      id="tech"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-20"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        {/* <div className="text-center">
          <SectionHeading
            eyebrow="Tools We Use"
            title="Modern, Proven, and Scalable Tech Stack"
            align="center"
          /> */}

          <div className="text-center">
  <SectionHeading
    eyebrow={
      <span className="font-semibold" style={{ color: "#f2ad08" }}>
        Tools We Use
      </span>
    }
    title="Modern, Proven, and Scalable Tech Stack"
    align="center"
  />
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We build with the most reliable, secure, and future-ready technologies to ensure
            performance, scalability, and visual excellence.
          </p>
        </div>

        {/* Tech Grid */}
        <div
          className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center"
          role="list"
          aria-label="Technology stack used by VersaNex"
        >
          {visibleTech.map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="relative rounded-xl bg-white border border-gray-200 p-5 w-24 h-24 flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.12)] hover:border-[#f2ad08] hover:-translate-y-1">
                <Icon
                  className={`h-10 w-10 ${color} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                  aria-hidden="true"
                />
              </div>
              <span className="mt-3 text-sm font-semibold text-gray-800 group-hover:text-[#f2ad08] transition-colors duration-300">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* View More Button (only on mobile) */}
        {isMobile && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-full bg-[#f2ad08] text-white font-semibold hover:bg-[#d99607] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}
      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: tech.map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: t.label,
            })),
          }),
        }}
      />
    </section>
  )
}
