// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useRef, useState, useEffect } from "react"
// import { motion, useScroll, useTransform, useSpring, AnimatePresence, useReducedMotion } from "framer-motion"
// import { FiArrowUpRight } from "react-icons/fi"

// const textContent =
//   "At VersaNex, we craft fast, scalable, and beautiful digital products that drive real business results. From strategy and UX design to full-stack development, our multidisciplinary teams collaborate closely to transform ideas into impactful digital experiences that stand out in the modern web landscape."

// /* Word-by-Word Scroll Reveal Component — kept for short headings/labels only.
//    (Removed from the long paragraph: per-word color interpolation across 40+ words
//    was the main cause of the About-section lag — see paragraph below.) */
// function ScrollRevealText({
//   text,
//   progress,
//   className = "",
//   baseColor = "#a3a3a3",
//   targetColor = "#111827"
// }) {
//   const words = text.split(" ")
//   const totalWords = words.length

//   return (
//     <span className={`inline-flex flex-wrap gap-x-[0.3em] gap-y-1 ${className}`}>
//       {words.map((word, index) => {
//         const start = index / totalWords
//         const end = start + 1 / totalWords

//         const opacity = useTransform(progress, [start, end], [0.35, 1])
//         const color = useTransform(progress, [start, end], [baseColor, targetColor])

//         return (
//           <motion.span key={index} style={{ opacity, color }} className="inline-block">
//             {word}
//           </motion.span>
//         )
//       })}
//     </span>
//   )
// }

// /* Intro Overlay */
// function IntroOverlay({ onComplete, onZoomStart }) {
//   const videoRef = useRef(null)
//   const [stage, setStage] = useState(0)

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = true
//       videoRef.current.defaultMuted = true
//       videoRef.current.play().catch(() => {})
//     }

//     const zoomTimer = setTimeout(() => {
//       setStage(1)
//       if (onZoomStart) onZoomStart()
//     }, 1600)

//     const endTimer = setTimeout(() => {
//       onComplete()
//     }, 2350)

//     return () => {
//       clearTimeout(zoomTimer)
//       clearTimeout(endTimer)
//     }
//   }, [onComplete, onZoomStart])

//   return (
//     <motion.div
//       className="fixed inset-0 z-[99999] bg-[#0a0a0a] text-white overflow-hidden select-none flex flex-col items-center justify-center will-change-transform pointer-events-none"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: stage === 1 ? 0 : 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
//     >
//       <div className="flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto space-y-1 sm:space-y-3 z-10 px-4">
//         <div className="flex items-center justify-center gap-2 sm:gap-5 md:gap-8 flex-nowrap w-full">
//           <motion.span
//             className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-none tracking-tight uppercase text-white font-sans shrink-0 will-change-transform"
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: stage === 1 ? 0 : 1, y: stage === 1 ? -15 : 0 }}
//             transition={{ delay: stage === 0 ? 0.1 : 0, duration: stage === 1 ? 0.45 : 0.35, ease: [0.16, 1, 0.3, 1] }}
//           >
//             WE
//           </motion.span>

//           <motion.div
//             className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/20 shrink-0 will-change-transform origin-center"
//             initial={{ width: 0, scale: 0.7, opacity: 0 }}
//             animate={{
//               width: "clamp(90px, 18vw, 250px)",
//               scale: stage === 1 ? 3.2 : 1,
//               opacity: stage === 1 ? 0 : 1
//             }}
//             transition={{ delay: stage === 0 ? 1.0 : 0, duration: stage === 1 ? 0.75 : 0.45, ease: stage === 1 ? [0.22, 1, 0.36, 1] : [0.16, 1, 0.3, 1] }}
//             style={{ aspectRatio: "16 / 10", height: "clamp(60px, 12vw, 150px)" }}
//           >
//             <video
//               ref={videoRef}
//               src="/hero-video.mp4"
//               poster="/hero-video.mp4"
//               muted
//               loop
//               autoPlay
//               playsInline
//               preload="auto"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           <motion.span
//             className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-none tracking-tight uppercase text-white font-sans shrink-0 will-change-transform"
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: stage === 1 ? 0 : 1, y: stage === 1 ? -15 : 0 }}
//             transition={{ delay: stage === 0 ? 0.4 : 0, duration: stage === 1 ? 0.45 : 0.35, ease: [0.16, 1, 0.3, 1] }}
//           >
//             ARE
//           </motion.span>
//         </div>

//         <div className="overflow-hidden py-1 w-full">
//           <motion.div
//             className="font-black text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] leading-none tracking-tight uppercase text-white font-sans shrink-0 will-change-transform"
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: stage === 1 ? 0 : 1, y: stage === 1 ? 15 : 0 }}
//             transition={{ delay: stage === 0 ? 0.7 : 0, duration: stage === 1 ? 0.45 : 0.35, ease: [0.16, 1, 0.3, 1] }}
//           >
//             VERSANEX
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default function Hero() {
//   const [introVisible, setIntroVisible] = useState(true)
//   const [isRevealed, setIsRevealed] = useState(false)
//   const containerRef = useRef(null)
//   const heroVideoRef = useRef(null)
//   const projectVideoRef = useRef(null)

//   useEffect(() => {
//     const playVideo = () => {
//       if (heroVideoRef.current) {
//         heroVideoRef.current.muted = true
//         heroVideoRef.current.defaultMuted = true
//         heroVideoRef.current.play().catch(() => {})
//       }
//       if (projectVideoRef.current) {
//         projectVideoRef.current.muted = true
//         projectVideoRef.current.defaultMuted = true
//         projectVideoRef.current.play().catch(() => {})
//       }
//     }
//     playVideo()
//     const timer = setTimeout(playVideo, 150)
//     return () => clearTimeout(timer)
//   }, [introVisible])

//   useEffect(() => {
//     const root = document.documentElement
//     const body = document.body

//     if (introVisible) {
//       root.style.overflow = "hidden"
//       body.style.overflow = "hidden"
//     } else {
//       root.style.overflow = ""
//       body.style.overflow = ""
//     }
//     return () => {
//       root.style.overflow = ""
//       body.style.overflow = ""
//     }
//   }, [introVisible])

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   })

//   // Smoothed, near-critically-damped spring: tracks the raw scroll value tightly
//   // (no accumulated lag) while still ironing out per-pixel jitter from the wheel/trackpad.
//   const progress = useSpring(scrollYProgress, {
//     stiffness: 550,
//     damping: 30,
//     mass: 0.25,
//     restDelta: 0.0005,
//   })

//   // --- COMPACT & DIRECT TIMELINE MAP ---
//   // 0.00 - 0.12 : Hero Video scale to 100vh
//   // 0.12 - 0.22 : Hero Video briefly holds, then begins slide
//   // 0.22 - 0.50 : Track slides to About section & completes text/image reveals synchronously
//   // 0.50 - 0.62 : About section stays fully visible for direct reading
//   // 0.62 - 0.78 : Track slides to "THE PROJECTS" text
//   // 0.78 - 0.95 : Projects center video fades/scales up to fill the screen from between the words

//   // 1. Hero Video Scale & Headline Fade
//   const videoHeight = useTransform(progress, [0, 0.12], ["32vh", "100vh"])
//   const videoWidth = useTransform(progress, [0, 0.12], ["calc(100% - 20px)", "100%"])
//   const videoRadius = useTransform(progress, [0, 0.12], [24, 0])
//   const textOpacity = useTransform(progress, [0, 0.08], [1, 0])

//   // 2. Track Translation Across 3 Panels
//   const x = useTransform(
//     progress,
//     [0.22, 0.50, 0.62, 0.78],
//     ["0vw", "-100vw", "-100vw", "-200vw"]
//   )

//   // 3. About Section Animation
//   const aboutProgress = useTransform(progress, [0.25, 0.50], [0, 1])

//   const mainImageOpacity = useTransform(aboutProgress, [0.1, 0.5], [0, 1])
//   const mainImageScale = useTransform(aboutProgress, [0.1, 0.5], [0.92, 1])

//   // Paragraph reveal — a single fade+darken on the whole block instead of one
//   // transform pair per word. This is the fix for the About-section lag: word-by-word
//   // color interpolation across a 40+ word paragraph was recalculating far more values
//   // per frame than the effect was worth. The label and heading above it keep the
//   // word-by-word treatment since they're short (cheap either way).
//   const paragraphOpacity = useTransform(aboutProgress, [0.15, 0.55], [0, 1])
//   const paragraphColor = useTransform(aboutProgress, [0.15, 0.55], ["#a3a3a3", "#111827"])

//   // 4. Projects Panel — video is fully invisible at rest (opacity 0) so only the
//   // "THE PROJECTS" text is visible when the panel first arrives. Scrolling further
//   // fades it in and grows it from the center via `scale` (GPU-only, no layout thrash),
//   // while the words slide outward in sync — the video sits at z-10, behind the text
//   // at z-20, so it can never cover the words.
//   const projectsProgress = useTransform(progress, [0.78, 0.95], [0, 1])
//   const projectVideoOpacity = useTransform(projectsProgress, [0, 0.1], [0, 1])
//   const projectVideoScale = useTransform(projectsProgress, [0, 1], [0.05, 1])
//   const projectRadius = useTransform(projectsProgress, [0, 0.85], [999, 0])
//   const theWordX = useTransform(projectsProgress, [0, 1], ["0vw", "-60vw"])
//   const projectsWordX = useTransform(projectsProgress, [0, 1], ["0vw", "60vw"])

//   return (
//     <>
//       <AnimatePresence>
//         {introVisible && (
//           <IntroOverlay
//             onZoomStart={() => setIsRevealed(true)}
//             onComplete={() => setIntroVisible(false)}
//           />
//         )}
//       </AnimatePresence>

//       {/* ===== DESKTOP / LAPTOP (lg+) ===== */}
//       <section ref={containerRef} id="hero" className="hidden lg:block relative h-[500vh] bg-[#f5f5f5]">
//         <div className="sticky top-0 h-screen w-full overflow-hidden">

//           {/* Top Headline Overlay */}
//           <motion.div
//             style={{ opacity: textOpacity }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             className="absolute inset-x-0 top-0 z-20 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-16 md:pt-20 pointer-events-none"
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
//               <div className="lg:col-span-7 pointer-events-auto">
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-normal tracking-[-0.03em] text-[#000000] leading-[0.9] text-balance">
//                   Software<br className="hidden sm:block" />
//                   Development<br className="hidden sm:block" />
//                   &amp; Digital Product<br className="hidden sm:block" />
//                   Design Company.
//                 </h1>
//               </div>

//               <div className="lg:col-span-5 flex flex-col justify-end space-y-6 lg:pb-2 pointer-events-auto">
//                 <p className="text-base sm:text-[17px] text-[#556377] font-normal leading-[1.65] max-w-md tracking-tight">
//                   You bring the &quot;what if.&quot; We bring the code, the systems, and the launch.
//                 </p>

//                 <div className="flex flex-wrap items-center gap-3 pt-1">
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-[15px] font-normal text-white bg-[#0a2f1d] hover:bg-[#11402a] transition-all duration-300 shadow-sm group"
//                   >
//                     Start a Project
//                     <FiArrowUpRight className="h-4 w-4 stroke-[2]" />
//                   </Link>

//                   <Link
//                     href="/projects"
//                     className="inline-flex items-center gap-2 rounded-2xl border border-gray-300/80 bg-[#f8f8f8] hover:bg-white px-6 py-3.5 text-[15px] font-normal text-[#111111] transition-all duration-300"
//                   >
//                     View Our Work
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Horizontal Track */}
//           <motion.div
//             style={{ x }}
//             className="flex h-full w-[300vw] will-change-transform"
//           >
//             {/* PANEL 0 — Hero Video */}
//             <div className="w-screen h-full relative flex items-end justify-center overflow-hidden shrink-0">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.96 }}
//                 animate={isRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
//                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//                 style={{
//                   height: videoHeight,
//                   width: videoWidth,
//                   borderRadius: videoRadius,
//                 }}
//                 className="relative z-10 overflow-hidden bg-black shadow-2xl"
//               >
//                 <video
//                   ref={heroVideoRef}
//                   src="/hero-video.mp4"
//                   poster="/hero-showcase.jpg"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   preload="auto"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>

//             {/* PANEL 1 — Who We Are */}
//             <div id="about" className="w-screen h-full flex items-center justify-center bg-[#fafaf8] px-8 md:px-16 xl:px-24 py-12 lg:py-16 overflow-hidden shrink-0">
//               <div className="mx-auto max-w-7xl w-full grid grid-cols-12 gap-8 lg:gap-12 items-center">
//                 <div className="col-span-7 pr-2 lg:pr-6">
//                   <span className="block mb-2">
//                     <ScrollRevealText
//                       text="Who We Are"
//                       progress={aboutProgress}
//                       className="text-xs sm:text-sm font-semibold uppercase tracking-widest"
//                       baseColor="#e0b240"
//                       targetColor="#f2ad08"
//                     />
//                   </span>

//                   <h2 id="about-heading" className="max-w-2xl text-balance">
//                     <ScrollRevealText
//                       text="Building Digital Experiences That Drive Real Impact"
//                       progress={aboutProgress}
//                       className="text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight leading-[1.15] text-neutral-900"
//                       baseColor="#a3a3a3"
//                       targetColor="#111827"
//                     />
//                   </h2>

//                   <div className="mt-6 pt-6 border-t border-neutral-200/80">
//                     <motion.p
//                       style={{ opacity: paragraphOpacity, color: paragraphColor }}
//                       className="text-lg lg:text-xl font-normal leading-relaxed"
//                     >
//                       {textContent}
//                     </motion.p>
//                   </div>
//                 </div>

//                 <div className="col-span-5 relative flex items-center justify-center py-6">
//                   <div className="relative w-full aspect-[3/4] max-w-sm mx-auto my-auto">
//                     <motion.div
//                       style={{
//                         x: useTransform(aboutProgress, [0.2, 0.9], ["0%", "-14%"]),
//                         y: useTransform(aboutProgress, [0.2, 0.9], ["0%", "-4%"]),
//                         rotate: useTransform(aboutProgress, [0.2, 0.9], [0, -7]),
//                         scale: useTransform(aboutProgress, [0.2, 0.9], [0.88, 0.94]),
//                         opacity: useTransform(aboutProgress, [0.1, 0.5], [0, 0.75]),
//                       }}
//                       className="absolute inset-0 z-0 rounded-2xl overflow-hidden shadow-md border border-neutral-300/60 bg-neutral-200 origin-bottom"
//                     >
//                       <Image
//                         src="https://res.cloudinary.com/dbbbve4y4/image/upload/w_600,h_800,c_fill,f_auto,q_auto/v1760972371/about-our-studio-culture-and-process_fjhgzg.jpg"
//                         alt="Behind the scenes studio culture"
//                         fill
//                         className="object-cover filter brightness-90"
//                       />
//                     </motion.div>

//                     <motion.div
//                       style={{
//                         x: useTransform(aboutProgress, [0.3, 1], ["0%", "10%"]),
//                         y: useTransform(aboutProgress, [0.3, 1], ["0%", "-3%"]),
//                         rotate: useTransform(aboutProgress, [0.3, 1], [0, 6]),
//                         scale: useTransform(aboutProgress, [0.3, 1], [0.88, 0.95]),
//                         opacity: useTransform(aboutProgress, [0.15, 0.6], [0, 0.85]),
//                       }}
//                       className="absolute inset-0 z-1 rounded-2xl overflow-hidden shadow-lg border border-neutral-300/60 bg-neutral-200 origin-bottom"
//                     >
//                       <Image
//                         src="https://res.cloudinary.com/dbbbve4y4/image/upload/w_600,h_800,c_fill,f_auto,q_auto/v1760972371/about-our-studio-culture-and-process_fjhgzg.jpg"
//                         alt="Studio process and team"
//                         fill
//                         className="object-cover filter brightness-95"
//                       />
//                     </motion.div>

//                     <motion.div
//                       style={{
//                         opacity: mainImageOpacity,
//                         scale: mainImageScale,
//                       }}
//                       className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-neutral-900"
//                     >
//                       <Image
//                         src="https://res.cloudinary.com/dbbbve4y4/image/upload/w_600,h_800,c_fill,f_auto,q_auto/v1760972371/about-our-studio-culture-and-process_fjhgzg.jpg"
//                         alt="Inside VersaNex studio"
//                         fill
//                         priority
//                         className="object-cover"
//                       />
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* PANEL 2 — THE PROJECTS */}
//             <div id="projects" className="w-screen h-full relative flex items-center justify-center bg-[#fafaf8] overflow-hidden shrink-0">

//               {/* Text — sized with a viewport-width clamp instead of fixed rem jumps,
//                   so it stays properly sized (and never overflows) across laptop,
//                   desktop, and large/ultra-wide monitors. Stays on top (z-20) at all
//                   times so the video growing behind it can never cover it. */}
//               <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none select-none">
//                 <motion.span
//                   style={{ x: theWordX }}
//                   className="absolute right-1/2 mr-4 sm:mr-6 font-black text-[clamp(2.25rem,6vw,6rem)] tracking-tight text-neutral-950 uppercase leading-none whitespace-nowrap select-none"
//                 >
//                   THE
//                 </motion.span>
//                 <motion.span
//                   style={{ x: projectsWordX }}
//                   className="absolute left-1/2 ml-4 sm:ml-6 font-black text-[clamp(2.25rem,6vw,6rem)] tracking-tight text-neutral-950 uppercase leading-none whitespace-nowrap select-none"
//                 >
//                   PROJECTS
//                 </motion.span>
//               </div>

//               {/* Video — invisible at rest (opacity 0), so only the text shows when
//                   this panel first arrives. Fades in and grows from a tiny centered
//                   pill to fullscreen purely via opacity + scale (GPU-accelerated, no
//                   layout recalculation per frame) as the user keeps scrolling. Sits at
//                   z-10, behind the text, so it emerges from between the words without
//                   ever covering them. */}
//               <motion.div
//                 style={{
//                   opacity: projectVideoOpacity,
//                   scale: projectVideoScale,
//                   borderRadius: projectRadius,
//                 }}
//                 className="absolute inset-0 z-10 w-full h-full overflow-hidden bg-black shadow-2xl will-change-transform"
//               >
//                 <video
//                   ref={projectVideoRef}
//                   src="/hero-video.mp4"
//                   poster="/hero-showcase.jpg"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   preload="auto"
//                   className="w-full h-full object-cover pointer-events-none"
//                 />
//               </motion.div>

//             </div>

//           </motion.div>
//         </div>
//       </section>

//       {/* ===== MOBILE / TABLET (under lg) ===== */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         className="lg:hidden relative bg-[#f5f5f5] pt-14 pb-12 px-6 overflow-hidden"
//       >
//         <div className="mx-auto max-w-2xl text-center space-y-6">
//           <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#000000] leading-tight text-balance">
//             Software Development &amp; Digital Product Design Company.
//           </h1>
//           <p className="text-base text-[#556377] font-normal leading-relaxed">
//             You bring the &quot;what if.&quot; We bring the code, the systems, and the launch.
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-normal text-white bg-[#0a2f1d] hover:bg-[#11402a] shadow-sm"
//             >
//               Start a Project <FiArrowUpRight className="h-4 w-4" />
//             </Link>
//             <Link
//               href="/projects"
//               className="inline-flex items-center gap-2 rounded-2xl border border-gray-300/80 bg-white px-6 py-3.5 text-sm font-normal text-slate-800"
//             >
//               View Our Work
//             </Link>
//           </div>
//         </div>

//         <div className="mt-10 relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black shadow-xl">
//           <video
//             src="/hero-video.mp4"
//             poster="/hero-showcase.jpg"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </motion.section>
//     </>
//   )
// }







"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useReducedMotion } from "framer-motion"
import IntroOverlay from "./intro-overlay"
import { FiArrowUpRight } from "react-icons/fi"

const textContent =
  "At VersaNex, we craft fast, scalable, and beautiful digital products that drive real business results. From strategy and UX design to full-stack development, our multidisciplinary teams collaborate closely to transform ideas into impactful digital experiences that stand out in the modern web landscape."

/* Word-by-Word Scroll Reveal Component — kept for short headings/labels only.
   (Removed from the long paragraph: per-word color interpolation across 40+ words
   was the main cause of the About-section lag — see paragraph below.) */
function ScrollRevealText({
  text,
  progress,
  className = "",
  baseColor = "#a3a3a3",
  targetColor = "#111827"
}) {
  const words = text.split(" ")
  const totalWords = words.length

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.3em] gap-y-1 ${className}`}>
      {words.map((word, index) => {
        const start = index / totalWords
        const end = start + 1 / totalWords

        const opacity = useTransform(progress, [start, end], [0.35, 1])
        const color = useTransform(progress, [start, end], [baseColor, targetColor])

        return (
          <motion.span key={index} style={{ opacity, color }} className="inline-block">
            {word}
          </motion.span>
        )
      })}
    </span>
  )
}

function MobileAboutCards() {
  const reduceMotion = useReducedMotion()
  const imageSrc = "https://res.cloudinary.com/dbbbve4y4/image/upload/w_600,h_800,c_fill,f_auto,q_auto/v1760972371/about-our-studio-culture-and-process_fjhgzg.jpg"
  return (
    <div className="w-full min-w-0 py-10 sm:py-12">
      <motion.div initial={reduceMotion ? "open" : "stacked"} whileInView="open" viewport={{ once: true, amount: 0.35 }} className="relative mx-auto w-[62%] max-w-[360px] aspect-[3/4]">
        {[-1, 1].map((direction, index) => (
          <motion.div key={direction} variants={{ stacked: { x: "0%", y: "0%", rotate: 0, scale: 0.9 }, open: { x: direction === -1 ? "-14%" : "14%", y: "3%", rotate: direction * 7, scale: 0.94 } }} transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 rounded-2xl overflow-hidden shadow-md border border-neutral-300/60 bg-neutral-200 origin-bottom">
            <Image src={imageSrc} alt="" fill sizes="(min-width: 1024px) 1px, (min-width: 640px) 360px, 62vw" className={index === 0 ? "object-cover brightness-90" : "object-cover brightness-95"} />
          </motion.div>
        ))}
        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/50 bg-neutral-900">
          <Image src={imageSrc} alt="Inside VersaNex studio" fill sizes="(min-width: 1024px) 1px, (min-width: 640px) 360px, 62vw" className="object-cover" />
        </div>
      </motion.div>
    </div>
  )
}

function DesktopAboutCards({ progress, mainOpacity, mainScale }) {
  const reduceMotion = useReducedMotion()
  const leftX = useTransform(progress, [0.7, 1], ["0%", "-22%"])
  const rightX = useTransform(progress, [0.74, 1], ["0%", "22%"])
  const leftRotation = useTransform(progress, [0.7, 1], [0, -12])
  const rightRotation = useTransform(progress, [0.74, 1], [0, 12])
  const backY = useTransform(progress, [0.7, 1], ["0%", "4%"])
  const backScale = useTransform(progress, [0.7, 1], [0.9, 0.96])
  const backOpacity = useTransform(progress, [0.7, 0.85], [0, 1])
  const imageSrc = "https://res.cloudinary.com/dbbbve4y4/image/upload/w_600,h_800,c_fill,f_auto,q_auto/v1760972371/about-our-studio-culture-and-process_fjhgzg.jpg"
  return (
    <div className="col-span-5 relative flex items-center justify-center py-8">
      <div className="relative w-[72%] max-w-[340px] aspect-[3/4] mx-auto isolate">
        {[0, 1].map((index) => (
          <motion.div key={index} style={{ x: reduceMotion ? (index === 0 ? "-22%" : "22%") : index === 0 ? leftX : rightX, y: reduceMotion ? "4%" : backY, rotate: reduceMotion ? (index === 0 ? -12 : 12) : index === 0 ? leftRotation : rightRotation, scale: reduceMotion ? 0.96 : backScale, opacity: reduceMotion ? 1 : backOpacity }} className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-neutral-300/60 bg-neutral-200 origin-bottom">
            <Image src={imageSrc} alt="" fill sizes="340px" className={index === 0 ? "object-cover brightness-90" : "object-cover brightness-95"} />
          </motion.div>
        ))}
        <motion.div style={{ opacity: mainOpacity, scale: mainScale }} className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-neutral-900">
          <Image src={imageSrc} alt="Inside VersaNex studio" fill sizes="340px" priority className="object-cover" />
        </motion.div>
      </div>
    </div>
  )
}

/* Intro Overlay */
export default function Hero() {
  const [introVisible, setIntroVisible] = useState(true)
  const [isRevealed, setIsRevealed] = useState(false)
  const containerRef = useRef(null)
  const heroVideoRef = useRef(null)
  const projectVideoRef = useRef(null)

  useEffect(() => {
    const playVideo = () => {
      if (heroVideoRef.current) {
        heroVideoRef.current.muted = true
        heroVideoRef.current.defaultMuted = true
        heroVideoRef.current.play().catch(() => { })
      }
      if (projectVideoRef.current) {
        projectVideoRef.current.muted = true
        projectVideoRef.current.defaultMuted = true
        projectVideoRef.current.play().catch(() => { })
      }
    }
    playVideo()
    const timer = setTimeout(playVideo, 150)
    return () => clearTimeout(timer)
  }, [introVisible])

  useEffect(() => {
    if (!introVisible) return
    const root = document.documentElement
    const body = document.body
    const previousRootOverflow = root.style.overflow
    const previousBodyOverflow = body.style.overflow
    root.style.overflow = "hidden"
    body.style.overflow = "hidden"
    return () => {
      root.style.overflow = previousRootOverflow
      body.style.overflow = previousBodyOverflow
    }
  }, [introVisible])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Re-added useSpring for an ultra-smooth, trailing scroll feel.
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    mass: 1,
    restDelta: 0.001,
  })

  // --- REVISED TIMELINE MAP (Slowed down the final zoom) ---
  // 0.00 - 0.15 : Hero Video scale to 100vh
  // 0.15 - 0.25 : Hero Video briefly holds, then begins slide
  // 0.25 - 0.45 : Track slides to About section & completes reveals
  // 0.45 - 0.55 : About section stays fully visible for reading
  // 0.55 - 0.70 : Track slides to "THE PROJECTS" text
  // 0.70 - 1.00 : Projects center video fades/scales up (Slower zoom)

  // 1. Hero Video Scale & Headline Fade
  const videoHeight = useTransform(progress, [0, 0.15], ["32vh", "100vh"])
  const videoWidth = useTransform(progress, [0, 0.15], ["calc(100% - 20px)", "100%"])
  const videoRadius = useTransform(progress, [0, 0.15], [24, 0])
  const textOpacity = useTransform(progress, [0, 0.10], [1, 0])

  // 2. Track Translation Across 3 Panels
  const x = useTransform(
    progress,
    [0.25, 0.45, 0.55, 0.70],
    ["0vw", "-100vw", "-100vw", "-200vw"]
  )

  // 3. About Section Animation
  const aboutProgress = useTransform(progress, [0.25, 0.45], [0, 1])

  const mainImageOpacity = useTransform(aboutProgress, [0.7, 0.85], [0, 1])
  const mainImageScale = useTransform(aboutProgress, [0.7, 1], [0.92, 1])

  const paragraphOpacity = useTransform(aboutProgress, [0.15, 0.55], [0, 1])
  const paragraphColor = useTransform(aboutProgress, [0.15, 0.55], ["#a3a3a3", "#111827"])

  // 4. Projects Panel — Slower, smoother zoom (0.70 to 1.0)
  const projectsProgress = useTransform(progress, [0.70, 1], [0, 1])
  const projectVideoOpacity = useTransform(projectsProgress, [0, 0.1], [0, 1])
  const projectVideoScale = useTransform(projectsProgress, [0, 1], [0.05, 1])
  const projectRadius = useTransform(projectsProgress, [0, 0.85], [999, 0])
  const theWordX = useTransform(projectsProgress, [0, 1], ["0vw", "-60vw"])
  const projectsWordX = useTransform(projectsProgress, [0, 1], ["0vw", "60vw"])

  return (
    <>
      <AnimatePresence>
        {introVisible && (
          <IntroOverlay
            onZoomStart={() => setIsRevealed(true)}
            onComplete={() => setIntroVisible(false)}
          />
        )}
      </AnimatePresence>

      {/* ===== DESKTOP / LAPTOP (lg+) ===== */}
      <section ref={containerRef} id="hero" className="hidden lg:block relative h-[350vh] bg-[#f5f5f5]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">


          {/* Top Headline Overlay */}
          <motion.div
            style={{ opacity: textOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-0 z-20 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-16 md:pt-20 pointer-events-none"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7 pointer-events-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-normal tracking-[-0.03em] text-[#000000] leading-[0.9] text-balance">
                  Software<br className="hidden sm:block" />
                  Development<br className="hidden sm:block" />
                  &amp; Digital Product<br className="hidden sm:block" />
                  Design Company.
                </h1>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-end space-y-6 lg:pb-2 pointer-events-auto">
                <p className="text-base sm:text-[17px] text-[#556377] font-normal leading-[1.65] max-w-md tracking-tight">
                  You bring the &quot;what if.&quot; We bring the code, the systems, and the launch.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-[15px] font-normal text-white bg-black hover:bg-[#f2ad08] hover:text-[#141b26] transition-all duration-300 shadow-sm group"
                  >
                    Start a Project
                    <FiArrowUpRight className="h-4 w-4 stroke-[2]" />
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300/80 bg-[#f8f8f8] hover:bg-white px-6 py-3.5 text-[15px] font-normal text-[#111111] transition-all duration-300"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Horizontal Track */}
          <motion.div
            style={{ x }}
            className="flex h-full w-[300vw] will-change-transform"
          >
            {/* PANEL 0 — Hero Video */}
            <div className="w-screen h-full relative flex items-end justify-center overflow-hidden shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: videoHeight,
                  width: videoWidth,
                  borderRadius: videoRadius,
                }}
                className="relative z-10 overflow-hidden bg-black shadow-2xl"
              >
                <video
                  ref={heroVideoRef}
                  src="/hero-video.mp4"
                  poster="/hero-showcase.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* PANEL 1 — Who We Are */}
            <div id="about" className="w-screen h-full flex items-center justify-center bg-[#fafaf8] px-8 md:px-16 xl:px-24 py-12 lg:py-16 overflow-hidden shrink-0">
              <div className="mx-auto max-w-7xl w-full grid grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="col-span-7 pr-2 lg:pr-6">
                  <span className="block mb-2">
                    <ScrollRevealText
                      text="Who We Are"
                      progress={aboutProgress}
                      className="text-xs sm:text-sm font-semibold uppercase tracking-widest"
                      baseColor="#e0b240"
                      targetColor="#f2ad08"
                    />
                  </span>

                  <h2 id="about-heading" className="max-w-2xl text-balance">
                    <ScrollRevealText
                      text="Building Digital Experiences That Drive Real Impact"
                      progress={aboutProgress}
                      className="text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight leading-[1.15] text-neutral-900"
                      baseColor="#a3a3a3"
                      targetColor="#111827"
                    />
                  </h2>

                  <div className="mt-6 pt-6 border-t border-neutral-200/80">
                    <motion.p
                      style={{ opacity: paragraphOpacity, color: paragraphColor }}
                      className="text-lg lg:text-xl font-normal leading-relaxed"
                    >
                      {textContent}
                    </motion.p>
                  </div>
                </div>

                <DesktopAboutCards progress={aboutProgress} mainOpacity={mainImageOpacity} mainScale={mainImageScale} />
              </div>
            </div>

            {/* PANEL 2 — THE PROJECTS */}
            <div id="projects" className="w-screen h-full relative flex items-center justify-center bg-[#fafaf8] overflow-hidden shrink-0">

              {/* Text — sized with a viewport-width clamp instead of fixed rem jumps,
                  so it stays properly sized (and never overflows) across laptop,
                  desktop, and large/ultra-wide monitors. Stays on top (z-20) at all
                  times so the video growing behind it can never cover it. */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none select-none">
                <motion.span
                  style={{ x: theWordX }}
                  className="absolute right-1/2 mr-4 sm:mr-6 font-black text-[clamp(2.25rem,6vw,6rem)] tracking-tight text-neutral-950 uppercase leading-none whitespace-nowrap select-none"
                >
                  THE
                </motion.span>
                <motion.span
                  style={{ x: projectsWordX }}
                  className="absolute left-1/2 ml-4 sm:ml-6 font-black text-[clamp(2.25rem,6vw,6rem)] tracking-tight text-neutral-950 uppercase leading-none whitespace-nowrap select-none"
                >
                  PROJECTS
                </motion.span>
              </div>

              {/* Video — invisible at rest (opacity 0), so only the text shows when
                  this panel first arrives. Fades in and grows from a tiny centered
                  pill to fullscreen purely via opacity + scale (GPU-accelerated, no
                  layout recalculation per frame) as the user keeps scrolling. Sits at
                  z-10, behind the text, so it emerges from between the words without
                  ever covering them. */}
              <motion.div
                style={{
                  opacity: projectVideoOpacity,
                  scale: projectVideoScale,
                  borderRadius: projectRadius,
                }}
                className="absolute inset-0 z-10 w-full h-full overflow-hidden bg-black shadow-2xl will-change-transform"
              >
                <video
                  ref={projectVideoRef}
                  src="/hero-video.mp4"
                  poster="/hero-showcase.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* ===== MOBILE / TABLET (under lg) ===== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden relative bg-[#f5f5f5] pt-14 pb-12 px-6 overflow-hidden"
      >
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#000000] leading-tight text-balance">
            Software Development &amp; Digital Product Design Company.
          </h1>
          <p className="text-base text-[#556377] font-normal leading-relaxed">
            You bring the &quot;what if.&quot; We bring the code, the systems, and the launch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-normal text-white bg-black hover:bg-[#f2ad08] hover:text-[#141b26] transition-colors duration-300 shadow-sm"
            >
              Start a Project <FiArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300/80 bg-white px-6 py-3.5 text-sm font-normal text-slate-800"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="mt-10 relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black shadow-xl">
          <video
            src="/hero-video.mp4"
            poster="/hero-showcase.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>


      {/* Mobile / tablet about section follows the hero in the normal page flow. */}
      <section
        id="about-mobile"
        aria-labelledby="about-mobile-heading"
        className="lg:hidden overflow-hidden bg-[#fafaf8] px-6 sm:px-10 py-16 sm:py-20 text-[#1b2b40]"
      >
        <div className="mx-auto max-w-3xl border-t border-slate-200 pt-8 sm:pt-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#f2ad08]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#556377]">About us</span>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="min-w-0 max-w-2xl">
              <h2 id="about-mobile-heading" className="text-[clamp(2.25rem,6vw,3.5rem)] font-normal tracking-tight leading-[1.12] text-balance">
                Building Digital Experiences That Drive Real Impact
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-[1.75] text-[#556377]">
                {textContent}
              </p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#141b26] px-5 py-3.5 text-sm font-medium text-white hover:bg-[#f2ad08] hover:text-[#141b26] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2ad08]">
                Get to Know VersaNex <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <MobileAboutCards />
          </div>
        </div>
      </section>
    </>
  )
}
