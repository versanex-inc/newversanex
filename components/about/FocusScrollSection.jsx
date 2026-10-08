// "use client"

// import { useState, useEffect, useRef } from "react"
// import Image from "next/image"

// const focusItems = [
//     {
//         id: "01",
//         title: "Web Design",
//         description:
//             "Every detail of the digital design is meticulously engineered. We don't build standard templates — we create custom, high-converting platforms tailored to your brand.",
//         image:
//             "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
//         details: ["UI/UX Engineering", "Design Systems", "Prototyping", "Design Motion"],
//     },
//     {
//         id: "02",
//         title: "Custom Software",
//         description:
//             "A beautiful platform needs powerful execution. We engineer robust, enterprise-grade software and SaaS solutions built for high concurrency and long-term reliability.",
//         image:
//             "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
//         details: ["Cloud Systems", "Custom API Integrations", "Database Architecture", "Microservices"],
//     },
//     {
//         id: "03",
//         title: "Animations",
//         description:
//             "Subtle micro-interactions and complex scroll-driven animations bring digital products to life, capturing user attention and delivering memorable web experiences.",
//         image:
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
//         details: ["WebGL / 3D Graphics", "Scroll Interactions", "Micro-animations", "Performance Optimization"],
//     },
//     {
//         id: "04",
//         title: "Branding",
//         description:
//             "A cohesive visual identity serves as the foundation for modern business growth. We craft strategic brand frameworks that elevate presence across every touchpoint.",
//         image:
//             "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
//         details: ["Brand Guidelines", "Visual Identity", "Typography Systems", "Digital Collateral"],
//     },
// ]

// export default function FocusScrollSection() {
//     const [activeIndex, setActiveIndex] = useState(0)
//     const containerRef = useRef(null)

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!containerRef.current) return

//             const rect = containerRef.current.getBoundingClientRect()
//             const totalHeight = containerRef.current.offsetHeight - window.innerHeight

//             if (totalHeight <= 0) return

//             // Calculate normalized scroll progress inside this section (0 to 1)
//             const scrollProgress = Math.max(0, Math.min(1, -rect.top / totalHeight))

//             // Divide into equal segments corresponding to the focus items
//             const newIndex = Math.min(
//                 focusItems.length - 1,
//                 Math.floor(scrollProgress * focusItems.length)
//             )

//             setActiveIndex(newIndex)
//         }

//         window.addEventListener("scroll", handleScroll, { passive: true })
//         handleScroll()

//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [])

//     return (
//         <section ref={containerRef} className="relative bg-black text-white h-[400vh]">
//             {/* Sticky Viewport */}
//             <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
//                 <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-12">
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

//                         {/* LEFT SIDE: Clean Minimal Image Display (No Text) */}
//                         <div className="lg:col-span-6 hidden lg:block h-[70vh]">
//                             <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl">
//                                 {focusItems.map((item, index) => (
//                                     <div
//                                         key={item.id}
//                                         className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
//                                             }`}
//                                     >
//                                         <Image
//                                             src={item.image}
//                                             alt={item.title}
//                                             fill
//                                             priority={index === 0}
//                                             className="object-cover object-center transition-transform duration-700"
//                                             sizes="(max-width: 1024px) 100vw, 50vw"
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* RIGHT SIDE: Interactive Content */}
//                         <div className="lg:col-span-6 flex flex-col justify-center lg:pl-8">
//                             <div className="space-y-10">
//                                 {focusItems.map((item, index) => {
//                                     const isActive = activeIndex === index
//                                     return (
//                                         <div key={item.id} className="transition-all duration-500">
//                                             {/* Title Header */}
//                                             <div className="flex items-baseline justify-between">
//                                                 <h2
//                                                     className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight transition-all duration-500 ${isActive
//                                                         ? "text-white opacity-100 translate-x-1"
//                                                         : "text-neutral-600 opacity-30"
//                                                         }`}
//                                                 >
//                                                     {item.title}
//                                                 </h2>
//                                                 <span className={`font-mono text-xs ${isActive ? "text-neutral-400" : "text-neutral-700"}`}>
//                                                     0{index + 1}*
//                                                 </span>
//                                             </div>

//                                             {/* Expandable Active Description */}
//                                             <div
//                                                 className={`transition-all duration-500 overflow-hidden ${isActive
//                                                     ? "max-h-64 opacity-100 mt-4"
//                                                     : "max-h-0 opacity-0 mt-0"
//                                                     }`}
//                                             >
//                                                 {/* Mobile view image fallback */}
//                                                 <div className="block lg:hidden my-4 h-48 relative rounded-xl overflow-hidden border border-neutral-800">
//                                                     <Image
//                                                         src={item.image}
//                                                         alt={item.title}
//                                                         fill
//                                                         className="object-cover"
//                                                     />
//                                                 </div>

//                                                 <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
//                                                     {item.description}
//                                                 </p>

//                                                 <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-wrap gap-x-4 gap-y-2">
//                                                     {item.details.map((detail, idx) => (
//                                                         <span key={idx} className="text-xs text-neutral-500 font-mono">
//                                                             / {detail}
//                                                         </span>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 })}
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }







"use client"

import Image from "next/image"

const focusItems = [
  {
    id: "01",
    title: "STRATEGIC BRAND IDENTITY",
    description:
      "STRATEGY, POSITIONING, AND VISUAL SYSTEMS DESIGNED TO MAKE YOUR BRAND DISTINCTIVE, VALUABLE AND MEMORABLE.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    details: ["BRANDING", "STRATEGY", "IDENTITY", "ART DIRECTION"],
  },
  {
    id: "02",
    title: "WEB DESIGN & DEV",
    description:
      "MODERN, RESPONSIVE, AND HIGH-IMPACT DIGITAL EXPERIENCES DESIGNED TO ENGAGE PEOPLE AND MOVE BRANDS FORWARD.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    details: ["WEBSITE", "UX/UI", "FRAMER", "DIGITAL", "WEBFLOW"],
  },
  {
    id: "03",
    title: "3D MOTION & ANIMATION",
    description:
      "CINEMATIC MOTION, ANIMATION, AND VISUAL STORIES THAT BRING IDEAS TO LIFE AND CREATE STRONGER CONNECTIONS.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    details: ["MOTION", "ANIMATION", "3D", "VIDEO", "CAMPAIGN"],
  },
  {
    id: "04",
    title: "CREATIVE DIRECTION",
    description:
      "FROM CONCEPT TO EXECUTION, WE SHAPE VISUAL LANGUAGES THAT GIVE EVERY BRAND A DISTINCTIVE POINT OF VIEW.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    details: ["CONCEPT", "ART DIRECTION", "CONTENT", "DASHBOARD"],
  },
  {
    id: "05",
    title: "FULL DIGITAL EXPERIENCE",
    description:
      "IMMERSIVE DIGITAL EXPERIENCES THAT COMBINE DESIGN, TECHNOLOGY, AND INTERACTION TO LEAVE A LASTING IMPRESSION.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    details: ["BRANDING", "STRATEGY", "IDENTITY", "ART DIRECTION"],
  },
]

export default function FocusScrollSection() {
  return (
    <section className="relative bg-[#F4F4F4] text-black px-6 sm:px-12 lg:px-20 py-16 min-h-screen">
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-6 border-b border-neutral-300/80">
        <div className="flex items-center gap-3">
          <span className="text-red-500 text-xl font-bold">✶</span>
          <span className="text-xs tracking-widest uppercase text-neutral-600 font-semibold">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight ml-4 uppercase text-black">
            WHAT WE DO
          </h2>
        </div>
        <p className="text-neutral-500 text-sm mt-3 md:mt-0 font-normal tracking-wide">
          we build bold brands that matter most.
        </p>
      </div>

      {/* Cards Scroll Stacking Container */}
      <div className="max-w-[1400px] mx-auto relative space-y-12 pb-[25vh]">
        {focusItems.map((item, index) => {
          // Card 01 pins at top slot (top-[10vh]), Card 02 and beyond stack onto top slot smoothly
          const stickyTopClass = index === 0 ? "sticky top-[8vh]" : "sticky top-[8vh] mt-12"

          return (
            <div
              key={item.id}
              className={`${stickyTopClass} bg-[#F4F4F4] pt-6 pb-10 border-b border-neutral-300/70 transition-all duration-300`}
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* 1. ID Badge */}
                <div className="lg:col-span-1 self-start">
                  <span className="inline-block bg-black text-white font-bold text-sm px-3.5 py-2 rounded-sm">
                    {item.id}
                  </span>
                </div>

                {/* 2. Image Thumbnail */}
                <div className="lg:col-span-4 w-full h-[220px] sm:h-[250px] relative rounded-sm overflow-hidden bg-neutral-200 border border-neutral-300/40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                {/* 3. Title & Description */}
                <div className="lg:col-span-4 flex flex-col justify-start pr-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 text-black uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed uppercase font-medium tracking-wide max-w-[380px]">
                    {item.description}
                  </p>
                </div>

                {/* 4. Categories */}
                <div className="lg:col-span-3 flex flex-col items-start space-y-2.5">
                  <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase">
                    CATEGORIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-black border border-neutral-200/80 text-[11px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider shadow-xs"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}