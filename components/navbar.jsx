// "use client"
// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   FiMenu,
//   FiX,
//   FiLayers,
//   FiCode,
//   FiSmartphone,
//   FiCpu,
//   FiCloud,
//   FiPenTool,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "High-performance, SEO-friendly Next.js apps.",
//     href: "#services",
//   },
//   {
//     icon: FiSmartphone,
//     title: "Mobile Apps",
//     desc: "Cross-platform apps with smooth UX.",
//     href: "#services",
//   },
//   {
//     icon: FiCpu,
//     title: "AI & Automation",
//     desc: "Integrations, agents, and workflow automation.",
//     href: "#services",
//   },
//   {
//     icon: FiCloud,
//     title: "Cloud & DevOps",
//     desc: "Scalable infra, CI/CD, and observability.",
//     href: "#services",
//   },
//   {
//     icon: FiPenTool,
//     title: "UI/UX Design",
//     desc: "Human-centered, conversion-focused design.",
//     href: "#services",
//   },
//   {
//     icon: FiLayers,
//     title: "E-commerce",
//     desc: "Headless storefronts with Stripe.",
//     href: "#services",
//   },
// ]

// const projects = [
//   { label: "All Projects", href: "#work" },
//   { label: "Web Applications", href: "#work" },
//   { label: "Mobile Applications", href: "#work" },
//   { label: "AI & ML", href: "#work" },
//   { label: "E-commerce", href: "#work" },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "#about" },
//   { icon: FiUsers, label: "Team", href: "#team" },
//   { icon: FiBriefcase, label: "Careers", href: "#contact" },
// ]

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     onScroll()
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
//     exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
//   }

//   return (
//     <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
//       <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//         <Link href="/" className="group flex items-center gap-3">
//           <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-[#d88f07] shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
//           <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-accent transition-colors">VersaNex</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-4">
//           <div 
//             className="relative group"
//             onMouseEnter={() => setHoveredMenu("about")}
//             onMouseLeave={() => setHoveredMenu(null)}
//           >
//             <button className="px-4 py-2 text-gray-700 hover:text-accent font-medium text-sm rounded-full transition-colors hover:bg-accent/10">
//               About
//             </button>
//             <AnimatePresence>
//               {hoveredMenu === "about" && (
//                 <motion.div
//                   variants={menuVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 w-[90vw] max-w-4xl z-50 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-1 gap-4">
//                     {aboutItems.map((a) => (
//                       <a
//                         key={a.label}
//                         href={a.href}
//                         className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors"
//                       >
//                         <a.icon className="h-5 w-5 text-accent" />
//                         <div>
//                           <p className="font-medium text-gray-900">{a.label}</p>
//                           <p className="text-sm text-gray-500">Learn more about our {a.label.toLowerCase()}</p>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <div 
//             className="relative group"
//             onMouseEnter={() => setHoveredMenu("projects")}
//             onMouseLeave={() => setHoveredMenu(null)}
//           >
//             <button className="px-4 py-2 text-gray-700 hover:text-accent font-medium text-sm rounded-full transition-colors hover:bg-accent/10">
//               Projects
//             </button>
//             <AnimatePresence>
//               {hoveredMenu === "projects" && (
//                 <motion.div
//                   variants={menuVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 w-[90vw] max-w-4xl z-50 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-2 gap-4">
//                     {projects.map((p) => (
//                       <a
//                         key={p.label}
//                         href={p.href}
//                         className="p-3 rounded-lg hover:bg-accent/10 transition-colors"
//                       >
//                         <p className="font-medium text-gray-900">{p.label}</p>
//                         <p className="text-sm text-gray-500">View our {p.label.toLowerCase()} portfolio</p>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <div 
//             className="relative group"
//             onMouseEnter={() => setHoveredMenu("services")}
//             onMouseLeave={() => setHoveredMenu(null)}
//           >
//             <button className="px-4 py-2 text-gray-700 hover:text-accent font-medium text-sm rounded-full transition-colors hover:bg-accent/10">
//               Services
//             </button>
//             <AnimatePresence>
//               {hoveredMenu === "services" && (
//                 <motion.div
//                   variants={menuVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 w-[90vw] max-w-5xl z-50 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                     {services.map((s) => (
//                       <a
//                         key={s.title}
//                         href={s.href}
//                         className="group p-4 rounded-xl hover:bg-accent/10 transition-all hover:-translate-y-1 hover:shadow-lg"
//                       >
//                         <div className="flex items-start gap-4">
//                           <div className="p-2 bg-accent/10 rounded-lg">
//                             <s.icon className="h-6 w-6 text-accent" />
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900">{s.title}</p>
//                             <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
//                           </div>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <a
//             href="#contact"
//             className="inline-flex items-center px-5 py-2.5 bg-accent text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-[#d88f07] transition-all duration-300"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Mobile trigger */}
//         <button
//           className="md:hidden p-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100"
//           onClick={() => setOpen(true)}
//         >
//           <FiMenu className="h-6 w-6 text-gray-700" />
//         </button>
//       </nav>

//       {/* Mobile drawer */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//             />
//             <motion.aside
//               className="fixed right-0 top-0 z-50 h-full w-80 bg-white p-6 shadow-2xl"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 260, damping: 28 }}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-[#d88f07] shadow-lg" />
//                   <span className="text-lg font-bold text-gray-900">VersaNex</span>
//                 </div>
//                 <button
//                   className="p-2 rounded-full border border-gray-200 hover:bg-gray-100"
//                   onClick={() => setOpen(false)}
//                 >
//                   <FiX className="h-6 w-6 text-gray-700" />
//                 </button>
//               </div>

//               <ul className="mt-8 space-y-4">
//                 <li>
//                   <details className="group">
//                     <summary className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-accent/10 cursor-pointer">
//                       <span className="font-medium text-gray-900">About</span>
//                       <span className="text-accent group-open:rotate-180 transition-transform">▾</span>
//                     </summary>
//                     <div className="mt-2 space-y-2 pl-4">
//                       {aboutItems.map((a) => (
//                         <a
//                           key={a.label}
//                           href={a.href}
//                           onClick={() => setOpen(false)}
//                           className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/10"
//                         >
//                           <a.icon className="h-5 w-5 text-accent" />
//                           <span className="text-gray-900">{a.label}</span>
//                         </a>
//                       ))}
//                     </div>
//                   </details>
//                 </li>

//                 <li>
//                   <details className="group">
//                     <summary className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-accent/10 cursor-pointer">
//                       <span className="font-medium text-gray-900">Projects</span>
//                       <span className="text-accent group-open:rotate-180 transition-transform">▾</span>
//                     </summary>
//                     <div className="mt-2 space-y-2 pl-4">
//                       {projects.map((p) => (
//                         <a
//                           key={p.label}
//                           href={p.href}
//                           onClick={() => setOpen(false)}
//                           className="block p-2 rounded-lg hover:bg-accent/10"
//                         >
//                           <span className="text-gray-900">{p.label}</span>
//                         </a>
//                       ))}
//                     </div>
//                   </details>
//                 </li>

//                 <li>
//                   <details className="group">
//                     <summary className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-accent/10 cursor-pointer">
//                       <span className="font-medium text-gray-900">Services</span>
//                       <span className="text-accent group-open:rotate-180 transition-transform">▾</span>
//                     </summary>
//                     <div className="mt-2 space-y-3 pl-4">
//                       {services.map((s) => (
//                         <a
//                           key={s.title}
//                           href={s.href}
//                           onClick={() => setOpen(false)}
//                           className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10"
//                         >
//                           <div className="p-2 bg-accent/10 rounded-lg">
//                             <s.icon className="h-5 w-5 text-accent" />
//                           </div>
//                           <div>
//                             <p className="font-medium text-gray-900">{s.title}</p>
//                             <p className="text-sm text-gray-500">{s.desc}</p>
//                           </div>
//                         </a>
//                       ))}
//                     </div>
//                   </details>
//                 </li>

//                 <li>
//                   <a
//                     href="#contact"
//                     onClick={() => setOpen(false)}
//                     className="block px-4 py-3 rounded-full bg-accent text-white font-medium text-center shadow-lg hover:bg-[#d88f07] transition-colors"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>

//               <p className="mt-8 text-xs text-gray-500">
//                 © {new Date().getFullYear()} VersaNex. All rights reserved.
//               </p>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }










// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   FiMenu,
//   FiX,
//   FiLayers,
//   FiCode,
//   FiSmartphone,
//   FiCpu,
//   FiCloud,
//   FiPenTool,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "High-performance, SEO-friendly Next.js apps.",
//     href: "#services",
//   },
//   {
//     icon: FiSmartphone,
//     title: "Mobile Apps",
//     desc: "Cross-platform apps with smooth UX.",
//     href: "#services",
//   },
//   {
//     icon: FiCpu,
//     title: "AI & Automation",
//     desc: "Integrations, agents, and workflow automation.",
//     href: "#services",
//   },
//   {
//     icon: FiCloud,
//     title: "Cloud & DevOps",
//     desc: "Scalable infra, CI/CD, and observability.",
//     href: "#services",
//   },
//   {
//     icon: FiPenTool,
//     title: "UI/UX Design",
//     desc: "Human-centered, conversion-focused design.",
//     href: "#services",
//   },
//   {
//     icon: FiLayers,
//     title: "E-commerce",
//     desc: "Headless storefronts with Stripe.",
//     href: "#services",
//   },
// ]

// const projects = [
//   { label: "All Projects", href: "#work" },
//   { label: "Web Applications", href: "#work" },
//   { label: "Mobile Applications", href: "#work" },
//   { label: "AI & ML", href: "#work" },
//   { label: "E-commerce", href: "#work" },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "#about" },
//   { icon: FiUsers, label: "Team", href: "#team" },
//   { icon: FiBriefcase, label: "Careers", href: "#contact" },
// ]

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHovering, setIsHovering] = useState(false)
//   const [navHeight, setNavHeight] = useState(0)
//   const navRef = useRef(null)

//     const [openDropdown, setOpenDropdown] = useState(null);

//   useEffect(() => {
//     const updateHeight = () => {
//       if (navRef.current) {
//         setNavHeight(navRef.current.clientHeight)
//       }
//     }
//     updateHeight()
//     window.addEventListener("resize", updateHeight)
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [])

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     onScroll()
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setHoveredMenu(null)
//         setOpen(false)
//       }
//     }
//     document.addEventListener("keydown", onKeyDown)
//     return () => document.removeEventListener("keydown", onKeyDown)
//   }, [])

//   useEffect(() => {
//     const root = document.documentElement
//     if (open) {
//       root.classList.add("overflow-hidden")
//     } else {
//       root.classList.remove("overflow-hidden")
//     }
//     return () => root.classList.remove("overflow-hidden")
//   }, [open])

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
//     exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
//   }

//   const handleMouseEnter = (menu) => {
//     setIsHovering(true)
//     setHoveredMenu(menu)
//   }

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       if (!isHovering) setHoveredMenu(null)
//     }, 200)
//   }


//   const toggleDropdown = (name) => {
//     setOpenDropdown((prev) => (prev === name ? null : name));
//   };


//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
//         scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
//       }`}
//     >
//       <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//         <Link href="/" className="group flex items-center gap-3">
//           <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
//           <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
//             VersaNex
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6">
//           <div
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter("about")}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//           >
//             <button
//               className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//               aria-haspopup="true"
//               aria-expanded={hoveredMenu === "about"}
//             >
//               About
//             </button>
//             <AnimatePresence>
//               {hoveredMenu === "about" && (
//                 <motion.div
//                   variants={menuVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20 ring-1 ring-black/10 overflow-auto max-h-[calc(100vh-4rem)]"
//                   style={{ top: `${navHeight}px` }}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => {
//                     setIsHovering(false)
//                     handleMouseLeave()
//                   }}
//                   role="menu"
//                 >
//                   <div className="grid grid-cols-1 gap-4">
//                     {aboutItems.map((a) => (
//                       <a
//                         key={a.label}
//                         href={a.href}
//                         className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:shadow-md group"
//                         role="menuitem"
//                         onClick={() => setHoveredMenu(null)}
//                       >
//                         <a.icon className="h-6 w-6 text-[#f2ad08] group-hover:scale-110 transition-transform duration-300" />
//                         <div>
//                           <p className="font-semibold text-gray-900">{a.label}</p>
//                           <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <div
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter("projects")}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//           >
//             <button
//               className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//               aria-haspopup="true"
//               aria-expanded={hoveredMenu === "projects"}
//             >
//               Projects
//             </button>
//             <AnimatePresence>
//               {hoveredMenu === "projects" && (
//                 <motion.div
//                   variants={menuVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20 ring-1 ring-black/10 overflow-auto max-h-[calc(100vh-4rem)]"
//                   style={{ top: `${navHeight}px` }}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => {
//                     setIsHovering(false)
//                     handleMouseLeave()
//                   }}
//                   role="menu"
//                 >
//                   <div className="grid grid-cols-2 gap-4">
//                     {projects.map((p) => (
//                       <a
//                         key={p.label}
//                         href={p.href}
//                         className="p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:shadow-md"
//                         role="menuitem"
//                         onClick={() => setHoveredMenu(null)}
//                       >
//                         <p className="font-semibold text-gray-900">{p.label}</p>
//                         <p className="text-sm text-gray-600 mt-1">Discover our {p.label.toLowerCase()}</p>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <div
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter("services")}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//           >
//             <button
//               className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//               aria-haspopup="true"
//               aria-expanded={hoveredMenu === "services"}
//             >
//               Services
//             </button>
//             <AnimatePresence>
//               {hoveredMenu === "services" && (
//                 <motion.div
//                   variants={menuVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20 ring-1 ring-black/10 overflow-auto max-h-[calc(100vh-4rem)]"
//                   style={{ top: `${navHeight}px` }}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => {
//                     setIsHovering(false)
//                     handleMouseLeave()
//                   }}
//                   role="menu"
//                 >
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                     {services.map((s) => (
//                       <a
//                         key={s.title}
//                         href={s.href}
//                         className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                         role="menuitem"
//                         onClick={() => setHoveredMenu(null)}
//                       >
//                         <div className="flex items-start gap-4">
//                           <div className="p-3 bg-[#f2ad08]/10 rounded-lg group-hover:scale-105 transition-transform duration-300">
//                             <s.icon className="h-6 w-6 text-[#f2ad08]" />
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900">{s.title}</p>
//                             <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                           </div>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <a
//             href="#contact"
//             className="inline-flex items-center px-6 py-2.5 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Mobile trigger */}
//         <button
//           className="md:hidden p-3 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 transition-all duration-300"
//           onClick={() => setOpen(true)}
//           aria-label="Open menu"
//         >
//           <FiMenu className="h-6 w-6 text-gray-700" />
//         </button>
//       </nav>

//       {/* Global desktop overlay */}
//       <AnimatePresence>
//         {hoveredMenu && (
//           <motion.div
//             key="desktop-overlay"
//             className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
//             style={{ top: `${navHeight}px` }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             aria-hidden="true"
//             onClick={() => setHoveredMenu(null)}
//           />
//         )}
//       </AnimatePresence>

//       {/* Mobile drawer */}
//  <AnimatePresence>
//       {open && (
//         <>
//           <motion.div
//             className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={() => setOpen(false)}
//             aria-hidden="true"
//           />

//           <motion.aside
//             className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#f2ad08]/70 scrollbar-track-gray-100"
//             initial={{ x: "100%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: "100%", opacity: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             role="dialog"
//             aria-modal="true"
//           >
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
//                 <span className="text-lg font-bold text-gray-900">VersaNex</span>
//               </div>
//               <button
//                 className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
//                 onClick={() => setOpen(false)}
//                 aria-label="Close menu"
//               >
//                 <FiX className="h-6 w-6 text-gray-700" />
//               </button>
//             </div>

//             <ul className="mt-8 space-y-4">
//               {/* ABOUT DROPDOWN */}
//               <li>
//                 <button
//                   onClick={() => toggleDropdown("about")}
//                   className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                 >
//                   <span className="font-semibold text-gray-900">About</span>
//                   <span
//                     className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                       openDropdown === "about" ? "rotate-180" : ""
//                     }`}
//                   >
//                     ▾
//                   </span>
//                 </button>

//                 <AnimatePresence>
//                   {openDropdown === "about" && (
//                     <motion.div
//                       key="about"
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       className="pl-4 overflow-hidden"
//                     >
//                       <div className="mt-3 space-y-3">
//                         {aboutItems.map((a) => (
//                           <a
//                             key={a.label}
//                             href={a.href}
//                             onClick={() => setOpen(false)}
//                             className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                           >
//                             <a.icon className="h-5 w-5 text-[#f2ad08]" />
//                             <span className="text-gray-900 font-medium">{a.label}</span>
//                           </a>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </li>

//               {/* PROJECTS DROPDOWN */}
//               <li>
//                 <button
//                   onClick={() => toggleDropdown("projects")}
//                   className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                 >
//                   <span className="font-semibold text-gray-900">Projects</span>
//                   <span
//                     className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                       openDropdown === "projects" ? "rotate-180" : ""
//                     }`}
//                   >
//                     ▾
//                   </span>
//                 </button>

//                 <AnimatePresence>
//                   {openDropdown === "projects" && (
//                     <motion.div
//                       key="projects"
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       className="pl-4 overflow-hidden"
//                     >
//                       <div className="mt-3 space-y-3">
//                         {projects.map((p) => (
//                           <a
//                             key={p.label}
//                             href={p.href}
//                             onClick={() => setOpen(false)}
//                             className="block p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                           >
//                             <span className="text-gray-900 font-medium">{p.label}</span>
//                           </a>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </li>

//               {/* SERVICES DROPDOWN */}
//               <li>
//                 <button
//                   onClick={() => toggleDropdown("services")}
//                   className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                 >
//                   <span className="font-semibold text-gray-900">Services</span>
//                   <span
//                     className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                       openDropdown === "services" ? "rotate-180" : ""
//                     }`}
//                   >
//                     ▾
//                   </span>
//                 </button>

//                 <AnimatePresence>
//                   {openDropdown === "services" && (
//                     <motion.div
//                       key="services"
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       className="pl-4 overflow-hidden"
//                     >
//                       <div className="mt-3 space-y-3">
//                         {services.map((s) => (
//                           <a
//                             key={s.title}
//                             href={s.href}
//                             onClick={() => setOpen(false)}
//                             className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                           >
//                             <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                               <s.icon className="h-5 w-5 text-[#f2ad08]" />
//                             </div>
//                             <div>
//                               <p className="font-semibold text-gray-900">{s.title}</p>
//                               <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                             </div>
//                           </a>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </li>

//               {/* CONTACT BUTTON */}
//               <li>
//                 <a
//                   href="#contact"
//                   onClick={() => setOpen(false)}
//                   className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>

//             <p className="mt-8 text-xs text-gray-500">
//               © {new Date().getFullYear()} VersaNex. All rights reserved.
//             </p>
//           </motion.aside>
//         </>
//       )}
//     </AnimatePresence>
//     </header>
//   )
// }





















// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import {
//   FiMenu,
//   FiX,
//   FiLayers,
//   FiCode,
//   FiSmartphone,
//   FiCpu,
//   FiCloud,
//   FiPenTool,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "High-performance, SEO-friendly Next.js apps.",
//     href: "#services",
//   },
//   {
//     icon: FiSmartphone,
//     title: "Mobile Apps",
//     desc: "Cross-platform apps with smooth UX.",
//     href: "#services",
//   },
//   {
//     icon: FiCpu,
//     title: "AI & Automation",
//     desc: "Integrations, agents, and workflow automation.",
//     href: "#services",
//   },
//   {
//     icon: FiCloud,
//     title: "Cloud & DevOps",
//     desc: "Scalable infra, CI/CD, and observability.",
//     href: "#services",
//   },
//   {
//     icon: FiPenTool,
//     title: "UI/UX Design",
//     desc: "Human-centered, conversion-focused design.",
//     href: "#services",
//   },
//   {
//     icon: FiLayers,
//     title: "E-commerce",
//     desc: "Headless storefronts with Stripe.",
//     href: "#services",
//   },
// ]

// const projects = [
//   { label: "All Projects", href: "#work" },
//   { label: "Web Applications", href: "#work" },
//   { label: "Mobile Applications", href: "#work" },
//   { label: "AI & ML", href: "#work" },
//   { label: "E-commerce", href: "#work" },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "#about" },
//   { icon: FiUsers, label: "Team", href: "#team" },
//   { icon: FiBriefcase, label: "Careers", href: "#contact" },
// ]

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHovering, setIsHovering] = useState(false)
//   const [navHeight, setNavHeight] = useState(0)
//   const navRef = useRef(null)

//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isDesktop, setIsDesktop] = useState(true);

//   useEffect(() => {
//     setIsDesktop(window.innerWidth >= 768);
//     const updateHeight = () => {
//       if (navRef.current) {
//         setNavHeight(navRef.current.clientHeight)
//       }
//     }
//     updateHeight()
//     window.addEventListener("resize", updateHeight)
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [])

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     onScroll()
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setHoveredMenu(null)
//         setOpen(false)
//       }
//     }
//     document.addEventListener("keydown", onKeyDown)
//     return () => document.removeEventListener("keydown", onKeyDown)
//   }, [])

//   useEffect(() => {
//     const root = document.documentElement
//     if (open || hoveredMenu) {
//       root.classList.add("overflow-hidden")
//     } else {
//       root.classList.remove("overflow-hidden")
//     }
//     return () => root.classList.remove("overflow-hidden")
//   }, [open, hoveredMenu])

//   useEffect(() => {
//     const handleResize = () => {
//       const newIsDesktop = window.innerWidth >= 768;
//       if (isDesktop && !newIsDesktop && hoveredMenu) {
//         setHoveredMenu(null);
//       }
//       if (!isDesktop && newIsDesktop && open) {
//         setOpen(false);
//       }
//       setIsDesktop(newIsDesktop);
//     }
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isDesktop, hoveredMenu, open]);

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
//     exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
//   }

//   const handleMouseEnter = (menu) => {
//     setIsHovering(true)
//     setHoveredMenu(menu)
//   }

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       if (!isHovering) setHoveredMenu(null)
//     }, 200)
//   }


//   const toggleDropdown = (name) => {
//     setOpenDropdown((prev) => (prev === name ? null : name));
//   };


//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
//         }`}
//     >
//       <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//         {/* <Link href="/" className="group flex items-center gap-3">
//         <Image src={"./logo.png"}
//          height={50} 
//          width={50}
//          alt="Logo"
//         />
//          <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
//             VersaNex
//           </span>
//         </Link> */}
//         <Link href="/" className="group flex items-center gap-1">
//           <Image
//             src="/logo.png"
//             height={50}
//             width={50}
//             alt="VersaNex Logo"
//             className="transition-transform duration-300 group-hover:scale-110"
//           />
//           {/* <span className="text-3xl font-bold tracking-tight text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
//     VersaNex
//   </span> */}
//           <span className="text-3xl font-extrabold tracking-tight text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
//             VersaNex
//           </span>

//         </Link>


//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link href={"/"}>
//             <button className="px-4 cursor-pointer py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//             >
//               Home
//             </button>
//           </Link>
//           <div
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter("about")}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//           >
//             <button
//               className="px-4 cursor-pointer py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//               aria-haspopup="true"
//               aria-expanded={hoveredMenu === "about"}
//             >
//               About
//             </button>
//             <AnimatePresence>
//               {hoveredMenu === "about" && (
//                 <motion.div
//                   variants={menuVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20 ring-1 ring-black/10 overflow-auto max-h-[calc(100vh-4rem)]"
//                   style={{ top: `calc(${navHeight}px - 1px)` }}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => {
//                     setIsHovering(false)
//                     handleMouseLeave()
//                   }}
//                   role="menu"
//                 >
//                   <div className="grid grid-cols-1 gap-4">
//                     {aboutItems.map((a) => (
//                       <a
//                         key={a.label}
//                         href={a.href}
//                         className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:shadow-md group"
//                         role="menuitem"
//                         onClick={() => setHoveredMenu(null)}
//                       >
//                         <a.icon className="h-6 w-6 text-[#f2ad08] group-hover:scale-110 transition-transform duration-300" />
//                         <div>
//                           <p className="font-semibold text-gray-900">{a.label}</p>
//                           <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <div
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter("projects")}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//           >
//             <button
//               className="px-4 py-2 cursor-pointer text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//               aria-haspopup="true"
//               aria-expanded={hoveredMenu === "projects"}
//             >
//               Projects
//             </button>
//             <AnimatePresence>
//               {hoveredMenu === "projects" && (
//                 <motion.div
//                   variants={menuVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20 ring-1 ring-black/10 overflow-auto max-h-[calc(100vh-4rem)]"
//                   style={{ top: `calc(${navHeight}px - 1px)` }}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => {
//                     setIsHovering(false)
//                     handleMouseLeave()
//                   }}
//                   role="menu"
//                 >
//                   <div className="grid grid-cols-2 gap-4">
//                     {projects.map((p) => (
//                       <a
//                         key={p.label}
//                         href={p.href}
//                         className="p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:shadow-md"
//                         role="menuitem"
//                         onClick={() => setHoveredMenu(null)}
//                       >
//                         <p className="font-semibold text-gray-900">{p.label}</p>
//                         <p className="text-sm text-gray-600 mt-1">Discover our {p.label.toLowerCase()}</p>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <div
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter("services")}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//           >
//             <button
//               className="px-4 py-2 cursor-pointer text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//               aria-haspopup="true"
//               aria-expanded={hoveredMenu === "services"}
//             >
//               Services
//             </button>
//             <AnimatePresence>
//               {hoveredMenu === "services" && (
//                 <motion.div
//                   variants={menuVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20 ring-1 ring-black/10 overflow-auto max-h-[calc(100vh-4rem)]"
//                   style={{ top: `calc(${navHeight}px - 1px)` }}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => {
//                     setIsHovering(false)
//                     handleMouseLeave()
//                   }}
//                   role="menu"
//                 >
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                     {services.map((s) => (
//                       <a
//                         key={s.title}
//                         href={s.href}
//                         className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                         role="menuitem"
//                         onClick={() => setHoveredMenu(null)}
//                       >
//                         <div className="flex items-start gap-4">
//                           <div className="p-3 bg-[#f2ad08]/10 rounded-lg group-hover:scale-105 transition-transform duration-300">
//                             <s.icon className="h-6 w-6 text-[#f2ad08]" />
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900">{s.title}</p>
//                             <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                           </div>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <a
//             href="#contact"
//             className="inline-flex items-center px-6 py-2.5 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Mobile trigger */}
//         <button
//           className="md:hidden p-3 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 transition-all duration-300"
//           onClick={() => setOpen(true)}
//           aria-label="Open menu"
//         >
//           <FiMenu className="h-6 w-6 text-gray-700" />
//         </button>
//       </nav>

//       {/* Global desktop overlay */}
//       <AnimatePresence>
//         {hoveredMenu && (
//           <motion.div
//             key="desktop-overlay"
//             className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
//             style={{ top: `${navHeight}px` }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             aria-hidden="true"
//             onClick={() => setHoveredMenu(null)}
//             onMouseEnter={() => setHoveredMenu(null)}
//           />
//         )}
//       </AnimatePresence>

//       {/* Mobile drawer */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setOpen(false)}
//               aria-hidden="true"
//             />

//             <motion.aside
//               className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#f2ad08]/70 scrollbar-track-gray-100"
//               initial={{ x: "100%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: "100%", opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               role="dialog"
//               aria-modal="true"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
//                   <span className="text-lg font-bold text-gray-900">VersaNex</span>
//                 </div>
//                 <button
//                   className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
//                   onClick={() => setOpen(false)}
//                   aria-label="Close menu"
//                 >
//                   <FiX className="h-6 w-6 text-gray-700" />
//                 </button>
//               </div>

//               <ul className="mt-8 space-y-4">
//                 {/* ABOUT DROPDOWN */}
//                 <li>
//                   <button
//                     onClick={() => toggleDropdown("about")}
//                     className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                   >
//                     <span className="font-semibold text-gray-900">About</span>
//                     <span
//                       className={`text-[#f2ad08] transform transition-transform duration-300 ${openDropdown === "about" ? "rotate-180" : ""
//                         }`}
//                     >
//                       ▾
//                     </span>
//                   </button>

//                   <AnimatePresence>
//                     {openDropdown === "about" && (
//                       <motion.div
//                         key="about"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         <div className="mt-3 space-y-3">
//                           {aboutItems.map((a) => (
//                             <a
//                               key={a.label}
//                               href={a.href}
//                               onClick={() => setOpen(false)}
//                               className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                             >
//                               <a.icon className="h-5 w-5 text-[#f2ad08]" />
//                               <span className="text-gray-900 font-medium">{a.label}</span>
//                             </a>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </li>

//                 {/* PROJECTS DROPDOWN */}
//                 <li>
//                   <button
//                     onClick={() => toggleDropdown("projects")}
//                     className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                   >
//                     <span className="font-semibold text-gray-900">Projects</span>
//                     <span
//                       className={`text-[#f2ad08] transform transition-transform duration-300 ${openDropdown === "projects" ? "rotate-180" : ""
//                         }`}
//                     >
//                       ▾
//                     </span>
//                   </button>

//                   <AnimatePresence>
//                     {openDropdown === "projects" && (
//                       <motion.div
//                         key="projects"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         <div className="mt-3 space-y-3">
//                           {projects.map((p) => (
//                             <a
//                               key={p.label}
//                               href={p.href}
//                               onClick={() => setOpen(false)}
//                               className="block p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                             >
//                               <span className="text-gray-900 font-medium">{p.label}</span>
//                             </a>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </li>

//                 {/* SERVICES DROPDOWN */}
//                 <li>
//                   <button
//                     onClick={() => toggleDropdown("services")}
//                     className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                   >
//                     <span className="font-semibold text-gray-900">Services</span>
//                     <span
//                       className={`text-[#f2ad08] transform transition-transform duration-300 ${openDropdown === "services" ? "rotate-180" : ""
//                         }`}
//                     >
//                       ▾
//                     </span>
//                   </button>

//                   <AnimatePresence>
//                     {openDropdown === "services" && (
//                       <motion.div
//                         key="services"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         <div className="mt-3 space-y-3">
//                           {services.map((s) => (
//                             <a
//                               key={s.title}
//                               href={s.href}
//                               onClick={() => setOpen(false)}
//                               className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                             >
//                               <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                                 <s.icon className="h-5 w-5 text-[#f2ad08]" />
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-gray-900">{s.title}</p>
//                                 <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </li>

//                 {/* CONTACT BUTTON */}
//                 <li>
//                   <a
//                     href="#contact"
//                     onClick={() => setOpen(false)}
//                     className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>

//               <p className="mt-8 text-xs text-gray-500">
//                 © {new Date().getFullYear()} VersaNex. All rights reserved.
//               </p>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }









// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import ReactDOM from "react-dom"
// import {
//   FiMenu,
//   FiX,
//   FiLayers,
//   FiCode,
//   FiSmartphone,
//   FiCpu,
//   FiCloud,
//   FiPenTool,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "High-performance, SEO-friendly Next.js apps.",
//     href: "#services",
//   },
//   {
//     icon: FiSmartphone,
//     title: "Mobile Apps",
//     desc: "Cross-platform apps with smooth UX.",
//     href: "#services",
//   },
//   {
//     icon: FiCpu,
//     title: "AI & Automation",
//     desc: "Integrations, agents, and workflow automation.",
//     href: "#services",
//   },
//   {
//     icon: FiCloud,
//     title: "Cloud & DevOps",
//     desc: "Scalable infra, CI/CD, and observability.",
//     href: "#services",
//   },
//   {
//     icon: FiPenTool,
//     title: "UI/UX Design",
//     desc: "Human-centered, conversion-focused design.",
//     href: "#services",
//   },
//   {
//     icon: FiLayers,
//     title: "E-commerce",
//     desc: "Headless storefronts with Stripe.",
//     href: "#services",
//   },
// ]

// const projects = [
//   { label: "All Projects", href: "#work" },
//   { label: "Web Applications", href: "#work" },
//   { label: "Mobile Applications", href: "#work" },
//   { label: "AI & ML", href: "#work" },
//   { label: "E-commerce", href: "#work" },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "#about" },
//   { icon: FiUsers, label: "Team", href: "#team" },
//   { icon: FiBriefcase, label: "Careers", href: "#contact" },
// ]

// function Portal({ children }) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     return () => setMounted(false);
//   }, []);

//   if (!mounted) return null;

//   return ReactDOM.createPortal(children, document.body);
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHovering, setIsHovering] = useState(false)
//   const [navHeight, setNavHeight] = useState(0)
//   const navRef = useRef(null)

//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isDesktop, setIsDesktop] = useState(true);

//   useEffect(() => {
//     setIsDesktop(window.innerWidth >= 768);
//     const updateHeight = () => {
//       if (navRef.current) {
//         setNavHeight(navRef.current.clientHeight)
//       }
//     }
//     updateHeight()
//     window.addEventListener("resize", updateHeight)
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [])

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     onScroll()
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setHoveredMenu(null)
//         setOpen(false)
//       }
//     }
//     document.addEventListener("keydown", onKeyDown)
//     return () => document.removeEventListener("keydown", onKeyDown)
//   }, [])

//   useEffect(() => {
//     const root = document.documentElement
//     if (open || hoveredMenu) {
//       root.classList.add("overflow-hidden")
//     } else {
//       root.classList.remove("overflow-hidden")
//     }
//     return () => root.classList.remove("overflow-hidden")
//   }, [open, hoveredMenu])

//   useEffect(() => {
//     const handleResize = () => {
//       const newIsDesktop = window.innerWidth >= 768;
//       if (isDesktop && !newIsDesktop && hoveredMenu) {
//         setHoveredMenu(null);
//       }
//       if (!isDesktop && newIsDesktop && open) {
//         setOpen(false);
//       }
//       setIsDesktop(newIsDesktop);
//     }
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isDesktop, hoveredMenu, open]);

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
//     exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
//   }

//   const handleMouseEnter = (menu) => {
//     setIsHovering(true)
//     setHoveredMenu(menu)
//   }

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       if (!isHovering) setHoveredMenu(null)
//     }, 200)
//   }


//   const toggleDropdown = (name) => {
//     setOpenDropdown((prev) => (prev === name ? null : name));
//   };


//   return (
//     <>
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
//         }`}
//     >
//       <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//         {/* <Link href="/" className="group flex items-center gap-3">
//         <Image src={"./logo.png"}
//          height={50} 
//          width={50}
//          alt="Logo"
//         />
//          <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
//             VersaNex
//           </span>
//         </Link> */}
//         <Link href="/" className="group flex items-center gap-1">
//           <Image
//             src="/logo.png"
//             height={50}
//             width={50}
//             alt="VersaNex Logo"
//             className="transition-transform duration-300 group-hover:scale-110"
//           />
//           {/* <span className="text-3xl font-bold tracking-tight text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
//     VersaNex
//   </span> */}
//           <span className="text-3xl font-extrabold tracking-tight text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
//             VersaNex
//           </span>

//         </Link>


//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link href={"/"}>
//             <button className="px-4 cursor-pointer py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//             >
//               Home
//             </button>
//           </Link>
//           <div
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter("about")}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//           >
//             <button
//               className="px-4 cursor-pointer py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//               aria-haspopup="true"
//               aria-expanded={hoveredMenu === "about"}
//             >
//               About
//             </button>
//           </div>

//           <div
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter("projects")}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//           >
//             <button
//               className="px-4 py-2 cursor-pointer text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//               aria-haspopup="true"
//               aria-expanded={hoveredMenu === "projects"}
//             >
//               Projects
//             </button>
//           </div>

//           <div
//             className="relative group"
//             onMouseEnter={() => handleMouseEnter("services")}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//           >
//             <button
//               className="px-4 py-2 cursor-pointer text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 focus:outline-none focus:ring-2 focus:ring-[#f2ad08]/50"
//               aria-haspopup="true"
//               aria-expanded={hoveredMenu === "services"}
//             >
//               Services
//             </button>
//           </div>

//           <a
//             href="#contact"
//             className="inline-flex items-center px-6 py-2.5 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Mobile trigger */}
//         <button
//           className="md:hidden p-3 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 transition-all duration-300"
//           onClick={() => setOpen(true)}
//           aria-label="Open menu"
//         >
//           <FiMenu className="h-6 w-6 text-gray-700" />
//         </button>
//       </nav>
//     </header>

//     {/* Global desktop overlay */}
//     <AnimatePresence>
//       {hoveredMenu && (
//         <Portal>
//           <motion.div
//             key="desktop-overlay"
//             className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
//             style={{ top: `${navHeight}px` }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             aria-hidden="true"
//             onClick={() => setHoveredMenu(null)}
//             onMouseEnter={() => setHoveredMenu(null)}
//           />
//         </Portal>
//       )}
//     </AnimatePresence>

//     {/* Desktop Mega Menus */}
//     <AnimatePresence>
//       {hoveredMenu === "about" && (
//         <Portal>
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20 ring-1 ring-black/10 overflow-auto max-h-[calc(100vh-4rem)]"
//             style={{ top: `calc(${navHeight}px - 1px)` }}
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//             role="menu"
//           >
//             <div className="grid grid-cols-1 gap-4">
//               {aboutItems.map((a) => (
//                 <a
//                   key={a.label}
//                   href={a.href}
//                   className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:shadow-md group"
//                   role="menuitem"
//                   onClick={() => setHoveredMenu(null)}
//                 >
//                   <a.icon className="h-6 w-6 text-[#f2ad08] group-hover:scale-110 transition-transform duration-300" />
//                   <div>
//                     <p className="font-semibold text-gray-900">{a.label}</p>
//                     <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         </Portal>
//       )}
//     </AnimatePresence>

//     <AnimatePresence>
//       {hoveredMenu === "projects" && (
//         <Portal>
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20 ring-1 ring-black/10 overflow-auto max-h-[calc(100vh-4rem)]"
//             style={{ top: `calc(${navHeight}px - 1px)` }}
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//             role="menu"
//           >
//             <div className="grid grid-cols-2 gap-4">
//               {projects.map((p) => (
//                 <a
//                   key={p.label}
//                   href={p.href}
//                   className="p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:shadow-md"
//                   role="menuitem"
//                   onClick={() => setHoveredMenu(null)}
//                 >
//                   <p className="font-semibold text-gray-900">{p.label}</p>
//                   <p className="text-sm text-gray-600 mt-1">Discover our {p.label.toLowerCase()}</p>
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         </Portal>
//       )}
//     </AnimatePresence>

//     <AnimatePresence>
//       {hoveredMenu === "services" && (
//         <Portal>
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20 ring-1 ring-black/10 overflow-auto max-h-[calc(100vh-4rem)]"
//             style={{ top: `calc(${navHeight}px - 1px)` }}
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => {
//               setIsHovering(false)
//               handleMouseLeave()
//             }}
//             role="menu"
//           >
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//               {services.map((s) => (
//                 <a
//                   key={s.title}
//                   href={s.href}
//                   className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                   role="menuitem"
//                   onClick={() => setHoveredMenu(null)}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg group-hover:scale-105 transition-transform duration-300">
//                       <s.icon className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">{s.title}</p>
//                       <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         </Portal>
//       )}
//     </AnimatePresence>

//     {/* Mobile drawer */}
//     <AnimatePresence>
//       {open && (
//         <Portal>
//           <>
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setOpen(false)}
//               aria-hidden="true"
//             />

//             <motion.aside
//               className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#f2ad08]/70 scrollbar-track-gray-100"
//               initial={{ x: "100%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: "100%", opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               role="dialog"
//               aria-modal="true"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
//                   <span className="text-lg font-bold text-gray-900">VersaNex</span>
//                 </div>
//                 <button
//                   className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
//                   onClick={() => setOpen(false)}
//                   aria-label="Close menu"
//                 >
//                   <FiX className="h-6 w-6 text-gray-700" />
//                 </button>
//               </div>

//               <ul className="mt-8 space-y-4">
//                 {/* ABOUT DROPDOWN */}
//                 <li>
//                   <button
//                     onClick={() => toggleDropdown("about")}
//                     className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                   >
//                     <span className="font-semibold text-gray-900">About</span>
//                     <span
//                       className={`text-[#f2ad08] transform transition-transform duration-300 ${openDropdown === "about" ? "rotate-180" : ""
//                         }`}
//                     >
//                       ▾
//                     </span>
//                   </button>

//                   <AnimatePresence>
//                     {openDropdown === "about" && (
//                       <motion.div
//                         key="about"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         <div className="mt-3 space-y-3">
//                           {aboutItems.map((a) => (
//                             <a
//                               key={a.label}
//                               href={a.href}
//                               onClick={() => setOpen(false)}
//                               className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                             >
//                               <a.icon className="h-5 w-5 text-[#f2ad08]" />
//                               <span className="text-gray-900 font-medium">{a.label}</span>
//                             </a>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </li>

//                 {/* PROJECTS DROPDOWN */}
//                 <li>
//                   <button
//                     onClick={() => toggleDropdown("projects")}
//                     className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                   >
//                     <span className="font-semibold text-gray-900">Projects</span>
//                     <span
//                       className={`text-[#f2ad08] transform transition-transform duration-300 ${openDropdown === "projects" ? "rotate-180" : ""
//                         }`}
//                     >
//                       ▾
//                     </span>
//                   </button>

//                   <AnimatePresence>
//                     {openDropdown === "projects" && (
//                       <motion.div
//                         key="projects"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         <div className="mt-3 space-y-3">
//                           {projects.map((p) => (
//                             <a
//                               key={p.label}
//                               href={p.href}
//                               onClick={() => setOpen(false)}
//                               className="block p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                             >
//                               <span className="text-gray-900 font-medium">{p.label}</span>
//                             </a>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </li>

//                 {/* SERVICES DROPDOWN */}
//                 <li>
//                   <button
//                     onClick={() => toggleDropdown("services")}
//                     className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                   >
//                     <span className="font-semibold text-gray-900">Services</span>
//                     <span
//                       className={`text-[#f2ad08] transform transition-transform duration-300 ${openDropdown === "services" ? "rotate-180" : ""
//                         }`}
//                     >
//                       ▾
//                     </span>
//                   </button>

//                   <AnimatePresence>
//                     {openDropdown === "services" && (
//                       <motion.div
//                         key="services"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         <div className="mt-3 space-y-3">
//                           {services.map((s) => (
//                             <a
//                               key={s.title}
//                               href={s.href}
//                               onClick={() => setOpen(false)}
//                               className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                             >
//                               <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                                 <s.icon className="h-5 w-5 text-[#f2ad08]" />
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-gray-900">{s.title}</p>
//                                 <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </li>

//                 {/* CONTACT BUTTON */}
//                 <li>
//                   <a
//                     href="#contact"
//                     onClick={() => setOpen(false)}
//                     className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>

//               <p className="mt-8 text-xs text-gray-500">
//                 © {new Date().getFullYear()} VersaNex. All rights reserved.
//               </p>
//             </motion.aside>
//           </>
//         </Portal>
//       )}
//     </AnimatePresence>
//     </>
//   )
// }










// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import ReactDOM from "react-dom"
// import {
//   FiMenu,
//   FiX,
//   FiLayers,
//   FiCode,
//   FiSmartphone,
//   FiCpu,
//   FiCloud,
//   FiPenTool,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
// } from "react-icons/fi"

// const services = [
//   { icon: FiCode, title: "Web Apps", desc: "High-performance, SEO-friendly Next.js apps.", href: "#services" },
//   { icon: FiSmartphone, title: "Mobile Apps", desc: "Cross-platform apps with smooth UX.", href: "#services" },
//   { icon: FiCpu, title: "AI & Automation", desc: "Integrations, agents, and workflow automation.", href: "#services" },
//   { icon: FiCloud, title: "Cloud & DevOps", desc: "Scalable infra, CI/CD, and observability.", href: "#services" },
//   { icon: FiPenTool, title: "UI/UX Design", desc: "Human-centered, conversion-focused design.", href: "#services" },
//   { icon: FiLayers, title: "E-commerce", desc: "Headless storefronts with Stripe.", href: "#services" },
// ]

// const projects = [
//   { label: "All Projects", href: "#work" },
//   { label: "Web Applications", href: "#work" },
//   { label: "Mobile Applications", href: "#work" },
//   { label: "AI & ML", href: "#work" },
//   { label: "E-commerce", href: "#work" },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "/about" },
//   { icon: FiUsers, label: "Team", href: "/about/ourteam" },
//   { icon: FiBriefcase, label: "Careers", href: "#contact" },
// ]

// function Portal({ children }) {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => {
//     setMounted(true)
//     return () => setMounted(false)
//   }, [])
//   if (!mounted) return null
//   return ReactDOM.createPortal(children, document.body)
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHoveringButton, setIsHoveringButton] = useState(false)
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false)
//   const [navHeight, setNavHeight] = useState(0)
//   const navRef = useRef(null)
//   const hoverTimeout = useRef(null)

//   useEffect(() => {
//     setScrolled(window.scrollY > 8)
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   useEffect(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     const updateHeight = () => navRef.current && setNavHeight(navRef.current.clientHeight)
//     window.addEventListener("resize", updateHeight)
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [])

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
//   }

//   // --- Hover control logic ---
//   const handleButtonEnter = (menu) => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringButton(true)
//     setHoveredMenu(menu)
//   }

//   const handleButtonLeave = () => {
//     setIsHoveringButton(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null)
//     }, 150)
//   }

//   const handleMenuEnter = () => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }

//   const handleMenuLeave = () => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, 150)
//   }

//   // Mobile dropdowns
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const toggleDropdown = (name) => setOpenDropdown((prev) => (prev === name ? null : name))

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
//           scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
//         }`}
//       >
//         <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//           <Link href="/" className="group flex items-center gap-1">
//             <Image
//               src="/logo.png"
//               height={50}
//               width={50}
//               alt="VersaNex Logo"
//               className="transition-transform duration-300 group-hover:scale-110"
//             />
//             <span className="text-3xl font-extrabold tracking-tight text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
//               VersaNex
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link href={"/"}>
//               <button className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10">
//                 Home
//               </button>
//             </Link>

//             {/* About Button */}
//             <Link href={"/about"}>
//             <div
//               onMouseEnter={() => handleButtonEnter("about")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <button
//                 className="px-4 cursor-pointer py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                 aria-expanded={hoveredMenu === "about"}
//               >
//                 About
//               </button>
//             </div>
//             </Link>

//             {/* Projects Button */}
//             <div
//               onMouseEnter={() => handleButtonEnter("projects")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <button
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                 aria-expanded={hoveredMenu === "projects"}
//               >
//                 Projects
//               </button>
//             </div>

//             {/* Services Button */}
//             <div
//               onMouseEnter={() => handleButtonEnter("services")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <button
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                 aria-expanded={hoveredMenu === "services"}
//               >
//                 Services
//               </button>
//             </div>

//             <a
//               href="#contact"
//               className="inline-flex items-center px-6 py-2.5 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Mobile trigger */}
//           <button
//             className="md:hidden p-3 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 transition-all duration-300"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//           >
//             <FiMenu className="h-6 w-6 text-gray-700" />
//           </button>
//         </nav>
//       </header>

//       {/* About Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "about" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-1 gap-4">
//                 {aboutItems.map((a) => (
//                   <a
//                     key={a.label}
//                     href={a.href}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 group"
//                   >
//                     <a.icon className="h-6 w-6 text-[#f2ad08]" />
//                     <div>
//                       <p className="font-semibold text-gray-900">{a.label}</p>
//                       <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Projects Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "projects" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 {projects.map((p) => (
//                   <a
//                     key={p.label}
//                     href={p.href}
//                     className="p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                   >
//                     <p className="font-semibold text-gray-900">{p.label}</p>
//                     <p className="text-sm text-gray-600 mt-1">Discover our {p.label.toLowerCase()}</p>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Services Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {services.map((s) => (
//                   <a
//                     key={s.title}
//                     href={s.href}
//                     className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                         <s.icon className="h-6 w-6 text-[#f2ad08]" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">{s.title}</p>
//                         <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }






// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import ReactDOM from "react-dom"
// import {
//   FiMenu,
//   FiX,
//   FiLayers,
//   FiCode,
//   FiSmartphone,
//   FiCpu,
//   FiCloud,
//   FiPenTool,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
// } from "react-icons/fi"

// const services = [
//   { icon: FiCode, title: "Web Apps", desc: "High-performance, SEO-friendly Next.js apps.", href: "#services" },
//   { icon: FiSmartphone, title: "Mobile Apps", desc: "Cross-platform apps with smooth UX.", href: "#services" },
//   { icon: FiCpu, title: "AI & Automation", desc: "Integrations, agents, and workflow automation.", href: "#services" },
//   { icon: FiCloud, title: "Cloud & DevOps", desc: "Scalable infra, CI/CD, and observability.", href: "#services" },
//   { icon: FiPenTool, title: "UI/UX Design", desc: "Human-centered, conversion-focused design.", href: "#services" },
//   { icon: FiLayers, title: "E-commerce", desc: "Headless storefronts with Stripe.", href: "#services" },
// ]

// const projects = [
//   { label: "All Projects", href: "#work" },
//   { label: "Web Applications", href: "#work" },
//   { label: "Mobile Applications", href: "#work" },
//   { label: "AI & ML", href: "#work" },
//   { label: "E-commerce", href: "#work" },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "/about" },
//   { icon: FiUsers, label: "Team", href: "/about/ourteam" },
//   { icon: FiBriefcase, label: "Careers", href: "#contact" },
// ]

// function Portal({ children }) {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => {
//     setMounted(true)
//     return () => setMounted(false)
//   }, [])
//   if (!mounted) return null
//   return ReactDOM.createPortal(children, document.body)
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHoveringButton, setIsHoveringButton] = useState(false)
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false)
//   const [navHeight, setNavHeight] = useState(0)
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const navRef = useRef(null)
//   const hoverTimeout = useRef(null)

//   useEffect(() => {
//     setScrolled(window.scrollY > 8)
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   useEffect(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     const updateHeight = () => navRef.current && setNavHeight(navRef.current.clientHeight)
//     window.addEventListener("resize", updateHeight)
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [])

//   useEffect(() => {
//     const root = document.documentElement
//     if (open || hoveredMenu) {
//       root.classList.add("overflow-hidden")
//     } else {
//       root.classList.remove("overflow-hidden")
//     }
//     return () => root.classList.remove("overflow-hidden")
//   }, [open, hoveredMenu])

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
//   }

// const hoverDelay = 120; // ms
// const hoverTolerance = 6; // px tolerance area before trigger

// const handleButtonEnter = (menu) => {
//   clearTimeout(hoverTimeout.current);
//   setIsHoveringButton(true);

//   // Add small delay before showing menu
//   hoverTimeout.current = setTimeout(() => {
//     setHoveredMenu(menu);
//   }, hoverDelay);
// };

// const handleButtonLeave = (event) => {
//   setIsHoveringButton(false);

//   // Add a small tolerance area check
//   const rect = event.currentTarget.getBoundingClientRect();
//   const { clientX, clientY } = event;

//   const withinTolerance =
//     clientX >= rect.left - hoverTolerance &&
//     clientX <= rect.right + hoverTolerance &&
//     clientY >= rect.top - hoverTolerance &&
//     clientY <= rect.bottom + hoverTolerance;

//   if (withinTolerance) return; // don’t close yet if still near the button

//   hoverTimeout.current = setTimeout(() => {
//     if (!isHoveringMenu) setHoveredMenu(null);
//   }, hoverDelay);
// };

//   const handleMenuEnter = () => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }

//   const handleMenuLeave = () => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, 150)
//   }

//   const toggleDropdown = (name) => setOpenDropdown((prev) => (prev === name ? null : name))

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
//           scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
//         }`}
//       >
//         <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//           <Link href="/" className="group flex items-center gap-1">
//             <Image
//               src="/logo.png"
              
//               height={40}
//               width={40}
//               alt="VersaNex Logo"
//               className="transition-transform duration-300 group-hover:scale-110"
//             />
//             <span className="lg:text-3xl text-2xl font-extrabold tracking-tight text-gray-900 group-hover:text-[#f2ad08] transition-colors duration-300">
//               VersaNex
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link href={"/"}>
//               <button className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10">
//                 Home
//               </button>
//             </Link>

//             <Link href={"/about"}>
//               <div
//                 onMouseEnter={() => handleButtonEnter("about")}
//                 onMouseLeave={handleButtonLeave}
//               >
//                 <button
//                   className="px-4 cursor-pointer py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                   aria-expanded={hoveredMenu === "about"}
//                 >
//                   About
//                 </button>
//               </div>
//             </Link>

//             <div
//               onMouseEnter={() => handleButtonEnter("projects")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <button
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                 aria-expanded={hoveredMenu === "projects"}
//               >
//                 Projects
//               </button>
//             </div>

//             <div
//               onMouseEnter={() => handleButtonEnter("services")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <button
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                 aria-expanded={hoveredMenu === "services"}
//               >
//                 Services
//               </button>
//             </div>

//             <a
//               href="#contact"
//               className="inline-flex items-center px-6 py-2.5 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Mobile trigger */}
//           <button
//             className="md:hidden p-3 rounded-full  shadow-sm hover:bg-gray-100 transition-all duration-300"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//           >
//             <FiMenu className="h-6 w-6 text-gray-700" />
//           </button>
//         </nav>
//       </header>

//       {/* Desktop Overlay */}
//       <AnimatePresence>
//         {hoveredMenu && (
//           <Portal>
//             <motion.div
//               key="desktop-overlay"
//               className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
//               style={{ top: `${navHeight}px` }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               aria-hidden="true"
//               onClick={() => setHoveredMenu(null)}
//               onMouseEnter={() => setHoveredMenu(null)}
//             />
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* About Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "about" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-1 gap-4">
//                 {aboutItems.map((a) => (
//                   <a
//                     key={a.label}
//                     href={a.href}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 group"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <a.icon className="h-6 w-6 text-[#f2ad08]" />
//                     <div>
//                       <p className="font-semibold text-gray-900">{a.label}</p>
//                       <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Projects Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "projects" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 {projects.map((p) => (
//                   <a
//                     key={p.label}
//                     href={p.href}
//                     className="p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <p className="font-semibold text-gray-900">{p.label}</p>
//                     <p className="text-sm text-gray-600 mt-1">Discover our {p.label.toLowerCase()}</p>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Services Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {services.map((s) => (
//                   <a
//                     key={s.title}
//                     href={s.href}
//                     className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                         <s.icon className="h-6 w-6 text-[#f2ad08]" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">{s.title}</p>
//                         <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {open && (
//           <Portal>
//             <>
//               <motion.div
//                 className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => setOpen(false)}
//                 aria-hidden="true"
//               />

//               <motion.aside
//                 className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#f2ad08]/70 scrollbar-track-gray-100"
//                 initial={{ x: "100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: "100%", opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 role="dialog"
//                 aria-modal="true"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
//                     <span className="text-lg font-bold text-gray-900">VersaNex</span>
//                   </div>
//                   <button
//                     className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
//                     onClick={() => setOpen(false)}
//                     aria-label="Close menu"
//                   >
//                     <FiX className="h-6 w-6 text-gray-700" />
//                   </button>
//                 </div>

//                 <ul className="mt-8 space-y-4">
//                   <li>
//                     <Link
//                       href="/"
//                       onClick={() => setOpen(false)}
//                       className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Home</span>
//                     </Link>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("about")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">About</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "about" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "about" && (
//                         <motion.div
//                           key="about"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {aboutItems.map((a) => (
//                               <a
//                                 key={a.label}
//                                 href={a.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <a.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 <span className="text-gray-900 font-medium">{a.label}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("projects")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Projects</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "projects" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "projects" && (
//                         <motion.div
//                           key="projects"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {projects.map((p) => (
//                               <a
//                                 key={p.label}
//                                 href={p.href}
//                                 onClick={() => setOpen(false)}
//                                 className="block p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <span className="text-gray-900 font-medium">{p.label}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("services")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Services</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "services" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "services" && (
//                         <motion.div
//                           key="services"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {services.map((s) => (
//                               <a
//                                 key={s.title}
//                                 href={s.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                                   <s.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 </div>
//                                 <div>
//                                   <p className="font-semibold text-gray-900">{s.title}</p>
//                                   <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                                 </div>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <a
//                       href="#contact"
//                       onClick={() => setOpen(false)}
//                       className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>

//                 <p className="mt-8 text-xs text-gray-500">
//                   © {new Date().getFullYear()} VersaNex. All rights reserved.
//                 </p>
//               </motion.aside>
//             </>
//           </Portal>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }












// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import ReactDOM from "react-dom"
// import {
//   FiMenu,
//   FiX,
//   FiLayers,
//   FiSmartphone,
//   FiCpu,
//   FiCloud,
//   FiPenTool,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
//   FiCode,
//   FiShoppingBag,
//   FiGlobe,
//   FiTrendingUp,
//   FiVideo,
//   FiImage,
//   FiCheckCircle,
//   FiEdit3,

// } from "react-icons/fi"


// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "Custom web applications built with modern frameworks like Next.js and React — fast, scalable, and SEO-optimized.",
//     href: "#services",
//   },
//   {
//     icon: FiShoppingBag,
//     title: "Shopify Stores",
//     desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
//     href: "#services",
//   },
//   {
//     icon: FiGlobe,
//     title: "WordPress Websites",
//     desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
//     href: "#services",
//   },
//   {
//     icon: FiTrendingUp,
//     title: "Digital Marketing",
//     desc: "Data-driven digital marketing strategies that boost visibility, engagement, and sales.",
//     href: "#services",
//   },
//   {
//     icon: FiVideo,
//     title: "Video Editing",
//     desc: "Creative video editing with cinematic storytelling and brand-focused visuals.",
//     href: "#services",
//   },
//   {
//     icon: FiImage,
//     title: "Graphic Designing",
//     desc: "Professional and impactful designs — from branding to social media creatives.",
//     href: "#services",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Software Quality Assurance",
//     desc: "Comprehensive testing services ensuring flawless performance and reliability.",
//     href: "#services",
//   },
//   {
//     icon: FiEdit3,
//     title: "Content Writing",
//     desc: "Engaging, SEO-optimized content that connects with your audience and drives conversions.",
//     href: "#services",
//   },
// ]


// const projects = [
//   { label: "All Projects", href: "/portfolio" },
//   { label: "Web Applications", href: "#work" },
//   { label: "Mobile Applications", href: "#work" },
//   { label: "AI & ML", href: "#work" },
//   { label: "E-commerce", href: "#work" },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "/about" },
//   { icon: FiUsers, label: "Team", href: "/about/ourteam" },
//   { icon: FiBriefcase, label: "Careers", href: "#contact" },
// ]

// function Portal({ children }) {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => {
//     setMounted(true)
//     return () => setMounted(false)
//   }, [])
//   if (!mounted) return null
//   return ReactDOM.createPortal(children, document.body)
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHoveringButton, setIsHoveringButton] = useState(false)
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false)
//   const [navHeight, setNavHeight] = useState(0)
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const navRef = useRef(null)
//   const hoverTimeout = useRef(null)

//   useEffect(() => {
//     setScrolled(window.scrollY > 8)
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   useEffect(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     const updateHeight = () => navRef.current && setNavHeight(navRef.current.clientHeight)
//     window.addEventListener("resize", updateHeight)
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [])

//   useEffect(() => {
//   const root = document.documentElement;

//   if (open || hoveredMenu) {
//     // Keep scrollbar visible but disable scroll
//     root.style.overflowY = "scroll"; // scrollbar stays visible
//     root.style.position = "fixed"; // freeze scroll
//     root.style.width = "100%"; // prevent content shift
//   } else {
//     root.style.overflowY = "";
//     root.style.position = "";
//     root.style.width = "";
//   }

//   return () => {
//     root.style.overflowY = "";
//     root.style.position = "";
//     root.style.width = "";
//   };
// }, [open, hoveredMenu]);


//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
//   }
  
//   const hoverDelay = 150; // Increased slightly for better debounce

//   const handleButtonEnter = (menu) => {
//     clearTimeout(hoverTimeout.current);
//     setIsHoveringButton(true);

//     hoverTimeout.current = setTimeout(() => {
//       setHoveredMenu(menu);
//     }, hoverDelay);
//   };

//   const handleButtonLeave = () => {
//     setIsHoveringButton(false);

//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null);
//     }, hoverDelay);
//   };

//   const handleMenuEnter = () => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }

//   const handleMenuLeave = () => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, hoverDelay)
//   }

//   const toggleDropdown = (name) => setOpenDropdown((prev) => (prev === name ? null : name))

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
//           scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
//         }`}
//       >
//         <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//           <Link href="/" className="group flex items-center gap-1">
//             <Image
//               src="/logo.png"
              
//               height={40}
//               width={40}
//               alt="VersaNex Logo"
//               className="transition-transform duration-300 "
//             />
//             <span className="lg:text-3xl text-2xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300">
//               VersaNex
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link href={"/"}>
//               <button className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10">
//                 Home
//               </button>
//             </Link>

//             <Link href={"/about"}>
//               <div
//                 onMouseEnter={() => handleButtonEnter("about")}
//                 onMouseLeave={handleButtonLeave}
//               >
//                 <button
//                   className="px-4 cursor-pointer py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                   aria-expanded={hoveredMenu === "about"}
//                 >
//                   About
//                 </button>
//               </div>
//             </Link>

//             <div
//               onMouseEnter={() => handleButtonEnter("projects")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <Link href={"/portfolio"}>
//               <button
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                 aria-expanded={hoveredMenu === "projects"}
//               >
//                 Portfolio
//               </button>
//               </Link>
//             </div>

//             <div
//               onMouseEnter={() => handleButtonEnter("services")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <Link href={"/services"}>
//               <button
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                 aria-expanded={hoveredMenu === "services"}
//               >
//                 Services
//               </button>
//               </Link>
//             </div>

//             <a
//               href="#contact"
//               className="inline-flex items-center px-4 py-2 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Mobile trigger */}
//           <button
//             className="md:hidden p-3 rounded-full  shadow-sm hover:bg-gray-100 transition-all duration-300"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//           >
//             <FiMenu className="h-6 w-6 text-gray-700" />
//           </button>
//         </nav>
//       </header>

//       {/* Desktop Overlay */}
//       <AnimatePresence>
//         {hoveredMenu && (
//           <Portal>
//             <motion.div
//               key="desktop-overlay"
//               className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
//               style={{ top: `${navHeight}px` }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               aria-hidden="true"
//               onClick={() => setHoveredMenu(null)}
//               onMouseEnter={() => setHoveredMenu(null)}
//             />
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* About Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "about" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-1 gap-4">
//                 {aboutItems.map((a) => (
//                   <a
//                     key={a.label}
//                     href={a.href}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 group"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <a.icon className="h-6 w-6 text-[#f2ad08]" />
//                     <div>
//                       <p className="font-semibold text-gray-900">{a.label}</p>
//                       <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Projects Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "projects" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 {projects.map((p) => (
//                   <a
//                     key={p.label}
//                     href={p.href}
//                     className="p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <p className="font-semibold text-gray-900">{p.label}</p>
//                     <p className="text-sm text-gray-600 mt-1">Discover our {p.label.toLowerCase()}</p>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Services Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {services.map((s) => (
//                   <a
//                     key={s.title}
//                     href={s.href}
//                     className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                         <s.icon className="h-6 w-6 text-[#f2ad08]" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">{s.title}</p>
//                         <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {open && (
//           <Portal>
//             <>
//               <motion.div
//                 className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => setOpen(false)}
//                 aria-hidden="true"
//               />

//               <motion.aside
//                 className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#f2ad08]/70 scrollbar-track-gray-100"
//                 initial={{ x: "100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: "100%", opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 role="dialog"
//                 aria-modal="true"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
//                     <span className="text-lg font-bold text-gray-900">VersaNex</span>
//                   </div>
//                   <button
//                     className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
//                     onClick={() => setOpen(false)}
//                     aria-label="Close menu"
//                   >
//                     <FiX className="h-6 w-6 text-gray-700" />
//                   </button>
//                 </div>

//                 <ul className="mt-8 space-y-4">
//                   <li>
//                     <Link
//                       href="/"
//                       onClick={() => setOpen(false)}
//                       className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Home</span>
//                     </Link>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("about")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">About</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "about" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "about" && (
//                         <motion.div
//                           key="about"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {aboutItems.map((a) => (
//                               <a
//                                 key={a.label}
//                                 href={a.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <a.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 <span className="text-gray-900 font-medium">{a.label}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("projects")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Portfoio</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "projects" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "projects" && (
//                         <motion.div
//                           key="projects"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {projects.map((p) => (
//                               <a
//                                 key={p.label}
//                                 href={p.href}
//                                 onClick={() => setOpen(false)}
//                                 className="block p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <span className="text-gray-900 font-medium">{p.label}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("services")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Services</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "services" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "services" && (
//                         <motion.div
//                           key="services"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {services.map((s) => (
//                               <a
//                                 key={s.title}
//                                 href={s.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                                   <s.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 </div>
//                                 <div>
//                                   <p className="font-semibold text-gray-900">{s.title}</p>
//                                   <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                                 </div>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <a
//                       href="#contact"
//                       onClick={() => setOpen(false)}
//                       className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>

//                 <p className="mt-8 text-xs text-gray-500">
//                   © {new Date().getFullYear()} VersaNex. All rights reserved.
//                 </p>
//               </motion.aside>
//             </>
//           </Portal>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }


















// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import ReactDOM from "react-dom"
// import {
//   FiMenu,
//   FiX,
//   FiLayers,
//   FiSmartphone,
//   FiCpu,
//   FiCloud,
//   FiPenTool,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
//   FiCode,
//   FiShoppingBag,
//   FiGlobe,
//   FiTrendingUp,
//   FiVideo,
//   FiImage,
//   FiCheckCircle,
//   FiEdit3,

// } from "react-icons/fi"


// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "Custom web applications built with modern frameworks like Next.js and React — fast, scalable, and SEO-optimized.",
//     href: "/services",
//   },
//   {
//     icon: FiShoppingBag,
//     title: "Shopify Stores",
//     desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
//     href: "/services",
//   },
//   {
//     icon: FiGlobe,
//     title: "WordPress Websites",
//     desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
//     href: "/services",
//   },
//   {
//     icon: FiTrendingUp,
//     title: "Digital Marketing",
//     desc: "Data-driven digital marketing strategies that boost visibility, engagement, and sales.",
//     href: "/services",
//   },
//   {
//     icon: FiVideo,
//     title: "Video Editing",
//     desc: "Creative video editing with cinematic storytelling and brand-focused visuals.",
//     href: "/services",
//   },
//   {
//     icon: FiImage,
//     title: "Graphic Designing",
//     desc: "Professional and impactful designs — from branding to social media creatives.",
//     href: "/services",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Software Quality Assurance",
//     desc: "Comprehensive testing services ensuring flawless performance and reliability.",
//     href: "/services",
//   },
//   {
//     icon: FiEdit3,
//     title: "Content Writing",
//     desc: "Engaging, SEO-optimized content that connects with your audience and drives conversions.",
//     href: "/services",
//   },
// ]


// const projects = [
//   { label: "All Projects", href: "/portfolio" },
//   { label: "Web Applications", href: "#work" },
//   { label: "Mobile Applications", href: "#work" },
//   { label: "AI & ML", href: "#work" },
//   { label: "E-commerce", href: "#work" },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "/about" },
//   { icon: FiUsers, label: "Team", href: "/about/ourteam" },
//   { icon: FiBriefcase, label: "Careers", href: "#contact" },
// ]

// function Portal({ children }) {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => {
//     setMounted(true)
//     return () => setMounted(false)
//   }, [])
//   if (!mounted) return null
//   return ReactDOM.createPortal(children, document.body)
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHoveringButton, setIsHoveringButton] = useState(false)
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false)
//   const [navHeight, setNavHeight] = useState(0)
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const navRef = useRef(null)
//   const hoverTimeout = useRef(null)

//   useEffect(() => {
//     setScrolled(window.scrollY > 8)
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   useEffect(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     const updateHeight = () => navRef.current && setNavHeight(navRef.current.clientHeight)
//     window.addEventListener("resize", updateHeight)
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [])

//   useEffect(() => {
//   const root = document.documentElement;

//   if (open || hoveredMenu) {
//     // Keep scrollbar visible but disable scroll
//     root.style.overflowY = "scroll"; // scrollbar stays visible
//     root.style.position = "fixed"; // freeze scroll
//     root.style.width = "100%"; // prevent content shift
//   } else {
//     root.style.overflowY = "";
//     root.style.position = "";
//     root.style.width = "";
//   }

//   return () => {
//     root.style.overflowY = "";
//     root.style.position = "";
//     root.style.width = "";
//   };
// }, [open, hoveredMenu]);


//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
//   }
  
//   const hoverDelay = 150; // Increased slightly for better debounce

//   const handleButtonEnter = (menu) => {
//     clearTimeout(hoverTimeout.current);
//     setIsHoveringButton(true);

//     hoverTimeout.current = setTimeout(() => {
//       setHoveredMenu(menu);
//     }, hoverDelay);
//   };

//   const handleButtonLeave = () => {
//     setIsHoveringButton(false);

//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null);
//     }, hoverDelay);
//   };

//   const handleMenuEnter = () => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }

//   const handleMenuLeave = () => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, hoverDelay)
//   }

//   const toggleDropdown = (name) => setOpenDropdown((prev) => (prev === name ? null : name))

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
//           scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
//         }`}
//       >
//         <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//           <Link href="/" className="group flex items-center gap-1">
//             <Image
//               src="/logo.png"
              
//               height={40}
//               width={40}
//               alt="VersaNex Logo"
//               className="transition-transform duration-300 "
//             />
//             <span className="lg:text-3xl text-2xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300">
//               VersaNex
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link href={"/"}>
//               <button className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10">
//                 Home
//               </button>
//             </Link>

//             <Link href={"/about"}>
//               <div
//                 onMouseEnter={() => handleButtonEnter("about")}
//                 onMouseLeave={handleButtonLeave}
//               >
//                 <button
//                   className="px-4 cursor-pointer py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                   aria-expanded={hoveredMenu === "about"}
//                 >
//                   About
//                 </button>
//               </div>
//             </Link>

//             <div
//               onMouseEnter={() => handleButtonEnter("projects")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <Link href={"/portfolio"}>
//               <button
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                 aria-expanded={hoveredMenu === "projects"}
//               >
//                 Portfolio
//               </button>
//               </Link>
//             </div>

//             <div
//               onMouseEnter={() => handleButtonEnter("services")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <Link href={"/services"}>
//               <button
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                 aria-expanded={hoveredMenu === "services"}
//               >
//                 Services
//               </button>
//               </Link>
//             </div>

//             <a
//               href="#contact"
//               className="inline-flex items-center px-4 py-2 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Mobile trigger */}
//           <button
//             className="md:hidden p-3 rounded-full  shadow-sm hover:bg-gray-100 transition-all duration-300"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//           >
//             <FiMenu className="h-6 w-6 text-gray-700" />
//           </button>
//         </nav>
//       </header>

//       {/* Desktop Overlay */}
//       <AnimatePresence>
//         {hoveredMenu && (
//           <Portal>
//             <motion.div
//               key="desktop-overlay"
//               className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
//               style={{ top: `${navHeight}px` }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               aria-hidden="true"
//               onClick={() => setHoveredMenu(null)}
//               onMouseEnter={() => setHoveredMenu(null)}
//             />
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* About Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "about" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-1 gap-4">
//                 {aboutItems.map((a) => (
//                   <a
//                     key={a.label}
//                     href={a.href}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 group"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <a.icon className="h-6 w-6 text-[#f2ad08]" />
//                     <div>
//                       <p className="font-semibold text-gray-900">{a.label}</p>
//                       <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Projects Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "projects" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 {projects.map((p) => (
//                   <a
//                     key={p.label}
//                     href={p.href}
//                     className="p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <p className="font-semibold text-gray-900">{p.label}</p>
//                     <p className="text-sm text-gray-600 mt-1">Discover our {p.label.toLowerCase()}</p>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Services Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20 overflow-y-auto"
//               style={{ top: `${navHeight}px`, maxHeight: `calc(100vh - ${navHeight}px)` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {services.map((s) => (
//                   <a
//                     key={s.title}
//                     href={s.href}
//                     className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                         <s.icon className="h-6 w-6 text-[#f2ad08]" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">{s.title}</p>
//                         <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {open && (
//           <Portal>
//             <>
//               <motion.div
//                 className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => setOpen(false)}
//                 aria-hidden="true"
//               />

//               <motion.aside
//                 className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#f2ad08]/70 scrollbar-track-gray-100"
//                 initial={{ x: "100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: "100%", opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 role="dialog"
//                 aria-modal="true"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
//                     <span className="text-lg font-bold text-gray-900">VersaNex</span>
//                   </div>
//                   <button
//                     className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
//                     onClick={() => setOpen(false)}
//                     aria-label="Close menu"
//                   >
//                     <FiX className="h-6 w-6 text-gray-700" />
//                   </button>
//                 </div>

//                 <ul className="mt-8 space-y-4">
//                   <li>
//                     <Link
//                       href="/"
//                       onClick={() => setOpen(false)}
//                       className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Home</span>
//                     </Link>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("about")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">About</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "about" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "about" && (
//                         <motion.div
//                           key="about"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {aboutItems.map((a) => (
//                               <a
//                                 key={a.label}
//                                 href={a.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <a.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 <span className="text-gray-900 font-medium">{a.label}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("projects")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Portfoio</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "projects" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "projects" && (
//                         <motion.div
//                           key="projects"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {projects.map((p) => (
//                               <a
//                                 key={p.label}
//                                 href={p.href}
//                                 onClick={() => setOpen(false)}
//                                 className="block p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <span className="text-gray-900 font-medium">{p.label}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("services")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Services</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "services" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "services" && (
//                         <motion.div
//                           key="services"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {services.map((s) => (
//                               <a
//                                 key={s.title}
//                                 href={s.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                                   <s.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 </div>
//                                 <div>
//                                   <p className="font-semibold text-gray-900">{s.title}</p>
//                                   <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                                 </div>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <a
//                       href="#contact"
//                       onClick={() => setOpen(false)}
//                       className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>

//                 <p className="mt-8 text-xs text-gray-500">
//                   © {new Date().getFullYear()} VersaNex. All rights reserved.
//                 </p>
//               </motion.aside>
//             </>
//           </Portal>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }















// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import ReactDOM from "react-dom"
// import {
//   FiMenu,
//   FiX,
//   FiCode,
//   FiShoppingBag,
//   FiGlobe,
//   FiTrendingUp,
//   FiVideo,
//   FiImage,
//   FiCheckCircle,
//   FiEdit3,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "Custom web applications built with modern frameworks like Next.js and React — fast, scalable, and SEO-optimized.",
//     href: "/services",
//   },
//   {
//     icon: FiShoppingBag,
//     title: "Shopify Stores",
//     desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
//     href: "/services",
//   },
//   {
//     icon: FiGlobe,
//     title: "WordPress Websites",
//     desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
//     href: "/services",
//   },
//   {
//     icon: FiTrendingUp,
//     title: "Digital Marketing",
//     desc: "Data-driven digital marketing strategies that boost visibility, engagement, and sales.",
//     href: "/services",
//   },
//   {
//     icon: FiVideo,
//     title: "Video Editing",
//     desc: "Creative video editing with cinematic storytelling and brand-focused visuals.",
//     href: "/services",
//   },
//   {
//     icon: FiImage,
//     title: "Graphic Designing",
//     desc: "Professional and impactful designs — from branding to social media creatives.",
//     href: "/services",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Software Quality Assurance",
//     desc: "Comprehensive testing services ensuring flawless performance and reliability.",
//     href: "/services",
//   },
//   {
//     icon: FiEdit3,
//     title: "Content Writing",
//     desc: "Engaging, SEO-optimized content that connects with your audience and drives conversions.",
//     href: "/services",
//   },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "/about" },
//   { icon: FiUsers, label: "Team", href: "/about/ourteam" },
//   { icon: FiBriefcase, label: "Careers", href: "#contact" },
// ]

// function Portal({ children }) {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => {
//     setMounted(true)
//     return () => setMounted(false)
//   }, [])
//   if (!mounted) return null
//   return ReactDOM.createPortal(children, document.body)
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHoveringButton, setIsHoveringButton] = useState(false)
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false)
//   const [navHeight, setNavHeight] = useState(0)
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const navRef = useRef(null)
//   const hoverTimeout = useRef(null)

//   useEffect(() => {
//     setScrolled(window.scrollY > 8)
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   useEffect(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     const updateHeight = () => navRef.current && setNavHeight(navRef.current.clientHeight)
//     window.addEventListener("resize", updateHeight)
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [])

//   useEffect(() => {
//     const root = document.documentElement
//     if (open || hoveredMenu) {
//       root.style.overflowY = "auto"
//     } else {
//       root.style.overflowY = ""
//     }
//     return () => {
//       root.style.overflowY = ""
//     }
//   }, [open, hoveredMenu])

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
//   }

//   const hoverDelay = 150

//   const handleButtonEnter = (menu) => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringButton(true)
//     hoverTimeout.current = setTimeout(() => {
//       setHoveredMenu(menu)
//     }, hoverDelay)
//   }

//   const handleButtonLeave = () => {
//     setIsHoveringButton(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null)
//     }, hoverDelay)
//   }

//   const handleMenuEnter = () => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }

//   const handleMenuLeave = () => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, hoverDelay)
//   }

//   const toggleDropdown = (name) => setOpenDropdown((prev) => (prev === name ? null : name))

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
//           scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
//         }`}
//       >
//         <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//           <Link href="/" className="group flex items-center gap-1">
//             <Image
//               src="/logo.png"
//               height={40}
//               width={40}
//               alt="VersaNex Logo"
//               className="transition-transform duration-300"
//             />
//             <span className="lg:text-3xl text-2xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300">
//               VersaNex
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link href="/">
//               <button className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10">
//                 Home
//               </button>
//             </Link>


//  <Link href="/portfolio">
//               <button className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10">
//                 Portfolio
//               </button>
//             </Link>


//             <div
//               onMouseEnter={() => handleButtonEnter("about")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <Link href="/about">
//                 <button
//                   className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                   aria-expanded={hoveredMenu === "about"}
//                 >
//                   About
//                 </button>
//               </Link>
//             </div>

           

//             <div
//               onMouseEnter={() => handleButtonEnter("services")}
//               onMouseLeave={handleButtonLeave}
//             >
//               <Link href="/services">
//                 <button
//                   className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                   aria-expanded={hoveredMenu === "services"}
//                 >
//                   Services
//                 </button>
//               </Link>
//             </div>

//             <a
//               href="#contact"
//               className="inline-flex items-center px-4 py-2 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Mobile trigger */}
//           <button
//             className="md:hidden p-3 rounded-full shadow-sm hover:bg-gray-100 transition-all duration-300"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//           >
//             <FiMenu className="h-6 w-6 text-gray-700" />
//           </button>
//         </nav>
//       </header>

//       {/* Desktop Overlay */}
//       <AnimatePresence>
//         {hoveredMenu && (
//           <Portal>
//             <motion.div
//               key="desktop-overlay"
//               className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
//               style={{ top: `${navHeight}px` }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               aria-hidden="true"
//               onClick={() => setHoveredMenu(null)}
//               onMouseEnter={() => setHoveredMenu(null)}
//             />
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* About Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "about" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-1 gap-4">
//                 {aboutItems.map((a) => (
//                   <a
//                     key={a.label}
//                     href={a.href}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 group"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <a.icon className="h-6 w-6 text-[#f2ad08]" />
//                     <div>
//                       <p className="font-semibold text-gray-900">{a.label}</p>
//                       <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Services Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20 overflow-y-auto"
//               style={{ top: `${navHeight}px`, maxHeight: `calc(100vh - ${navHeight}px)` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {services.map((s) => (
//                   <a
//                     key={s.title}
//                     href={s.href}
//                     className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                         <s.icon className="h-6 w-6 text-[#f2ad08]" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">{s.title}</p>
//                         <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {open && (
//           <Portal>
//             <>
//               <motion.div
//                 className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => setOpen(false)}
//                 aria-hidden="true"
//               />

//               <motion.aside
//                 className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#f2ad08]/70 scrollbar-track-gray-100"
//                 initial={{ x: "100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: "100%", opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 role="dialog"
//                 aria-modal="true"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
//                     <span className="text-lg font-bold text-gray-900">VersaNex</span>
//                   </div>
//                   <button
//                     className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
//                     onClick={() => setOpen(false)}
//                     aria-label="Close menu"
//                   >
//                     <FiX className="h-6 w-6 text-gray-700" />
//                   </button>
//                 </div>

//                 <ul className="mt-8 space-y-4">
//                   <li>
//                     <Link
//                       href="/"
//                       onClick={() => setOpen(false)}
//                       className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Home</span>
//                     </Link>
//                   </li>


//                      <li>
//                     <Link
//                       href="/portfolio"
//                       onClick={() => setOpen(false)}
//                       className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Portfolio</span>
//                     </Link>
//                   </li>


//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("about")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">About</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "about" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "about" && (
//                         <motion.div
//                           key="about"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {aboutItems.map((a) => (
//                               <a
//                                 key={a.label}
//                                 href={a.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <a.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 <span className="text-gray-900 font-medium">{a.label}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

               
//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("services")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Services</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "services" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "services" && (
//                         <motion.div
//                           key="services"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {services.map((s) => (
//                               <a
//                                 key={s.title}
//                                 href={s.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <div className="p-2 bg-[#f2ad08]/10 rounded-lg">
//                                   <s.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 </div>
//                                 <span className="font-semibold text-gray-900">{s.title}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <a
//                       href="#contact"
//                       onClick={() => setOpen(false)}
//                       className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>

//                 <p className="mt-8 text-xs text-gray-500">
//                   © {new Date().getFullYear()} VersaNex. All rights reserved.
//                 </p>
//               </motion.aside>
//             </>
//           </Portal>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }












// "use client"
// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import ReactDOM from "react-dom"
// import {
//   FiMenu,
//   FiX,
//   FiCode,
//   FiShoppingBag,
//   FiGlobe,
//   FiTrendingUp,
//   FiVideo,
//   FiImage,
//   FiCheckCircle,
//   FiEdit3,
//   FiInfo,
//   FiUsers,
//   FiBriefcase,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "Custom web applications built with modern frameworks like Next.js and React — fast, scalable, and SEO-optimized.",
//     href: "/services",
//   },
//   {
//     icon: FiShoppingBag,
//     title: "Shopify Stores",
//     desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
//     href: "/services",
//   },
//   {
//     icon: FiGlobe,
//     title: "WordPress Websites",
//     desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
//     href: "/services",
//   },
//   {
//     icon: FiTrendingUp,
//     title: "Digital Marketing",
//     desc: "Data-driven digital marketing strategies that boost visibility, engagement, and sales.",
//     href: "/services",
//   },
//   {
//     icon: FiVideo,
//     title: "Video Editing",
//     desc: "Creative video editing with cinematic storytelling and brand-focused visuals.",
//     href: "/services",
//   },
//   {
//     icon: FiImage,
//     title: "Graphic Designing",
//     desc: "Professional and impactful designs — from branding to social media creatives.",
//     href: "/services",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Software Quality Assurance",
//     desc: "Comprehensive testing services ensuring flawless performance and reliability.",
//     href: "/services",
//   },
//   {
//     icon: FiEdit3,
//     title: "Content Writing",
//     desc: "Engaging, SEO-optimized content that connects with your audience and drives conversions.",
//     href: "/services",
//   },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "/about" },
//   { icon: FiUsers, label: "Team", href: "/about/ourteam" },
//   { icon: FiBriefcase, label: "Careers", href: "/contact" },
// ]

// function Portal({ children }) {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => {
//     setMounted(true)
//     return () => setMounted(false)
//   }, [])
//   if (!mounted) return null
//   return ReactDOM.createPortal(children, document.body)
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHoveringButton, setIsHoveringButton] = useState(false)
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false)
//   const [navHeight, setNavHeight] = useState(0)
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const navRef = useRef(null)
//   const hoverTimeout = useRef(null)

//   useEffect(() => {
//     setScrolled(window.scrollY > 8)
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   useEffect(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     const updateHeight = () => {
//       if (navRef.current) setNavHeight(navRef.current.clientHeight)
//       // Close sidebar when switching to desktop view
//       if (window.innerWidth >= 768 && open) {
//         setOpen(false)
//         setOpenDropdown(null)
//       }
//     }
//     window.addEventListener("resize", updateHeight)
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [open])

//   useEffect(() => {
//     const root = document.documentElement
//     if (open) {
//       root.style.overflowY = "hidden"
//       root.style.position = "fixed"
//       root.style.width = "100%"
//     } else {
//       root.style.overflowY = ""
//       root.style.position = ""
//       root.style.width = ""
//     }
//     return () => {
//       root.style.overflowY = ""
//       root.style.position = ""
//       root.style.width = ""
//     }
//   }, [open])

//   useEffect(() => {
//     const root = document.documentElement
//     if (hoveredMenu) {
//       root.style.overflowY = "auto"
//     } else {
//       root.style.overflowY = ""
//     }
//     return () => {
//       root.style.overflowY = ""
//     }
//   }, [hoveredMenu])

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
//   }

//   const underlineVariants = {
//     hidden: { width: "0%", left: "50%" },
//     visible: { width: "100%", left: "0%", transition: { duration: 0.3, ease: "easeInOut" } },
//   }

//   const hoverDelay = 150

//   const handleButtonEnter = (menu) => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringButton(true)
//     hoverTimeout.current = setTimeout(() => {
//       setHoveredMenu(menu)
//     }, hoverDelay)
//   }

//   const handleButtonLeave = () => {
//     setIsHoveringButton(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null)
//     }, hoverDelay)
//   }

//   const handleMenuEnter = () => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }

//   const handleMenuLeave = () => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, hoverDelay)
//   }

//   const toggleDropdown = (name) => setOpenDropdown((prev) => (prev === name ? null : name))

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
//           scrolled ? "bg-white/80 backdrop-blur-xl shadow-xl" : "bg-transparent"
//         }`}
//       >
//         <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
//           <Link href="/" className="group flex items-center gap-1">
//             <Image
//               src="/logo.png"
//               height={40}
//               width={40}
//               alt="VersaNex Logo"
//               className="transition-transform duration-300"
//             />
//             <span className="lg:text-3xl text-2xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300">
//               VersaNex
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <div className="relative">
//               <Link href="/">
//                 <button className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10">
//                   Home
//                   <motion.div
//                     className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
//                     variants={underlineVariants}
//                     initial="hidden"
//                     whileHover="visible"
//                   />
//                 </button>
//               </Link>
//             </div>



//             <div className="relative">
//               <Link href="/portfolio">
//                 <button className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10">
//                   Portfolio
//                   <motion.div
//                     className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
//                     variants={underlineVariants}
//                     initial="hidden"
//                     whileHover="visible"
//                   />
//                 </button>
//               </Link>
//             </div>


//             <div className="relative">
//               <Link href="/about">
//                 <button
//                   className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                   onMouseEnter={() => handleButtonEnter("about")}
//                   onMouseLeave={handleButtonLeave}
//                   aria-expanded={hoveredMenu === "about"}
//                 >
//                   About
//                   <motion.div
//                     className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
//                     variants={underlineVariants}
//                     initial="hidden"
//                     whileHover="visible"
//                   />
//                 </button>
//               </Link>
//             </div>


//             <div className="relative">
//               <Link href="/services">
//                 <button
//                   className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10"
//                   onMouseEnter={() => handleButtonEnter("services")}
//                   onMouseLeave={handleButtonLeave}
//                   aria-expanded={hoveredMenu === "services"}
//                 >
//                   Services
//                   <motion.div
//                     className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
//                     variants={underlineVariants}
//                     initial="hidden"
//                     whileHover="visible"
//                   />
//                 </button>
//               </Link>
//             </div>

//             <div className="relative">
//               <a
//                 href="/contact"
//                 className="inline-flex items-center px-4 py-2 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//               >
//                 Contact
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-white"
//                   variants={underlineVariants}
//                   initial="hidden"
//                   whileHover="visible"
//                 />
//               </a>
//             </div>
//           </div>

//           {/* Mobile trigger */}
//           <button
//             className="md:hidden p-3 rounded-full shadow-sm hover:bg-gray-100 transition-all duration-300"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//           >
//             <FiMenu className="h-6 w-6 text-gray-700" />
//           </button>
//         </nav>
//       </header>

//       {/* Desktop Overlay */}
//       <AnimatePresence>
//         {hoveredMenu && (
//           <Portal>
//             <motion.div
//               key="desktop-overlay"
//               className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
//               style={{ top: `${navHeight}px` }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               aria-hidden="true"
//               onClick={() => setHoveredMenu(null)}
//               onMouseEnter={() => setHoveredMenu(null)}
//             />
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* About Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "about" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
//               style={{ top: `${navHeight}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-1 gap-4">
//                 {aboutItems.map((a) => (
//                   <a
//                     key={a.label}
//                     href={a.href}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 group"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <a.icon className="h-6 w-6 text-[#f2ad08]" />
//                     <div>
//                       <p className="font-semibold text-gray-900">{a.label}</p>
//                       <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Services Mega Menu */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20 overflow-y-auto"
//               style={{ top: `${navHeight}px`, maxHeight: `calc(100vh - ${navHeight}px)` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {services.map((s) => (
//                   <a
//                     key={s.title}
//                     href={s.href}
//                     className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1"
//                     onClick={() => setHoveredMenu(null)}
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                         <s.icon className="h-6 w-6 text-[#f2ad08]" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">{s.title}</p>
//                         <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {open && (
//           <Portal>
//             <>
//               <motion.div
//                 className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => setOpen(false)}
//                 aria-hidden="true"
//               />

//               <motion.aside
//                 className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#f2ad08]/70 scrollbar-track-gray-100"
//                 initial={{ x: "100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: "100%", opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 role="dialog"
//                 aria-modal="true"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
//                     <span className="text-lg font-bold text-gray-900">VersaNex</span>
//                   </div>
//                   <button
//                     className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
//                     onClick={() => setOpen(false)}
//                     aria-label="Close menu"
//                   >
//                     <FiX className="h-6 w-6 text-gray-700" />
//                   </button>
//                 </div>

//                 <ul className="mt-8 space-y-4">
//                   <li>
//                     <Link
//                       href="/"
//                       onClick={() => setOpen(false)}
//                       className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Home</span>
//                     </Link>
//                   </li>

//                   <li>
//                     <Link
//                       href="/portfolio"
//                       onClick={() => setOpen(false)}
//                       className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Portfolio</span>
//                     </Link>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("about")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">About</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "about" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "about" && (
//                         <motion.div
//                           key="about"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {aboutItems.map((a) => (
//                               <a
//                                 key={a.label}
//                                 href={a.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <a.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 <span className="text-gray-900 font-medium">{a.label}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <button
//                       onClick={() => toggleDropdown("services")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                     >
//                       <span className="font-semibold text-gray-900">Services</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "services" ? "rotate-180" : ""
//                         }`}
//                       >
//                         ▾
//                       </span>
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "services" && (
//                         <motion.div
//                           key="services"
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: "easeInOut" }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {services.map((s) => (
//                               <a
//                                 key={s.title}
//                                 href={s.href}
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <div className="p-2 bg-[#f2ad08]/10 rounded-lg">
//                                   <s.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 </div>
//                                 <span className="font-semibold text-gray-900">{s.title}</span>
//                               </a>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </li>

//                   <li>
//                     <a
//                       href="/contact"
//                       onClick={() => setOpen(false)}
//                       className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>

//                 <p className="mt-8 text-xs text-gray-500">
//                   © {new Date().getFullYear()} VersaNex. All rights reserved.
//                 </p>
//               </motion.aside>
//             </>
//           </Portal>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }















"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import ReactDOM from "react-dom"
import {
  FiMenu,
  FiX,
  FiCode,
  FiShoppingBag,
  FiGlobe,
  FiTrendingUp,
  FiVideo,
  FiImage,
  FiCheckCircle,
  FiEdit3,
  FiInfo,
  FiUsers,
  FiBriefcase,
} from "react-icons/fi"

const services = [
  {
    icon: FiCode,
    title: "Web Apps",
    desc: "Custom web applications built with modern frameworks like Next.js and React — fast, scalable, and SEO-optimized.",
    href: "/services/web-apps",
  },
  {
    icon: FiShoppingBag,
    title: "Shopify Stores",
    desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
    href: "/services/shopify-stores",
  },
  {
    icon: FiGlobe,
    title: "WordPress Websites",
    desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
    href: "/services/wordpress-websites",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    desc: "Data-driven digital marketing strategies that boost visibility, engagement, and sales.",
    href: "/services/digital-marketing",
  },
  {
    icon: FiVideo,
    title: "Video Editing",
    desc: "Creative video editing with cinematic storytelling and brand-focused visuals.",
    href: "/services/video-editing",
  },
  {
    icon: FiImage,
    title: "Graphic Designing",
    desc: "Professional and impactful designs — from branding to social media creatives.",
    href: "/services/graphic-designing",
  },
  {
    icon: FiCheckCircle,
    title: "Software Quality Assurance",
    desc: "Comprehensive testing services ensuring flawless performance and reliability.",
    href: "/services/quality-assurance",
  },
  {
    icon: FiEdit3,
    title: "Content Writing",
    desc: "Engaging, SEO-optimized content that connects with your audience and drives conversions.",
    href: "/services/content-writing",
  },
]

const aboutItems = [
  { icon: FiInfo, label: "Who We Are", href: "/about" },
  { icon: FiUsers, label: "Team", href: "/about/ourteam" },
{ icon: FiBriefcase, label: "Get in Touch", href: "/contact" },

]

function Portal({ children }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])
  if (!mounted) return null
  return ReactDOM.createPortal(children, document.body)
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [isHoveringButton, setIsHoveringButton] = useState(false)
  const [isHoveringMenu, setIsHoveringMenu] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)
  const hoverTimeout = useRef(null)

  useEffect(() => {
    setScrolled(window.scrollY > 8)
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const updateHeight = useCallback(() => {
    if (navRef.current) setNavHeight(navRef.current.clientHeight)
    if (window.innerWidth >= 768 && open) {
      setOpen(false)
      setOpenDropdown(null)
    }
  }, [open])

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.clientHeight)
    window.addEventListener("resize", updateHeight, { passive: true })
    return () => window.removeEventListener("resize", updateHeight)
  }, [updateHeight])

  // useEffect(() => {
  //   const root = document.documentElement
  //   if (open) {
  //     root.style.overflowY = "hidden"
  //     root.style.position = "fixed"
  //     root.style.width = "100%"
  //   } else {
  //     root.style.overflowY = ""
  //     root.style.position = ""
  //     root.style.width = ""
  //   }
  //   return () => {
  //     root.style.overflowY = ""
  //     root.style.position = ""
  //     root.style.width = ""
  //   }
  // }, [open])




  useEffect(() => {
  const root = document.documentElement
  let scrollY = 0

  if (open) {
    // Save scroll position
    scrollY = window.scrollY
    root.dataset.scrollY = scrollY
    root.style.position = "fixed"
    root.style.top = `-${scrollY}px`
    root.style.left = "0"
    root.style.right = "0"
    root.style.width = "100%"
    root.style.overflowY = "hidden"
  } else {
    // Restore scroll position
    const y = parseInt(root.dataset.scrollY || "0", 10)
    root.style.position = ""
    root.style.top = ""
    root.style.left = ""
    root.style.right = ""
    root.style.width = ""
    root.style.overflowY = ""
    window.scrollTo({ top: y, behavior: "instant" })
  }
}, [open])


  useEffect(() => {
    const root = document.documentElement
    if (hoveredMenu) {
      root.style.overflowY = "auto"
    } else {
      root.style.overflowY = ""
    }
    return () => {
      root.style.overflowY = ""
    }
  }, [hoveredMenu])

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
  }

  const underlineVariants = {
    hidden: { width: "0%", left: "50%" },
    visible: { width: "100%", left: "0%", transition: { duration: 0.3, ease: "easeInOut" } },
  }

  const hoverDelay = 150

  const handleButtonEnter = useCallback((menu) => {
    clearTimeout(hoverTimeout.current)
    setIsHoveringButton(true)
    hoverTimeout.current = setTimeout(() => {
      setHoveredMenu(menu)
    }, hoverDelay)
  }, [])

  const handleButtonLeave = useCallback(() => {
    setIsHoveringButton(false)
    hoverTimeout.current = setTimeout(() => {
      if (!isHoveringMenu) setHoveredMenu(null)
    }, hoverDelay)
  }, [isHoveringMenu])

  const handleMenuEnter = useCallback(() => {
    clearTimeout(hoverTimeout.current)
    setIsHoveringMenu(true)
  }, [])

  const handleMenuLeave = useCallback(() => {
    setIsHoveringMenu(false)
    hoverTimeout.current = setTimeout(() => {
      if (!isHoveringButton) setHoveredMenu(null)
    }, hoverDelay)
  }, [isHoveringButton])

  const toggleDropdown = useCallback((name) => {
    setOpenDropdown((prev) => (prev === name ? null : name))
  }, [])

  const handleMobileClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-xl" : "bg-transparent"
        }`}
      >
        <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="group flex items-center gap-1">
            <Image
              src="/logo.png"
              height={40}
              width={40}
              alt="VersaNex Logo"
              className="transition-transform duration-300"
              priority
            />
            <span className="lg:text-3xl text-2xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300">
              VersaNex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 relative flex items-center"
              >
                Home
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
                  variants={underlineVariants}
                  initial="hidden"
                  whileHover="visible"
                />
              </Link>
            </div>

            <div className="relative">
              <Link
                href="/portfolio"
                className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 relative flex items-center"
              >
                Portfolio
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
                  variants={underlineVariants}
                  initial="hidden"
                  whileHover="visible"
                />
              </Link>
            </div>

            <div className="relative">
              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 relative flex items-center"
                onMouseEnter={() => handleButtonEnter("about")}
                onMouseLeave={handleButtonLeave}
                aria-expanded={hoveredMenu === "about"}
                aria-haspopup="menu"
              >
                About
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
                  variants={underlineVariants}
                  initial="hidden"
                  whileHover="visible"
                />
              </Link>
            </div>

            <div className="relative">
              <Link
                href="/services"
                className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 relative flex items-center"
                onMouseEnter={() => handleButtonEnter("services")}
                onMouseLeave={handleButtonLeave}
                aria-expanded={hoveredMenu === "services"}
                aria-haspopup="menu"
              >
                Services
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
                  variants={underlineVariants}
                  initial="hidden"
                  whileHover="visible"
                />
              </Link>
            </div>

            <div className="relative">
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300 relative"
              >
                Contact
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-white"
                  variants={underlineVariants}
                  initial="hidden"
                  whileHover="visible"
                />
              </Link>
            </div>
          </div>

          {/* Mobile trigger */}
          <button
            className="md:hidden p-3 rounded-full shadow-sm hover:bg-gray-100 transition-all duration-300"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <FiMenu className="h-6 w-6 text-gray-700" />
          </button>
        </nav>
      </header>

      {/* Desktop Overlay */}
      <AnimatePresence>
        {hoveredMenu && (
          <Portal>
            <motion.div
              key="desktop-overlay"
              className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
              style={{ top: `${navHeight}px` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
              onClick={() => setHoveredMenu(null)}
              onMouseEnter={() => setHoveredMenu(null)}
            />
          </Portal>
        )}
      </AnimatePresence>

      {/* About Mega Menu */}
      <AnimatePresence>
        {hoveredMenu === "about" && (
          <Portal>
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[90vw] max-w-4xl z-50 border border-[#f2ad08]/20"
              style={{ top: `${navHeight}px` }}
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
              role="menu"
              aria-label="About menu"
            >
              <div className="grid grid-cols-1 gap-4">
                {aboutItems.map((a) => (
                  <Link
                    key={a.label}
                    href={a.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 group"
                    onClick={() => setHoveredMenu(null)}
                    role="menuitem"
                  >
                    <a.icon className="h-6 w-6 text-[#f2ad08]" />
                    <div>
                      <p className="font-semibold text-gray-900">{a.label}</p>
                      <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>

      {/* Services Mega Menu */}
      <AnimatePresence>
        {hoveredMenu === "services" && (
          <Portal>
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90vw] max-w-5xl z-50 border border-[#f2ad08]/20 overflow-y-auto"
              style={{ top: `${navHeight}px`, maxHeight: `calc(100vh - ${navHeight}px)` }}
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
              role="menu"
              aria-label="Services menu"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((s) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1"
                    onClick={() => setHoveredMenu(null)}
                    role="menuitem"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
                        <s.icon className="h-6 w-6 text-[#f2ad08]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{s.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <Portal>
            <>
              <motion.div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handleMobileClose}
                aria-hidden="true"
              />

              <motion.aside
                className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#f2ad08]/70 scrollbar-track-gray-100"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
                id="mobile-menu"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
                    <span id="mobile-menu-title" className="text-lg font-bold text-gray-900">VersaNex</span>
                  </div>
                  <button
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
                    onClick={handleMobileClose}
                    aria-label="Close menu"
                  >
                    <FiX className="h-6 w-6 text-gray-700" />
                  </button>
                </div>

                <nav className="mt-8 space-y-4">
                  <Link
                    href="/"
                    onClick={handleMobileClose}
                    className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
                  >
                    <span className="font-semibold text-gray-900">Home</span>
                  </Link>

                  <Link
                    href="/portfolio"
                    onClick={handleMobileClose}
                    className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
                  >
                    <span className="font-semibold text-gray-900">Portfolio</span>
                  </Link>

                  <div>
                    <button
                      onClick={() => toggleDropdown("about")}
                      className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
                      aria-expanded={openDropdown === "about"}
                      aria-controls="about-submenu"
                    >
                      <span className="font-semibold text-gray-900">About</span>
                      <span
                        className={`text-[#f2ad08] transform transition-transform duration-300 ${
                          openDropdown === "about" ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === "about" && (
                        <motion.div
                          key="about"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="pl-4 overflow-hidden"
                          id="about-submenu"
                          role="region"
                        >
                          <div className="mt-3 space-y-3">
                            {aboutItems.map((a) => (
                              <Link
                                key={a.label}
                                href={a.href}
                                onClick={handleMobileClose}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
                              >
                                <a.icon className="h-5 w-5 text-[#f2ad08]" />
                                <span className="text-gray-900 font-medium">{a.label}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <button
                      onClick={() => toggleDropdown("services")}
                      className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
                      aria-expanded={openDropdown === "services"}
                      aria-controls="services-submenu"
                    >
                      <span className="font-semibold text-gray-900">Services</span>
                      <span
                        className={`text-[#f2ad08] transform transition-transform duration-300 ${
                          openDropdown === "services" ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === "services" && (
                        <motion.div
                          key="services"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="pl-4 overflow-hidden"
                          id="services-submenu"
                          role="region"
                        >
                          <div className="mt-3 space-y-3">
                            {services.map((s) => (
                              <Link
                                key={s.title}
                                href={s.href}
                                onClick={handleMobileClose}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
                              >
                                <div className="p-2 bg-[#f2ad08]/10 rounded-lg">
                                  <s.icon className="h-5 w-5 text-[#f2ad08]" />
                                </div>
                                <span className="font-semibold text-gray-900">{s.title}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/contact"
                    onClick={handleMobileClose}
                    className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
                  >
                    Contact
                  </Link>
                </nav>

                <p className="mt-8 text-xs text-gray-500">
                  © {new Date().getFullYear()} VersaNex. All rights reserved.
                </p>
              </motion.aside>
            </>
          </Portal>
        )}
      </AnimatePresence>
    </>
  )
}