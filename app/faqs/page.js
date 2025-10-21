// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import { ChevronDown } from "lucide-react"
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// }

// const faqData = [
//   {
//     category: "Website Development",
//     questions: [
//       {
//         q: "What technologies do you use for website development?",
//         a: "We specialize in modern web technologies including Next.js, React, Node.js, and various databases. We choose the best tech stack based on your project requirements to ensure scalability, performance, and maintainability.",
//       },
//       {
//         q: "How long does a typical website project take?",
//         a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 2-3 months. We provide detailed timelines during the initial consultation.",
//       },
//       {
//         q: "Do you provide website maintenance and support?",
//         a: "Yes, we offer comprehensive maintenance packages including updates, security patches, performance optimization, and 24/7 technical support.",
//       },
//     ],
//   },
//   {
//     category: "Digital Marketing",
//     questions: [
//       {
//         q: "What digital marketing services do you offer?",
//         a: "We provide SEO optimization, social media marketing, content marketing, PPC advertising, email marketing, and analytics reporting to help grow your online presence.",
//       },
//       {
//         q: "How do you measure marketing success?",
//         a: "We track KPIs including traffic growth, conversion rates, engagement metrics, ROI, and lead generation. Monthly reports keep you informed of campaign performance.",
//       },
//       {
//         q: "What is your approach to SEO?",
//         a: "We use white-hat SEO techniques focusing on keyword research, on-page optimization, technical SEO, link building, and content strategy to improve your search rankings organically.",
//       },
//     ],
//   },
//   {
//     category: "E-commerce Solutions",
//     questions: [
//       {
//         q: "Can you build custom Shopify stores?",
//         a: "We create custom Shopify stores with unique designs, custom functionality, payment integration, inventory management, and marketing automation.",
//       },
//       {
//         q: "Do you handle WordPress e-commerce setup?",
//         a: "Yes, we set up WooCommerce on WordPress with product catalogs, payment gateways, shipping integration, and customer management systems.",
//       },
//       {
//         q: "What payment methods do you support?",
//         a: "We integrate with Stripe, PayPal, Square, and other major payment processors to give your customers flexible payment options.",
//       },
//     ],
//   },
//   {
//     category: "Content & Design",
//     questions: [
//       {
//         q: "What content writing services do you provide?",
//         a: "We offer blog writing, product descriptions, website copy, email campaigns, social media content, and SEO-optimized articles tailored to your audience.",
//       },
//       {
//         q: "Do you provide graphic design services?",
//         a: "Yes, we create logos, branding materials, social media graphics, infographics, banners, and custom illustrations for your brand.",
//       },
//       {
//         q: "Can you edit and produce videos?",
//         a: "We provide video editing, motion graphics, product videos, testimonial videos, and promotional content creation with professional quality.",
//       },
//     ],
//   },
//   {
//     category: "Quality Assurance",
//     questions: [
//       {
//         q: "What QA testing do you perform?",
//         a: "We conduct functional testing, performance testing, security testing, cross-browser compatibility testing, and user acceptance testing.",
//       },
//       {
//         q: "How do you ensure software quality?",
//         a: "We follow industry best practices including automated testing, manual testing, code reviews, and continuous integration to maintain high quality standards.",
//       },
//     ],
//   },
// ]

// export default function FAQsPage() {
//   const [expandedIndex, setExpandedIndex] = useState(null)

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
//             <span className="text-sm font-semibold text-yellow-800">Got Questions?</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl"
//           >
//             Frequently Asked Questions
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-lg text-slate-600"
//           >
//             Find answers to common questions about our services and how we can help your business grow.
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* FAQ Content */}
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"
//       >
//         {faqData.map((category, categoryIndex) => (
//           <motion.div key={categoryIndex} variants={itemVariants} className="mb-12">
//             <motion.h2
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: categoryIndex * 0.1 }}
//               className="mb-6 text-2xl font-bold text-slate-900"
//             >
//               {category.category}
//             </motion.h2>

//             <div className="space-y-4">
//               {category.questions.map((item, qIndex) => (
//                 <motion.div
//                   key={qIndex}
//                   variants={itemVariants}
//                   className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
//                 >
//                   <button
//                     onClick={() =>
//                       setExpandedIndex(
//                         expandedIndex === `${categoryIndex}-${qIndex}` ? null : `${categoryIndex}-${qIndex}`,
//                       )
//                     }
//                     className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-slate-50"
//                   >
//                     <span className="font-semibold text-slate-900">{item.q}</span>
//                     <motion.div
//                       animate={{
//                         rotate: expandedIndex === `${categoryIndex}-${qIndex}` ? 180 : 0,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <ChevronDown className="h-5 w-5 text-yellow-600" />
//                     </motion.div>
//                   </button>

//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{
//                       height: expandedIndex === `${categoryIndex}-${qIndex}` ? "auto" : 0,
//                       opacity: expandedIndex === `${categoryIndex}-${qIndex}` ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden"
//                   >
//                     <div className="border-t border-slate-200 px-6 py-4 text-slate-600">{item.a}</div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
//       >
//         <div className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-12 text-center text-white shadow-lg">
//           <h3 className="mb-4 text-2xl font-bold">Still have questions?</h3>
//           <p className="mb-6 text-yellow-50">
//             Our team is ready to help. Get in touch with us for personalized support.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="rounded-full bg-slate-900 px-8 py-3 font-semibold text-white transition-all hover:bg-slate-800"
//           >
//             Contact Us
//           </motion.button>
//         </div>
//       </motion.section>
//     </main>
//         <Footer/>
//     </>
//   )
// }
















"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const faqData = [
  {
    category: "Website Development",
    questions: [
      {
        q: "What technologies do you use for website development?",
        a: "We specialize in modern web technologies including Next.js, React, Node.js, and various databases. We choose the best tech stack based on your project requirements to ensure scalability, performance, and maintainability.",
      },
      {
        q: "How long does a typical website project take?",
        a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 2-3 months. We provide detailed timelines during the initial consultation.",
      },
      {
        q: "Do you provide website maintenance and support?",
        a: "Yes, we offer comprehensive maintenance packages including updates, security patches, performance optimization, and 24/7 technical support.",
      },
    ],
  },
  {
    category: "Digital Marketing",
    questions: [
      {
        q: "What digital marketing services do you offer?",
        a: "We provide SEO optimization, social media marketing, content marketing, PPC advertising, email marketing, and analytics reporting to help grow your online presence.",
      },
      {
        q: "How do you measure marketing success?",
        a: "We track KPIs including traffic growth, conversion rates, engagement metrics, ROI, and lead generation. Monthly reports keep you informed of campaign performance.",
      },
      {
        q: "What is your approach to SEO?",
        a: "We use white-hat SEO techniques focusing on keyword research, on-page optimization, technical SEO, link building, and content strategy to improve your search rankings organically.",
      },
    ],
  },
  {
    category: "E-commerce Solutions",
    questions: [
      {
        q: "Can you build custom Shopify stores?",
        a: "We create custom Shopify stores with unique designs, custom functionality, payment integration, inventory management, and marketing automation.",
      },
      {
        q: "Do you handle WordPress e-commerce setup?",
        a: "Yes, we set up WooCommerce on WordPress with product catalogs, payment gateways, shipping integration, and customer management systems.",
      },
      {
        q: "What payment methods do you support?",
        a: "We integrate with Stripe, PayPal, Square, and other major payment processors to give your customers flexible payment options.",
      },
    ],
  },
  {
    category: "Content & Design",
    questions: [
      {
        q: "What content writing services do you provide?",
        a: "We offer blog writing, product descriptions, website copy, email campaigns, social media content, and SEO-optimized articles tailored to your audience.",
      },
      {
        q: "Do you provide graphic design services?",
        a: "Yes, we create logos, branding materials, social media graphics, infographics, banners, and custom illustrations for your brand.",
      },
      {
        q: "Can you edit and produce videos?",
        a: "We provide video editing, motion graphics, product videos, testimonial videos, and promotional content creation with professional quality.",
      },
    ],
  },
  {
    category: "Quality Assurance",
    questions: [
      {
        q: "What QA testing do you perform?",
        a: "We conduct functional testing, performance testing, security testing, cross-browser compatibility testing, and user acceptance testing.",
      },
      {
        q: "How do you ensure software quality?",
        a: "We follow industry best practices including automated testing, manual testing, code reviews, and continuous integration to maintain high quality standards.",
      },
    ],
  },
]

export default function FAQsPage() {
  const [expandedIndex, setExpandedIndex] = useState(null)

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
              <span className="text-sm font-semibold text-yellow-800">Got Questions?</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-slate-600 md:text-xl"
            >
              Find answers to common questions about our services and how we can help your business grow.
            </motion.p>
          </div>
        </motion.section>

        {/* FAQ Content */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          {faqData.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants} className="mb-12">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl"
              >
                {category.category}
              </motion.h2>

              <div className="space-y-4">
                {category.questions.map((item, qIndex) => {
                  const indexKey = `${categoryIndex}-${qIndex}`;
                  return (
                    <motion.div
                      key={qIndex}
                      variants={itemVariants}
                      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-lg"
                    >
                      <button
                        onClick={() =>
                          setExpandedIndex(expandedIndex === indexKey ? null : indexKey)
                        }
                        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                        aria-expanded={expandedIndex === indexKey}
                        aria-controls={`faq-answer-${indexKey}`}
                      >
                        <span className="text-base font-semibold text-slate-900 md:text-lg">{item.q}</span>
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
                        <div id={`faq-answer-${indexKey}`} className="border-t border-slate-200 px-6 py-5 text-base text-slate-600 md:text-lg">
                          {item.a}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-12 text-center text-white shadow-xl transition-all hover:shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">Still have questions?</h3>
            <p className="mb-6 text-yellow-50 md:text-lg">
              Our team is ready to help. Get in touch with us for personalized support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-slate-900 px-8 py-3 font-semibold text-white transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.section> */}

        <motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
>
  <div className="rounded-3xl bg-[#fff8e7] px-8 py-12 text-center shadow-md transition-all hover:shadow-xl border border-yellow-100">
    <h3 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
      Still have questions?
    </h3>
    <p className="mb-8 text-slate-600 md:text-lg max-w-2xl mx-auto">
      Our friendly team is always here to help. Reach out anytime — we’ll get back to you soon.
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