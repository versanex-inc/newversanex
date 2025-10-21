// "use client"
// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"
// import { FiCheck } from "react-icons/fi"

// const bullets = [
//   "Human-centered design meets rock-solid engineering.",
//   "Transparent process, clear communication, predictable delivery.",
//   "Performance, accessibility, SEO — baked in from day one.",
// ]

// export default function About() {
//   return (
//     <section id="about" className="py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-4">
//         <SectionHeading eyebrow="Who We Are" title="About VersaNex" align="left" />
//         <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, x: -12 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5 }}
//             className="order-2 md:order-1"
//           >
//             <p className="text-muted-foreground leading-relaxed">
//               We are a full-service software house focused on crafting fast, scalable digital products. Our teams
//               combine strategy, design, and engineering to deliver measurable outcomes.
//             </p>
//             <ul className="mt-4 space-y-2">
//               {bullets.map((b) => (
//                 <li key={b} className="flex items-start gap-2 text-sm leading-relaxed">
//                   <FiCheck className="mt-1 text-accent" />
//                   <span>{b}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 12 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5 }}
//             className="order-1 md:order-2"
//           >
//             <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border">
//               <img
//                 src="/about-our-studio-culture-and-process.jpg"
//                 alt="Inside the VersaNex studio — culture and process"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }



// "use client"

// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"
// import { FiCheck } from "react-icons/fi"

// const highlights = [
//   "Human-centered design combined with rock-solid engineering.",
//   "Transparent workflow, clear communication, and predictable results.",
//   "Performance, accessibility, and SEO built into every project.",
//   "Trusted by startups and enterprises to deliver at scale.",
// ]

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
//       aria-labelledby="about-heading"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <SectionHeading
//           eyebrow="Who We Are"
//           title="Building Digital Experiences That Drive Real Impact"
//           align="left"
//         />

//         <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="order-2 md:order-1"
//           >
//             <p className="text-base text-gray-600 leading-relaxed md:text-lg">
//               <strong className="text-gray-900">VersaNex</strong> is a full-service software house 
//               specializing in high-performance digital products. 
//               Our team blends design, technology, and strategy to build experiences 
//               that engage users and accelerate business growth.
//             </p>

//             <p className="mt-4 text-base text-gray-600 leading-relaxed md:text-lg">
//               From intuitive interfaces to scalable cloud solutions, 
//               we craft products that not only look great but perform flawlessly — 
//               optimized for speed, security, and long-term success.
//             </p>

//             <ul className="mt-6 space-y-3" role="list">
//               {highlights.map((point) => (
//                 <li
//                   key={point}
//                   className="flex items-start gap-3 text-sm md:text-base text-gray-700 leading-relaxed"
//                 >
//                   <FiCheck
//                     className="mt-1 h-5 w-5 flex-shrink-0 text-[#f2ad08]"
//                     aria-hidden="true"
//                   />
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="order-1 md:order-2"
//           >
//             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
//               <img
//                 src="/about-our-studio-culture-and-process.jpg"
//                 alt="Inside VersaNex's creative software studio — collaboration, culture, and innovation."
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#f2ad08]/10" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }





// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"
// import { FiCheck } from "react-icons/fi"

// const bullets = [
//   "Human-centered design meets rock-solid engineering.",
//   "Transparent process, clear communication, predictable delivery.",
//   "Performance, accessibility, SEO — baked in from day one.",
// ]

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-16 md:py-24 bg-white scroll-mt-20"
//       aria-labelledby="about-heading"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section heading */}
//         <SectionHeading
//           eyebrow="Who We Are"
//           title="Building Digital Experiences That Drive Real Impact"
//           align="left"
//         />

//         {/* Content grid */}
//         <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -12 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5 }}
//             className="order-2 md:order-1"
//           >
//             <p className="text-gray-600 leading-relaxed text-base md:text-lg">
//               At <strong>VersaNex</strong>, we craft fast, scalable, and beautiful
//               digital products that drive real business results. From strategy
//               and UX design to full-stack development, our multidisciplinary
//               teams collaborate closely to transform ideas into impactful
//               digital experiences.
//             </p>

//             <ul className="mt-6 space-y-3">
//               {bullets.map((b) => (
//                 <li
//                   key={b}
//                   className="flex items-start gap-3 text-gray-800 text-sm md:text-base leading-relaxed"
//                 >
//                   <FiCheck className="mt-1 text-[#f2ad08] flex-shrink-0" />
//                   <span>{b}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Image Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 12 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5 }}
//             className="order-1 md:order-2"
//           >
//             <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
//               <Image
//                 src="/about-our-studio-culture-and-process.jpg"
//                 alt="Inside the VersaNex studio — our culture and process"
//                 width={800}
//                 height={600}
//                 priority
//                 className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"
// import { FiCheck } from "react-icons/fi"

// const bullets = [
//   "Human-centered design meets rock-solid engineering.",
//   "Transparent process, clear communication, predictable delivery.",
//   "Performance, accessibility, SEO — baked in from day one.",
// ]

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-16 md:py-24 bg-white scroll-mt-20"
//       aria-labelledby="about-heading"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section heading */}
//         <div className="text-left">
//           <SectionHeading
//             eyebrow="Who We Are"
//             title="Building Digital Experiences That Drive Real Impact"
//             align="left"
//           />
//         </div>

//         {/* Content grid */}
//         <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -12 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5 }}
//             className="order-2 md:order-1"
//           >
//             <p className="text-gray-600 leading-relaxed text-base md:text-lg">
//               At <strong>VersaNex</strong>, we craft fast, scalable, and beautiful
//               digital products that drive real business results. From strategy
//               and UX design to full-stack development, our multidisciplinary
//               teams collaborate closely to transform ideas into impactful
//               digital experiences.
//             </p>

//             <ul className="mt-6 space-y-3">
//               {bullets.map((b) => (
//                 <li
//                   key={b}
//                   className="flex items-start gap-3 text-gray-800 text-sm md:text-base leading-relaxed"
//                 >
//                   <FiCheck className="mt-1 text-[#f2ad08] flex-shrink-0" />
//                   <span>{b}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Image Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 12 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.5 }}
//             className="order-1 md:order-2"
//           >
//             <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
//               <Image
//                 src="/about-our-studio-culture-and-process.jpg"
//                 alt="Inside the VersaNex studio — our culture and process"
//                 width={800}
//                 height={600}
//                 priority
//                 className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }










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