"use client"
import { motion } from "framer-motion"
export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Glowing orbs background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12">
        {/* Logo container with animations */}
        <motion.div
          className="relative w-48 h-48 flex items-center justify-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-amber-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, linear: true }}
          />

          {/* Middle pulsing ring */}
          <motion.div
            className="absolute inset-8 rounded-full border border-amber-400/40"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Inner rotating accent */}
          <motion.div
            className="absolute inset-16 rounded-full border border-amber-300/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, linear: true }}
          />

          {/* V Logo SVG */}
          <motion.svg
            viewBox="0 0 200 200"
            className="w-32 h-32 relative z-20"
            animate={{
              filter: [
                "drop-shadow(0 0 10px rgba(251, 191, 36, 0.4))",
                "drop-shadow(0 0 25px rgba(251, 191, 36, 0.8))",
                "drop-shadow(0 0 10px rgba(251, 191, 36, 0.4))",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            {/* V Shape - Left stroke */}
            <path
              d="M 50 40 L 100 140"
              stroke="#fbbf24"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* V Shape - Right stroke */}
            <path
              d="M 150 40 L 100 140"
              stroke="#fbbf24"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

          {/* Center glow dot */}
          {/* <motion.div
            className="absolute w-8 h-8 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              boxShadow: [
                "0 0 20px rgba(251, 191, 36, 0.5)",
                "0 0 50px rgba(251, 191, 36, 1)",
                "0 0 20px rgba(251, 191, 36, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          /> */}
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="flex flex-col items-center gap-6"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <p className="text-amber-300 font-light tracking-[0.2em] text-lg uppercase">Loading</p>

          {/* Animated dots */}
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 bg-amber-400 rounded-full"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating particles around logo */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-400/50 rounded-full"
            animate={{
              x: [0, Math.cos((i / 6) * Math.PI * 2) * 80, 0],
              y: [0, Math.sin((i / 6) * Math.PI * 2) * 80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(251,191,36,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  )
}
