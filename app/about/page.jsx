"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import Head from "next/head"
import Image from "next/image"
import { Rocket, Telescope } from "lucide-react"

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <>
      <Head>
        <title>About VersaNex | Technology & Digital Solutions Leader</title>
        <meta
          name="description"
          content="Learn about VersaNex — a technology and digital solutions company helping businesses grow through innovative web, software, and creative strategies."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.versanex.com/about" />
      </Head>

      <Navbar />

      {/* ===== Hero Section ===== */}
      <section
        className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] 
        text-white overflow-hidden font-sans"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-cover bg-center" />
        <div className="max-w-6xl mx-auto px-6 py-28 relative z-10 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            About <span className="text-[#f2ad08]">VersaNex</span>
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-[3px] bg-[#f2ad08] mx-auto rounded-full"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mt-8 text-lg text-gray-300 leading-relaxed"
          >
            Empowering innovation in technology and digital transformation —
            VersaNex turns ideas into intelligent, high-impact digital realities.
          </motion.p>
        </div>
      </section>

      {/* ===== About VersaNex Section ===== */}
      <section className="bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Who We Are
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[3px] bg-[#f2ad08] mx-auto rounded-full mb-12"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 text-justify">
              <p>
                VersaNex has evolved into a leader in digital transformation,
                offering cutting-edge IT and creative solutions for both private
                and government organizations.
              </p>
              <p>
                From software engineering to digital marketing, we deliver
                technology that drives growth and creates measurable impact.
              </p>
              <p>
                Our global footprint and expertise in Microsoft, MERN Stack,
                Adobe, and WordPress technologies empower us to provide scalable,
                secure, and innovative solutions for modern businesses.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="https://res.cloudinary.com/dbbbve4y4/image/upload/v1760972794/about-min_peop91.png"
                alt="VersaNex technology team working together"
                fill
                priority={false}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== Mission & Vision Section ===== */}
      <section className="bg-gray-50 text-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, hover: { duration: 0.3 } }}
              className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10  bg-cover bg-center" />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-[#f2ad08] mr-2" />
                  <motion.h2
                    className="text-3xl md:text-4xl font-extrabold text-gray-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Our Mission
                  </motion.h2>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8 }}
                  className="h-[3px] bg-[#f2ad08] mx-auto rounded-full mb-6"
                />
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                  Our mission is to empower businesses with transformative digital
                  solutions that redefine growth and efficiency. We specialize in web
                  development, branding, SEO, and marketing to build lasting digital
                  ecosystems that elevate brands and connect them with their audience.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.2, hover: { duration: 0.3 } }}
              className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10  bg-cover bg-center" />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <Telescope className="w-8 h-8 text-[#f2ad08] mr-2" />
                  <motion.h2
                    className="text-3xl md:text-4xl font-extrabold text-gray-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Our Vision
                  </motion.h2>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8 }}
                  className="h-[3px] bg-[#f2ad08] mx-auto rounded-full mb-6"
                />
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                  To be a global innovator that bridges creativity and technology,
                  shaping the future of digital solutions with integrity, innovation,
                  and excellence — empowering every business to thrive in the digital
                  era.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}