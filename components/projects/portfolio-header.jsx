

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
