// "use client"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"

// export default function Contact() {
//   const [submitting, setSubmitting] = useState(false)

//   async function onSubmit(e) {
//     e.preventDefault()
//     setSubmitting(true)
//     try {
//       // Simulate submission; replace with API route if needed
//       await new Promise((r) => setTimeout(r, 800))
//       alert("Thanks! We’ll be in touch shortly.")
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   return (
//     <section id="contact" className="py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-4">
//         <SectionHeading eyebrow="Get in Touch" title="Let’s build something great" />
//         <motion.form
//           onSubmit={onSubmit}
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.45 }}
//           className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-lg border p-5"
//         >
//           <div className="grid gap-4 sm:grid-cols-2">
//             <div className="grid gap-2">
//               <label htmlFor="name" className="text-sm font-medium">
//                 Name
//               </label>
//               <input id="name" name="name" required className="rounded-md border px-3 py-2" placeholder="Your name" />
//             </div>
//             <div className="grid gap-2">
//               <label htmlFor="email" className="text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="rounded-md border px-3 py-2"
//                 placeholder="you@company.com"
//               />
//             </div>
//           </div>
//           <div className="grid gap-2">
//             <label htmlFor="message" className="text-sm font-medium">
//               Project details
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={5}
//               required
//               className="rounded-md border px-3 py-2"
//               placeholder="Tell us about your goals…"
//             />
//           </div>
//           <div className="flex items-start gap-2">
//             <input id="consent" type="checkbox" required className="mt-1" />
//             <label htmlFor="consent" className="text-sm text-muted-foreground">
//               I agree to the processing of my personal data as described in the privacy policy.
//             </label>
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               disabled={submitting}
//               className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
//             >
//               {submitting ? "Sending…" : "Send Message"}
//             </button>
//           </div>
//         </motion.form>
//       </div>
//     </section>
//   )
// }









// "use client"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"

// export default function Contact() {
//   const [submitting, setSubmitting] = useState(false)

//   async function onSubmit(e) {
//     e.preventDefault()
//     setSubmitting(true)
//     try {
//       await new Promise((r) => setTimeout(r, 800))
//       alert("Thanks! We’ll be in touch shortly.")
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   return (
//     <section
//   id="contact"
//   className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
// >
//   <div className="mx-auto max-w-7xl px-4">
//     <SectionHeading
//       eyebrow={
//         <span className="font-semibold" style={{ color: "#f2ad08" }}>
//           Get in Touch
//         </span>
//       }
//       title="Let’s Build Something Great"
//     />
//         <motion.form
//           onSubmit={onSubmit}
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.45 }}
//           className="mx-auto mt-12 grid max-w-2xl gap-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-8 md:p-10"
//         >
//           <div className="grid gap-6 sm:grid-cols-2">
//             <div className="grid gap-2">
//               <label htmlFor="name" className="text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 required
//                 className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all"
//                 placeholder="Your name"
//               />
//             </div>

//             <div className="grid gap-2">
//               <label htmlFor="email" className="text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all"
//                 placeholder="you@company.com"
//               />
//             </div>
//           </div>

//           <div className="grid gap-2">
//             <label htmlFor="message" className="text-sm font-medium text-gray-700">
//               Project Details
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={5}
//               required
//               className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all resize-none"
//               placeholder="Tell us about your goals…"
//             />
//           </div>

//           <div className="flex items-start gap-3">
//             <input
//               id="consent"
//               type="checkbox"
//               required
//               className="mt-1 h-4 w-4 text-[#f2ad08] border-gray-300 rounded focus:ring-[#f2ad08]"
//             />
//             <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
//               I agree to the processing of my personal data as described in the privacy policy.
//             </label>
//           </div>

//           <div className="flex justify-end">
//             <motion.button
//               whileTap={{ scale: 0.96 }}
//               type="submit"
//               disabled={submitting}
//               className="inline-flex items-center justify-center rounded-lg bg-[#f2ad08] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#e3a30a] transition-all duration-300 disabled:opacity-60"
//             >
//               {submitting ? "Sending…" : "Send Message"}
//             </motion.button>
//           </div>
//         </motion.form>
//       </div>

//       {/* Decorative background circles */}
//       <div className="absolute top-20 left-10 w-48 h-48 bg-[#f2ad08]/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#f2ad08]/10 rounded-full blur-3xl"></div>
//     </section>
//   )
// }















// "use client"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"

// export default function Contact() {
//   const [submitting, setSubmitting] = useState(false)

//   async function onSubmit(e) {
//     e.preventDefault()
//     setSubmitting(true)
//     try {
//       await new Promise((r) => setTimeout(r, 800))
//       alert("Thanks, [Client Name]! We’re excited to collaborate. We’ll get back to you soon!")
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   return (
//     <section
//       id="contact"
//       className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
//     >
//       {/* Subtle Background Decoration */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#f2ad08]/5 to-[#d88f07]/5 opacity-50" />
//       <div className="absolute top-20 left-10 w-64 h-64 bg-[#f2ad08]/10 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#d88f07]/10 rounded-full blur-3xl animate-pulse delay-1000" />

//       <div className="mx-auto max-w-7xl px-4 relative z-10">
//         <SectionHeading
//           eyebrow={
//             <span className="font-semibold text-[#f2ad08] inline-flex items-center gap-2">
//               <span className="w-2 h-2 bg-[#f2ad08] rounded-full animate-pulse"></span>
//               Ready to Collaborate?
//             </span>
//           }
//           title="Let’s Create Your Vision Together, [Client]!"
//         />
        
//         <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Engaging Text & Call-to-Action */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-center lg:text-left"
//           >
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               Take the First Step with VersaNex
//             </h3>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               Hey [Client], we’re here to turn your ideas into reality! Share your project details, and let’s start building something extraordinary together. Your success is our priority—contact us today!
//             </p>
//             <motion.a
//               href="/contact"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Get Started Now <span className="animate-pulse">→</span>
//             </motion.a>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="bg-white/95 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl p-8 md:p-10"
//           >
//             <form
//               onSubmit={onSubmit}
//               className="space-y-6"
//             >
//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div className="relative">
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     id="name"
//                     name="name"
//                     required
//                     className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all placeholder:text-gray-400"
//                     placeholder="Enter your name"
//                   />
//                   <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#f2ad08]/50">
//                     ✍️
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Email
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all placeholder:text-gray-400"
//                     placeholder="your@email.com"
//                   />
//                   <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#f2ad08]/50">
//                     ✉️
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Project Idea
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   required
//                   className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all resize-none placeholder:text-gray-400"
//                   placeholder="Describe your project or goals…"
//                 />
//                 <div className="absolute top-3 right-3 text-[#f2ad08]/50">
//                   💡
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <input
//                   id="consent"
//                   type="checkbox"
//                   required
//                   className="mt-1 h-4 w-4 text-[#f2ad08] border-gray-300 rounded focus:ring-[#f2ad08]"
//                 />
//                 <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
//                   I agree to the processing of my personal data as per our privacy policy.
//                 </label>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(242, 173, 8, 0.3)" }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f2ad08] to-[#d88f07] text-white font-semibold rounded-full shadow-md transition-all duration-300 disabled:opacity-70"
//               >
//                 {submitting ? (
//                   <>
//                     Sending <span className="animate-pulse">...</span>
//                   </>
//                 ) : (
//                   <>
//                     Send Your Vision <span aria-hidden="true">→</span>
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
















// "use client"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"

// export default function Contact() {
//   const [submitting, setSubmitting] = useState(false)
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" })

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   // Handle form submission to API
//   async function onSubmit(e) {
//     e.preventDefault()
//     setSubmitting(true)
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })
//       const data = await response.json()
//       if (data.success) {
//         alert(`Thanks, ${formData.name || '[Client Name]'}! We’re excited to collaborate. We’ll get back to you soon!`)
//         setFormData({ name: "", email: "", message: "" }) // Reset form data on success
//       } else {
//         alert("Failed to send message. Please try again.")
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error)
//       alert("An error occurred. Please try again later.")
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   return (
//     <section
//       id="contact"
//       className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
//     >
//       {/* Subtle Background Decoration */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#f2ad08]/5 to-[#d88f07]/5 opacity-50" />
//       <div className="absolute top-20 left-10 w-64 h-64 bg-[#f2ad08]/10 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#d88f07]/10 rounded-full blur-3xl animate-pulse delay-1000" />

//       <div className="mx-auto max-w-7xl px-4 relative z-10">
//         <SectionHeading
//           eyebrow={
//             <span className="font-semibold text-[#f2ad08] inline-flex items-center gap-2">
//               <span className="w-2 h-2 bg-[#f2ad08] rounded-full animate-pulse"></span>
//               Ready to Collaborate?
//             </span>
//           }
//           title="Let’s Create Your Vision Together, [Client]!"
//         />
        
//         <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Engaging Text & Call-to-Action */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-center lg:text-left"
//           >
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               Take the First Step with VersaNex
//             </h3>
//             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//               Hey [Client], we’re here to turn your ideas into reality! Share your project details, and let’s start building something extraordinary together. Your success is our priority—contact us today!
//             </p>
//             <motion.a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Get Started Now <span className="animate-pulse">→</span>
//             </motion.a>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="bg-white/95 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl p-8 md:p-10"
//           >
//             <form
//               onSubmit={onSubmit}
//               className="space-y-6"
//             >
//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div className="relative">
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all placeholder:text-gray-400"
//                     placeholder="Enter your name"
//                   />
//                   <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#f2ad08]/50">
//                     ✍️
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Email
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all placeholder:text-gray-400"
//                     placeholder="your@email.com"
//                   />
//                   <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#f2ad08]/50">
//                     ✉️
//                   </div>
//                 </div>
//               </div>

//               <div className="relative">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Project Idea
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   required
//                   className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all resize-none placeholder:text-gray-400"
//                   placeholder="Describe your project or goals…"
//                 />
//                 <div className="absolute top-3 right-3 text-[#f2ad08]/50">
//                   💡
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <input
//                   id="consent"
//                   type="checkbox"
//                   required
//                   className="mt-1 h-4 w-4 text-[#f2ad08] border-gray-300 rounded focus:ring-[#f2ad08]"
//                 />
//                 <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
//                   I agree to the processing of my personal data as per our privacy policy.
//                 </label>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(242, 173, 8, 0.3)" }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f2ad08] to-[#d88f07] text-white font-semibold rounded-full shadow-md transition-all duration-300 disabled:opacity-70"
//               >
//                 {submitting ? (
//                   <>
//                     Sending <span className="animate-pulse">...</span>
//                   </>
//                 ) : (
//                   <>
//                     Send Your Vision <span aria-hidden="true">→</span>
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }












"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
  })

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  async function onSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (data.success) {
        alert(`Thanks, ${formData.name || "[Client]"}! We’ll get back to you soon.`)
        setFormData({ name: "", email: "", service: "", description: "" })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred. Please try again later.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background glow decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2ad08]/5 to-[#d88f07]/5 opacity-50" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#f2ad08]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#d88f07]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <SectionHeading
          eyebrow={
            <span className="font-semibold text-[#f2ad08] inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#f2ad08] rounded-full animate-pulse"></span>
              Ready to Collaborate?
            </span>
          }
          title="Let’s Create Your Vision Together, [Client]!"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Take the First Step with VersaNex
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hey [Client], we’re here to turn your ideas into reality! Share your project details, and let’s start
              building something extraordinary together. Your success is our priority—contact us today!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now <span className="animate-pulse">→</span>
            </motion.a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl p-8 md:p-10"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all placeholder:text-gray-400"
                    placeholder="Enter your name"
                  />
                  <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#f2ad08]/50">✍️</div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all placeholder:text-gray-400"
                    placeholder="your@email.com"
                  />
                  <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#f2ad08]/50">✉️</div>
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="relative">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Select a Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all"
                >
                  <option value="">-- Choose a Service --</option>
                  <option value="Web Apps">Web Apps</option>
                  <option value="Shopify Stores">Shopify Stores</option>
                  <option value="WordPress Websites">WordPress Websites</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="Software Quality Assurance">Software Quality Assurance</option>
                  <option value="Content Writing">Content Writing</option>
                </select>
                <div className="absolute top-3 right-3 text-[#f2ad08]/50">⚙️</div>
              </div>

              {/* Description */}
              <div className="relative">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Project Idea
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all resize-none placeholder:text-gray-400"
                  placeholder="Describe your project or goals…"
                />
                <div className="absolute top-3 right-3 text-[#f2ad08]/50">💡</div>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 text-[#f2ad08] border-gray-300 rounded focus:ring-[#f2ad08]"
                />
                <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the processing of my personal data as per our privacy policy.
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(242, 173, 8, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f2ad08] to-[#d88f07] text-white font-semibold rounded-full shadow-md transition-all duration-300 disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    Sending <span className="animate-pulse">...</span>
                  </>
                ) : (
                  <>
                    Send Your Vision <span aria-hidden="true">→</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
