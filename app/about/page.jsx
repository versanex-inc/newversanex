// "use client"

// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import { motion } from "framer-motion"
// import Head from "next/head"
// import Image from "next/image"
// import { Rocket, Telescope } from "lucide-react"

// export default function AboutPage() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   }

//   return (
//     <>
//       <Head>
//         <title>About VersaNex | Technology & Digital Solutions Leader</title>
//         <meta
//           name="description"
//           content="Learn about VersaNex — a technology and digital solutions company helping businesses grow through innovative web, software, and creative strategies."
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://www.versanex.com/about" />
//       </Head>

//       <Navbar />

//       {/* ===== Hero Section ===== */}
//       <section
//         className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]
//         text-white overflow-hidden font-sans"
//       >
//         <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-cover bg-center" />
//         <div className="max-w-6xl mx-auto px-6 py-28 relative z-10 text-center">
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
//           >
//             About <span className="text-[#f2ad08]">VersaNex</span>
//           </motion.h1>

//           {/* Animated underline */}
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: 140 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="h-[3px] bg-[#f2ad08] mx-auto rounded-full"
//           />

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             transition={{ delay: 0.3 }}
//             className="max-w-2xl mx-auto mt-8 text-lg text-gray-300 leading-relaxed"
//           >
//             Empowering innovation in technology and digital transformation —
//             VersaNex turns ideas into intelligent, high-impact digital realities.
//           </motion.p>
//         </div>
//       </section>

//       {/* ===== About VersaNex Section ===== */}
//       <section className="bg-white text-gray-800">
//         <div className="max-w-6xl mx-auto px-6 py-20">
//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-bold text-center mb-4"
//           >
//             Who We Are
//           </motion.h2>

//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: 100 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="h-[3px] bg-[#f2ad08] mx-auto rounded-full mb-12"
//           />

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ delay: 0.2 }}
//             className="grid md:grid-cols-2 gap-12 items-center"
//           >
//             <div className="space-y-6 text-lg leading-relaxed text-gray-700 text-justify">
//               <p>
//                 VersaNex has evolved into a leader in digital transformation,
//                 offering cutting-edge IT and creative solutions for both private
//                 and government organizations.
//               </p>
//               <p>
//                 From software engineering to digital marketing, we deliver
//                 technology that drives growth and creates measurable impact.
//               </p>
//               <p>
//                 Our global footprint and expertise in Microsoft, MERN Stack,
//                 Adobe, and WordPress technologies empower us to provide scalable,
//                 secure, and innovative solutions for modern businesses.
//               </p>
//             </div>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg"
//             >
//               <Image
//                 src="https://res.cloudinary.com/dbbbve4y4/image/upload/v1760972794/about-min_peop91.png"
//                 alt="VersaNex technology team working together"
//                 fill
//                 priority={false}
//                 className="object-cover"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== Mission & Vision Section ===== */}
//       <section className="bg-gray-50 text-gray-800 py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Mission */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.6, hover: { duration: 0.3 } }}
//               className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
//             >
//               <div className="absolute inset-0 opacity-10  bg-cover bg-center" />
//               <div className="relative z-10">
//                 <div className="flex items-center justify-center mb-4">
//                   <Rocket className="w-8 h-8 text-[#f2ad08] mr-2" />
//                   <motion.h2
//                     className="text-3xl md:text-4xl font-extrabold text-gray-800"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     Our Mission
//                   </motion.h2>
//                 </div>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: 80 }}
//                   transition={{ duration: 0.8 }}
//                   className="h-[3px] bg-[#f2ad08] mx-auto rounded-full mb-6"
//                 />
//                 <p className="text-lg leading-relaxed text-gray-700 text-justify">
//                   Our mission is to empower businesses with transformative digital
//                   solutions that redefine growth and efficiency. We specialize in web
//                   development, branding, SEO, and marketing to build lasting digital
//                   ecosystems that elevate brands and connect them with their audience.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Vision */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.6, delay: 0.2, hover: { duration: 0.3 } }}
//               className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
//             >
//               <div className="absolute inset-0 opacity-10  bg-cover bg-center" />
//               <div className="relative z-10">
//                 <div className="flex items-center justify-center mb-4">
//                   <Telescope className="w-8 h-8 text-[#f2ad08] mr-2" />
//                   <motion.h2
//                     className="text-3xl md:text-4xl font-extrabold text-gray-800"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     Our Vision
//                   </motion.h2>
//                 </div>
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: 80 }}
//                   transition={{ duration: 0.8 }}
//                   className="h-[3px] bg-[#f2ad08] mx-auto rounded-full mb-6"
//                 />
//                 <p className="text-lg leading-relaxed text-gray-700 text-justify">
//                   To be a global innovator that bridges creativity and technology,
//                   shaping the future of digital solutions with integrity, innovation,
//                   and excellence — empowering every business to thrive in the digital
//                   era.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   )
// }


"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FocusScrollSection from "@/components/about/FocusScrollSection"
import ProcessSection from "@/components/about/ProcessSection"
import AboutSection from "@/components/about/AboutSection"
import LetsBuildSection from "@/components/about/LetsBuildSection"
export default function AboutPage() {
  return (
    <>

      <Navbar />

      <main className="bg-[#f4f4f4] text-[#111111] py-16 md:py-20 font-sans">
        {/* Fixed Width Centered Container */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">

          {/* Grid Lines Background restricted to fixed width */}
          <div className="absolute inset-0 pointer-events-none px-6 lg:px-12">
            <div className="w-full h-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12">
              <div className="col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="hidden sm:block col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="hidden sm:block col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="hidden md:block col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="hidden md:block col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="hidden md:block col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="hidden md:block col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="hidden md:block col-span-1 border-r border-gray-200/80 h-full"></div>
              <div className="hidden md:block col-span-1 h-full"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-start gap-8 md:gap-0 py-6">

            {/* LEFT COLUMN: Title & Metrics */}
            <div className="md:col-span-5 pr-0 md:pr-10 flex flex-col justify-between h-auto md:h-[360px]">
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-[4.2rem] font-medium tracking-tight text-black leading-none mb-8 md:mb-12">
                  About us
                </h1>
              </div>

              {/* Stats Section */}
              <div className="space-y-4">
                {/* Stat 1 */}
                <div className="pt-3 border-t border-gray-300/80">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="w-[3px] h-[3px] rounded-full bg-black"></span>
                    <span className="w-[3px] h-[3px] rounded-full bg-gray-400"></span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-black leading-tight">
                    60+
                  </h3>
                  <p className="text-[11px] text-gray-500 font-normal tracking-wide mt-0.5">
                    completed projects
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="pt-3 border-t border-gray-300/80">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="w-[3px] h-[3px] rounded-full bg-gray-400"></span>
                    <span className="w-[3px] h-[3px] rounded-full bg-black"></span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-black leading-tight">
                    5y
                  </h3>
                  <p className="text-[11px] text-gray-500 font-normal tracking-wide mt-0.5">
                    Years of experience
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Mission Statement */}
            <div className="md:col-span-7 pl-0 md:pl-8 lg:pl-12 pt-0 md:pt-14">
              <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase block mb-4">
                OUR MISSION
              </span>

              <p className="text-2xl sm:text-3xl lg:text-[2.15rem] font-medium leading-[1.25] tracking-tight">
                <span className="text-black font-semibold">
                  VersaNex is a digital agency focused on building meaningful online experiences.
                </span>{" "}
                <span className="text-gray-400 font-normal">
                  Our team blends strategy, creativity, and technology to help brands grow, evolve, and stand out.
                </span>
              </p>
            </div>

          </div>
        </div>
      </main>
      <FocusScrollSection/>
      <ProcessSection/>
      <AboutSection/>
      <LetsBuildSection/>
      <Footer />
    </>
  )
}