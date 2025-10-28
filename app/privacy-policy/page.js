

"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const privacyData = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you request our services, create an account, or contact us. This includes your name, email address, phone number, company information, and project details. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and pages visited.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services, process transactions, send transactional and promotional communications, respond to your inquiries, and comply with legal obligations. We use your information to deliver website development, digital marketing, content writing, e-commerce solutions, video editing, graphic design, and software quality assurance services.",
  },
  {
    title: "3. Information Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may disclose information when required by law or to protect our rights and safety.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.",
  },
  {
    title: "5. Cookies and Tracking",
    content:
      "Our website uses cookies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. You can control cookie settings through your browser. We also use analytics tools to track website performance and user behavior.",
  },
  {
    title: "6. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites before providing your personal information.",
  },
  {
    title: "7. Your Privacy Rights",
    content:
      "You have the right to access, update, or delete your personal information. You can opt-out of promotional communications at any time. Depending on your location, you may have additional rights under applicable privacy laws such as GDPR or CCPA. Contact us to exercise these rights.",
  },
  {
    title: "8. Children's Privacy",
    content:
      "Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.",
  },
  {
    title: "9. Views and Reviews",
    content:
      "Some of the views, ratings, or reviews displayed on this website are automatically generated or simulated for demonstration purposes. They do not necessarily represent real user feedback.",
  },
  {
    title: "10. International Data Transfers",
    content:
      "Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our services, you consent to the transfer of your information to countries outside your country of residence.",
  },
  {
    title: "11. Changes to This Policy",
    content:
      'We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.',
  },
  {
    title: "12. Contact Us",
    content:
      "If you have questions about this privacy policy or our privacy practices, please contact us at privacy@versanex.com or through our contact form. We will respond to your inquiry within 30 days. You can also reach out to our Data Protection Officer for privacy-related concerns.",
  },
]

export default function PrivacyPolicyPage() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-yellow-100 px-4 py-2 shadow-sm"
            >
              <span className="text-sm font-semibold text-yellow-800">Privacy</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-slate-600 md:text-xl"
            >
              We are committed to protecting your privacy. Learn how we collect, use, and safeguard your information.
            </motion.p>
          </div>
        </motion.section>

        {/* Content */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="space-y-4">
            {privacyData.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-lg"
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  aria-expanded={expandedIndex === index}
                  aria-controls={`privacy-section-${index}`}
                >
                  <span className="text-base font-semibold text-slate-900 md:text-lg">{section.title}</span>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-yellow-600" />
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div id={`privacy-section-${index}`} className="border-t border-slate-200 px-6 py-5 text-base text-slate-600 leading-relaxed md:text-lg">
                    {section.content}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🔒",
                title: "Secure",
                desc: "Your data is encrypted and protected with industry-standard security measures.",
              },
              {
                icon: "🛡️",
                title: "Compliant",
                desc: "We comply with GDPR, CCPA, and other international privacy regulations.",
              },
              {
                icon: "👤",
                title: "Transparent",
                desc: "We are transparent about how we collect and use your personal information.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-base text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Last Updated */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm">
            <p className="text-base text-slate-700 md:text-lg">
              <span className="font-semibold text-slate-900">Last Updated:</span> October 2024. This privacy policy is
              effective immediately and will remain in effect except with respect to any changes in its provisions in the
              future, which will be in effect immediately upon posting to the website.
            </p>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl bg-[#fff8e7] px-8 py-12 text-center shadow-md transition-all hover:shadow-xl border border-yellow-100">
            <h3 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Have questions about our privacy practices?
            </h3>
            <p className="mb-8 text-slate-600 md:text-lg max-w-2xl mx-auto">
              Our team is here to provide clear answers. Contact us for any privacy-related inquiries.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-slate-900 shadow-sm transition-all hover:bg-yellow-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}