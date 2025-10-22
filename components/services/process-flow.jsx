
"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { FaBullseye, FaClipboardList, FaCog, FaCheck, FaRocket, FaChartLine, FaArrowRight } from "react-icons/fa"

export default function ProcessFlow() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const stepsRef = useRef([])
  const connectorsRef = useRef([])
  const circlesRef = useRef([])

  const steps = [
    { number: 1, title: "Discovery & Strategy", description: "We understand your business goals, challenges, and vision.", icon: FaBullseye },
    { number: 2, title: "Planning & Design", description: "Create detailed roadmaps and design mockups tailored to your needs.", icon: FaClipboardList },
    { number: 3, title: "Development", description: "Build your solution with cutting-edge technologies and best practices.", icon: FaCog },
    { number: 4, title: "Testing & QA", description: "Rigorous testing ensures quality, performance, and security standards.", icon: FaCheck },
    { number: 5, title: "Launch & Deploy", description: "Seamless deployment with zero downtime and comprehensive monitoring.", icon: FaRocket },
    { number: 6, title: "Support & Growth", description: "Ongoing support, optimization, and scaling as your business grows.", icon: FaChartLine },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title
            gsap.fromTo(
              titleRef.current,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )

            // Animate circles
            gsap.fromTo(
              circlesRef.current,
              { opacity: 0, scale: 0 },
              { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out" }
            )

            // Animate step cards
            gsap.fromTo(
              stepsRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
            )

            // Animate connectors
            connectorsRef.current.forEach((connector, index) => {
              if (!connector) return
              const length = connector.getTotalLength()
              connector.style.strokeDasharray = length
              connector.style.strokeDashoffset = length
              gsap.to(connector, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut", delay: 0.2 * index })
            })

            // Add hover animations to steps
            stepsRef.current.forEach((step) => {
              if (!step) return
              step.addEventListener("mouseenter", () =>
                gsap.to(step, { y: -8, boxShadow: "0 20px 40px rgba(244,165,0,0.2)", duration: 0.3, ease: "power2.out" })
              )
              step.addEventListener("mouseleave", () =>
                gsap.to(step, { y: 0, boxShadow: "0 4px 6px rgba(0,0,0,0.07)", duration: 0.3, ease: "power2.out" })
              )
            })

            observer.disconnect() // Stop observing after animation triggered
          }
        })
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Our Step-by-Step Process</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from start to finish
          </p>
        </div>

        {/* Desktop Horizontal Flow */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <svg className="absolute top-10 left-1/2 w-full h-2 -z-10" style={{ height: "2px", width: "100%" }}>
                      <line
                        ref={(el) => (connectorsRef.current[index] = el)}
                        x1="0" y1="1" x2="100%" y2="1"
                        stroke="#F4A500"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}

                  {/* Circle */}
                  <div
                    ref={(el) => (circlesRef.current[index] = el)}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-3xl shadow-lg mb-8 border-4 border-white"
                  >
                    <Icon className="text-white w-8 h-8" />
                  </div>

                  {/* Step Card */}
                  <div
                    ref={(el) => (stepsRef.current[index] = el)}
                    className="w-full bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-400 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <h3 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Vertical Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex gap-6">
                {/* Circle & Connector */}
                <div className="flex flex-col items-center">
                  <div
                    ref={(el) => (circlesRef.current[index] = el)}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-2xl shadow-lg border-4 border-white flex-shrink-0"
                  >
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  {index < steps.length - 1 && <div className="w-1 h-12 bg-gradient-to-b from-amber-400 to-amber-200 mt-2" />}
                </div>

                {/* Card */}
                <div
                  ref={(el) => (stepsRef.current[index] = el)}
                  className="flex-1 bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-400 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-600 mb-8">Ready to start your journey with us?</p>
          <button className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Begin Your Project
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
