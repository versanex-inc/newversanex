"use client"

import { ReactLenis } from "lenis/react"

/*
  Wraps the app in Lenis's virtualized scroll. This is what the "always buttery,
  no matter how fast/far you scroll" inspiration sites are actually built on —
  native browser wheel scrolling moves in discrete steps, and no amount of
  spring-smoothing applied AFTER the fact (in Hero.jsx) can fully erase that,
  because the raw input itself is already stepped. Lenis intercepts the
  wheel/touch input directly and produces a continuously interpolated scroll
  position every frame instead, which framer-motion's useScroll() then reads
  from transparently — no changes needed anywhere else that reads scroll
  position.

  Tuning:
  - lerp: how quickly the virtual scroll "catches up" to the real input.
    Lower = smoother/floatier, higher = snappier/more direct. 0.1 is a good
    balance for scroll-jacked sections like the Hero.
  - duration: only used for lenis.scrollTo() programmatic scrolls (e.g. nav
    links), not for wheel/touch input.
  - smoothWheel: turns on the interpolation for mouse wheel input (the main
    fix for the "stuck/laggy" feel).
*/
export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  )
}