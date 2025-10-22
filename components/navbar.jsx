
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