// "use client"

// import React, { useRef, useState } from "react"
// import Image from "next/image"

// const brands = [
//   { id: 1,  name: "SE",                 logo: "/placeholder-logo.png" },
//   { id: 2,  name: "Best Builders",      logo: "/placeholder-logo.png" },
//   { id: 3,  name: "Biz Axis",           logo: "/placeholder-logo.png" },
//   { id: 4,  name: "Libra Printing",     logo: "/placeholder-logo.png" },
//   { id: 5,  name: "AB",                 logo: "/placeholder-logo.png" },
//   { id: 6,  name: "Global",             logo: "/placeholder-logo.png" },
//   { id: 7,  name: "Design Co",          logo: "/placeholder-logo.png" },
//   { id: 8,  name: "SVAP",               logo: "/placeholder-logo.png" },
//   { id: 9,  name: "Faisal Engineering", logo: "/placeholder-logo.png" },
//   { id: 10, name: "A-Tech",             logo: "/placeholder-logo.png" },
//   { id: 11, name: "Next Digital",       logo: "/placeholder-logo.png" },
// ]

// // Arc positions: each brand card sits on a smooth rainbow curve
// // Positions are relative to the arc centre
// const arcPositions = [
//   // Top arc row (7 evenly spread)
//   { x: -480, y:  80, rot: -16 },
//   { x: -330, y:  30, rot: -10 },
//   { x: -175, y:   8, rot:  -5 },
//   { x:    0, y:   0, rot:   0 }, // centre top
//   { x:  175, y:   8, rot:   5 },
//   { x:  330, y:  30, rot:  10 },
//   { x:  480, y:  80, rot:  16 },
//   // Inner arc row (4 underneath)
//   { x: -280, y: 145, rot: -20 },
//   { x:  -90, y: 120, rot:  -6 },
//   { x:   90, y: 120, rot:   6 },
//   { x:  280, y: 145, rot:  20 },
// ]

// function BrandCard({ brand, style, className = "" }) {
//   const [imgFailed, setImgFailed] = useState(false)

//   return (
//     <div
//       className={`group relative w-[110px] h-[68px] sm:w-[130px] sm:h-[78px] rounded-2xl
//         bg-white dark:bg-[#111318]
//         border border-slate-200/80 dark:border-neutral-800
//         shadow-sm flex items-center justify-center px-3
//         cursor-pointer overflow-hidden
//         transition-all duration-300
//         hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.06]
//         hover:border-[#c86537]/50 ${className}`}
//       style={style}
//     >
//       {/* Rainbow glow on hover */}
//       <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[#c86537]/10 via-transparent to-transparent" />

//       {/* Logo or name */}
//       <div className="relative w-full h-full flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
//         {!imgFailed ? (
//           <Image
//             src={brand.logo}
//             alt={brand.name}
//             fill
//             className="object-contain p-2"
//             sizes="130px"
//             onError={() => setImgFailed(true)}
//           />
//         ) : null}
//         {/* Always render name as accessible fallback */}
//         <span
//           className={`text-[11px] font-bold tracking-wide text-slate-700 dark:text-slate-300 group-hover:text-[#c86537] transition-colors z-10 text-center leading-tight px-1 ${
//             !imgFailed ? "sr-only" : "block"
//           }`}
//         >
//           {brand.name}
//         </span>
//       </div>
//     </div>
//   )
// }

// export default function BrandsSection() {
//   return (
//     <section
//       className="py-20 sm:py-28 bg-[#F9FAFB] dark:bg-[#0B0C0E] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300 overflow-hidden"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-12">

//         {/* ── Header ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-14 border-b border-slate-200 dark:border-neutral-800">
//           <div className="lg:col-span-7">
//             <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#c86537] mb-4">
//               Brands We Work With
//             </p>
//             <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.02em] leading-[1.08] text-slate-900 dark:text-white">
//               Trusted by companies<br className="hidden sm:block" />
//               <span className="text-[#c86537]"> that move fast.</span>
//             </h2>
//           </div>
//           <div className="lg:col-span-5 lg:pt-3 flex flex-col gap-4">
//             <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
//               We specialize in working with digital products and brands — regardless of size and lifecycle stage, from startups to established businesses achieving significant tech leverage.
//             </p>
//             <span className="text-xs text-slate-400 dark:text-slate-600 font-medium">
//               {brands.length} brands &amp; growing
//             </span>
//           </div>
//         </div>

//         {/* ── Rainbow Arc ── */}
//         {/* On small screens fall back to a simple 3-col grid; arc shows on md+ */}

//         {/* Mobile grid fallback */}
//         <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-4 md:hidden">
//           {brands.map((brand) => (
//             <BrandCard key={brand.id} brand={brand} />
//           ))}
//         </div>

//         {/* Desktop arc layout */}
//         <div
//           className="hidden md:flex relative items-start justify-center mt-14"
//           style={{ height: "260px" }}
//           aria-label="Our brand partners arranged in an arc"
//         >
//           {/* Dashed arc guide line */}
//           <svg
//             aria-hidden="true"
//             className="absolute inset-0 w-full h-full pointer-events-none"
//             viewBox="-600 -20 1200 280"
//             preserveAspectRatio="xMidYMid meet"
//           >
//             {/* Outer arc */}
//             <path
//               d="M -520 220 Q 0 -60 520 220"
//               fill="none"
//               stroke="#c86537"
//               strokeWidth="1"
//               strokeDasharray="5 7"
//               className="opacity-[0.12] dark:opacity-[0.08]"
//             />
//             {/* Inner arc */}
//             <path
//               d="M -320 230 Q 0 40 320 230"
//               fill="none"
//               stroke="#c86537"
//               strokeWidth="1"
//               strokeDasharray="5 7"
//               className="opacity-[0.08] dark:opacity-[0.05]"
//             />
//           </svg>

//           {/* Brand cards positioned along the arc */}
//           {brands.map((brand, i) => {
//             const pos = arcPositions[i] ?? { x: 0, y: 0, rot: 0 }
//             return (
//               <div
//                 key={brand.id}
//                 className="absolute"
//                 style={{
//                   transform: `translateX(${pos.x}px) translateY(${pos.y}px)`,
//                   top: 0,
//                   left: "50%",
//                   marginLeft: "-65px", // half of card width
//                 }}
//               >
//                 <BrandCard
//                   brand={brand}
//                   style={{ transform: `rotate(${pos.rot}deg)` }}
//                 />
//                 {/* Connector dot at bottom of card */}
//                 <div
//                   className="mx-auto mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-neutral-700 transition-colors duration-300"
//                   style={{ transform: `rotate(${-pos.rot}deg)` }}
//                 />
//               </div>
//             )
//           })}
//         </div>

//         {/* ── Horizontal Auto-Scroll Marquee ── */}
//         <div className="mt-12 sm:mt-6 border-t border-slate-200/60 dark:border-neutral-800/60 pt-8">
//           <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400 dark:text-slate-600 text-center mb-6">
//             Scrolling through our partners
//           </p>

//           {/* Faded-edge scroll strip */}
//           <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//             <div
//               className="flex gap-4 animate-brand-scroll"
//               style={{ width: "max-content" }}
//             >
//               {/* Triple the items so the loop is seamless across widths */}
//               {[...brands, ...brands, ...brands].map((brand, idx) => (
//                 <BrandCard
//                   key={idx}
//                   brand={brand}
//                   className="!w-[130px] !h-[68px] !rounded-2xl flex-shrink-0"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>

//       <style jsx global>{`
//         @keyframes brand-scroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(calc(-100% / 3)); }
//         }
//         .animate-brand-scroll {
//           animation: brand-scroll 28s linear infinite;
//           will-change: transform;
//         }
//         .animate-brand-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   )
// }











// "use client"

// import React, { useState } from "react"
// import Image from "next/image"

// const brands = [
//   { id: 1, name: "SE", logo: "/placeholder-logo.png" },
//   { id: 2, name: "Best Builders", logo: "/placeholder-logo.png" },
//   { id: 3, name: "Biz Axis", logo: "/placeholder-logo.png" },
//   { id: 4, name: "Libra Printing", logo: "/placeholder-logo.png" },
//   { id: 5, name: "AB", logo: "/placeholder-logo.png" },
//   { id: 6, name: "Global", logo: "/placeholder-logo.png" },
//   { id: 7, name: "Design Co", logo: "/placeholder-logo.png" },
//   { id: 8, name: "SVAP", logo: "/placeholder-logo.png" },
//   { id: 9, name: "Faisal Engineering", logo: "/placeholder-logo.png" },
//   { id: 10, name: "A-Tech", logo: "/placeholder-logo.png" },
//   { id: 11, name: "Next Digital", logo: "/placeholder-logo.png" },
// ]

// function getInitials(name) {
//   return name
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((w) => w[0])
//     .join("")
//     .toUpperCase()
// }

// function BrandRow({ brand, index }) {
//   const [hovered, setHovered] = useState(false)
//   const [cursorY, setCursorY] = useState(0)
//   const [imgFailed, setImgFailed] = useState(false)

//   const handleMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     setCursorY(e.clientY - rect.top)
//   }

//   return (
//     <li
//       onMouseEnter={() => setHovered(true)}
//       onMouseMove={handleMove}
//       onMouseLeave={() => setHovered(false)}
//       tabIndex={0}
//       className="group relative flex items-center justify-between gap-6 border-b border-[#E6E5E1] dark:border-neutral-800
//         py-6 sm:py-8 px-1 sm:px-2 cursor-pointer select-none
//         outline-none focus-visible:ring-2 focus-visible:ring-[#C86537] focus-visible:ring-offset-2
//         transition-colors duration-300
//         hover:bg-[#15161A] dark:hover:bg-white"
//     >
//       <div className="flex items-center gap-5 sm:gap-10 min-w-0">
//         <span
//           className="w-7 sm:w-9 shrink-0 text-sm tabular-nums text-[#8A8C93]
//             transition-colors duration-300 group-hover:text-white/40 dark:group-hover:text-[#15161A]/40"
//         >
//           {String(index + 1).padStart(2, "0")}
//         </span>
//         <span
//           className="truncate text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight
//             text-[#15161A] dark:text-white
//             transition-colors duration-300 group-hover:text-white dark:group-hover:text-[#15161A]"
//         >
//           {brand.name}
//         </span>
//       </div>

//       <svg
//         aria-hidden="true"
//         viewBox="0 0 24 24"
//         className="hidden sm:block w-5 h-5 shrink-0 text-[#8A8C93]
//           transition-all duration-300 group-hover:translate-x-1 group-hover:text-white dark:group-hover:text-[#15161A]"
//       >
//         <path
//           d="M6 18L18 6M18 6H9M18 6V15"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.75"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>

//       {/* Cursor-following preview, desktop pointer only */}
//       <div
//         aria-hidden="true"
//         className="hidden md:block absolute right-14 lg:right-20 pointer-events-none
//           transition-opacity duration-200 ease-out z-10"
//         style={{ top: cursorY - 44, opacity: hovered ? 1 : 0 }}
//       >
//         <div className="relative w-[88px] h-[88px] rounded-xl bg-[#C86537] shadow-xl overflow-hidden -rotate-3">
//           {!imgFailed ? (
//             <Image
//               src={brand.logo}
//               alt=""
//               fill
//               className="object-contain p-3 opacity-90"
//               sizes="88px"
//               onError={() => setImgFailed(true)}
//             />
//           ) : (
//             <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
//               {getInitials(brand.name)}
//             </span>
//           )}
//         </div>
//       </div>
//     </li>
//   )
// }

// export default function BrandsSection() {
//   return (
//     <section className="bg-[#FAFAF8] dark:bg-[#0B0C0E] text-[#15161A] dark:text-white py-20 sm:py-28 transition-colors duration-300">
//       <div className="mx-auto max-w-6xl px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pb-14 sm:pb-16">
//           <div className="max-w-xl">
//             <p className="text-sm text-[#8A8C93] mb-5">Clients, 2019–2026</p>
//             <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
//               Companies we&rsquo;ve built
//               <br className="hidden sm:block" /> for, not just built with.
//             </h2>
//           </div>
//           <p className="max-w-sm text-base text-[#8A8C93] leading-relaxed sm:text-right">
//             Across tech, e-commerce, health, consulting, and digital services
//             — {brands.length} companies and counting.
//           </p>
//         </div>

//         {/* Index list */}
//         <ul className="border-t border-[#E6E5E1] dark:border-neutral-800">
//           {brands.map((brand, i) => (
//             <BrandRow key={brand.id} brand={brand} index={i} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   )
// }