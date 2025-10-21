// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.2,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 15 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// }

// const termsData = [
//   {
//     title: "1. Acceptance of Terms",
//     content:
//       "By accessing and using VersaNex services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
//   },
//   {
//     title: "2. Use License",
//     content:
//       'Permission is granted to temporarily download one copy of the materials (information or software) on VersaNex website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.',
//   },
//   {
//     title: "3. Disclaimer",
//     content:
//       'The materials on VersaNex website are provided on an "as is" basis. VersaNex makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
//   },
//   {
//     title: "4. Limitations",
//     content:
//       "In no event shall VersaNex or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VersaNex website, even if VersaNex or an authorized representative has been notified orally or in writing of the possibility of such damage.",
//   },
//   {
//     title: "5. Accuracy of Materials",
//     content:
//       "The materials appearing on VersaNex website could include technical, typographical, or photographic errors. VersaNex does not warrant that any of the materials on its website are accurate, complete, or current. VersaNex may make changes to the materials contained on its website at any time without notice.",
//   },
//   {
//     title: "6. Links",
//     content:
//       "VersaNex has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by VersaNex of the site. Use of any such linked website is at the user's own risk.",
//   },
//   {
//     title: "7. Modifications",
//     content:
//       "VersaNex may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
//   },
//   {
//     title: "8. Governing Law",
//     content:
//       "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which VersaNex operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
//   },
//   {
//     title: "9. Service Delivery",
//     content:
//       "VersaNex commits to delivering high-quality services including website development, digital marketing, content writing, e-commerce solutions, video editing, graphic design, and software quality assurance. Project timelines and deliverables will be specified in individual service agreements.",
//   },
//   {
//     title: "10. Payment Terms",
//     content:
//       "Payment terms will be outlined in individual project agreements. We accept various payment methods and require deposits for project initiation. Invoices are due within 30 days of issuance unless otherwise specified.",
//   },
// ]

// export default function TermsOfUsePage() {
//   const [expandedIndex, setExpandedIndex] = useState(0)

//   return (
//     <>
//     <Navbar/>
//     <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
//       {/* Header */}
//       <motion.section
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
//       >
//         <div className="mx-auto max-w-4xl text-center">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="mb-4 inline-block rounded-full bg-yellow-100 px-4 py-2"
//           >
//             <span className="text-sm font-semibold text-yellow-800">Legal</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl"
//           >
//             Terms of Use
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-lg text-slate-600"
//           >
//             Please read these terms carefully before using our services. Last updated: October 2024
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* Content */}
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"
//       >
//         <div className="space-y-4">
//           {termsData.map((term, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
//             >
//               <button
//                 onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
//                 className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-slate-50"
//               >
//                 <span className="font-semibold text-slate-900">{term.title}</span>
//                 <motion.div
//                   animate={{ rotate: expandedIndex === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-yellow-600"
//                 >
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                   </svg>
//                 </motion.div>
//               </button>

//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{
//                   height: expandedIndex === index ? "auto" : 0,
//                   opacity: expandedIndex === index ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div className="border-t border-slate-200 px-6 py-4 text-slate-600 leading-relaxed">{term.content}</div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Footer Note */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"
//       >
//         <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
//           <p className="text-sm text-slate-700">
//             <span className="font-semibold text-slate-900">Note:</span> These terms of use are subject to change at any
//             time. We recommend reviewing this page periodically for updates. Your continued use of our services
//             constitutes acceptance of any changes.
//           </p>
//         </div>
//       </motion.section>
//     </main>
//     <Footer/>
//     </>
//   )
// }













"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

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

const termsData = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using VersaNex services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
  },
  {
    title: "2. Use License",
    content:
      'Permission is granted to temporarily download one copy of the materials (information or software) on VersaNex website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.',
  },
  {
    title: "3. Disclaimer",
    content:
      'The materials on VersaNex website are provided on an "as is" basis. VersaNex makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
  },
  {
    title: "4. Limitations",
    content:
      "In no event shall VersaNex or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VersaNex website, even if VersaNex or an authorized representative has been notified orally or in writing of the possibility of such damage.",
  },
  {
    title: "5. Accuracy of Materials",
    content:
      "The materials appearing on VersaNex website could include technical, typographical, or photographic errors. VersaNex does not warrant that any of the materials on its website are accurate, complete, or current. VersaNex may make changes to the materials contained on its website at any time without notice.",
  },
  {
    title: "6. Links",
    content:
      "VersaNex has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by VersaNex of the site. Use of any such linked website is at the user's own risk.",
  },
  {
    title: "7. Modifications",
    content:
      "VersaNex may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
  },
  {
    title: "8. Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which VersaNex operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
  },
  {
    title: "9. Service Delivery",
    content:
      "VersaNex commits to delivering high-quality services including website development, digital marketing, content writing, e-commerce solutions, video editing, graphic design, and software quality assurance. Project timelines and deliverables will be specified in individual service agreements.",
  },
  {
    title: "10. Payment Terms",
    content:
      "Payment terms will be outlined in individual project agreements. We accept various payment methods and require deposits for project initiation. Invoices are due within 30 days of issuance unless otherwise specified.",
  },
]

export default function TermsOfUsePage() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <>
      <title>Terms of Use | VersaNex</title>
      <meta name="description" content="Please read these Terms of Use carefully before using VersaNex services. Understand the rules, guidelines, and legal agreements for website development, digital marketing, e-commerce, and more." />
      <meta name="keywords" content="terms of use, terms and conditions, versa nex terms, website development terms, digital marketing agreement, service terms" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="/terms-of-use" />
      <meta property="og:title" content="Terms of Use | VersaNex" />
      <meta property="og:description" content="Please read these Terms of Use carefully before using our services including website development, digital marketing, content writing, e-commerce solutions, video editing, graphic design, and software quality assurance." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VersaNex" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Terms of Use | VersaNex" />
      <meta name="twitter:description" content="Detailed terms of use for VersaNex services. Last updated October 2024." />
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
              <span className="text-sm font-semibold text-yellow-800">Legal</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            >
              Terms of Use
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-slate-600 md:text-xl"
            >
              Please read these terms carefully before using our services. Last updated: October 2024
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
            {termsData.map((term, index) => {
              const indexKey = index;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === indexKey ? null : indexKey)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    aria-expanded={expandedIndex === indexKey}
                    aria-controls={`terms-section-${indexKey}`}
                  >
                    <span className="text-base font-semibold text-slate-900 md:text-lg">{term.title}</span>
                    <motion.div
                      animate={{
                        rotate: expandedIndex === indexKey ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-yellow-600" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedIndex === indexKey ? "auto" : 0,
                      opacity: expandedIndex === indexKey ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div id={`terms-section-${indexKey}`} className="border-t border-slate-200 px-6 py-5 text-base text-slate-600 leading-relaxed md:text-lg">
                      {term.content}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
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
                icon: "📜",
                title: "Clear",
                desc: "Our terms are written in plain language for easy understanding.",
              },
              {
                icon: "⚖️",
                title: "Fair",
                desc: "We provide fair and balanced terms that protect both parties.",
              },
              {
                icon: "🔒",
                title: "Secure",
                desc: "Your interactions with us are protected by robust security measures.",
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
              <span className="font-semibold text-slate-900">Last Updated:</span> October 2024. These terms of use are subject to change at any
              time. We recommend reviewing this page periodically for updates. Your continued use of our services
              constitutes acceptance of any changes.
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
              Questions about our Terms?
            </h3>
            <p className="mb-8 text-slate-600 md:text-lg max-w-2xl mx-auto">
              Our team is here to provide clear answers and clarifications. Get in touch today.
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