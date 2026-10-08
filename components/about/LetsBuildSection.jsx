"use client"

import { useEffect, useRef, useState } from "react"

export default function LetsBuildSection() {
    const sectionRef = useRef(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    const text = "LET'S BUILD SOMETHING TOGETHER"
    const words = text.split(" ")

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return
            const rect = sectionRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Delay start until section has scrolled comfortably into view (~65% from top)
            const startPoint = windowHeight * 0.65
            // Finish animation when text reaches ~25% from top of screen
            const endPoint = windowHeight * 0.25

            const totalDist = startPoint - endPoint
            const currentDist = startPoint - rect.top

            let progress = currentDist / totalDist
            progress = Math.min(1, Math.max(0, progress))

            setScrollProgress(progress)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // Initial check

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#F5F5F7] text-[#111111] antialiased overflow-hidden font-sans py-28 md:py-40 border-t border-neutral-200/60"
        >
            {/* Background Column Lines */}
            <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 h-full">
                <div className="border-r border-neutral-200/50 h-full" />
                <div className="border-r border-neutral-200/50 h-full hidden md:block" />
                <div className="border-r border-neutral-200/50 h-full hidden md:block" />
                <div className="border-r border-neutral-200/50 h-full" />
                <div className="border-r border-neutral-200/50 h-full hidden md:block" />
                <div className="border-r border-neutral-200/50 h-full hidden md:block" />
                <div className="border-r border-neutral-200/50 h-full" />
                <div className="border-r border-neutral-200/50 h-full hidden md:block" />
                <div className="border-r border-neutral-200/50 h-full hidden md:block" />
                <div className="border-r border-neutral-200/50 h-full hidden md:block" />
                <div className="border-r border-neutral-200/50 h-full hidden md:block" />
                <div className="h-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-start">
                {/* Subtitle Tag */}
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-400 uppercase mb-6 block">
                    NEXT STEPS
                </span>

                {/* Big Animated Heading (Left-to-Right Reveal) */}
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] uppercase">
                    {words.map((word, wordIdx) => {
                        return (
                            <span key={wordIdx} className="inline-block mr-[0.25em] last:mr-0">
                                {word.split("").map((char, charIdx) => {
                                    const totalChars = text.replace(/\s+/g, "").length
                                    
                                    const charGlobalIndex = words
                                        .slice(0, wordIdx)
                                        .reduce((acc, curr) => acc + curr.length, 0) + charIdx

                                    const charStep = 1 / totalChars
                                    const start = charGlobalIndex * charStep
                                    const end = (charGlobalIndex + 1) * charStep

                                    let opacityWeight = 0
                                    if (scrollProgress >= end) {
                                        opacityWeight = 1
                                    } else if (scrollProgress > start) {
                                        opacityWeight = (scrollProgress - start) / charStep
                                    }

                                    return (
                                        <span
                                            key={charIdx}
                                            className="inline-block transition-colors duration-100 ease-linear select-none"
                                            style={{
                                                color: opacityWeight === 1
                                                    ? "#111111"
                                                    : `rgba(200, 200, 200, ${0.35 + opacityWeight * 0.65})`,
                                            }}
                                        >
                                            {char}
                                        </span>
                                    )
                                })}
                            </span>
                        )
                    })}
                </h2>

                {/* CTA Button */}
                <div className="mt-12 sm:mt-16">
                    <a
                        href="mailto:hello@example.com"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-white font-medium text-base hover:bg-neutral-800 transition-all duration-300 shadow-sm"
                    >
                        <span>Start a project</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}