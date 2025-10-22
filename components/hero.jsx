// "use client"
// import { motion } from "framer-motion"
// import { FiArrowRight, FiCheckCircle } from "react-icons/fi"
// import Link from "next/link"

// export default function Hero() {
//   return (
//     <section id="hero" className="relative overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 py-10 md:py-18 lg:py-10">
//         <div className="grid mx-5 items-center gap-10 md:grid-cols-2">
//           <div>
//             <motion.p
//               initial={{ opacity: 0, y: 4 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.4 }}
//               className="text-sm font-medium text-accent"
//             >
//               VersaNex • Software House
//             </motion.p>
//             <motion.h1
//               initial={{ opacity: 0, y: 8 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.5, delay: 0.05 }}
//               className="mt-2 text-pretty text-4xl font-semibold leading-tight md:text-5xl"
//             >
//               We design and build products that people love to use.
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 8 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="mt-4 text-muted-foreground leading-relaxed"
//             >
//               High-performance web, mobile, AI, and cloud solutions. Human-centered, conversion-focused, and engineered
//               for scale.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.5, delay: 0.15 }}
//               className="mt-6 flex flex-wrap items-center gap-3"
//             >
//               <Link
//                 href="#contact"
//                 className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
//               >
//                 Start a Project <FiArrowRight className="h-4 w-4" />
//               </Link>
//               <a
//                 href="#work"
//                 className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium"
//               >
//                 View Portfolio
//               </a>
//             </motion.div>

//             <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
//               {[
//                 "100% responsive & accessible",
//                 "SEO & performance optimized",
//                 "Modern stack & best practices",
//                 "On-time delivery & support",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2">
//                   <FiCheckCircle className="text-accent" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5 }}
//             className="relative"
//           >
//             <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border">
//               <img
//                 src="/team-collaborating-in-modern-software-studio.jpg"
//                 alt="VersaNex team collaborating in a modern studio"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="pointer-events-none absolute -left-6 -top-6 hidden h-20 w-20 rounded-xl bg-accent/30 md:block" />
//             <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-xl bg-primary/20 md:block" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }







// "use client"
// import { motion } from "framer-motion"
// import { FiArrowRight, FiCheckCircle } from "react-icons/fi"
// import Link from "next/link"

// export default function Hero() {
//   return (
//     <section id="hero" className="relative overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 py-10 md:py-18 lg:py-10">
//         <div className="grid mx-5 items-center gap-10 md:grid-cols-2">
//           <div>
//             {/* Heading and Intro */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             >
//               <p className="text-sm font-medium text-accent">VersaNex • Software House</p>
//               <h1 className="mt-2 text-pretty text-4xl font-semibold leading-tight md:text-5xl">
//                 We design and build products that people love to use.
//               </h1>
//               <p className="mt-4 text-muted-foreground leading-relaxed">
//                 High-performance web, mobile, AI, and cloud solutions. Human-centered, conversion-focused, and engineered
//                 for scale.
//               </p>

//               {/* Buttons */}
//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 <Link
//                   href="#contact"
//                   className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
//                 >
//                   Start a Project <FiArrowRight className="h-4 w-4" />
//                 </Link>
//                 <a
//                   href="#work"
//                   className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent/10 transition"
//                 >
//                   View Portfolio
//                 </a>
//               </div>

//               {/* Features list (now animates with rest) */}
//               <motion.ul
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.4 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="mt-6 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2"
//               >
//                 {[
//                   "100% responsive & accessible",
//                   "SEO & performance optimized",
//                   "Modern stack & best practices",
//                   "On-time delivery & support",
//                 ].map((item) => (
//                   <li key={item} className="flex items-center gap-2">
//                     <FiCheckCircle className="text-accent" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </motion.ul>
//             </motion.div>
//           </div>

//           {/* Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="relative"
//           >
//             <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border shadow-sm">
//               <img
//                 src="/team-collaborating-in-modern-software-studio.jpg"
//                 alt="VersaNex team collaborating in a modern studio"
//                 className="h-full w-full object-cover"
//                 loading="eager"
//                 decoding="async"
//               />
//             </div>

//             {/* Decorative Shapes */}
//             <div className="pointer-events-none absolute -left-6 -top-6 hidden h-20 w-20 rounded-xl bg-accent/30 md:block" />
//             <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-xl bg-primary/20 md:block" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }















"use client"
import { motion } from "framer-motion"
import { FiArrowRight, FiCheckCircle } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-18 lg:py-10">
        <div className="grid mx-5 items-center gap-10 md:grid-cols-2">
          <div>
            {/* Heading and Intro */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-sm font-medium" style={{ color: "#f2ad08" }}>
                VersaNex • Software House
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold leading-tight md:text-5xl">
                We design and build products that people love to use.
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
               High-performance cloud, mobile, AI, and web applications. Conversion-focused, human-centered, and optimized for scale.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
                  style={{ backgroundColor: "#f2ad08" }}
                >
                  Start a Project <FiArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition"
                  style={{
                    borderColor: "#f2ad08",
                    color: "#f2ad08",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f2ad081a" // light hover effect
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                  }}
                >
                  View Portfolio
                </a>
              </div>

              {/* Features list */}
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2"
              >
                {[
                  "100% responsive & accessible",
                  "SEO & performance optimized",
                  "Modern stack & best practices",
                  "On-time delivery & support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FiCheckCircle style={{ color: "#f2ad08" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border shadow-sm">
              <Image
                src="https://res.cloudinary.com/dbbbve4y4/image/upload/v1760972222/team-collaborating-in-modern-software-studio_wxzvwf.jpg"
                alt="VersaNex team collaborating in a modern studio"
                height={50}
                width={50}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Decorative Shapes */}
            <div
              className="pointer-events-none absolute -left-6 -top-6 hidden h-20 w-20 rounded-xl md:block"
              style={{ backgroundColor: "#f2ad084d" }} // 30% opacity
            />
            <div
              className="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-xl md:block"
              style={{ backgroundColor: "#f2ad0833" }} // 20% opacity
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

