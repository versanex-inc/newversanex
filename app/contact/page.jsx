// 'use client'
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import {
//   FiPhone,
//   FiMail,
//   FiMapPin,
//   FiSend,
//   FiArrowRight,
// } from "react-icons/fi"
// import Link from "next/link"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Simulate form submission
//     setIsSubmitted(true)
//     setTimeout(() => {
//       setIsSubmitted(false)
//       setFormData({ name: "", email: "", message: "" })
//     }, 3000)
//   }

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
//   }

//   return (
//     <><Navbar/>
//     <section id="contact" className="relative bg-gray-50 py-20">
//       {/* Background Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#f2ad08]/10 to-[#d88f07]/10" />

//       <motion.div
//         className="mx-auto max-w-7xl px-6 relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="text-center mb-16">
//           <motion.h2
//             className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
//             variants={itemVariants}
//           >
//             Get in Touch
//           </motion.h2>
//           <motion.p
//             className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
//             variants={itemVariants}
//           >
//             We’d love to hear from you! Whether you have a project idea, need support, or just want to say hello, reach out to us today.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div
//             className="bg-white rounded-3xl shadow-2xl p-8"
//             variants={itemVariants}
//           >
//             <AnimatePresence>
//               {!isSubmitted ? (
//                 <motion.form
//                   onSubmit={handleSubmit}
//                   className="space-y-6"
//                   initial={{ opacity: 1 }}
//                   exit={{ opacity: 0, transition: { duration: 0.3 } }}
//                 >
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-semibold text-gray-700"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                       placeholder="Your Name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-semibold text-gray-700"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                       placeholder="Your Email"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-semibold text-gray-700"
//                     >
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows="5"
//                       className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                       placeholder="Your Message"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//                   >
//                     Send Message <FiSend className="h-5 w-5" />
//                   </button>
//                 </motion.form>
//               ) : (
//                 <motion.div
//                   className="text-center py-10"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <h3 className="text-2xl font-semibold text-gray-900">
//                     Thank You!
//                   </h3>
//                   <p className="mt-4 text-gray-600">
//                     Your message has been sent successfully. We’ll get back to you soon!
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>

//           {/* Contact Info & Image */}
//           <motion.div className="space-y-8" variants={itemVariants}>
//             <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6">
//                 Contact Information
//               </h3>
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                     <FiPhone className="h-6 w-6 text-[#f2ad08]" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Phone</p>
//                     <a
//                       href="tel:+1234567890"
//                       className="text-gray-600 hover:text-[#f2ad08] transition-colors duration-300"
//                     >
//                       +1 (234) 567-890
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                     <FiMail className="h-6 w-6 text-[#f2ad08]" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Email</p>
//                     <a
//                       href="mailto:contact@versanex.com"
//                       className="text-gray-600 hover:text-[#f2ad08] transition-colors duration-300"
//                     >
//                       contact@versanex.com
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                     <FiMapPin className="h-6 w-6 text-[#f2ad08]" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Address</p>
//                     <p className="text-gray-600">
//                       123 Innovation Street, Tech City, TC 12345
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative rounded-3xl overflow-hidden shadow-xl">
//               <Image
//                 src="/contact-image.jpg"
//                 width={600}
//                 height={400}
//                 alt="Contact Us"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//               <Link
//                 href="/about"
//                 className="absolute bottom-4 right-4 flex items-center gap-2 text-white font-semibold hover:text-[#f2ad08] transition-colors duration-300"
//               >
//                 Learn More About Us <FiArrowRight className="h-5 w-5" />
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//     <Footer/>
//     </>
//   )
// }
























// "use client"
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import {
//   FiPhone,
//   FiMail,
//   FiMapPin,
//   FiSend,
//   FiArrowRight,
// } from "react-icons/fi"
// import Link from "next/link"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [submitting, setSubmitting] = useState(false)

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   // Handle form submission to API
//   const handleSubmit = async (e) => {
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
//         setIsSubmitted(true)
//         setTimeout(() => {
//           setIsSubmitted(false)
//           setFormData({ name: "", email: "", message: "" }) // Clear form after success
//         }, 3000)
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

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
//   }

//   return (
//     <>
//       <Navbar />
//       <section id="contact" className="relative bg-gray-50 py-20">
//         {/* Background Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#f2ad08]/10 to-[#d88f07]/10" />

//         <motion.div
//           className="mx-auto max-w-7xl px-6 relative z-10"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <div className="text-center mb-16">
//             <motion.h2
//               className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
//               variants={itemVariants}
//             >
//               Get in Touch
//             </motion.h2>
//             <motion.p
//               className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
//               variants={itemVariants}
//             >
//               We’d love to hear from you! Whether you have a project idea, need support, or just want to say hello, reach out to us today.
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               className="bg-white rounded-3xl shadow-2xl p-8"
//               variants={itemVariants}
//             >
//               <AnimatePresence>
//                 {!isSubmitted ? (
//                   <motion.form
//                     onSubmit={handleSubmit}
//                     className="space-y-6"
//                     initial={{ opacity: 1 }}
//                     exit={{ opacity: 0, transition: { duration: 0.3 } }}
//                   >
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         placeholder="Your Name"
//                         required
//                         disabled={submitting}
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         placeholder="Your Email"
//                         required
//                         disabled={submitting}
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="message"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows="5"
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         placeholder="Your Message"
//                         required
//                         disabled={submitting}
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//                       disabled={submitting}
//                     >
//                       {submitting ? (
//                         <>
//                           Sending <span className="animate-pulse">...</span>
//                         </>
//                       ) : (
//                         <>
//                           Send Message <FiSend className="h-5 w-5" />
//                         </>
//                       )}
//                     </button>
//                   </motion.form>
//                 ) : (
//                   <motion.div
//                     className="text-center py-10"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <h3 className="text-2xl font-semibold text-gray-900">
//                       Thank You!
//                     </h3>
//                     <p className="mt-4 text-gray-600">
//                       Your message has been sent successfully. We’ll get back to you soon!
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {/* Contact Info & Image */}
//             <motion.div className="space-y-8" variants={itemVariants}>
//               <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-6">
//                   Contact Information
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                       <FiPhone className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Phone</p>
//                       <a
//                         href="tel:+1234567890"
//                         className="text-gray-600 hover:text-[#f2ad08] transition-colors duration-300"
//                       >
//                         +1 (234) 567-890
//                       </a>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                       <FiMail className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Email</p>
//                       <a
//                         href="mailto:contact@versanex.com"
//                         className="text-gray-600 hover:text-[#f2ad08] transition-colors duration-300"
//                       >
//                         contact@versanex.com
//                       </a>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                       <FiMapPin className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Address</p>
//                       <p className="text-gray-600">
//                         123 Innovation Street, Tech City, TC 12345
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative rounded-3xl overflow-hidden shadow-xl">
//                 <Image
//                   src="/contact-image.jpg"
//                   width={600}
//                   height={400}
//                   alt="Contact Us"
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                 <Link
//                   href="/about"
//                   className="absolute bottom-4 right-4 flex items-center gap-2 text-white font-semibold hover:text-[#f2ad08] transition-colors duration-300"
//                 >
//                   Learn More About Us <FiArrowRight className="h-5 w-5" />
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>
//       <Footer />
//     </>
//   )
// }










// "use client"
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import {
//   FiPhone,
//   FiMail,
//   FiMapPin,
//   FiSend,
//   FiArrowRight,
// } from "react-icons/fi"
// import Link from "next/link"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [submitting, setSubmitting] = useState(false)

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   // Handle form submission to API
//   const handleSubmit = async (e) => {
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
//         setIsSubmitted(true)
//         setTimeout(() => {
//           setIsSubmitted(false)
//           setFormData({ name: "", email: "", message: "" }) // Clear form after success
//         }, 3000)
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

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
//   }

//   return (
//     <>
//       <Navbar />
//       <section id="contact" className="relative bg-gray-50 py-20">
//         {/* Background Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#f2ad08]/10 to-[#d88f07]/10" />

//         <motion.div
//           className="mx-auto max-w-7xl px-6 relative z-10"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <div className="text-center mb-16">
//             <motion.h2
//               className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
//               variants={itemVariants}
//             >
//               Get in Touch
//             </motion.h2>
//             <motion.p
//               className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
//               variants={itemVariants}
//             >
//               We’d love to hear from you! Whether you have a project idea, need support, or just want to say hello, reach out to us today.
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               className="bg-white rounded-3xl shadow-2xl p-8"
//               variants={itemVariants}
//             >
//               <AnimatePresence>
//                 {!isSubmitted ? (
//                   <motion.form
//                     onSubmit={handleSubmit}
//                     className="space-y-6"
//                     initial={{ opacity: 1 }}
//                     exit={{ opacity: 0, transition: { duration: 0.3 } }}
//                   >
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         placeholder="Your Name"
//                         required
//                         disabled={submitting}
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         placeholder="Your Email"
//                         required
//                         disabled={submitting}
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="message"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows="5"
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         placeholder="Your Message"
//                         required
//                         disabled={submitting}
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//                       disabled={submitting}
//                     >
//                       {submitting ? (
//                         <>
//                           Sending <span className="animate-pulse">...</span>
//                         </>
//                       ) : (
//                         <>
//                           Send Message <FiSend className="h-5 w-5" />
//                         </>
//                       )}
//                     </button>
//                   </motion.form>
//                 ) : (
//                   <motion.div
//                     className="text-center py-10"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <h3 className="text-2xl font-semibold text-gray-900">
//                       Thank You!
//                     </h3>
//                     <p className="mt-4 text-gray-600">
//                       Your message has been sent successfully. We’ll get back to you soon!
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {/* Contact Info & Image */}
//             <motion.div className="space-y-8" variants={itemVariants}>
//               <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-6">
//                   Contact Information
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                       <FiPhone className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Phone</p>
//                       <a
//                         href="tel:+1234567890"
//                         className="text-gray-600 hover:text-[#f2ad08] transition-colors duration-300"
//                       >
//                         +1 (234) 567-890
//                       </a>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                       <FiMail className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Email</p>
//                       <a
//                         href="mailto:contact@versanex.com"
//                         className="text-gray-600 hover:text-[#f2ad08] transition-colors duration-300"
//                       >
//                         contact@versanex.com
//                       </a>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                       <FiMapPin className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Address</p>
//                       <p className="text-gray-600">
//                         123 Innovation Street, Tech City, TC 12345
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative rounded-3xl overflow-hidden shadow-xl">
//                 <Image
//                   src="/contact-image.jpg"
//                   width={600}
//                   height={400}
//                   alt="Contact Us"
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                 <Link
//                   href="/about"
//                   className="absolute bottom-4 right-4 flex items-center gap-2 text-white font-semibold hover:text-[#f2ad08] transition-colors duration-300"
//                 >
//                   Learn More About Us <FiArrowRight className="h-5 w-5" />
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>
//       <Footer />
//     </>
//   )
// }













// "use client"
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import {
//   FiPhone,
//   FiMail,
//   FiMapPin,
//   FiSend,
//   FiArrowRight,
// } from "react-icons/fi"
// import Link from "next/link"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     description: "",
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [submitting, setSubmitting] = useState(false)

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   // Handle form submission to API
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setSubmitting(true)
//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           service: formData.service,
//           description: formData.description,
//         }),
//       })
//       const data = await response.json()
//       if (data.success) {
//         setIsSubmitted(true)
//         setTimeout(() => {
//           setIsSubmitted(false)
//           setFormData({ name: "", email: "", service: "", description: "" })
//         }, 3000)
//       } else {
//         alert("Failed to send message. Please try again.")
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       alert("An error occurred. Please try again later.")
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
//   }

//   const services = [
//     "Web Apps",
//     "Shopify Stores",
//     "WordPress Websites",
//     "Digital Marketing",
//     "Video Editing",
//     "Graphic Designing",
//     "Software Quality Assurance",
//     "Content Writing",
//   ]

//   return (
//     <>
//       <Navbar />
//       <section id="contact" className="relative bg-gray-50 py-20">
//         {/* Background Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#f2ad08]/10 to-[#d88f07]/10" />

//         <motion.div
//           className="mx-auto max-w-7xl px-6 relative z-10"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <div className="text-center mb-16">
//             <motion.h2
//               className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
//               variants={itemVariants}
//             >
//               Get in Touch
//             </motion.h2>
//             <motion.p
//               className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
//               variants={itemVariants}
//             >
//               We’d love to hear from you! Whether you have a project idea, need
//               support, or just want to say hello, reach out to us today.
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               className="bg-white rounded-3xl shadow-2xl p-8"
//               variants={itemVariants}
//             >
//               <AnimatePresence>
//                 {!isSubmitted ? (
//                   <motion.form
//                     onSubmit={handleSubmit}
//                     className="space-y-6"
//                     initial={{ opacity: 1 }}
//                     exit={{ opacity: 0, transition: { duration: 0.3 } }}
//                   >
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         placeholder="Your Name"
//                         required
//                         disabled={submitting}
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         placeholder="Your Email"
//                         required
//                         disabled={submitting}
//                       />
//                     </div>

//                     {/* Service Dropdown */}
//                     <div>
//                       <label
//                         htmlFor="service"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Select Service
//                       </label>
//                       <select
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         required
//                         disabled={submitting}
//                       >
//                         <option value="">Choose a service</option>
//                         {services.map((service) => (
//                           <option key={service} value={service}>
//                             {service}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="description"
//                         className="block text-sm font-semibold text-gray-700"
//                       >
//                         Project Description
//                       </label>
//                       <textarea
//                         id="description"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         rows="5"
//                         className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#f2ad08] transition-all duration-300"
//                         placeholder="Describe your project..."
//                         required
//                         disabled={submitting}
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300"
//                       disabled={submitting}
//                     >
//                       {submitting ? (
//                         <>
//                           Sending <span className="animate-pulse">...</span>
//                         </>
//                       ) : (
//                         <>
//                           Send Message <FiSend className="h-5 w-5" />
//                         </>
//                       )}
//                     </button>
//                   </motion.form>
//                 ) : (
//                   <motion.div
//                     className="text-center py-10"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <h3 className="text-2xl font-semibold text-gray-900">
//                       Thank You!
//                     </h3>
//                     <p className="mt-4 text-gray-600">
//                       Your message has been sent successfully. We’ll get back to
//                       you soon!
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {/* Contact Info & Image */}
//             <motion.div className="space-y-8" variants={itemVariants}>
//               <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-6">
//                   Contact Information
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                       <FiPhone className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Phone</p>
//                       <a
//                         href="tel:+1234567890"
//                         className="text-gray-600 hover:text-[#f2ad08] transition-colors duration-300"
//                       >
//                         +1 (234) 567-890
//                       </a>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                       <FiMail className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Email</p>
//                       <a
//                         href="mailto:contact@versanex.com"
//                         className="text-gray-600 hover:text-[#f2ad08] transition-colors duration-300"
//                       >
//                         contact@versanex.com
//                       </a>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-[#f2ad08]/10 rounded-lg">
//                       <FiMapPin className="h-6 w-6 text-[#f2ad08]" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Address</p>
//                       <p className="text-gray-600">
//                         123 Innovation Street, Tech City, TC 12345
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative rounded-3xl overflow-hidden shadow-xl">
//                 <Image
//                   src="/contact-image.jpg"
//                   width={600}
//                   height={400}
//                   alt="Contact Us"
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                 <Link
//                   href="/about"
//                   className="absolute bottom-4 right-4 flex items-center gap-2 text-white font-semibold hover:text-[#f2ad08] transition-colors duration-300"
//                 >
//                   Learn More About Us <FiArrowRight className="h-5 w-5" />
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>
//       <Footer />
//     </>
//   )
// }



















"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiSend, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Navbar from "@/components/navbar";

// Lazy-load Footer for faster FCP
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", service: "", description: "" });
        }, 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const services = [
    "Web Apps",
    "Shopify Stores",
    "WordPress Websites",
    "Digital Marketing",
    "Video Editing",
    "Graphic Designing",
    "Software Quality Assurance",
    "Content Writing",
  ];

  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="relative bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
      >
        {/* Soft gradient background for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2ad08]/10 to-[#d88f07]/10" />

        <motion.div
          className="mx-auto max-w-7xl relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We’d love to hear from you! Whether you have a project idea, need
              support, or just want to say hello, reach out to us today.
            </p>
          </div>

          {/* Contact Form + Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10"
              variants={containerVariants}
            >
              <AnimatePresence>
                {!isSubmitted ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#e59e00] transition-all duration-300"
                        placeholder="Your Name"
                        required
                        disabled={submitting}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#e59e00] transition-all duration-300"
                        placeholder="Your Email"
                        required
                        disabled={submitting}
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Select Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#e59e00] transition-all duration-300"
                        required
                        disabled={submitting}
                      >
                        <option value="">Choose a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                        className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#e59e00] transition-all duration-300"
                        placeholder="Describe your project..."
                        required
                        disabled={submitting}
                      />
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#f2ad08] text-white font-semibold rounded-full shadow-lg hover:bg-[#d88f07] hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-[#f2ad08]/40 focus:outline-none"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          Sending <span className="animate-pulse">...</span>
                        </>
                      ) : (
                        <>
                          Send Message <FiSend className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    className="text-center py-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Thank You!
                    </h3>
                    <p className="mt-4 text-gray-600">
                      Your message has been sent successfully. We’ll get back to
                      you soon!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Info + Image */}
            <motion.div className="space-y-8 lg:space-y-10" variants={containerVariants}>
              {/* Info Box */}
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <FiPhone className="h-6 w-6 text-[#f2ad08]" />,
                      title: "Phone",
                      text: "+92 370 7140829",
                      link: "+923707140829",
                    },
                    {
                      icon: <FiMail className="h-6 w-6 text-[#f2ad08]" />,
                      title: "Email",
                      text: "contact@versanex.site",
                      link: "mailto:contact@versanex.site",
                    },
                    {
                      icon: <FiMapPin className="h-6 w-6 text-[#f2ad08]" />,
                      title: "Address",
                      text: "Faisalabad Pakistan",
                      link: null,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="p-3 bg-[#f2ad08]/10 rounded-lg">{item.icon}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-600 hover:text-[#f2ad08] transition-colors duration-300"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/contact-image.jpg"
                  width={600}
                  height={400}
                  alt="Contact Us"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Link
                  href="/about"
                  className="absolute bottom-4 right-4 flex items-center gap-2 text-white font-semibold hover:text-[#f2ad08] transition-colors duration-300"
                >
                  Learn More About Us <FiArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
