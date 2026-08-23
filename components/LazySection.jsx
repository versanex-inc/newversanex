"use client"

import { useState, useEffect, useRef } from "react"

export default function LazySection({ children, minHeight = "300px", rootMargin = "400px" }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Defer mounting until scrolled into view or during idle time
    const idleId = typeof window.requestIdleCallback === "function"
      ? window.requestIdleCallback(() => setIsVisible(true), { timeout: 3500 })
      : setTimeout(() => setIsVisible(true), 3500)

    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
      if (typeof window.cancelIdleCallback === "function" && typeof idleId === "number") {
        window.cancelIdleCallback(idleId)
      } else {
        clearTimeout(idleId)
      }
    }
  }, [rootMargin])

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : minHeight }}>
      {isVisible ? children : null}
    </div>
  )
}
