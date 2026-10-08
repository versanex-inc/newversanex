"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Target, PenTool, Code2, ShieldCheck, Rocket, TrendingUp, ArrowUpRight } from "lucide-react"
import styles from "./process-flow.module.css"

const steps = [
  { title: "Discovery & Strategy", description: "We get to know your business, your audience, and what success looks like. Every great project starts with the right questions.", outcome: "A clear direction", icon: Target },
  { title: "Planning & Design", description: "We turn insights into a thoughtful roadmap and intuitive designs, so you can see the experience before we build it.", outcome: "A blueprint for your vision", icon: PenTool },
  { title: "Development", description: "We bring the design to life with clean, scalable code and keep you involved as your product takes shape.", outcome: "A product built to perform", icon: Code2 },
  { title: "Testing & QA", description: "We check the details, test across devices, and refine performance, usability, and security before launch.", outcome: "Confidence in every detail", icon: ShieldCheck },
  { title: "Launch & Deploy", description: "We handle the final preparations and deployment, making sure your move from development to launch runs smoothly.", outcome: "Ready for the real world", icon: Rocket },
  { title: "Support & Growth", description: "We stay by your side with ongoing support, thoughtful improvements, and the tools to scale as your business grows.", outcome: "A partnership that continues", icon: TrendingUp },
]

const clamp = value => Math.min(1, Math.max(0, value))

export default function ProcessFlow() {
  const timelineRef = useRef(null)
  const currentRef = useRef(null)
  const stepRefs = useRef([])

  useEffect(() => {
    const timeline = timelineRef.current
    const rows = stepRefs.current.filter(Boolean)
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = null

    const update = () => {
      frame = null
      const viewport = window.innerHeight
      const bounds = timeline.getBoundingClientRect()
      const reduced = motionPreference.matches
      const rowBounds = rows.map(row => row.getBoundingClientRect())
      const progress = reduced ? 1 : clamp((viewport * 0.6 - bounds.top - 22) / Math.max(1, bounds.height - 44))
      let active = 0
      rowBounds.forEach((rect, index) => {
        if (rect.top <= viewport * 0.6) active = index
      })

      timeline.style.setProperty("--timeline-progress", String(progress))
      rows.forEach((row, index) => {
        const reveal = reduced ? 1 : clamp((viewport * 0.92 - rowBounds[index].top) / (viewport * 0.37))
        row.style.setProperty("--step-opacity", String(0.22 + reveal * 0.78))
        row.style.setProperty("--step-offset", `${(1 - reveal) * 22}px`)
        row.dataset.active = String(index === active)
        row.dataset.complete = String(index < active)
        if (index === active) row.setAttribute("aria-current", "step")
        else row.removeAttribute("aria-current")
      })
      currentRef.current.textContent = String(active + 1).padStart(2, "0")
    }

    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    motionPreference.addEventListener("change", schedule)

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      motionPreference.removeEventListener("change", schedule)
    }
  }, [])

  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>How we work</p>
            <h2 id="process-heading" className={styles.heading}>Our step-by-step<br /><span>process.</span></h2>
            <p className={styles.introCopy}>A proven methodology that ensures successful project delivery from start to finish.</p>
            <div className={styles.progressLabel} aria-hidden="true">
              <span ref={currentRef}>01</span><span className={styles.progressDivider} /><span>06</span>
            </div>
            <p className={styles.caption}>Six considered steps.<br />One shared vision.</p>
          </div>

          <ol ref={timelineRef} className={styles.timeline}>
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <li key={step.title} ref={element => { stepRefs.current[index] = element }} className={styles.step}>
                  <span className={styles.marker} aria-hidden="true" />
                  <div className={styles.stepContent}>
                    <div className={styles.stepTop}>
                      <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                      <Icon className={styles.icon} size={27} strokeWidth={1.25} aria-hidden="true" />
                    </div>
                    <h3>{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                    <p className={styles.outcome}><span>Outcome</span>{step.outcome}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className={styles.footer}>
          <p>Have a project in mind?<span>Let&apos;s take the first step together.</span></p>
          <Link href="/contact" className={styles.cta}>Begin your project <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  )
}
