"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiAlertTriangle } from "react-icons/fi";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function NotFound() {
  return (
    <><Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-center px-6">
      {/* Animated icon */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 10 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative"
      >
        <div className="absolute -inset-8 bg-[#f2ad08]/20 rounded-full blur-3xl animate-pulse" />
        <FiAlertTriangle className="text-[#f2ad08] text-[100px] relative z-10 drop-shadow-lg" />
      </motion.div>

      {/* Animated text */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 text-7xl font-extrabold text-gray-900 tracking-tight"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-4 text-lg sm:text-xl text-gray-600 max-w-md"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Animated button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[#f2ad08] hover:bg-[#d88f07] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FiHome className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>

      {/* Floating animation elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mt-16"
      >
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} VersaNex — Crafted with 💛
        </p>
      </motion.div>
    </div>
    <Footer/></>
  );
}
