"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1]

export default function IntroOverlay({ onComplete, onZoomStart }) {
  const overlayRef = useRef(null)
  const frameRef = useRef(null)
  const videoRef = useRef(null)
  const callbacks = useRef({ onComplete, onZoomStart })
  const sequence = useRef({ started: false, cancelled: false, timer: null, animations: [] })
  const [zooming, setZooming] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    callbacks.current = { onComplete, onZoomStart }
  }, [onComplete, onZoomStart])

  useEffect(() => {
    const current = sequence.current
    current.cancelled = false
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.defaultMuted = true
      video.play()?.catch(() => {})
    }
    return () => {
      current.cancelled = true
      clearTimeout(current.timer)
      current.animations.forEach(animation => animation.cancel())
    }
  }, [])

  const skipIntro = () => {
    const current = sequence.current
    if (current.cancelled) return
    current.cancelled = true
    clearTimeout(current.timer)
    current.animations.forEach(animation => animation.cancel())
    callbacks.current.onZoomStart?.()
    callbacks.current.onComplete?.()
  }

  const beginZoom = () => {
    const current = sequence.current
    if (current.started || current.cancelled) return
    current.started = true

    // Let the completed WE / video / ARE composition breathe before expanding.
    current.timer = setTimeout(async () => {
      if (current.cancelled) return
      const frame = frameRef.current
      const overlay = overlayRef.current
      if (!frame || !overlay) return
      setZooming(true)
      callbacks.current.onZoomStart?.()

      try {
        if (!reducedMotion) {
          const rect = frame.getBoundingClientRect()
          const viewport = overlay.getBoundingClientRect()
          // A uniform scale preserves the video proportions and covers every edge,
          // including tall mobile screens. No width/height layout work during zoom.
          const scale = Math.max(viewport.width / rect.width, viewport.height / rect.height) * 1.01
          const x = viewport.left + viewport.width / 2 - (rect.left + rect.width / 2)
          const y = viewport.top + viewport.height / 2 - (rect.top + rect.height / 2)
          Object.assign(frame.style, {
            position: "fixed", left: `${rect.left}px`, top: `${rect.top}px`,
            width: `${rect.width}px`, height: `${rect.height}px`, zIndex: "20",
          })
          const zoom = frame.animate([
            { transform: "translate3d(0, 0, 0) scale(1)", borderRadius: "16px" },
            { transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`, borderRadius: "0px" },
          ], { duration: 2200, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "forwards" })
          current.animations.push(zoom)
          await zoom.finished
          if (current.cancelled) return
          await new Promise(resolve => { current.timer = setTimeout(resolve, 300) })
        }
        if (current.cancelled) return
        // The homepage is already revealed beneath the fully expanded video.
        const handoff = overlay.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: reducedMotion ? 250 : 900,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards",
        })
        current.animations.push(handoff)
        await handoff.finished
        if (!current.cancelled) callbacks.current.onComplete?.()
      } catch {
        // Animation cancellation during navigation must not update an unmounted hero.
        if (!current.cancelled) callbacks.current.onComplete?.()
      }
    }, reducedMotion ? 100 : 450)
  }

  const wordMotion = (delay, y) => ({
    initial: { opacity: 0, y: reducedMotion ? 0 : y },
    animate: { opacity: zooming ? 0 : 1, y: zooming && !reducedMotion ? -15 : 0 },
    transition: { delay: zooming || reducedMotion ? 0 : delay, duration: zooming ? 0.55 : 0.45, ease },
  })

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-[99999] bg-[#0a0a0a] text-white overflow-hidden select-none flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
    >
      <button
        type="button"
        onClick={skipIntro}
        className="absolute right-5 top-5 sm:right-8 sm:top-8 z-30 inline-flex min-h-11 items-center gap-3 rounded-full border border-white/20 bg-black/30 px-5 py-2.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-md transition-colors duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black cursor-pointer"
      >
        Skip intro
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 5 7 7-7 7M20 5v14" />
        </svg>
      </button>
      <div aria-hidden="true" className="flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto space-y-1 sm:space-y-3 px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-5 md:gap-8 flex-nowrap w-full">
          <motion.span className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-none tracking-tight uppercase text-white font-sans shrink-0" {...wordMotion(0.1, 25)}>WE</motion.span>
          <motion.div
            className="relative shrink-0"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "clamp(90px, 18vw, 250px)", opacity: 1 }}
            transition={{ delay: reducedMotion ? 0 : 1, duration: reducedMotion ? 0.2 : 0.55, ease }}
            onAnimationComplete={beginZoom}
            style={{ height: "clamp(60px, 12vw, 150px)" }}
          >
            <div ref={frameRef} className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900" style={{ transformOrigin: "center", willChange: "transform" }}>
              <video ref={videoRef} src="/hero-video.mp4" poster="/hero-showcase.jpg" muted loop autoPlay playsInline preload="auto" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.span className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-none tracking-tight uppercase text-white font-sans shrink-0" {...wordMotion(0.4, 25)}>ARE</motion.span>
        </div>
        <div className="overflow-hidden py-1 w-full">
          <motion.div className="font-black text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] leading-none tracking-tight uppercase text-white font-sans shrink-0" {...wordMotion(0.7, 35)}>VERSANEX</motion.div>
        </div>
      </div>
    </motion.div>
  )
}
