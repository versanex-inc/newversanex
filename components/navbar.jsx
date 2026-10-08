
// "use client"
// import { useState, useEffect, useRef, useCallback } from "react"
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
//     desc: "Custom web applications built with modern frameworks like Next.js and React â€” fast, scalable, and SEO-optimized.",
//     href: "/services/web-apps",
//   },
//   {
//     icon: FiShoppingBag,
//     title: "Shopify Stores",
//     desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
//     href: "/services/shopify-stores",
//   },
//   {
//     icon: FiGlobe,
//     title: "WordPress Websites",
//     desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
//     href: "/services/wordpress-websites",
//   },
//   // {
//   //   icon: FiTrendingUp,
//   //   title: "Digital Marketing",
//   //   desc: "Data-driven digital marketing strategies that boost visibility, engagement, and sales.",
//   //   href: "/services/digital-marketing",
//   // },
//   // {
//   //   icon: FiVideo,
//   //   title: "Video Editing",
//   //   desc: "Creative video editing with cinematic storytelling and brand-focused visuals.",
//   //   href: "/services/video-editing",
//   // },
//   // {
//   //   icon: FiImage,
//   //   title: "Graphic Designing",
//   //   desc: "Professional and impactful designs â€” from branding to social media creatives.",
//   //   href: "/services/graphic-designing",
//   // },
//   {
//     icon: FiCheckCircle,
//     title: "Software Quality Assurance",
//     desc: "Comprehensive testing services ensuring flawless performance and reliability.",
//     href: "/services/quality-assurance",
//   },
//   // {
//   //   icon: FiEdit3,
//   //   title: "Content Writing",
//   //   desc: "Engaging, SEO-optimized content that connects with your audience and drives conversions.",
//   //   href: "/services/content-writing",
//   // },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "/about" },
//   // { icon: FiUsers, label: "Team", href: "/about/ourteam" },
// { icon: FiBriefcase, label: "Get in Touch", href: "/contact" },

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
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   const updateHeight = useCallback(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     if (window.innerWidth >= 768 && open) {
//       setOpen(false)
//       setOpenDropdown(null)
//     }
//   }, [open])

//   useEffect(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     window.addEventListener("resize", updateHeight, { passive: true })
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [updateHeight])

//   // useEffect(() => {
//   //   const root = document.documentElement
//   //   if (open) {
//   //     root.style.overflowY = "hidden"
//   //     root.style.position = "fixed"
//   //     root.style.width = "100%"
//   //   } else {
//   //     root.style.overflowY = ""
//   //     root.style.position = ""
//   //     root.style.width = ""
//   //   }
//   //   return () => {
//   //     root.style.overflowY = ""
//   //     root.style.position = ""
//   //     root.style.width = ""
//   //   }
//   // }, [open])




//   useEffect(() => {
//   const root = document.documentElement
//   let scrollY = 0

//   if (open) {
//     // Save scroll position
//     scrollY = window.scrollY
//     root.dataset.scrollY = scrollY
//     root.style.position = "fixed"
//     root.style.top = `-${scrollY}px`
//     root.style.left = "0"
//     root.style.right = "0"
//     root.style.width = "100%"
//     root.style.overflowY = "hidden"
//   } else {
//     // Restore scroll position
//     const y = parseInt(root.dataset.scrollY || "0", 10)
//     root.style.position = ""
//     root.style.top = ""
//     root.style.left = ""
//     root.style.right = ""
//     root.style.width = ""
//     root.style.overflowY = ""
//     window.scrollTo({ top: y, behavior: "instant" })
//   }
// }, [open])


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

//   const handleButtonEnter = useCallback((menu) => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringButton(true)
//     hoverTimeout.current = setTimeout(() => {
//       setHoveredMenu(menu)
//     }, hoverDelay)
//   }, [])

//   const handleButtonLeave = useCallback(() => {
//     setIsHoveringButton(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null)
//     }, hoverDelay)
//   }, [isHoveringMenu])

//   const handleMenuEnter = useCallback(() => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }, [])

//   const handleMenuLeave = useCallback(() => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, hoverDelay)
//   }, [isHoveringButton])

//   const toggleDropdown = useCallback((name) => {
//     setOpenDropdown((prev) => (prev === name ? null : name))
//   }, [])

//   const handleMobileClose = useCallback(() => {
//     setOpen(false)
//   }, [])

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
//               priority
//             />
//             <span className="lg:text-3xl text-2xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300">
//               <Image
//                 src={"/brandname.png"}
//                 height={130}
//                 width={130}
//                 alt="Brand Name"
//                 priority
//               />
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <div className="relative">
//               <Link
//                 href="/"
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 relative flex items-center"
//               >
//                 Home
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
//                   variants={underlineVariants}
//                   initial="hidden"
//                   whileHover="visible"
//                 />
//               </Link>
//             </div>

//             <div className="relative">
//               <Link
//                 href="/projects"
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 relative flex items-center"
//               >
//                 Projects
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
//                   variants={underlineVariants}
//                   initial="hidden"
//                   whileHover="visible"
//                 />
//               </Link>
//             </div>

//             <div className="relative">
//               <Link
//                 href="/about"
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 relative flex items-center"
//                 onMouseEnter={() => handleButtonEnter("about")}
//                 onMouseLeave={handleButtonLeave}
//                 aria-expanded={hoveredMenu === "about"}
//                 aria-haspopup="menu"
//               >
//                 About
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
//                   variants={underlineVariants}
//                   initial="hidden"
//                   whileHover="visible"
//                 />
//               </Link>
//             </div>

//             <div className="relative">
//               <Link
//                 href="/services"
//                 className="px-4 py-2 text-gray-700 hover:text-[#f2ad08] font-semibold text-sm rounded-full transition-all duration-300 hover:bg-[#f2ad08]/10 relative flex items-center"
//                 onMouseEnter={() => handleButtonEnter("services")}
//                 onMouseLeave={handleButtonLeave}
//                 aria-expanded={hoveredMenu === "services"}
//                 aria-haspopup="menu"
//               >
//                 Services
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-[#f2ad08]"
//                   variants={underlineVariants}
//                   initial="hidden"
//                   whileHover="visible"
//                 />
//               </Link>
//             </div>

//             <div className="relative">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center px-4 py-2 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300 relative"
//               >
//                 Contact
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-white"
//                   variants={underlineVariants}
//                   initial="hidden"
//                   whileHover="visible"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Mobile trigger */}
//           <button
//             className="md:hidden p-3 rounded-full shadow-sm hover:bg-gray-100 transition-all duration-300"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//             aria-expanded={open}
//             aria-controls="mobile-menu"
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
//               role="menu"
//               aria-label="About menu"
//             >
//               <div className="grid grid-cols-1 gap-4">
//                 {aboutItems.map((a) => (
//                   <Link
//                     key={a.label}
//                     href={a.href}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 group"
//                     onClick={() => setHoveredMenu(null)}
//                     role="menuitem"
//                   >
//                     <a.icon className="h-6 w-6 text-[#f2ad08]" />
//                     <div>
//                       <p className="font-semibold text-gray-900">{a.label}</p>
//                       <p className="text-sm text-gray-600 mt-1">Explore our {a.label.toLowerCase()}</p>
//                     </div>
//                   </Link>
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
//               role="menu"
//               aria-label="Services menu"
//             >
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {services.map((s) => (
//                   <Link
//                     key={s.title}
//                     href={s.href}
//                     className="group p-5 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300 hover:-translate-y-1"
//                     onClick={() => setHoveredMenu(null)}
//                     role="menuitem"
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
//                   </Link>
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
//                 onClick={handleMobileClose}
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
//                 aria-labelledby="mobile-menu-title"
//                 id="mobile-menu"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#f2ad08] to-[#d88f07] shadow-lg" />
//                     <span id="mobile-menu-title" className="text-lg font-bold text-gray-900">VersaNex</span>
//                   </div>
//                   <button
//                     className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300"
//                     onClick={handleMobileClose}
//                     aria-label="Close menu"
//                   >
//                     <FiX className="h-6 w-6 text-gray-700" />
//                   </button>
//                 </div>

//                 <nav className="mt-8 space-y-4">
//                   <Link
//                     href="/"
//                     onClick={handleMobileClose}
//                     className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                   >
//                     <span className="font-semibold text-gray-900">Home</span>
//                   </Link>

//                   <Link
//                     href="/projects"
//                     onClick={handleMobileClose}
//                     className="block p-4 rounded-xl hover:bg-[#f2ad08]/10 transition-all duration-300"
//                   >
//                     <span className="font-semibold text-gray-900">Projects</span>
//                   </Link>

//                   <div>
//                     <button
//                       onClick={() => toggleDropdown("about")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                       aria-expanded={openDropdown === "about"}
//                       aria-controls="about-submenu"
//                     >
//                       <span className="font-semibold text-gray-900">About</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "about" ? "rotate-180" : ""
//                         }`}
//                       >
//                         â–¾
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
//                           id="about-submenu"
//                           role="region"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {aboutItems.map((a) => (
//                               <Link
//                                 key={a.label}
//                                 href={a.href}
//                                 onClick={handleMobileClose}
//                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <a.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 <span className="text-gray-900 font-medium">{a.label}</span>
//                               </Link>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>

//                   <div>
//                     <button
//                       onClick={() => toggleDropdown("services")}
//                       className="flex w-full items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-[#f2ad08]/10 cursor-pointer transition-all duration-300"
//                       aria-expanded={openDropdown === "services"}
//                       aria-controls="services-submenu"
//                     >
//                       <span className="font-semibold text-gray-900">Services</span>
//                       <span
//                         className={`text-[#f2ad08] transform transition-transform duration-300 ${
//                           openDropdown === "services" ? "rotate-180" : ""
//                         }`}
//                       >
//                         â–¾
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
//                           id="services-submenu"
//                           role="region"
//                         >
//                           <div className="mt-3 space-y-3">
//                             {services.map((s) => (
//                               <Link
//                                 key={s.title}
//                                 href={s.href}
//                                 onClick={handleMobileClose}
//                                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f2ad08]/10 transition-all duration-300"
//                               >
//                                 <div className="p-2 bg-[#f2ad08]/10 rounded-lg">
//                                   <s.icon className="h-5 w-5 text-[#f2ad08]" />
//                                 </div>
//                                 <span className="font-semibold text-gray-900">{s.title}</span>
//                               </Link>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>

//                   <Link
//                     href="/contact"
//                     onClick={handleMobileClose}
//                     className="block px-6 py-3 rounded-full bg-[#f2ad08] text-white font-semibold text-center shadow-lg hover:bg-[#d88f07] transition-all duration-300"
//                   >
//                     Contact
//                   </Link>
//                 </nav>

//                 <p className="mt-8 text-xs text-gray-500">
//                   Â© {new Date().getFullYear()} VersaNex. All rights reserved.
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
// import { useState, useEffect, useRef, useCallback } from "react"
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
//   FiCheckCircle,
//   FiInfo,
//   FiBriefcase,
//   FiChevronDown,
//   FiArrowUpRight,
//   FiFileText,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "Custom web applications built with modern frameworks like Next.js and React â€” fast, scalable, and SEO-optimized.",
//     href: "/services/web-apps",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiShoppingBag,
//     title: "Shopify Stores",
//     desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
//     href: "/services/shopify-stores",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiGlobe,
//     title: "WordPress Websites",
//     desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
//     href: "/services/wordpress-websites",
//     image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Software Quality Assurance",
//     desc: "Comprehensive testing services ensuring flawless performance and reliability.",
//     href: "/services/quality-assurance",
//     image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
//   },
// ]

// const caseStudies = [
//   {
//     icon: FiFileText,
//     title: "E-Commerce Scaling",
//     desc: "How we helped a brand double its conversion rate.",
//     href: "/case-studies/e-commerce",
//   },
//   {
//     icon: FiFileText,
//     title: "SaaS Optimization",
//     desc: "Performance and UI overhaul for a fast-growing platform.",
//     href: "/case-studies/saas-platform",
//   },
// ]

// const aboutItems = [
//   { icon: FiInfo, label: "Who We Are", href: "/about" },
//   { icon: FiBriefcase, label: "Get in Touch", href: "/contact" },
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

// export function ServicesMegaMenu({ services, setHoveredMenu }) {
//   const [hoveredIndex, setHoveredIndex] = useState(null)

//   return (
//     <div className="flex w-full gap-8 text-[#1b2b40] p-2">
//       {/* Left Column: Intro & Featured */}
//       <div className="w-1/3 flex flex-col justify-between bg-gray-50/50 rounded-2xl p-8 border border-gray-100/50">
//         <div>
//           <h3 className="text-2xl font-bold mb-3 tracking-tight">Products</h3>
//           <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
//             End-to-end digital solutions designed to help your brand grow, scale, and dominate the digital landscape.
//           </p>
//           <Link
//             href="/services"
//             onClick={() => setHoveredMenu(null)}
//             className="inline-flex items-center justify-center px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:border-gray-300 hover:shadow-sm transition-all"
//           >
//             Learn More
//           </Link>
//         </div>

//         <div className="mt-8 bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3 group hover:shadow-md transition-shadow cursor-pointer">
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-emerald-400" />
//             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">The Performance Tier</span>
//           </div>
//           <p className="text-sm font-medium text-gray-900 leading-snug">
//             The ultimate ecosystem for high-growth enterprises and ambitious brands.
//           </p>
//         </div>
//       </div>

//       {/* Right Column: Services Grid */}
//       <div className="w-2/3 py-6 pr-6">
//         <div className="flex items-center gap-4 mb-8">
//           <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Our Core Solutions</h4>
//           <div className="h-px bg-gray-100 flex-1" />
//         </div>
//         <div className="grid grid-cols-2 gap-x-6 gap-y-4 relative">
//           {services.map((s, idx) => {
//             const isActive = hoveredIndex === idx

//             return (
//               <Link
//                 key={s.title}
//                 href={s.href}
//                 onClick={() => setHoveredMenu(null)}
//                 onMouseEnter={() => setHoveredIndex(idx)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className={`group flex flex-col justify-end gap-3 p-5 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative ${
//                   isActive
//                     ? "scale-105 z-10 shadow-2xl -m-1"
//                     : hoveredIndex !== null
//                     ? "opacity-60 blur-[1px] m-0"
//                     : "hover:bg-gray-50 border border-transparent m-0"
//                 }`}
//                 style={isActive ? { minHeight: "180px" } : { minHeight: "140px" }}
//               >
//                 {/* Background Image Reveal (Only active on hover) */}
//                 <div
//                   className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700 ${
//                     isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
//                   }`}
//                 >
//                   <div
//                     className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 group-hover:scale-100"
//                     style={{ backgroundImage: `url(${s.image})` }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 flex gap-4 h-full">
//                   <div className="flex-shrink-0">
//                     <div className={`flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-500 ${
//                       isActive ? "bg-white/20 backdrop-blur-md text-white" : "bg-[#141b26]/5 text-[#1b2b40]"
//                     }`}>
//                       <s.icon className="w-5 h-5" />
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-center">
//                     <p className={`font-bold transition-colors duration-500 ${
//                       isActive ? "text-white" : "text-gray-900"
//                     }`}>{s.title}</p>
//                     <p className={`text-sm leading-relaxed mt-1.5 transition-colors duration-500 ${
//                       isActive ? "text-white/90" : "text-gray-500"
//                     }`}>{s.desc}</p>
//                   </div>
//                 </div>
//               </Link>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
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
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   const updateHeight = useCallback(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     if (window.innerWidth >= 768 && open) {
//       setOpen(false)
//       setOpenDropdown(null)
//     }
//   }, [open])

//   useEffect(() => {
//     if (navRef.current) setNavHeight(navRef.current.clientHeight)
//     window.addEventListener("resize", updateHeight, { passive: true })
//     return () => window.removeEventListener("resize", updateHeight)
//   }, [updateHeight])

//   useEffect(() => {
//     const root = document.documentElement
//     let scrollY = 0

//     if (open) {
//       scrollY = window.scrollY
//       root.dataset.scrollY = scrollY.toString()
//       root.style.position = "fixed"
//       root.style.top = `-${scrollY}px`
//       root.style.left = "0"
//       root.style.right = "0"
//       root.style.width = "100%"
//       root.style.overflowY = "hidden"
//     } else {
//       const y = parseInt(root.dataset.scrollY || "0", 10)
//       root.style.position = ""
//       root.style.top = ""
//       root.style.left = ""
//       root.style.right = ""
//       root.style.width = ""
//       root.style.overflowY = ""
//       window.scrollTo({ top: y, behavior: "instant" })
//     }
//   }, [open])

//   const menuVariants = {
//     hidden: { opacity: 0, y: -8, scale: 0.99 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
//     exit: { opacity: 0, y: -8, scale: 0.99, transition: { duration: 0.15 } },
//   }

//   const hoverDelay = 150

//   const handleButtonEnter = useCallback((menu) => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringButton(true)
//     hoverTimeout.current = setTimeout(() => {
//       setHoveredMenu(menu)
//     }, hoverDelay)
//   }, [])

//   const handleButtonLeave = useCallback(() => {
//     setIsHoveringButton(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null)
//     }, hoverDelay)
//   }, [isHoveringMenu])

//   const handleMenuEnter = useCallback(() => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }, [])

//   const handleMenuLeave = useCallback(() => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, hoverDelay)
//   }, [isHoveringButton])

//   const toggleDropdown = useCallback((name) => {
//     setOpenDropdown((prev) => (prev === name ? null : name))
//   }, [])

//   const handleMobileClose = useCallback(() => {
//     setOpen(false)
//   }, [])

//   return (
//     <>
//       <header
//         className={`relative z-50 w-full transition-all duration-300 ease-in-out border-b border-gray-200/60 ${
//           scrolled
//             ? "bg-[#f8f9fa]/95 backdrop-blur-xl shadow-sm"
//             : "bg-[#f8f9fa]"
//         }`}
//       >
//         <nav ref={navRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-4 font-sans">

//           {/* Logo */}
//           <Link href="/" className="group flex items-center">
//             <Image
//               src="/logo.png"
//               height={38}
//               width={38}
//               alt="Logo"
//               className="transition-transform duration-300 group-hover:scale-105"
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation Links matching the design image */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <Link
//               href="/"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//             >
//               Home
//             </Link>

//             <Link
//               href="/about"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//             >
//               About
//             </Link>

//             <div className="relative">
//               <Link
//                 href="/services"
//                 className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200 flex items-center gap-1.5 py-1"
//                 onMouseEnter={() => handleButtonEnter("services")}
//                 onMouseLeave={handleButtonLeave}
//                 aria-expanded={hoveredMenu === "services"}
//                 aria-haspopup="menu"
//               >
//                 Services
//                 <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "services" ? "rotate-180" : ""}`} />
//               </Link>
//             </div>

//             <div className="relative">
//               <Link
//                 href="/case-studies"
//                 className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200 flex items-center gap-1.5 py-1"
//                 onMouseEnter={() => handleButtonEnter("case-studies")}
//                 onMouseLeave={handleButtonLeave}
//                 aria-expanded={hoveredMenu === "case-studies"}
//                 aria-haspopup="menu"
//               >
//                 Case Studies
//                 <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "case-studies" ? "rotate-180" : ""}`} />
//               </Link>
//             </div>

//             <Link
//               href="/projects"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//             >
//               Projects
//             </Link>

//             <Link
//               href="/contact"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//             >
//               Team
//             </Link>
//           </div>

//           {/* CTA Pill Button matching reference styling */}
//           <div className="hidden md:flex items-center">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#141b26] hover:bg-[#1e2736] text-white text-[13px] font-medium tracking-wider rounded-full shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 uppercase"
//             >
//               GET STARTED <FiArrowUpRight className="h-4 w-4 stroke-[2]" />
//             </Link>
//           </div>

//           {/* Mobile Menu Trigger */}
//           <button
//             className="md:hidden p-2 rounded-lg hover:bg-gray-200/50 transition-all duration-300"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//             aria-expanded={open}
//             aria-controls="mobile-menu"
//           >
//             <FiMenu className="h-6 w-6 text-[#1b2b40]" />
//           </button>
//         </nav>
//       </header>

//       {/* Backdrop Overlay */}
//       <AnimatePresence>
//         {hoveredMenu && (
//           <Portal>
//             <motion.div
//               key="desktop-overlay"
//               className="fixed left-0 right-0 bottom-0 z-40 bg-black/20 backdrop-blur-[2px]"
//               style={{ top: `${navHeight}px` }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               aria-hidden="true"
//               onClick={() => setHoveredMenu(null)}
//               onMouseEnter={() => setHoveredMenu(null)}
//             />
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Services Dropdown */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl p-4 w-[95vw] max-w-6xl z-50 border border-gray-100/50"
//               style={{ top: `${navHeight + 8}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//               role="menu"
//               aria-label="Services menu"
//             >
//               <ServicesMegaMenu services={services} setHoveredMenu={setHoveredMenu} />
//             </motion.div>
//           </Portal>
//         )}
//       </AnimatePresence>

//       {/* Case Studies Dropdown */}
//       <AnimatePresence>
//         {hoveredMenu === "case-studies" && (
//           <Portal>
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl p-6 w-[90vw] max-w-2xl z-50 border border-gray-100"
//               style={{ top: `${navHeight + 8}px` }}
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//               role="menu"
//               aria-label="Case Studies menu"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {caseStudies.map((cs) => (
//                   <Link
//                     key={cs.title}
//                     href={cs.href}
//                     className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
//                     onClick={() => setHoveredMenu(null)}
//                     role="menuitem"
//                   >
//                     <div className="flex items-start gap-3.5">
//                       <div className="p-2.5 bg-[#141b26]/5 rounded-lg text-[#141b26]">
//                         <cs.icon className="h-5 w-5" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900 text-sm">{cs.title}</p>
//                         <p className="text-xs text-gray-500 mt-1 leading-relaxed">{cs.desc}</p>
//                       </div>
//                     </div>
//                   </Link>
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
//                 className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.2 }}
//                 onClick={handleMobileClose}
//                 aria-hidden="true"
//               />

//               <motion.aside
//                 className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto"
//                 initial={{ x: "100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: "100%", opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 role="dialog"
//                 aria-modal="true"
//                 id="mobile-menu"
//               >
//                 <div className="flex items-center justify-between border-b pb-4 border-gray-100">
//                   <span className="text-lg font-bold text-[#1b2b40]">Menu</span>
//                   <button
//                     className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
//                     onClick={handleMobileClose}
//                     aria-label="Close menu"
//                   >
//                     <FiX className="h-5 w-5 text-gray-700" />
//                   </button>
//                 </div>

//                 <nav className="mt-6 space-y-2">
//                   <Link
//                     href="/"
//                     onClick={handleMobileClose}
//                     className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     Home
//                   </Link>

//                   <Link
//                     href="/about"
//                     onClick={handleMobileClose}
//                     className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     About
//                   </Link>

//                   {/* Services Mobile Submenu */}
//                   <div>
//                     <button
//                       onClick={() => toggleDropdown("services")}
//                       className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                     >
//                       <span>Services</span>
//                       <FiChevronDown className={`transform transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "services" && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           {services.map((s) => (
//                             <Link
//                               key={s.title}
//                               href={s.href}
//                               onClick={handleMobileClose}
//                               className="block p-2 text-sm text-gray-600 hover:text-black"
//                             >
//                               {s.title}
//                             </Link>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>

//                   {/* Case Studies Mobile Submenu */}
//                   <div>
//                     <button
//                       onClick={() => toggleDropdown("case-studies")}
//                       className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                     >
//                       <span>Case Studies</span>
//                       <FiChevronDown className={`transform transition-transform ${openDropdown === "case-studies" ? "rotate-180" : ""}`} />
//                     </button>
//                     <AnimatePresence>
//                       {openDropdown === "case-studies" && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           className="pl-4 overflow-hidden"
//                         >
//                           {caseStudies.map((cs) => (
//                             <Link
//                               key={cs.title}
//                               href={cs.href}
//                               onClick={handleMobileClose}
//                               className="block p-2 text-sm text-gray-600 hover:text-black"
//                             >
//                               {cs.title}
//                             </Link>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>

//                   <Link
//                     href="/projects"
//                     onClick={handleMobileClose}
//                     className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     Projects
//                   </Link>

//                   <Link
//                     href="/contact"
//                     onClick={handleMobileClose}
//                     className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     Team
//                   </Link>

//                   <div className="pt-4">
//                     <Link
//                       href="/contact"
//                       onClick={handleMobileClose}
//                       className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#141b26] text-white font-medium text-xs tracking-wider uppercase shadow-md"
//                     >
//                       GET STARTED <FiArrowUpRight className="h-4 w-4" />
//                     </Link>
//                   </div>
//                 </nav>
//               </motion.aside>
//             </>
//           </Portal>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }




// "use client"
// import { useState, useEffect, useRef, useCallback } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import {
//   FiMenu,
//   FiX,
//   FiCode,
//   FiShoppingBag,
//   FiGlobe,
//   FiCheckCircle,
//   FiBriefcase,
//   FiChevronDown,
//   FiArrowUpRight,
//   FiFileText,
//   FiArrowRight,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "Custom web applications built with modern frameworks like Next.js and React â€” fast, scalable, and SEO-optimized.",
//     href: "/services/web-apps",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiShoppingBag,
//     title: "Shopify Stores",
//     desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
//     href: "/services/shopify-stores",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiGlobe,
//     title: "WordPress Websites",
//     desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
//     href: "/services/wordpress-websites",
//     image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Software Quality Assurance",
//     desc: "Comprehensive testing services ensuring flawless performance and reliability.",
//     href: "/services/quality-assurance",
//     image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
//   },
// ]

// const caseStudies = [
//   {
//     icon: FiFileText,
//     title: "E-Commerce Scaling",
//     desc: "How we helped a brand double its conversion rate.",
//     href: "/case-studies/e-commerce",
//   },
//   {
//     icon: FiFileText,
//     title: "SaaS Optimization",
//     desc: "Performance and UI overhaul for a fast-growing platform.",
//     href: "/case-studies/saas-platform",
//   },
// ]

// export function ServicesMegaMenu({ services, setHoveredMenu }) {
//   const [hoveredIndex, setHoveredIndex] = useState(null)

//   return (
//     <div className="flex w-full gap-6 text-[#1b2b40] p-2">
//       {/* Left Column: Services Overview */}
//       <div className="w-1/3 flex flex-col justify-between bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100">
//         <div>
//           <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest block mb-1.5">
//             What We Do
//           </span>
//           <h3 className="text-xl font-bold mb-2 tracking-tight text-[#1b2b40]">
//             Services
//           </h3>
//           <p className="text-xs text-gray-500 leading-relaxed mb-5">
//             Tailored digital services engineered to transform your business, elevate user experience, and accelerate market growth.
//           </p>
//           <Link
//             href="/services"
//             onClick={() => setHoveredMenu?.(null)}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-semibold text-[#1b2b40] hover:border-gray-300 hover:shadow-sm transition-all duration-200"
//           >
//             <span>Explore All Services</span>
//             <FiArrowRight className="w-3.5 h-3.5 text-gray-500" />
//           </Link>
//         </div>

//         {/* Custom Strategy Spotlight Card */}
//         <div className="mt-6 bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1.5 group hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer">
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               Tailored Solutions
//             </span>
//           </div>
//           <p className="text-xs font-semibold text-gray-900 leading-snug">
//             Need a custom service strategy or full digital transformation plan?
//           </p>
//           <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
//             Talk to an expert &rarr;
//           </span>
//         </div>
//       </div>

//       {/* Right Column: Interactive Expanded Service List */}
//       <div className="w-2/3 py-2 pr-2 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
//               Our Core Capabilities
//             </h4>
//             <div className="h-px bg-gray-100 flex-1" />
//           </div>

//           <div className="flex flex-col gap-2">
//             {services.map((s, idx) => {
//               const isActive = hoveredIndex === idx

//               return (
//                 <Link
//                   key={s.title}
//                   href={s.href}
//                   onClick={() => setHoveredMenu?.(null)}
//                   onMouseEnter={() => setHoveredIndex(idx)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                   className={`group relative flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ease-in-out ${
//                     isActive
//                       ? "bg-[#141b26] text-white border-[#141b26] shadow-xl scale-[1.005]"
//                       : "bg-transparent text-[#1b2b40] border-transparent hover:bg-gray-50"
//                   }`}
//                 >
//                   {/* Left Side Details */}
//                   <div className="flex items-start gap-3 z-10 flex-1 pr-2">
//                     <div
//                       className={`flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-colors duration-300 ${
//                         isActive
//                           ? "bg-emerald-500 text-white"
//                           : "bg-[#141b26]/5 text-[#1b2b40] group-hover:bg-[#141b26]/10"
//                       }`}
//                     >
//                       <s.icon className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <p
//                           className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
//                             isActive ? "text-white" : "text-gray-900"
//                           }`}
//                         >
//                           {s.title}
//                         </p>
//                         <FiArrowRight
//                           className={`w-3.5 h-3.5 transition-all duration-300 ${
//                             isActive
//                               ? "opacity-100 translate-x-1 text-emerald-400"
//                               : "opacity-0 -translate-x-2"
//                           }`}
//                         />
//                       </div>
//                       <p
//                         className={`text-[11px] sm:text-xs leading-snug mt-0.5 transition-colors duration-300 ${
//                           isActive ? "text-gray-300" : "text-gray-500"
//                         }`}
//                       >
//                         {s.desc}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Right Side Expanding Image Preview */}
//                   <div
//                     className={`overflow-hidden transition-all duration-500 ease-out flex-shrink-0 ${
//                       isActive ? "w-24 h-14 opacity-100 ml-2" : "w-0 h-14 opacity-0 ml-0"
//                     }`}
//                   >
//                     {s.image && (
//                       <div className="w-24 h-14 rounded-lg overflow-hidden border border-white/20 shadow-md">
//                         <img
//                           src={s.image}
//                           alt={s.title}
//                           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </Link>
//               )
//             })}
//           </div>
//         </div>

//         {/* Custom Proposal Banner */}
//         <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 mt-2">
//           <span>Looking for something specific?</span>
//           <Link
//             href="/contact"
//             onClick={() => setHoveredMenu?.(null)}
//             className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
//           >
//             Request a Custom Proposal &rarr;
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHoveringButton, setIsHoveringButton] = useState(false)
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false)
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const navRef = useRef(null)
//   const hoverTimeout = useRef(null)

//   useEffect(() => {
//     setScrolled(window.scrollY > 8)
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   const menuVariants = {
//     hidden: { opacity: 0, y: 6, scale: 0.99 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
//     exit: { opacity: 0, y: 6, scale: 0.99, transition: { duration: 0.15 } },
//   }

//   const hoverDelay = 150

//   const handleButtonEnter = useCallback((menu) => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringButton(true)
//     hoverTimeout.current = setTimeout(() => {
//       setHoveredMenu(menu)
//     }, hoverDelay)
//   }, [])

//   const handleButtonLeave = useCallback(() => {
//     setIsHoveringButton(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null)
//     }, hoverDelay)
//   }, [isHoveringMenu])

//   const handleMenuEnter = useCallback(() => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }, [])

//   const handleMenuLeave = useCallback(() => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, hoverDelay)
//   }, [isHoveringButton])

//   const toggleDropdown = useCallback((name) => {
//     setOpenDropdown((prev) => (prev === name ? null : name))
//   }, [])

//   const handleMobileClose = useCallback(() => {
//     setOpen(false)
//   }, [])

//   return (
//     <header
//       ref={navRef}
//       className={`relative z-50 w-full transition-all duration-300 ease-in-out border-b border-gray-200/60 ${
//         scrolled
//           ? "bg-[#f8f9fa]/95 backdrop-blur-xl shadow-sm"
//           : "bg-[#f8f9fa]"
//       }`}
//     >
//       <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-4 font-sans">

//         {/* Logo */}
//         <Link href="/" className="group flex items-center">
//           <Image
//             src="/logo.png"
//             height={38}
//             width={38}
//             alt="Logo"
//             className="transition-transform duration-300 group-hover:scale-105"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8 lg:gap-10">
//           <Link
//             href="/"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//           >
//             Home
//           </Link>

//           <Link
//             href="/about"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//           >
//             About
//           </Link>

//           {/* Services Nav Trigger */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleButtonEnter("services")}
//             onMouseLeave={handleButtonLeave}
//           >
//             <Link
//               href="/services"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200 flex items-center gap-1.5 py-1"
//               aria-expanded={hoveredMenu === "services"}
//               aria-haspopup="menu"
//             >
//               Services
//               <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "services" ? "rotate-180" : ""}`} />
//             </Link>
//           </div>

//           {/* Case Studies Nav Trigger */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleButtonEnter("case-studies")}
//             onMouseLeave={handleButtonLeave}
//           >
//             <Link
//               href="/case-studies"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200 flex items-center gap-1.5 py-1"
//               aria-expanded={hoveredMenu === "case-studies"}
//               aria-haspopup="menu"
//             >
//               Case Studies
//               <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "case-studies" ? "rotate-180" : ""}`} />
//             </Link>
//           </div>

//           <Link
//             href="/projects"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//           >
//             Projects
//           </Link>

//           <Link
//             href="/contact"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//           >
//             Team
//           </Link>
//         </div>

//         {/* CTA Button */}
//         <div className="hidden md:flex items-center">
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#141b26] hover:bg-[#1e2736] text-white text-[13px] font-medium tracking-wider rounded-full shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 uppercase"
//           >
//             GET STARTED <FiArrowUpRight className="h-4 w-4 stroke-[2]" />
//           </Link>
//         </div>

//         {/* Mobile Menu Trigger */}
//         <button
//           className="md:hidden p-2 rounded-lg hover:bg-gray-200/50 transition-all duration-300"
//           onClick={() => setOpen(true)}
//           aria-label="Open menu"
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//         >
//           <FiMenu className="h-6 w-6 text-[#1b2b40]" />
//         </button>
//       </nav>

//       {/* Services Mega Dropdown Container (Positioned Absolute to Header) */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="absolute top-full left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl p-4 w-[92vw] max-w-5xl z-50 border border-gray-100/80 max-h-[82vh] overflow-y-auto"
//             onMouseEnter={handleMenuEnter}
//             onMouseLeave={handleMenuLeave}
//             role="menu"
//             aria-label="Services menu"
//           >
//             <ServicesMegaMenu services={services} setHoveredMenu={setHoveredMenu} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Case Studies Dropdown Container */}
//       <AnimatePresence>
//         {hoveredMenu === "case-studies" && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="absolute top-full left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl p-5 w-[90vw] max-w-xl z-50 border border-gray-100 max-h-[82vh] overflow-y-auto"
//             onMouseEnter={handleMenuEnter}
//             onMouseLeave={handleMenuLeave}
//             role="menu"
//             aria-label="Case Studies menu"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               {caseStudies.map((cs) => (
//                 <Link
//                   key={cs.title}
//                   href={cs.href}
//                   className="group p-3.5 rounded-xl hover:bg-gray-50 transition-all duration-200"
//                   onClick={() => setHoveredMenu(null)}
//                   role="menuitem"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="p-2 bg-[#141b26]/5 rounded-lg text-[#141b26]">
//                       <cs.icon className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900 text-xs sm:text-sm">{cs.title}</p>
//                       <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{cs.desc}</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               onClick={handleMobileClose}
//               aria-hidden="true"
//             />

//             <motion.aside
//               className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto"
//               initial={{ x: "100%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: "100%", opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               role="dialog"
//               aria-modal="true"
//               id="mobile-menu"
//             >
//               <div className="flex items-center justify-between border-b pb-4 border-gray-100">
//                 <span className="text-lg font-bold text-[#1b2b40]">Menu</span>
//                 <button
//                   className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
//                   onClick={handleMobileClose}
//                   aria-label="Close menu"
//                 >
//                   <FiX className="h-5 w-5 text-gray-700" />
//                 </button>
//               </div>

//               <nav className="mt-6 space-y-2">
//                 <Link
//                   href="/"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   href="/about"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   About
//                 </Link>

//                 {/* Services Mobile Submenu */}
//                 <div>
//                   <button
//                     onClick={() => toggleDropdown("services")}
//                     className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     <span>Services</span>
//                     <FiChevronDown className={`transform transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
//                   </button>
//                   <AnimatePresence>
//                     {openDropdown === "services" && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         {services.map((s) => (
//                           <Link
//                             key={s.title}
//                             href={s.href}
//                             onClick={handleMobileClose}
//                             className="block p-2 text-sm text-gray-600 hover:text-black"
//                           >
//                             {s.title}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Case Studies Mobile Submenu */}
//                 <div>
//                   <button
//                     onClick={() => toggleDropdown("case-studies")}
//                     className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     <span>Case Studies</span>
//                     <FiChevronDown className={`transform transition-transform ${openDropdown === "case-studies" ? "rotate-180" : ""}`} />
//                   </button>
//                   <AnimatePresence>
//                     {openDropdown === "case-studies" && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         {caseStudies.map((cs) => (
//                           <Link
//                             key={cs.title}
//                             href={cs.href}
//                             onClick={handleMobileClose}
//                             className="block p-2 text-sm text-gray-600 hover:text-black"
//                           >
//                             {cs.title}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 <Link
//                   href="/projects"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   Projects
//                 </Link>

//                 <Link
//                   href="/contact"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   Team
//                 </Link>

//                 <div className="pt-4">
//                   <Link
//                     href="/contact"
//                     onClick={handleMobileClose}
//                     className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#141b26] text-white font-medium text-xs tracking-wider uppercase shadow-md"
//                   >
//                     GET STARTED <FiArrowUpRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </nav>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }











// "use client"
// import { useState, useEffect, useRef, useCallback } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import {
//   FiMenu,
//   FiX,
//   FiCode,
//   FiShoppingBag,
//   FiGlobe,
//   FiCheckCircle,
//   FiChevronDown,
//   FiArrowUpRight,
//   FiFileText,
//   FiArrowRight,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "Custom web applications built with modern frameworks like Next.js and React â€” fast, scalable, and SEO-optimized.",
//     href: "/services/web-apps",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiShoppingBag,
//     title: "Shopify Stores",
//     desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
//     href: "/services/shopify-stores",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiGlobe,
//     title: "WordPress Websites",
//     desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
//     href: "/services/wordpress-websites",
//     image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Software Quality Assurance",
//     desc: "Comprehensive testing services ensuring flawless performance and reliability.",
//     href: "/services/quality-assurance",
//     image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
//   },
// ]

// const caseStudies = [
//   {
//     icon: FiFileText,
//     title: "E-Commerce Scaling",
//     desc: "How we helped a brand double its conversion rate.",
//     href: "/case-studies/e-commerce",
//   },
//   {
//     icon: FiFileText,
//     title: "SaaS Optimization",
//     desc: "Performance and UI overhaul for a fast-growing platform.",
//     href: "/case-studies/saas-platform",
//   },
// ]

// export function ServicesMegaMenu({ services, setHoveredMenu }) {
//   const [hoveredIndex, setHoveredIndex] = useState(null)

//   return (
//     <div className="flex w-full gap-6 text-[#1b2b40] p-2">
//       {/* Left Column: Services Overview */}
//       <div className="w-1/3 flex flex-col justify-between bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100">
//         <div>
//           <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest block mb-1.5">
//             What We Do
//           </span>
//           <h3 className="text-xl font-bold mb-2 tracking-tight text-[#1b2b40]">
//             Services
//           </h3>
//           <p className="text-xs text-gray-500 leading-relaxed mb-5">
//             Tailored digital services engineered to transform your business, elevate user experience, and accelerate market growth.
//           </p>
//           <Link
//             href="/services"
//             onClick={() => setHoveredMenu?.(null)}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-semibold text-[#1b2b40] hover:border-gray-300 hover:shadow-sm transition-all duration-200"
//           >
//             <span>Explore All Services</span>
//             <FiArrowRight className="w-3.5 h-3.5 text-gray-500" />
//           </Link>
//         </div>

//         {/* Custom Strategy Spotlight Card */}
//         <div className="mt-6 bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1.5 group hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer">
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               Tailored Solutions
//             </span>
//           </div>
//           <p className="text-xs font-semibold text-gray-900 leading-snug">
//             Need a custom service strategy or full digital transformation plan?
//           </p>
//           <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
//             Talk to an expert &rarr;
//           </span>
//         </div>
//       </div>

//       {/* Right Column: Interactive Expanded Service List */}
//       <div className="w-2/3 py-2 pr-2 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
//               Our Core Capabilities
//             </h4>
//             <div className="h-px bg-gray-100 flex-1" />
//           </div>

//           <div className="flex flex-col gap-2">
//             {services.map((s, idx) => {
//               const isActive = hoveredIndex === idx

//               return (
//                 <Link
//                   key={s.title}
//                   href={s.href}
//                   onClick={() => setHoveredMenu?.(null)}
//                   onMouseEnter={() => setHoveredIndex(idx)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                   className={`group relative flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ease-in-out ${
//                     isActive
//                       ? "bg-[#141b26] text-white border-[#141b26] shadow-xl scale-[1.005]"
//                       : "bg-transparent text-[#1b2b40] border-transparent hover:bg-gray-50"
//                   }`}
//                 >
//                   {/* Left Side Details */}
//                   <div className="flex items-start gap-3 z-10 flex-1 pr-2">
//                     <div
//                       className={`flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 transition-colors duration-300 ${
//                         isActive
//                           ? "bg-emerald-500 text-white"
//                           : "bg-[#141b26]/5 text-[#1b2b40] group-hover:bg-[#141b26]/10"
//                       }`}
//                     >
//                       <s.icon className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <p
//                           className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
//                             isActive ? "text-white" : "text-gray-900"
//                           }`}
//                         >
//                           {s.title}
//                         </p>
//                         <FiArrowRight
//                           className={`w-3.5 h-3.5 transition-all duration-300 ${
//                             isActive
//                               ? "opacity-100 translate-x-1 text-emerald-400"
//                               : "opacity-0 -translate-x-2"
//                           }`}
//                         />
//                       </div>
//                       <p
//                         className={`text-[11px] sm:text-xs leading-snug mt-0.5 transition-colors duration-300 ${
//                           isActive ? "text-gray-300" : "text-gray-500"
//                         }`}
//                       >
//                         {s.desc}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Right Side Expanding Image Preview */}
//                   <div
//                     className={`overflow-hidden transition-all duration-500 ease-out flex-shrink-0 ${
//                       isActive ? "w-24 h-14 opacity-100 ml-2" : "w-0 h-14 opacity-0 ml-0"
//                     }`}
//                   >
//                     {s.image && (
//                       <div className="w-24 h-14 rounded-lg overflow-hidden border border-white/20 shadow-md">
//                         <img
//                           src={s.image}
//                           alt={s.title}
//                           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </Link>
//               )
//             })}
//           </div>
//         </div>

//         {/* Custom Proposal Banner */}
//         <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 mt-2">
//           <span>Looking for something specific?</span>
//           <Link
//             href="/contact"
//             onClick={() => setHoveredMenu?.(null)}
//             className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
//           >
//             Request a Custom Proposal &rarr;
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHoveringButton, setIsHoveringButton] = useState(false)
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false)
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const navRef = useRef(null)
//   const hoverTimeout = useRef(null)

//   // Prevent background scrolling when Mega Menu or Mobile Menu is open
//   useEffect(() => {
//     if (hoveredMenu || open) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = ""
//     }
//     return () => {
//       document.body.style.overflow = ""
//     }
//   }, [hoveredMenu, open])

//   useEffect(() => {
//     setScrolled(window.scrollY > 8)
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   const menuVariants = {
//     hidden: { opacity: 0, y: 6, scale: 0.99 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
//     exit: { opacity: 0, y: 6, scale: 0.99, transition: { duration: 0.15 } },
//   }

//   const hoverDelay = 150

//   const handleButtonEnter = useCallback((menu) => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringButton(true)
//     hoverTimeout.current = setTimeout(() => {
//       setHoveredMenu(menu)
//     }, hoverDelay)
//   }, [])

//   const handleButtonLeave = useCallback(() => {
//     setIsHoveringButton(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null)
//     }, hoverDelay)
//   }, [isHoveringMenu])

//   const handleMenuEnter = useCallback(() => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }, [])

//   const handleMenuLeave = useCallback(() => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, hoverDelay)
//   }, [isHoveringButton])

//   const toggleDropdown = useCallback((name) => {
//     setOpenDropdown((prev) => (prev === name ? null : name))
//   }, [])

//   const handleMobileClose = useCallback(() => {
//     setOpen(false)
//   }, [])

//   return (
//     <header
//       ref={navRef}
//       className={`relative z-50 w-full transition-all duration-300 ease-in-out border-b border-gray-200/60 ${
//         scrolled
//           ? "bg-[#f8f9fa]/95 backdrop-blur-xl shadow-sm"
//           : "bg-[#f8f9fa]"
//       }`}
//     >
//       <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-4 font-sans">

//         {/* Logo */}
//         <Link href="/" className="group flex items-center">
//           <Image
//             src="/logo.png"
//             height={38}
//             width={38}
//             alt="Logo"
//             className="transition-transform duration-300 group-hover:scale-105"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8 lg:gap-10">
//           <Link
//             href="/"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//           >
//             Home
//           </Link>

//           <Link
//             href="/about"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//           >
//             About
//           </Link>

//           {/* Services Nav Trigger */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleButtonEnter("services")}
//             onMouseLeave={handleButtonLeave}
//           >
//             <Link
//               href="/services"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200 flex items-center gap-1.5 py-1"
//               aria-expanded={hoveredMenu === "services"}
//               aria-haspopup="menu"
//             >
//               Services
//               <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "services" ? "rotate-180" : ""}`} />
//             </Link>
//           </div>

//           {/* Case Studies Nav Trigger */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleButtonEnter("case-studies")}
//             onMouseLeave={handleButtonLeave}
//           >
//             <Link
//               href="/case-studies"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200 flex items-center gap-1.5 py-1"
//               aria-expanded={hoveredMenu === "case-studies"}
//               aria-haspopup="menu"
//             >
//               Case Studies
//               <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "case-studies" ? "rotate-180" : ""}`} />
//             </Link>
//           </div>

//           <Link
//             href="/projects"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//           >
//             Projects
//           </Link>

//           <Link
//             href="/contact"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-200"
//           >
//             Team
//           </Link>
//         </div>

//         {/* CTA Button */}
//         <div className="hidden md:flex items-center">
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#141b26] hover:bg-[#1e2736] text-white text-[13px] font-medium tracking-wider rounded-full shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 uppercase"
//           >
//             GET STARTED <FiArrowUpRight className="h-4 w-4 stroke-[2]" />
//           </Link>
//         </div>

//         {/* Mobile Menu Trigger */}
//         <button
//           className="md:hidden p-2 rounded-lg hover:bg-gray-200/50 transition-all duration-300"
//           onClick={() => setOpen(true)}
//           aria-label="Open menu"
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//         >
//           <FiMenu className="h-6 w-6 text-[#1b2b40]" />
//         </button>
//       </nav>

//       {/* Services Mega Dropdown Container */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="absolute top-full left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl p-4 w-[92vw] max-w-5xl z-50 border border-gray-100/80 max-h-[80vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             onMouseEnter={handleMenuEnter}
//             onMouseLeave={handleMenuLeave}
//             role="menu"
//             aria-label="Services menu"
//           >
//             <ServicesMegaMenu services={services} setHoveredMenu={setHoveredMenu} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Case Studies Dropdown Container */}
//       <AnimatePresence>
//         {hoveredMenu === "case-studies" && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="absolute top-full left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl p-5 w-[90vw] max-w-xl z-50 border border-gray-100 max-h-[80vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             onMouseEnter={handleMenuEnter}
//             onMouseLeave={handleMenuLeave}
//             role="menu"
//             aria-label="Case Studies menu"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               {caseStudies.map((cs) => (
//                 <Link
//                   key={cs.title}
//                   href={cs.href}
//                   className="group p-3.5 rounded-xl hover:bg-gray-50 transition-all duration-200"
//                   onClick={() => setHoveredMenu(null)}
//                   role="menuitem"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="p-2 bg-[#141b26]/5 rounded-lg text-[#141b26]">
//                       <cs.icon className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900 text-xs sm:text-sm">{cs.title}</p>
//                       <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{cs.desc}</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               onClick={handleMobileClose}
//               aria-hidden="true"
//             />

//             <motion.aside
//               className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//               initial={{ x: "100%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: "100%", opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               role="dialog"
//               aria-modal="true"
//               id="mobile-menu"
//             >
//               <div className="flex items-center justify-between border-b pb-4 border-gray-100">
//                 <span className="text-lg font-bold text-[#1b2b40]">Menu</span>
//                 <button
//                   className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
//                   onClick={handleMobileClose}
//                   aria-label="Close menu"
//                 >
//                   <FiX className="h-5 w-5 text-gray-700" />
//                 </button>
//               </div>

//               <nav className="mt-6 space-y-2">
//                 <Link
//                   href="/"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   href="/about"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   About
//                 </Link>

//                 {/* Services Mobile Submenu */}
//                 <div>
//                   <button
//                     onClick={() => toggleDropdown("services")}
//                     className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     <span>Services</span>
//                     <FiChevronDown className={`transform transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
//                   </button>
//                   <AnimatePresence>
//                     {openDropdown === "services" && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         {services.map((s) => (
//                           <Link
//                             key={s.title}
//                             href={s.href}
//                             onClick={handleMobileClose}
//                             className="block p-2 text-sm text-gray-600 hover:text-black"
//                           >
//                             {s.title}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Case Studies Mobile Submenu */}
//                 <div>
//                   <button
//                     onClick={() => toggleDropdown("case-studies")}
//                     className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     <span>Case Studies</span>
//                     <FiChevronDown className={`transform transition-transform ${openDropdown === "case-studies" ? "rotate-180" : ""}`} />
//                   </button>
//                   <AnimatePresence>
//                     {openDropdown === "case-studies" && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         {caseStudies.map((cs) => (
//                           <Link
//                             key={cs.title}
//                             href={cs.href}
//                             onClick={handleMobileClose}
//                             className="block p-2 text-sm text-gray-600 hover:text-black"
//                           >
//                             {cs.title}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 <Link
//                   href="/projects"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   Projects
//                 </Link>

//                 <Link
//                   href="/contact"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   Team
//                 </Link>

//                 <div className="pt-4">
//                   <Link
//                     href="/contact"
//                     onClick={handleMobileClose}
//                     className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#141b26] text-white font-medium text-xs tracking-wider uppercase shadow-md"
//                   >
//                     GET STARTED <FiArrowUpRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </nav>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }












// "use client"
// import { useState, useEffect, useRef, useCallback } from "react"
// import Link from "next/link"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import {
//   FiMenu,
//   FiX,
//   FiCode,
//   FiShoppingBag,
//   FiGlobe,
//   FiCheckCircle,
//   FiChevronDown,
//   FiArrowUpRight,
//   FiFileText,
//   FiArrowRight,
// } from "react-icons/fi"

// const services = [
//   {
//     icon: FiCode,
//     title: "Web Apps",
//     desc: "Custom web applications built with modern frameworks like Next.js and React â€” fast, scalable, and SEO-optimized.",
//     href: "/services/web-apps",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiShoppingBag,
//     title: "Shopify Stores",
//     desc: "High-converting Shopify stores with smooth checkout, responsive design, and easy product management.",
//     href: "/services/shopify-stores",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiGlobe,
//     title: "WordPress Websites",
//     desc: "Dynamic and secure WordPress websites tailored for businesses, blogs, and portfolios.",
//     href: "/services/wordpress-websites",
//     image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     icon: FiCheckCircle,
//     title: "Software Quality Assurance",
//     desc: "Comprehensive testing services ensuring flawless performance and reliability.",
//     href: "/services/quality-assurance",
//     image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
//   },
// ]

// const caseStudies = [
//   {
//     icon: FiFileText,
//     title: "E-Commerce Scaling",
//     desc: "How we helped a brand double its conversion rate.",
//     href: "/case-studies/e-commerce",
//   },
//   {
//     icon: FiFileText,
//     title: "SaaS Optimization",
//     desc: "Performance and UI overhaul for a fast-growing platform.",
//     href: "/case-studies/saas-platform",
//   },
// ]

// export function ServicesMegaMenu({ services, setHoveredMenu }) {
//   const [hoveredIndex, setHoveredIndex] = useState(null)

//   return (
//     <div className="flex w-full gap-5 text-[#1b2b40] p-1">
//       {/* Left Column: Services Overview */}
//       <div className="w-1/3 flex flex-col justify-between bg-[#f8f9fa] rounded-2xl p-5 border border-gray-100/80">
//         <div>
//           <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
//             What We Do
//           </span>
//           <h3 className="text-lg font-bold mb-1.5 tracking-tight text-[#1b2b40]">
//             Services
//           </h3>
//           <p className="text-xs text-gray-500 leading-relaxed mb-4">
//             Tailored digital services engineered to transform your business, elevate user experience, and accelerate market growth.
//           </p>
//           <Link
//             href="/services"
//             onClick={() => setHoveredMenu?.(null)}
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-[#1b2b40] hover:border-gray-300 hover:shadow-sm transition-all duration-150"
//           >
//             <span>Explore All Services</span>
//             <FiArrowRight className="w-3.5 h-3.5 text-gray-500" />
//           </Link>
//         </div>

//         {/* Strategy Spotlight Card */}
//         <div className="mt-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1 group hover:border-emerald-200 hover:shadow-md transition-all duration-150 cursor-pointer">
//           <div className="flex items-center gap-1.5">
//             <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//             <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
//               Tailored Solutions
//             </span>
//           </div>
//           <p className="text-xs font-semibold text-gray-900 leading-snug">
//             Need a custom service strategy or full digital transformation plan?
//           </p>
//           <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-0.5 transition-transform duration-150 inline-flex items-center gap-1">
//             Talk to an expert &rarr;
//           </span>
//         </div>
//       </div>

//       {/* Right Column: Instant Super-Smooth Hover Capability List */}
//       <div className="w-2/3 py-1 pr-1 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center gap-3 mb-2.5">
//             <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               Our Core Capabilities
//             </h4>
//             <div className="h-px bg-gray-100 flex-1" />
//           </div>

//           <div className="flex flex-col gap-1.5">
//             {services.map((s, idx) => {
//               const isActive = hoveredIndex === idx

//               return (
//                 <Link
//                   key={s.title}
//                   href={s.href}
//                   onClick={() => setHoveredMenu?.(null)}
//                   onMouseEnter={() => setHoveredIndex(idx)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                   className={`group relative flex items-center justify-between p-2.5 rounded-xl border transition-all duration-150 ease-out ${
//                     isActive
//                       ? "bg-[#141b26] text-white border-[#141b26] shadow-lg"
//                       : "bg-transparent text-[#1b2b40] border-transparent hover:bg-gray-50/80"
//                   }`}
//                 >
//                   {/* Left Side Details */}
//                   <div className="flex items-center gap-3 z-10 flex-1 pr-2">
//                     <div
//                       className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-colors duration-150 ${
//                         isActive
//                           ? "bg-emerald-500 text-white"
//                           : "bg-[#141b26]/5 text-[#1b2b40] group-hover:bg-[#141b26]/10"
//                       }`}
//                     >
//                       <s.icon className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <div className="flex items-center gap-1.5">
//                         <p
//                           className={`font-semibold text-xs sm:text-sm transition-colors duration-150 ${
//                             isActive ? "text-white" : "text-gray-900"
//                           }`}
//                         >
//                           {s.title}
//                         </p>
//                         <FiArrowRight
//                           className={`w-3.5 h-3.5 transition-all duration-150 ${
//                             isActive
//                               ? "opacity-100 translate-x-1 text-emerald-400"
//                               : "opacity-0 -translate-x-1"
//                           }`}
//                         />
//                       </div>
//                       <p
//                         className={`text-[11px] leading-tight mt-0.5 transition-colors duration-150 ${
//                           isActive ? "text-gray-300" : "text-gray-500"
//                         }`}
//                       >
//                         {s.desc}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Right Side Image Preview with CSS opacity/transform */}
//                   {s.image && (
//                     <div
//                       className={`overflow-hidden transition-all duration-200 ease-out flex-shrink-0 ${
//                         isActive
//                           ? "w-20 h-12 opacity-100 ml-2 scale-100"
//                           : "w-0 h-12 opacity-0 ml-0 scale-95"
//                       }`}
//                     >
//                       <div className="w-20 h-12 rounded-lg overflow-hidden border border-white/20 shadow-sm">
//                         <img
//                           src={s.image}
//                           alt={s.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </Link>
//               )
//             })}
//           </div>
//         </div>

//         {/* Custom Proposal Banner */}
//         <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 mt-1">
//           <span>Looking for something specific?</span>
//           <Link
//             href="/contact"
//             onClick={() => setHoveredMenu?.(null)}
//             className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
//           >
//             Request a Custom Proposal &rarr;
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState(null)
//   const [isHoveringButton, setIsHoveringButton] = useState(false)
//   const [isHoveringMenu, setIsHoveringMenu] = useState(false)
//   const [openDropdown, setOpenDropdown] = useState(null)
//   const navRef = useRef(null)
//   const hoverTimeout = useRef(null)

//   // Prevent background scrolling when menu is active
//   useEffect(() => {
//     if (hoveredMenu || open) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = ""
//     }
//     return () => {
//       document.body.style.overflow = ""
//     }
//   }, [hoveredMenu, open])

//   useEffect(() => {
//     setScrolled(window.scrollY > 8)
//     const onScroll = () => setScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   const menuVariants = {
//     hidden: { opacity: 0, y: 4, scale: 0.995 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.15, ease: "easeOut" } },
//     exit: { opacity: 0, y: 4, scale: 0.995, transition: { duration: 0.1 } },
//   }

//   // Very short delay for instant responsiveness
//   const hoverDelay = 50

//   const handleButtonEnter = useCallback((menu) => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringButton(true)
//     hoverTimeout.current = setTimeout(() => {
//       setHoveredMenu(menu)
//     }, hoverDelay)
//   }, [])

//   const handleButtonLeave = useCallback(() => {
//     setIsHoveringButton(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringMenu) setHoveredMenu(null)
//     }, 120)
//   }, [isHoveringMenu])

//   const handleMenuEnter = useCallback(() => {
//     clearTimeout(hoverTimeout.current)
//     setIsHoveringMenu(true)
//   }, [])

//   const handleMenuLeave = useCallback(() => {
//     setIsHoveringMenu(false)
//     hoverTimeout.current = setTimeout(() => {
//       if (!isHoveringButton) setHoveredMenu(null)
//     }, 120)
//   }, [isHoveringButton])

//   const toggleDropdown = useCallback((name) => {
//     setOpenDropdown((prev) => (prev === name ? null : name))
//   }, [])

//   const handleMobileClose = useCallback(() => {
//     setOpen(false)
//   }, [])

//   return (
//     <header
//       ref={navRef}
//       className={`relative z-50 w-full transition-all duration-300 ease-in-out border-b border-gray-200/60 ${
//         scrolled
//           ? "bg-[#f8f9fa]/95 backdrop-blur-xl shadow-sm"
//           : "bg-[#f8f9fa]"
//       }`}
//     >
//       <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-4 font-sans">

//         {/* Logo */}
//         <Link href="/" className="group flex items-center">
//           <Image
//             src="/logo.png"
//             height={38}
//             width={38}
//             alt="Logo"
//             className="transition-transform duration-200 group-hover:scale-105"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8 lg:gap-10">
//           <Link
//             href="/"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150"
//           >
//             Home
//           </Link>

//           <Link
//             href="/about"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150"
//           >
//             About
//           </Link>

//           {/* Services Nav Trigger */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleButtonEnter("services")}
//             onMouseLeave={handleButtonLeave}
//           >
//             <Link
//               href="/services"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150 flex items-center gap-1.5 py-1"
//               aria-expanded={hoveredMenu === "services"}
//               aria-haspopup="menu"
//             >
//               Services
//               <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "services" ? "rotate-180" : ""}`} />
//             </Link>
//           </div>

//           {/* Case Studies Nav Trigger */}
//           <div
//             className="relative"
//             onMouseEnter={() => handleButtonEnter("case-studies")}
//             onMouseLeave={handleButtonLeave}
//           >
//             <Link
//               href="/case-studies"
//               className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150 flex items-center gap-1.5 py-1"
//               aria-expanded={hoveredMenu === "case-studies"}
//               aria-haspopup="menu"
//             >
//               Case Studies
//               <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "case-studies" ? "rotate-180" : ""}`} />
//             </Link>
//           </div>

//           <Link
//             href="/projects"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150"
//           >
//             Projects
//           </Link>

//           <Link
//             href="/contact"
//             className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150"
//           >
//             Team
//           </Link>
//         </div>

//         {/* CTA Button */}
//         <div className="hidden md:flex items-center">
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#141b26] hover:bg-[#1e2736] text-white text-[13px] font-medium tracking-wider rounded-full shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 uppercase"
//           >
//             GET STARTED <FiArrowUpRight className="h-4 w-4 stroke-[2]" />
//           </Link>
//         </div>

//         {/* Mobile Menu Trigger */}
//         <button
//           className="md:hidden p-2 rounded-lg hover:bg-gray-200/50 transition-all duration-150"
//           onClick={() => setOpen(true)}
//           aria-label="Open menu"
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//         >
//           <FiMenu className="h-6 w-6 text-[#1b2b40]" />
//         </button>
//       </nav>

//       {/* Services Mega Dropdown Container */}
//       <AnimatePresence>
//         {hoveredMenu === "services" && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="absolute top-full left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl p-3.5 w-[92vw] max-w-5xl z-50 border border-gray-100/80 max-h-[85vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             onMouseEnter={handleMenuEnter}
//             onMouseLeave={handleMenuLeave}
//             role="menu"
//             aria-label="Services menu"
//           >
//             <ServicesMegaMenu services={services} setHoveredMenu={setHoveredMenu} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Case Studies Dropdown Container */}
//       <AnimatePresence>
//         {hoveredMenu === "case-studies" && (
//           <motion.div
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="absolute top-full left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl p-4 w-[90vw] max-w-xl z-50 border border-gray-100 max-h-[85vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             onMouseEnter={handleMenuEnter}
//             onMouseLeave={handleMenuLeave}
//             role="menu"
//             aria-label="Case Studies menu"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               {caseStudies.map((cs) => (
//                 <Link
//                   key={cs.title}
//                   href={cs.href}
//                   className="group p-3 rounded-xl hover:bg-gray-50 transition-all duration-150"
//                   onClick={() => setHoveredMenu(null)}
//                   role="menuitem"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="p-2 bg-[#141b26]/5 rounded-lg text-[#141b26]">
//                       <cs.icon className="h-4 w-4" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900 text-xs sm:text-sm">{cs.title}</p>
//                       <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{cs.desc}</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.15 }}
//               onClick={handleMobileClose}
//               aria-hidden="true"
//             />

//             <motion.aside
//               className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//               initial={{ x: "100%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: "100%", opacity: 0 }}
//               transition={{ type: "spring", stiffness: 350, damping: 30 }}
//               role="dialog"
//               aria-modal="true"
//               id="mobile-menu"
//             >
//               <div className="flex items-center justify-between border-b pb-4 border-gray-100">
//                 <span className="text-lg font-bold text-[#1b2b40]">Menu</span>
//                 <button
//                   className="p-2 rounded-full hover:bg-gray-100 transition-all duration-150"
//                   onClick={handleMobileClose}
//                   aria-label="Close menu"
//                 >
//                   <FiX className="h-5 w-5 text-gray-700" />
//                 </button>
//               </div>

//               <nav className="mt-6 space-y-2">
//                 <Link
//                   href="/"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   href="/about"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   About
//                 </Link>

//                 {/* Services Mobile Submenu */}
//                 <div>
//                   <button
//                     onClick={() => toggleDropdown("services")}
//                     className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     <span>Services</span>
//                     <FiChevronDown className={`transform transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
//                   </button>
//                   <AnimatePresence>
//                     {openDropdown === "services" && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         {services.map((s) => (
//                           <Link
//                             key={s.title}
//                             href={s.href}
//                             onClick={handleMobileClose}
//                             className="block p-2 text-sm text-gray-600 hover:text-black"
//                           >
//                             {s.title}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Case Studies Mobile Submenu */}
//                 <div>
//                   <button
//                     onClick={() => toggleDropdown("case-studies")}
//                     className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                   >
//                     <span>Case Studies</span>
//                     <FiChevronDown className={`transform transition-transform ${openDropdown === "case-studies" ? "rotate-180" : ""}`} />
//                   </button>
//                   <AnimatePresence>
//                     {openDropdown === "case-studies" && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="pl-4 overflow-hidden"
//                       >
//                         {caseStudies.map((cs) => (
//                           <Link
//                             key={cs.title}
//                             href={cs.href}
//                             onClick={handleMobileClose}
//                             className="block p-2 text-sm text-gray-600 hover:text-black"
//                           >
//                             {cs.title}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 <Link
//                   href="/projects"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   Projects
//                 </Link>

//                 <Link
//                   href="/contact"
//                   onClick={handleMobileClose}
//                   className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
//                 >
//                   Team
//                 </Link>

//                 <div className="pt-4">
//                   <Link
//                     href="/contact"
//                     onClick={handleMobileClose}
//                     className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#141b26] text-white font-medium text-xs tracking-wider uppercase shadow-md"
//                   >
//                     GET STARTED <FiArrowUpRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </nav>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }




















"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import ProjectsMenu from "@/components/projects/projects-menu"
import {
  FiMenu,
  FiX,
  FiCode,
  FiGlobe,
  FiCloud,
  FiSmartphone,
  FiLayout,
  FiShoppingCart,
  FiChevronDown,
  FiArrowUpRight,
  FiArrowRight,
  FiCpu,
  FiBriefcase,
} from "react-icons/fi"

const services = [
  {
    icon: FiCode,
    title: "Custom Software Development",
    desc: "Bespoke software engineered from the ground up â€” MVPs, enterprise systems, APIs, and automation tools.",
    href: "/services/custom-software-development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: FiGlobe,
    title: "Web Development",
    desc: "Fast, responsive, SEO-optimized websites and web apps built with Next.js and modern frameworks.",
    href: "/services/web-development",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: FiCloud,
    title: "SaaS Development",
    desc: "Multi-tenant SaaS platforms with subscription billing, RBAC, dashboards, and scalable architecture.",
    href: "/services/saas-development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    desc: "Polished iOS & Android apps using React Native and Flutter with native-grade performance.",
    href: "/services/mobile-app-development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: FiLayout,
    title: "UI/UX Design",
    desc: "Human-centered design â€” from wireframes and prototypes to full design systems that convert.",
    href: "/services/ui-ux-design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: FiShoppingCart,
    title: "E-commerce Development",
    desc: "High-converting Shopify, headless, and custom e-commerce platforms built to maximize revenue.",
    href: "/services/ecommerce-development",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
  },
]

export function ServicesMegaMenu({ services, setHoveredMenu }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 text-[#1b2b40] p-1">
      {/* Left Column: Services Overview */}
      <div className="w-full lg:w-1/3 flex flex-col justify-between bg-[#f8f9fa] rounded-2xl p-5 border border-gray-100/80">
        <div>
          <span className="text-[10px] font-bold text-[#f2ad08] uppercase tracking-widest block mb-1">
            What We Do
          </span>
          <h3 className="text-lg font-bold mb-1.5 tracking-tight text-[#1b2b40]">
            Services
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Tailored digital services engineered to transform your business, elevate user experience, and accelerate market growth.
          </p>
          <Link
            href="/services"
            onClick={() => setHoveredMenu?.(null)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-[#1b2b40] hover:border-gray-300 hover:shadow-sm transition-all duration-150"
          >
            <span>Explore All Services</span>
            <FiArrowRight className="w-3.5 h-3.5 text-gray-500" />
          </Link>
        </div>

        {/* Strategy Spotlight Card */}
        <div className="mt-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1 group hover:border-[#f2ad08]/30 hover:shadow-md transition-all duration-150 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f2ad08] animate-pulse" />
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
              Tailored Solutions
            </span>
          </div>
          <p className="text-xs font-semibold text-gray-900 leading-snug">
            Need a custom service strategy or full digital transformation plan?
          </p>
          <span className="text-xs font-bold text-[#f2ad08] group-hover:translate-x-0.5 transition-transform duration-150 inline-flex items-center gap-1">
            Talk to an expert &rarr;
          </span>
        </div>
      </div>

      {/* Right Column: Instant Super-Smooth Hover Capability List */}
      <div className="w-full lg:w-2/3 py-1 pr-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Our Core Capabilities
            </h4>
            <div className="h-px bg-gray-100 flex-1" />
          </div>

          <div className="flex flex-col gap-1.5">
            {services.map((s, idx) => {
              const isActive = hoveredIndex === idx

              return (
                <Link
                  key={s.title}
                  href={s.href}
                  onClick={() => setHoveredMenu?.(null)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative flex items-center justify-between p-2.5 rounded-xl border transition-all duration-150 ease-out ${isActive
                      ? "bg-[#141b26] text-white border-[#141b26] shadow-lg"
                      : "bg-transparent text-[#1b2b40] border-transparent hover:bg-gray-50/80"
                    }`}
                >
                  {/* Left Side Details */}
                  <div className="flex items-center gap-3 z-10 flex-1 pr-2">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-colors duration-150 ${isActive
                          ? "bg-[#f2ad08] text-white"
                          : "bg-[#141b26]/5 text-[#1b2b40] group-hover:bg-[#141b26]/10"
                        }`}
                    >
                      <s.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p
                          className={`font-semibold text-xs sm:text-sm transition-colors duration-150 ${isActive ? "text-white" : "text-gray-900"
                            }`}
                        >
                          {s.title}
                        </p>
                        <FiArrowRight
                          className={`w-3.5 h-3.5 transition-all duration-150 ${isActive
                              ? "opacity-100 translate-x-1 text-[#f2ad08]"
                              : "opacity-0 -translate-x-1"
                            }`}
                        />
                      </div>
                      <p
                        className={`text-[11px] leading-tight mt-0.5 transition-colors duration-150 ${isActive ? "text-gray-300" : "text-gray-500"
                          }`}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Side Image Preview */}
                  {s.image && (
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-out flex-shrink-0 ${isActive
                          ? "w-20 h-12 opacity-100 ml-2 scale-100"
                          : "w-0 h-12 opacity-0 ml-0 scale-95"
                        }`}
                    >
                      <div className="w-20 h-12 rounded-lg overflow-hidden border border-white/20 shadow-sm">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Custom Proposal Banner */}
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 mt-1">
          <span>Looking for something specific?</span>
          <Link
            href="/contact"
            onClick={() => setHoveredMenu?.(null)}
            className="font-semibold text-[#f2ad08] hover:text-[#d88f07] transition-colors"
          >
            Request a Custom Proposal &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ProjectsMegaMenu({ setHoveredMenu }) {
  return <ProjectsMenu onNavigate={() => setHoveredMenu?.(null)} />
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [isHoveringButton, setIsHoveringButton] = useState(false)
  const [isHoveringMenu, setIsHoveringMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)
  const hoverTimeout = useRef(null)

  // NOTE: document.body.style.overflow = "hidden" was intentionally removed
  // so the window's main scrollbar remains completely active and visible when megamenu opens.

  useEffect(() => {
    setScrolled(window.scrollY > 8)
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const menuVariants = {
    hidden: { opacity: 0, y: 4, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.15, ease: "easeOut" } },
    exit: { opacity: 0, y: 4, scale: 0.995, transition: { duration: 0.1 } },
  }

  const hoverDelay = 50

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
    }, 120)
  }, [isHoveringMenu])

  const handleMenuEnter = useCallback(() => {
    clearTimeout(hoverTimeout.current)
    setIsHoveringMenu(true)
  }, [])

  const handleMenuLeave = useCallback(() => {
    setIsHoveringMenu(false)
    hoverTimeout.current = setTimeout(() => {
      if (!isHoveringButton) setHoveredMenu(null)
    }, 120)
  }, [isHoveringButton])

  const toggleDropdown = useCallback((name) => {
    setOpenDropdown((prev) => (prev === name ? null : name))
  }, [])

  const handleMobileClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <header
      ref={navRef}
      className={`relative z-50 w-full transition-all duration-300 ease-in-out border-b border-gray-200/60 ${scrolled
          ? "bg-[#f8f9fa]/95 backdrop-blur-xl shadow-sm"
          : "bg-[#f8f9fa]"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-8 py-4 font-sans">

        {/* Logo */}
        <Link href="/" className="group flex items-center">
          <Image
            src="/logo.png"
            height={38}
            width={38}
            alt="Logo"
            className="transition-transform duration-200 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/"
            className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150"
          >
            About
          </Link>

          {/* Services Nav Trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleButtonEnter("services")}
            onMouseLeave={handleButtonLeave}
          >
            <Link
              href="/services"
              className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150 flex items-center gap-1.5 py-1"
              aria-expanded={hoveredMenu === "services"}
              aria-haspopup="menu"
            >
              Services
              <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "services" ? "rotate-180" : ""}`} />
            </Link>
          </div>

          {/* Projects Nav Trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleButtonEnter("projects")}
            onMouseLeave={handleButtonLeave}
          >
            <Link
              href="/projects"
              className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150 flex items-center gap-1.5 py-1"
              aria-expanded={hoveredMenu === "projects"}
              aria-haspopup="menu"
            >
              Our Projects
              <FiChevronDown className={`h-4 w-4 text-[#1b2b40]/70 transition-transform duration-200 ${hoveredMenu === "projects" ? "rotate-180" : ""}`} />
            </Link>
          </div>

          <Link
            href="/contact"
            className="text-[#1b2b40] hover:text-black font-normal text-[16px] tracking-tight transition-colors duration-150"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#141b26] hover:bg-[#1e2736] text-white text-[13px] font-medium tracking-wider rounded-full shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 uppercase"
          >
            GET STARTED <FiArrowUpRight className="h-4 w-4 stroke-[2]" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200/50 transition-all duration-150"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <FiMenu className="h-6 w-6 text-[#1b2b40]" />
        </button>
      </nav>

      {/* Services Mega Dropdown Container */}
      <AnimatePresence>
        {hoveredMenu === "services" && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl p-3.5 w-[92vw] max-w-5xl z-50 border border-gray-100/80 max-h-[85vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuLeave}
            role="menu"
            aria-label="Services menu"
          >
            <ServicesMegaMenu services={services} setHoveredMenu={setHoveredMenu} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects Dropdown Container */}
      <AnimatePresence>
        {hoveredMenu === "projects" && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl p-4 w-[92vw] max-w-2xl z-50 border border-gray-100 max-h-[85vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuLeave}
            role="menu"
            aria-label="Our projects menu"
          >
            <ProjectsMegaMenu setHoveredMenu={setHoveredMenu} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={handleMobileClose}
              aria-hidden="true"
            />

            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white p-6 shadow-2xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              role="dialog"
              aria-modal="true"
              id="mobile-menu"
            >
              <div className="flex items-center justify-between border-b pb-4 border-gray-100">
                <span className="text-lg font-bold text-[#1b2b40]">Menu</span>
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-all duration-150"
                  onClick={handleMobileClose}
                  aria-label="Close menu"
                >
                  <FiX className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              <nav className="mt-6 space-y-2">
                <Link
                  href="/"
                  onClick={handleMobileClose}
                  className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={handleMobileClose}
                  className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
                >
                  About
                </Link>

                {/* Services Mobile Submenu */}
                <div>
                  <button
                    onClick={() => toggleDropdown("services")}
                    className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
                  >
                    <span>Services</span>
                    <FiChevronDown className={`transform transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 overflow-hidden"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={handleMobileClose}
                            className="block p-2 text-sm text-gray-600 hover:text-black"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Projects Mobile Submenu */}
                <div>
                  <button
                    onClick={() => toggleDropdown("projects")}
                    className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
                  >
                    <span>Our Projects</span>
                    <FiChevronDown className={`transform transition-transform ${openDropdown === "projects" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === "projects" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 space-y-3 pt-2 pb-2 overflow-hidden text-xs"
                      >
                        <ProjectsMenu compact onNavigate={handleMobileClose} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>



                <Link
                  href="/contact"
                  onClick={handleMobileClose}
                  className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-[#1b2b40]"
                >
                  Contact
                </Link>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    onClick={handleMobileClose}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#141b26] text-white font-medium text-xs tracking-wider uppercase shadow-md"
                  >
                    GET STARTED <FiArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
