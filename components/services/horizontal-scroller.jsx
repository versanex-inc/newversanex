"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function HorizontalScroller({ items }) {
  const scrollerRef = useRef(null)
  const itemsRef = useRef([])
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    gsap.from(itemsRef.current, {
      opacity: 0,
      x: 30,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out",
    })

    checkScroll()
  }, [])

  const checkScroll = () => {
    if (!scrollerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scroll = (direction) => {
    if (!scrollerRef.current) return

    const scrollAmount = 300
    const newScrollLeft = scrollerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

    gsap.to(scrollerRef.current, {
      scrollLeft: newScrollLeft,
      duration: 0.6,
      ease: "power2.inOut",
      onUpdate: checkScroll,
    })
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
        onScroll={checkScroll}
      >
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el
            }}
            className="flex-shrink-0 px-6 py-4 bg-white rounded-lg border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all duration-300 whitespace-nowrap font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6 justify-center">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="p-3 rounded-lg bg-slate-100 hover:bg-amber-500 text-slate-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          aria-label="Scroll left"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="p-3 rounded-lg bg-slate-100 hover:bg-amber-500 text-slate-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          aria-label="Scroll right"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
