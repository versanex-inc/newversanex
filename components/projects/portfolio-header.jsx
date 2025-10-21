// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { IoIosArrowDown } from "react-icons/io"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"

// gsap.registerPlugin()

// export default function PortfolioHeader() {
//   const [open, setOpen] = useState(false)
//   const headingRef = useRef(null)
//   const prefersReducedMotion = useRef(false)

//   useEffect(() => {
//     prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   }, [])

//   useGSAP(() => {
//     if (prefersReducedMotion.current || !headingRef.current) return
//     gsap.fromTo(headingRef.current, { yPercent: 100 }, { yPercent: 0, duration: 0.9, ease: "power3.out" })
//   }, [])

//   return (
//     <header className="w-full relative h-40 md:h-56 flex items-center">
//       <div className="inline-flex flex-col gap-4">
//         <div className="overflow-hidden">
//           <h1 ref={headingRef} className="text-4xl md:text-6xl font-semibold tracking-tight">
//             Portfolio
//           </h1>
//         </div>

//         <nav
//           aria-label="Portfolio filters"
//           className="inline-flex items-center justify-center rounded-3xl border bg-secondary/60 backdrop-blur-md shadow-sm h-12 px-3 gap-2 text-sm"
//         >
//           <div className="relative">
//             <Link href="/portfolio" className="px-3 py-1.5 rounded-full hover:bg-secondary transition-colors">
//               All
//             </Link>
//             <button
//               type="button"
//               aria-expanded={open}
//               aria-controls="all-menu"
//               onClick={() => setOpen((s) => !s)}
//               className="inline-flex items-center justify-center align-middle text-foreground/70 hover:text-foreground transition-colors"
//             >
//               <IoIosArrowDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
//               <span className="sr-only">Toggle categories</span>
//             </button>

//             <div
//               id="all-menu"
//               className={`absolute left-0 top-8 z-30 min-w-56 rounded-xl border bg-background p-3 grid grid-cols-2 gap-2 transition-all ${
//                 open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
//               }`}
//             >
//               <Link href="/portfolio/graphics-designing" className="px-2 py-1.5 rounded-md hover:bg-secondary">
//                 Gfx Design
//               </Link>
//               <Link href="/portfolio/website-developing" className="px-2 py-1.5 rounded-md hover:bg-secondary">
//                 Web Developing
//               </Link>
//               <Link href="/portfolio/video-editing" className="px-2 py-1.5 rounded-md hover:bg-secondary">
//                 Video Editing
//               </Link>
//             </div>
//           </div>

//           <Link
//             href="/portfolio/graphics-designing"
//             className="px-3 py-1.5 rounded-full hover:bg-secondary transition-colors"
//           >
//             Gfx Design
//           </Link>
//           <Link
//             href="/portfolio/website-developing"
//             className="px-3 py-1.5 rounded-full hover:bg-secondary transition-colors"
//           >
//             Website developing
//           </Link>
//           <Link
//             href="/portfolio/video-editing"
//             className="px-3 py-1.5 rounded-full hover:bg-secondary transition-colors"
//           >
//             Video Editing
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }



// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { IoIosArrowDown } from "react-icons/io"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"

// gsap.registerPlugin()

// export default function PortfolioHeader() {
//   const [open, setOpen] = useState(false)
//   const headingRef = useRef(null)
//   const prefersReducedMotion = useRef(false)

//   useEffect(() => {
//     prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   }, [])

//   useGSAP(() => {
//     if (prefersReducedMotion.current || !headingRef.current) return
//     gsap.fromTo(headingRef.current, { yPercent: 100 }, { yPercent: 0, duration: 0.9, ease: "power3.out" })
//   }, [])

//   return (
//     <header className="w-full relative h-40 md:h-56 flex items-center">
//       <div className="inline-flex flex-col gap-4">
//         <div className="overflow-hidden">
//           <h1 ref={headingRef} className="text-4xl md:text-6xl font-semibold tracking-tight">
//             Portfolio
//           </h1>
//         </div>

//         <nav
//           aria-label="Portfolio filters"
//           className="inline-flex items-center justify-center rounded-3xl border bg-secondary/60 backdrop-blur-md shadow-sm h-12 px-3 gap-2 text-sm"
//         >
//           <div className="relative">
//             <Link href="/portfolio" className="px-3 py-1.5 rounded-full hover:bg-secondary transition-colors">
//               All
//             </Link>
//             <button
//               type="button"
//               aria-expanded={open}
//               aria-controls="all-menu"
//               onClick={() => setOpen((s) => !s)}
//               className="inline-flex items-center justify-center align-middle text-foreground/70 hover:text-foreground transition-colors"
//             >
//               <IoIosArrowDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
//               <span className="sr-only">Toggle categories</span>
//             </button>

//             <div
//               id="all-menu"
//               className={`absolute left-0 top-8 z-30 min-w-56 rounded-xl border bg-background p-3 grid grid-cols-2 gap-2 transition-all ${
//                 open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
//               }`}
//             >
//               <Link href="/portfolio/graphics-designing" className="px-2 py-1.5 rounded-md hover:bg-secondary">
//                 Gfx Design
//               </Link>
//               <Link href="/portfolio/website-developing" className="px-2 py-1.5 rounded-md hover:bg-secondary">
//                 Web Developing
//               </Link>
//               <Link href="/portfolio/video-editing" className="px-2 py-1.5 rounded-md hover:bg-secondary">
//                 Video Editing
//               </Link>
//             </div>
//           </div>

//           <Link
//             href="/portfolio/graphics-designing"
//             className="px-3 py-1.5 rounded-full hover:bg-secondary transition-colors"
//           >
//             Gfx Design
//           </Link>
//           <Link
//             href="/portfolio/website-developing"
//             className="px-3 py-1.5 rounded-full hover:bg-secondary transition-colors"
//           >
//             Website developing
//           </Link>
//           <Link
//             href="/portfolio/video-editing"
//             className="px-3 py-1.5 rounded-full hover:bg-secondary transition-colors"
//           >
//             Video Editing
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }














// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { IoIosArrowDown } from "react-icons/io"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"

// gsap.registerPlugin()

// export default function PortfolioHeader() {
//   const [open, setOpen] = useState(false)
//   const headingRef = useRef(null)
//   const prefersReducedMotion = useRef(false)

//   useEffect(() => {
//     prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   }, [])

//   useGSAP(() => {
//     if (prefersReducedMotion.current || !headingRef.current) return
//     gsap.fromTo(
//       headingRef.current,
//       { yPercent: 100, opacity: 0 },
//       { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
//     )
//   }, [])

//   return (
//     <header className="w-full relative flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-12">
//       {/* Heading */}
//       <div className="overflow-hidden mb-4 md:mb-0">
//         <h1
//           ref={headingRef}
//           className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white"
//         >
//           Portfolio
//         </h1>
//       </div>

//       {/* Navigation / Filters */}
//       <nav className="inline-flex flex-wrap items-center gap-2 rounded-3xl border bg-secondary/60 backdrop-blur-md shadow-sm px-3 py-2 text-sm">
//         {/* Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setOpen(!open)}
//             className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary/70 hover:bg-secondary/80 transition-all duration-300"
//           >
//             All
//             <IoIosArrowDown
//               className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
//             />
//           </button>

//           <div
//             className={`absolute left-0 mt-2 min-w-[160px] rounded-xl border bg-background p-2 shadow-md transition-all duration-300 ${
//               open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
//             }`}
//           >
//             <Link
//               href="/portfolio/graphics-designing"
//               className="block px-3 py-2 rounded-md hover:bg-secondary transition-colors duration-300"
//             >
//               Gfx Design
//             </Link>
//             <Link
//               href="/portfolio/website-developing"
//               className="block px-3 py-2 rounded-md hover:bg-secondary transition-colors duration-300"
//             >
//               Web Developing
//             </Link>
//             <Link
//               href="/portfolio/video-editing"
//               className="block px-3 py-2 rounded-md hover:bg-secondary transition-colors duration-300"
//             >
//               Video Editing
//             </Link>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <Link
//           href="/portfolio/graphics-designing"
//           className="px-3 py-1.5 rounded-full bg-secondary/70 hover:bg-secondary/80 transition-all duration-300"
//         >
//           Gfx Design
//         </Link>
//         <Link
//           href="/portfolio/website-developing"
//           className="px-3 py-1.5 rounded-full bg-secondary/70 hover:bg-secondary/80 transition-all duration-300"
//         >
//           Website Developing
//         </Link>
//         <Link
//           href="/portfolio/video-editing"
//           className="px-3 py-1.5 rounded-full bg-secondary/70 hover:bg-secondary/80 transition-all duration-300"
//         >
//           Video Editing
//         </Link>
//       </nav>
//     </header>
//   )
// }




















// "use client"

// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { IoIosArrowDown } from "react-icons/io"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"

// gsap.registerPlugin()

// export default function PortfolioHeader() {
//   const [open, setOpen] = useState(false)
//   const headingRef = useRef(null)
//   const prefersReducedMotion = useRef(false)

//   useEffect(() => {
//     prefersReducedMotion.current =
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   }, [])

//   useGSAP(() => {
//     if (prefersReducedMotion.current || !headingRef.current) return
//     gsap.fromTo(
//       headingRef.current,
//       { yPercent: 100, opacity: 0 },
//       { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out" }
//     )
//   }, [])

//   return (
//     <header className="w-full relative flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-12">
//       {/* Heading */}
//       <div className="overflow-hidden mb-5 md:mb-0 text-center md:text-left">
//         <h1
//           ref={headingRef}
//           className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
//         >
//           Our Work
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1">
//           A showcase of design, development, and creative projects.
//         </p>
//       </div>

//       {/* Navigation / Filters */}
//       <nav className="relative inline-flex flex-wrap items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-sm px-4 py-2 text-sm font-medium">
//         {/* Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setOpen(!open)}
//             className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
//           >
//             All
//             <IoIosArrowDown
//               className={`text-gray-700 dark:text-gray-300 transition-transform duration-300 ${
//                 open ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {/* Dropdown Menu */}
//           <div
//             className={`absolute left-0 mt-2 min-w-[180px] rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/80 backdrop-blur-md p-2 shadow-xl transition-all duration-300 ${
//               open
//                 ? "opacity-100 translate-y-0 pointer-events-auto"
//                 : "opacity-0 -translate-y-2 pointer-events-none"
//             }`}
//           >
//             {[
//               { href: "/portfolio/graphics-designing", label: "Graphics Design" },
//               { href: "/portfolio/website-developing", label: "Web Development" },
//               { href: "/portfolio/video-editing", label: "Video Editing" },
//             ].map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         {[
//           { href: "/portfolio/graphics-designing", label: "Graphics" },
//           { href: "/portfolio/website-developing", label: "Web Dev" },
//           { href: "/portfolio/video-editing", label: "Video" },
//         ].map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-800 dark:text-gray-200"
//           >
//             {item.label}
//           </Link>
//         ))}
//       </nav>
//     </header>
//   )
// }










// "use client"

// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { IoIosArrowDown } from "react-icons/io"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"

// gsap.registerPlugin()

// export default function PortfolioHeader() {
//   const [open, setOpen] = useState(false)
//   const headingRef = useRef(null)
//   const dropdownRef = useRef(null)
//   const prefersReducedMotion = useRef(false)

//   // Detect reduced motion preference
//   useEffect(() => {
//     prefersReducedMotion.current =
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   }, [])

//   // GSAP heading entrance
//   useGSAP(() => {
//     if (prefersReducedMotion.current || !headingRef.current) return
//     gsap.fromTo(
//       headingRef.current,
//       { yPercent: 100, opacity: 0 },
//       { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out" }
//     )
//   }, [])

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (
//     <header className="w-full relative flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-12">
//       {/* Heading */}
//       <div className="overflow-hidden mb-6 md:mb-0 text-center md:text-left">
//         <h1
//           ref={headingRef}
//           className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
//         >
//           Our Work
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1">
//           A showcase of design, development, and creative projects.
//         </p>
//       </div>

//       {/* Navigation / Filters */}
//       <nav
//         className="relative inline-flex flex-wrap items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
//         bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-sm px-4 py-2 text-sm font-medium"
//         ref={dropdownRef}
//       >
//         {/* Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setOpen(!open)}
//             className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 
//             hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-sm active:scale-[0.97]"
//           >
//             All
//             <IoIosArrowDown
//               className={`text-gray-700 dark:text-gray-300 transition-transform duration-300 ${
//                 open ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {/* Dropdown Menu */}
//           <div
//             className={`absolute left-0 mt-2 min-w-[180px] rounded-2xl border border-gray-200 dark:border-gray-800 
//               bg-white/90 dark:bg-gray-900/85 backdrop-blur-md p-2 shadow-2xl transition-all duration-300 origin-top ${
//                 open
//                   ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
//                   : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
//               }`}
//           >
//             {[
//               { href: "/portfolio/graphics-designing", label: "Graphics Design" },
//               { href: "/portfolio/website-developing", label: "Web Development" },
//               { href: "/portfolio/video-editing", label: "Video Editing" },
//             ].map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 
//                 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         {[
//           { href: "/portfolio/graphics-designing", label: "Graphics" },
//           { href: "/portfolio/website-developing", label: "Web Dev" },
//           { href: "/portfolio/video-editing", label: "Video" },
//         ].map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 
//             hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 
//             text-gray-800 dark:text-gray-200 hover:shadow-sm active:scale-[0.97]"
//           >
//             {item.label}
//           </Link>
//         ))}
//       </nav>
//     </header>
//   )
// }






// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { createPortal } from "react-dom";

// gsap.registerPlugin();

// export default function PortfolioHeader() {
//   const [open, setOpen] = useState(false);
//   const [pos, setPos] = useState({ left: 0, top: 0, width: 180 });
//   const headingRef = useRef(null);
//   const buttonRef = useRef(null);
//   const prefersReducedMotion = useRef(false);

//   // Detect reduced motion preference
//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   // GSAP heading entrance
//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !headingRef.current) return;
//       gsap.fromTo(
//         headingRef.current,
//         { yPercent: 100, opacity: 0 },
//         { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out" }
//       );
//     },
//     [] // run once
//   );

//   // calculate and set dropdown position under the button
//   const updatePosition = useCallback(() => {
//     if (!buttonRef.current) return;
//     const rect = buttonRef.current.getBoundingClientRect();
//     const left = Math.max(8, rect.left); // small padding from left edge
//     const top = rect.bottom + window.scrollY + 8; // 8px gap + account for scroll
//     const width = Math.max(160, rect.width); // ensure min width
//     setPos({ left, top, width });
//   }, []);

//   // When opening, compute position; also recalc on resize/scroll while open
//   useEffect(() => {
//     if (open) updatePosition();

//     const onScroll = () => {
//       if (open) updatePosition();
//     };
//     const onResize = () => {
//       if (open) updatePosition();
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onResize);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onResize);
//     };
//   }, [open, updatePosition]);

//   // Close dropdown on outside click or Escape
//   useEffect(() => {
//     const handleMousedown = (e) => {
//       // If click inside button (toggle) we ignore - button toggles itself
//       if (buttonRef.current && buttonRef.current.contains(e.target)) return;
//       // If dropdown is open and click is outside of it -> close
//       // Because dropdown sits in body (portal), we check by id
//       if (open) {
//         const portalEl = document.getElementById("portfolio-dropdown-portal");
//         if (portalEl && !portalEl.contains(e.target)) {
//           setOpen(false);
//         }
//       }
//     };

//     const handleKey = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };

//     document.addEventListener("mousedown", handleMousedown);
//     document.addEventListener("keydown", handleKey);
//     return () => {
//       document.removeEventListener("mousedown", handleMousedown);
//       document.removeEventListener("keydown", handleKey);
//     };
//   }, [open]);

//   // Helper to render the dropdown in a portal
//   const DropdownPortal = ({ children }) => {
//     if (typeof window === "undefined") return null;
//     return createPortal(
//       <div
//         id="portfolio-dropdown-portal"
//         style={{
//           position: "absolute",
//           left: pos.left,
//           top: pos.top,
//           minWidth: pos.width,
//           zIndex: 99999,
//         }}
//       >
//         {children}
//       </div>,
//       document.body
//     );
//   };

//   return (
//     <header className="w-full relative flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-12">
//       {/* Heading */}
//       <div className="overflow-hidden mb-6 md:mb-0 text-center md:text-left">
//         <h1
//           ref={headingRef}
//           className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
//         >
//           Our Work
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1">
//           A showcase of design, development, and creative projects.
//         </p>
//       </div>

//       {/* Navigation / Filters */}
//       <nav
//         className="relative inline-flex flex-wrap items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
//         bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-sm px-4 py-2 text-sm font-medium"
//       >
//         {/* Dropdown toggle */}
//         <div className="relative">
//           <button
//             ref={buttonRef}
//             onClick={() => {
//               // toggle and ensure position is recalculated on open
//               setOpen((v) => {
//                 const next = !v;
//                 if (!next) return next;
//                 // schedule update on next paint to ensure DOM has layout
//                 requestAnimationFrame(() => updatePosition());
//                 return next;
//               });
//             }}
//             aria-expanded={open}
//             aria-controls="portfolio-dropdown-portal"
//             className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 
//             hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-sm active:scale-[0.97]"
//           >
//             All
//             <IoIosArrowDown
//               className={`text-gray-700 dark:text-gray-300 transition-transform duration-300 ${
//                 open ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {/* Portal dropdown (renders into body to avoid stacking context issues) */}
//           {open && (
//             <DropdownPortal>
//               <div
//                 className={`rounded-2xl border border-gray-200 dark:border-gray-800 
//                   bg-white/90 dark:bg-gray-900/85 backdrop-blur-md p-2 shadow-2xl transform transition-all duration-200 origin-top`}
//                 style={{
//                   // initial scale/opacity handled via class + inline for subtle transform origin
//                   transformOrigin: "top left",
//                 }}
//               >
//                 {[
//                   { href: "/portfolio/graphics-designing", label: "Graphics Design" },
//                   { href: "/portfolio/website-developing", label: "Web Development" },
//                   { href: "/portfolio/video-editing", label: "Video Editing" },
//                 ].map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setOpen(false)}
//                     className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 
//                       hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             </DropdownPortal>
//           )}
//         </div>

//         {/* Quick Links */}
//         {[
//           { href: "/portfolio/graphics-designing", label: "Graphics" },
//           { href: "/portfolio/website-developing", label: "Web Dev" },
//           { href: "/portfolio/video-editing", label: "Video" },
//         ].map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 
//             hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 
//             text-gray-800 dark:text-gray-200 hover:shadow-sm active:scale-[0.97]"
//           >
//             {item.label}
//           </Link>
//         ))}
//       </nav>
//     </header>
//   );
// }
























// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { createPortal } from "react-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// gsap.registerPlugin();

// export default function PortfolioHeader({ onFilterChange }) {
//   const [open, setOpen] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [pos, setPos] = useState({ left: 0, top: 0, width: 180 });
//   const headingRef = useRef(null);
//   const buttonRef = useRef(null);
//   const prefersReducedMotion = useRef(false);

//   // Detect reduced motion preference
//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   // GSAP heading entrance animation
//   useGSAP(() => {
//     if (prefersReducedMotion.current || !headingRef.current) return;
//     gsap.fromTo(
//       headingRef.current,
//       { yPercent: 100, opacity: 0 },
//       { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out" }
//     );
//   }, []);

//   // Calculate dropdown position
//   const updatePosition = useCallback(() => {
//     if (!buttonRef.current) return;
//     const rect = buttonRef.current.getBoundingClientRect();
//     const left = Math.max(8, rect.left);
//     const top = rect.bottom + window.scrollY + 8;
//     const width = Math.max(160, rect.width);
//     setPos({ left, top, width });
//   }, []);

//   // Update dropdown position on scroll/resize
//   useEffect(() => {
//     if (open) updatePosition();

//     const onScroll = () => open && updatePosition();
//     const onResize = () => open && updatePosition();

//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onResize);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onResize);
//     };
//   }, [open, updatePosition]);

//   // Close dropdown on outside click or Escape
//   useEffect(() => {
//     const handleMousedown = (e) => {
//       if (buttonRef.current && buttonRef.current.contains(e.target)) return;
//       if (open) {
//         const portalEl = document.getElementById("portfolio-dropdown-portal");
//         if (portalEl && !portalEl.contains(e.target)) setOpen(false);
//       }
//     };
//     const handleKey = (e) => e.key === "Escape" && setOpen(false);

//     document.addEventListener("mousedown", handleMousedown);
//     document.addEventListener("keydown", handleKey);
//     return () => {
//       document.removeEventListener("mousedown", handleMousedown);
//       document.removeEventListener("keydown", handleKey);
//     };
//   }, [open]);

//   // Render dropdown in a portal
//   const DropdownPortal = ({ children }) => {
//     if (typeof window === "undefined") return null;
//     return createPortal(
//       <div
//         id="portfolio-dropdown-portal"
//         style={{
//           position: "absolute",
//           left: pos.left,
//           top: pos.top,
//           minWidth: pos.width,
//           zIndex: 99999,
//         }}
//       >
//         {children}
//       </div>,
//       document.body
//     );
//   };

//   // Available categories
//   const categories = [
//     { key: "All", label: "All" },
//     { key: "Graphics", label: "Graphics Design" },
//     { key: "Web Dev", label: "Web Development" },
//     { key: "Video", label: "Video Editing" },
//   ];

//   // Handle filter change
//   const handleFilterSelect = (filterKey) => {
//     setActiveFilter(filterKey);
//     setOpen(false);
//     onFilterChange?.(filterKey); // Notify parent if provided
//   };

//   return (
//     <header className="w-full relative flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-12">
//       {/* Heading */}
//       <div className="overflow-hidden mb-6 md:mb-0 text-center md:text-left">
//         <h1
//           ref={headingRef}
//           className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
//         >
//           Our Work
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-1">
//           A showcase of design, development, and creative projects.
//         </p>
//       </div>

//       {/* Navigation / Filters */}
//       {/* <nav
//         className="relative inline-flex flex-wrap items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
//         bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-sm px-4 py-2 text-sm font-medium"
//       >
 
//         <div className="relative">
//           <button
//             ref={buttonRef}
//             onClick={() => {
//               setOpen((v) => {
//                 const next = !v;
//                 if (!next) return next;
//                 requestAnimationFrame(() => updatePosition());
//                 return next;
//               });
//             }}
//             aria-expanded={open}
//             aria-controls="portfolio-dropdown-portal"
//             className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 
//             hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-sm active:scale-[0.97]"
//           >
//             {activeFilter}
//             <IoIosArrowDown
//               className={`text-gray-700 dark:text-gray-300 transition-transform duration-300 ${
//                 open ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {open && (
//             <DropdownPortal>
//               <div
//                 className="rounded-2xl border border-gray-200 dark:border-gray-800 
//                 bg-white/90 dark:bg-gray-900/85 backdrop-blur-md p-2 shadow-2xl transform transition-all duration-200 origin-top"
//                 style={{ transformOrigin: "top left" }}
//               >
//                 {categories.slice(1).map((item) => (
//                   <button
//                     key={item.key}
//                     onClick={() => handleFilterSelect(item.key)}
//                     className={`block w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 
//                       hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ${
//                         activeFilter === item.key
//                           ? "bg-gray-100 dark:bg-gray-800 font-medium"
//                           : ""
//                       }`}
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//               </div>
//             </DropdownPortal>
//           )}
//         </div>

  
//         {categories.slice(1).map((item) => (
//           <button
//             key={item.key}
//             onClick={() => handleFilterSelect(item.key)}
//             className={`px-3 py-1.5 rounded-full transition-all duration-300 active:scale-[0.97]
//               ${
//                 activeFilter === item.key
//                   ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-sm"
//                   : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 hover:shadow-sm"
//               }`}
//           >
//             {item.label}
//           </button>
//         ))}
//       </nav> */}

//  <nav
//       className="relative inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
//       bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-sm px-4 py-2 text-sm font-medium
//       w-auto max-w-full overflow-hidden"
//     >
//       {/* Dropdown toggle */}
//       <div className="relative flex-shrink-0">
//         <button
//           ref={buttonRef}
//           onClick={() => setOpen((v) => !v)}
//           aria-expanded={open}
//           aria-controls="portfolio-dropdown-portal"
//           className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
//           bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
//           transition-all duration-300 hover:shadow-sm active:scale-[0.97]
//           text-gray-700 dark:text-gray-300"
//         >
//           <span className="truncate max-w-[120px]">{activeFilter}</span>
//           <IoIosArrowDown
//             className={`transition-transform duration-300 ${
//               open ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {open && (
//           <div
//             className="absolute left-0 top-full mt-2 z-50 rounded-2xl border border-gray-200 dark:border-gray-800 
//             bg-white/90 dark:bg-gray-900/85 backdrop-blur-md p-2 shadow-2xl transform transition-all duration-200 origin-top"
//           >
//             {categories.slice(1).map((item) => (
//               <button
//                 key={item.key}
//                 onClick={() => {
//                   handleFilterSelect(item.key);
//                   setOpen(false);
//                 }}
//                 className={`block w-full text-left px-3 py-2 rounded-lg 
//                 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200
//                 ${
//                   activeFilter === item.key
//                     ? "bg-gray-100 dark:bg-gray-800 font-medium"
//                     : ""
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Swiper Filters */}
//       <div className="flex-1 min-w-0 max-w-full overflow-hidden">
//         <Swiper
//           slidesPerView="auto"
//           spaceBetween={8}
//           grabCursor
//           slidesOffsetBefore={10}   // ✅ gives padding to first slide
//           slidesOffsetAfter={10}    // ✅ keeps end spacing balanced
//           className="!overflow-visible"
//         >
//           {categories.slice(1).map((item) => (
//             <SwiperSlide
//               key={item.key}
//               style={{ width: "auto" }}
//               className="!flex !justify-center"
//             >
//               <button
//                 onClick={() => handleFilterSelect(item.key)}
//                 className={`px-3 py-1.5 rounded-full text-center transition-all duration-300
//                 active:scale-[0.97] font-medium
//                 ${
//                   activeFilter === item.key
//                     ? "bg-gradient-to-r from-[#d88f07] to-[#e4b23a] text-white shadow-sm scale-105"
//                     : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 opacity-70"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </nav>

//     </header>
//   );
// }











"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { IoIosArrowDown } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

gsap.registerPlugin();

export default function PortfolioHeader({ onFilterChange }) {
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [pos, setPos] = useState({ left: 0, top: 0, width: 180 });
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const swiperRef = useRef(null);
  const prefersReducedMotion = useRef(false);

  const categories = [
  { key: "All", label: "All" },
  { key: "graphics-designing", label: "Graphics Design" },
  { key: "website-developing", label: "Web Development" },
  { key: "video-editing", label: "Video Editing" },
  { key: "ui-ux", label: "UI / UX" },
];


  useEffect(() => {
    prefersReducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useGSAP(() => {
    if (prefersReducedMotion.current || !headingRef.current) return;
    gsap.fromTo(
      headingRef.current,
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const left = Math.max(8, rect.left);
    const top = rect.bottom + window.scrollY + 8;
    const width = Math.max(160, rect.width);
    setPos({ left, top, width });
  }, []);

  useEffect(() => {
    if (open) updatePosition();

    const onScroll = () => open && updatePosition();
    const onResize = () => open && updatePosition();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    const handleMousedown = (e) => {
      if (buttonRef.current && buttonRef.current.contains(e.target)) return;
      if (open) {
        const portalEl = document.getElementById("portfolio-dropdown-portal");
        if (portalEl && !portalEl.contains(e.target)) setOpen(false);
      }
    };
    const handleKey = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", handleMousedown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleMousedown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  useEffect(() => {
    if (!swiperRef.current) return;
    const index = categories.findIndex((c) => c.key === activeFilter) - 1; 
    if (index >= 0) {
      swiperRef.current.slideTo(index, 300); 
    }
  }, [activeFilter]);

  const handleFilterSelect = (filterKey) => {
    setActiveFilter(filterKey);
    onFilterChange?.(filterKey);
  };

  const DropdownPortal = ({ children }) => {
    if (typeof window === "undefined") return null;
    return createPortal(
      <div
        id="portfolio-dropdown-portal"
        style={{
          position: "absolute",
          left: pos.left,
          top: pos.top,
          minWidth: pos.width,
          zIndex: 99999,
        }}
      >
        {children}
      </div>,
      document.body
    );
  };

  return (
    <header className="w-full relative flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-0 lg:px-12">

      <div className="overflow-hidden mb-6 md:mb-0 text-center md:text-left max-w-full">
  <h1
    ref={headingRef}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight sm:leading-snug md:leading-snug lg:leading-snug"
  >
    Our Work
  </h1>
  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400  md:mt-0 lg:mt-2 max-w-3xl mx-auto md:mx-0 leading-relaxed">
    A showcase of design, development, and creative projects.
  </p>
</div>


      <nav
        className="relative inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 
        bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-sm px-4 py-2 text-sm font-medium
        w-auto max-w-full overflow-hidden"
      >


        <div className="relative flex-shrink-0">
  <button
    ref={buttonRef}
    onClick={() => setOpen((v) => !v)}
    aria-expanded={open}
    aria-controls="portfolio-dropdown-portal"
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
      bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
      transition-all duration-300 hover:shadow-sm active:scale-[0.97]
      text-gray-700 dark:text-gray-300"
  >
    <span className="truncate max-w-[120px]">{activeFilter}</span>
    <IoIosArrowDown
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    />
  </button>

  {open && (
    <DropdownPortal>
      <div
        className="absolute left-0 top-full mt-2 z-50 rounded-2xl border border-gray-200 dark:border-gray-800 
          bg-white/90 dark:bg-gray-900/85 backdrop-blur-md p-2 shadow-2xl transform transition-all duration-200 origin-top"
      >

        {categories.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              handleFilterSelect(item.key);
              setOpen(false);
            }}
            className={`block w-full text-left px-3 py-2 rounded-lg 
              text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200
              ${activeFilter === item.key ? "bg-gray-100 dark:bg-gray-800 font-medium" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </DropdownPortal>
  )}
</div>


        <div className="flex-1 min-w-0 max-w-full overflow-hidden">
          <Swiper
            slidesPerView="auto"
            spaceBetween={8}
            grabCursor
            slidesOffsetBefore={10}
            slidesOffsetAfter={10}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="!overflow-visible"
          >
            {categories.slice(1).map((item, index) => (
              <SwiperSlide
                key={item.key}
                style={{ width: "auto" }}
                className="!flex !justify-center"
              >
                <button
                  onClick={() => handleFilterSelect(item.key)}
                  className={`px-3 py-1.5 rounded-full text-center transition-all duration-300
                  active:scale-[0.97] font-medium
                  ${
                    activeFilter === item.key
                      ? "bg-gradient-to-r from-[#d88f07] to-[#e4b23a] text-white shadow-sm scale-105"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 opacity-70"
                  }`}
                >
                  {item.label}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </nav>
    </header>
  );
}
