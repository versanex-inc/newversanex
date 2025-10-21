// "use client"

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { BiLogoLinkedinSquare } from "react-icons/bi";
// import { MdEmail } from "react-icons/md";
// import { IoMdQuote } from "react-icons/io";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const teamMembers = [
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759932169/image-4096x4096_axfq0s.png',
//     name: 'Fahad Joyia',
//     position: 'Founder',
//     role: 'WEB DEVELOPMENT',
//     bio: 'With over 10 years of experience in web development, Fahad leads our team with innovative strategies and a passion for cutting-edge technology.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/fahad-joyia/',
//     email: 'fahad.joyia@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759944280/image-4096x4096_1_vs23xw.png',
//     name: 'Hisham Hussain',
//     position: 'Team Member',
//     role: 'GRAPHICS DESIGNING',
//     bio: 'Hisham brings creative flair to our designs, specializing in visual storytelling and user-centric graphics.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/hisham-hussain/',
//     email: 'hisham.hussain@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759944545/image-4096x4096_3_bmva0b.png',
//     name: 'Hamiz Asghat',
//     position: 'Team Member',
//     role: 'WEB DEVELOPMENT',
//     bio: 'Hamiz excels in full-stack development, ensuring our web solutions are robust, scalable, and performant.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/hamiz-asghat/',
//     email: 'hamiz.asghat@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759943688/image-4096x4096_2_abeh5p.png',
//     name: 'Taha Khurram',
//     position: 'Team Member',
//     role: 'DIGITAL MARKETING',
//     bio: 'Taha drives our marketing efforts with data-driven strategies that boost engagement and growth.',
//     linkedin: 'https://www.linkedin.com/in/taha-khurram/',
//     email: 'taha.khurram@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759946290/image-4096x4096_4_v1in8h.png',
//     name: 'Muneeb Naqvi',
//     position: 'Team Member',
//     role: 'WEB DEVELOPMENT',
//     bio: 'Muneeb is a frontend expert, crafting intuitive and beautiful user interfaces.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/muneeb-naqvi/',
//     email: 'muneeb.naqvi@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759946290/image-4096x4096_4_v1in8h.png',
//     name: 'Muneeb Naqvi',
//     position: 'Team Member',
//     role: 'CONTENT WRITING',
//     bio: 'Muneeb also handles content, creating compelling narratives that resonate with audiences.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/muneeb-naqvi/',
//     email: 'muneeb.naqvi@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759932169/image-4096x4096_axfq0s.png',
//     name: 'Fahad Joyia',
//     position: 'Founder',
//     role: 'VIDEO EDITING',
//     bio: 'Fahad oversees video production, delivering high-quality edits that captivate viewers.',
//     linkedin: 'https://www.linkedin.com/in/fahad-joyia/',
//     email: 'fahad.joyia@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759944280/image-4096x4096_1_vs23xw.png',
//     name: 'Hisham Hussain',
//     position: 'Team Member',
//     role: 'VIDEO EDITING',
//     bio: 'Hisham contributes to video editing with a keen eye for detail and storytelling.',
//     linkedin: 'https://www.linkedin.com/in/hisham-hussain/',
//     email: 'hisham.hussain@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759943688/image-4096x4096_2_abeh5p.png',
//     name: 'Taha Khurram',
//     position: 'Team Member',
//     role: 'SEO',
//     bio: 'Taha optimizes our digital presence, ensuring top search rankings and visibility.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/taha-khurram/',
//     email: 'taha.khurram@example.com',
//   },
// ];

// const quotesData = [
//   {
//     quote: "At Versanex, our mission is to bring creativity and innovation to every project. We believe in delivering solutions that not only meet client needs but also elevate their brand to new heights.",
//     name: "Moaz",
//     position: "Founder"
//   },
//   {
//     quote: "We take pride in building lasting partnerships with our clients. At Versanex, every project is a collaboration, ensuring that we deliver results that truly resonate with the client's vision and goals.",
//     name: "Hisham",
//     position: "Co Founder"
//   },
//   {
//     quote: "Our approach at Versanex combines passion, expertise, and a commitment to excellence. We aim to provide tailored solutions that enhance your business and set it apart in today's competitive market.",
//     name: "Fahad",
//     position: "Co - Founder"
//   },
// ];

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 2,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 700, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

// export default function TeamPage() {
//   const [activeFilter, setActiveFilter] = useState('ALL');
//   const [itemsToShow, setItemsToShow] = useState(6);
//   const [showJoinForm, setShowJoinForm] = useState(false);

//   const filteredMembers = teamMembers.filter(member => {
//     if (activeFilter === 'LEADERSHIP') return member.topPositioned;
//     if (activeFilter === 'ALL') return true;
//     return member.role.toUpperCase().replace(/ /g, "_") === activeFilter;
//   });

//   const handleFilterChange = (filter) => {
//     setActiveFilter(filter);
//     setItemsToShow(6);
//   };

//   const showMore = () => {
//     setItemsToShow(itemsToShow + 6);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
//       {/* Intro Section */}
//       <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Meet Our <span className="text-amber-500">Talented Team</span>
//           </h1>
//           <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//             At VersaNex, our team is the heart of our success. We are a group of passionate professionals dedicated to delivering innovative solutions in IT, web development, digital marketing, and more.
//           </p>
//         </motion.div>
//       </section>

//       {/* Team Culture Section */}
//       <section className="py-16 px-4 md:px-8 lg:px-16 bg-white max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Team Culture & Values
//           </h2>
//           <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
//             We foster a collaborative environment where innovation thrives. Our values of integrity, excellence, and continuous learning drive us forward.
//           </p>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Join a team that values your growth and celebrates achievements together.
//           </p>
//         </motion.div>
//       </section>

//       {/* Team Members Section */}
//       <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {['ALL', 'LEADERSHIP', 'GRAPHICS_DESIGNING', 'WEB_DEVELOPMENT', 'VIDEO_EDITING', 'CONTENT_WRITING', 'DIGITAL_MARKETING', 'SEO'].map(filter => (
//             <button
//               key={filter}
//               onClick={() => handleFilterChange(filter)}
//               className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
//                 activeFilter === filter
//                   ? 'bg-amber-500 text-white shadow-md'
//                   : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
//               }`}
//             >
//               {filter.replace(/_/g, ' ')}
//             </button>
//           ))}
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredMembers.slice(0, itemsToShow).map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden"
//             >
//               <div className="relative h-80">
//                 <Image
//                   src={member.img}
//                   alt={member.name}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-110"
//                   loading="lazy"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-amber-500 to-transparent opacity-80"></div>
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
//                 <p className="text-amber-500 font-semibold mb-2">{member.position}</p>
//                 <p className="text-gray-600 text-sm mb-4">{member.role}</p>
//                 <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
//                 <div className="flex justify-center gap-4">
//                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-600">
//                     <BiLogoLinkedinSquare size={24} />
//                   </a>
//                   <a href={`mailto:${member.email}`} className="text-amber-500 hover:text-amber-600">
//                     <MdEmail size={24} />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         {itemsToShow < filteredMembers.length && (
//           <div className="text-center mt-8">
//             <button
//               onClick={showMore}
//               className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300"
//             >
//               Show More
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Quotes Section */}
//       <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-amber-50 to-white max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inspiring Quotes</h2>
//           <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8"></div>
//         </motion.div>
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           autoPlay={true}
//           autoPlaySpeed={5000}
//           keyBoardControl={true}
//           transitionDuration={1000}
//           removeArrowOnDeviceType={["tablet", "mobile"]}
//           className="relative"
//         >
//           {quotesData.map((quote, index) => (
//             <div key={index} className="px-4">
//               <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
//                 <IoMdQuote className="text-amber-500 text-4xl mx-auto mb-4 rotate-180" />
//                 <p className="text-gray-600 text-lg mb-4">{quote.quote}</p>
//                 <IoMdQuote className="text-amber-500 text-4xl mx-auto mb-4" />
//                 <p className="text-amber-500 font-semibold">{quote.name} ({quote.position})</p>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </section>

//       {/* Join Us Section */}
//       <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Become a <span className="text-amber-500">Team Member</span>
//           </h2>
//           <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//             Join our dynamic team and contribute to innovative projects. We value passion, creativity, and growth.
//           </p>
//           {!showJoinForm ? (
//             <button
//               onClick={() => setShowJoinForm(true)}
//               className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300"
//             >
//               Join Us
//             </button>
//           ) : (
//             <form className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
//               <input type="text" placeholder="Name" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500" required />
//               <input type="email" placeholder="Email" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500" required />
//               <input type="tel" placeholder="Phone" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500" required />
//               <input type="text" placeholder="Company" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500" required />
//               <div className="flex gap-4">
//                 <button type="button" className="flex-1 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300 flex items-center justify-center gap-2">
//                   Upload CV <FaCloudUploadAlt />
//                 </button>
//                 <button type="submit" className="flex-1 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           )}
//         </motion.div>
//       </section>
//     </div>
//   );
// }

















// "use client"

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { BiLogoLinkedinSquare } from "react-icons/bi";
// import { MdEmail } from "react-icons/md";
// import { IoMdQuote } from "react-icons/io";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// const teamMembers = [
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759932169/image-4096x4096_axfq0s.png',
//     name: 'Fahad Joyia',
//     position: 'Founder',
//     role: 'WEB DEVELOPMENT',
//     bio: 'With over 10 years of experience in web development, Fahad leads our team with innovative strategies and a passion for cutting-edge technology.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/fahad-joyia/',
//     email: 'fahad.joyia@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759944280/image-4096x4096_1_vs23xw.png',
//     name: 'Hisham Hussain',
//     position: 'Team Member',
//     role: 'GRAPHICS DESIGNING',
//     bio: 'Hisham brings creative flair to our designs, specializing in visual storytelling and user-centric graphics.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/hisham-hussain/',
//     email: 'hisham.hussain@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759944545/image-4096x4096_3_bmva0b.png',
//     name: 'Hamiz Asghat',
//     position: 'Team Member',
//     role: 'WEB DEVELOPMENT',
//     bio: 'Hamiz excels in full-stack development, ensuring our web solutions are robust, scalable, and performant.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/hamiz-asghat/',
//     email: 'hamiz.asghat@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759943688/image-4096x4096_2_abeh5p.png',
//     name: 'Taha Khurram',
//     position: 'Team Member',
//     role: 'DIGITAL MARKETING',
//     bio: 'Taha drives our marketing efforts with data-driven strategies that boost engagement and growth.',
//     linkedin: 'https://www.linkedin.com/in/taha-khurram/',
//     email: 'taha.khurram@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759946290/image-4096x4096_4_v1in8h.png',
//     name: 'Muneeb Naqvi',
//     position: 'Team Member',
//     role: 'WEB DEVELOPMENT',
//     bio: 'Muneeb is a frontend expert, crafting intuitive and beautiful user interfaces.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/muneeb-naqvi/',
//     email: 'muneeb.naqvi@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759946290/image-4096x4096_4_v1in8h.png',
//     name: 'Muneeb Naqvi',
//     position: 'Team Member',
//     role: 'CONTENT WRITING',
//     bio: 'Muneeb also handles content, creating compelling narratives that resonate with audiences.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/muneeb-naqvi/',
//     email: 'muneeb.naqvi@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759932169/image-4096x4096_axfq0s.png',
//     name: 'Fahad Joyia',
//     position: 'Founder',
//     role: 'VIDEO EDITING',
//     bio: 'Fahad oversees video production, delivering high-quality edits that captivate viewers.',
//     linkedin: 'https://www.linkedin.com/in/fahad-joyia/',
//     email: 'fahad.joyia@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759944280/image-4096x4096_1_vs23xw.png',
//     name: 'Hisham Hussain',
//     position: 'Team Member',
//     role: 'VIDEO EDITING',
//     bio: 'Hisham contributes to video editing with a keen eye for detail and storytelling.',
//     linkedin: 'https://www.linkedin.com/in/hisham-hussain/',
//     email: 'hisham.hussain@example.com',
//   },
//   {
//     img: 'https://res.cloudinary.com/dit3dubrf/image/upload/v1759943688/image-4096x4096_2_abeh5p.png',
//     name: 'Taha Khurram',
//     position: 'Team Member',
//     role: 'SEO',
//     bio: 'Taha optimizes our digital presence, ensuring top search rankings and visibility.',
//     topPositioned: true,
//     linkedin: 'https://www.linkedin.com/in/taha-khurram/',
//     email: 'taha.khurram@example.com',
//   },
// ];

// const quotesData = [
//   {
//     quote: "At Versanex, our mission is to bring creativity and innovation to every project. We believe in delivering solutions that not only meet client needs but also elevate their brand to new heights.",
//     name: "Moaz",
//     position: "Founder"
//   },
//   {
//     quote: "We take pride in building lasting partnerships with our clients. At Versanex, every project is a collaboration, ensuring that we deliver results that truly resonate with the client's vision and goals.",
//     name: "Hisham",
//     position: "Co Founder"
//   },
//   {
//     quote: "Our approach at Versanex combines passion, expertise, and a commitment to excellence. We aim to provide tailored solutions that enhance your business and set it apart in today's competitive market.",
//     name: "Fahad",
//     position: "Co - Founder"
//   },
// ];

// export default function TeamPage() {
//   const [activeFilter, setActiveFilter] = useState('ALL');
//   const [itemsToShow, setItemsToShow] = useState(6);
//   const [showJoinForm, setShowJoinForm] = useState(false);

//   const filteredMembers = teamMembers.filter(member => {
//     if (activeFilter === 'LEADERSHIP') return member.topPositioned;
//     if (activeFilter === 'ALL') return true;
//     return member.role.toUpperCase().replace(/ /g, "_") === activeFilter;
//   });

//   const handleFilterChange = (filter) => {
//     setActiveFilter(filter);
//     setItemsToShow(6);
//   };

//   const showMore = () => {
//     setItemsToShow(itemsToShow + 6);
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
//       {/* Intro Section */}
//       <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Meet Our <span className="text-amber-500">Talented Team</span>
//           </h1>
//           <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//             At VersaNex, our team is the heart of our success. We are a group of passionate professionals dedicated to delivering innovative solutions in IT, web development, digital marketing, and more.
//           </p>
//         </motion.div>
//       </section>

//       {/* Team Culture Section */}
//       <section className="py-16 px-4 md:px-8 lg:px-16 bg-white max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Team Culture & Values
//           </h2>
//           <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
//             We foster a collaborative environment where innovation thrives. Our values of integrity, excellence, and continuous learning drive us forward.
//           </p>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Join a team that values your growth and celebrates achievements together.
//           </p>
//         </motion.div>
//       </section>

//       {/* Team Members Section */}
//       <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {['ALL', 'LEADERSHIP', 'GRAPHICS_DESIGNING', 'WEB_DEVELOPMENT', 'VIDEO_EDITING', 'CONTENT_WRITING', 'DIGITAL_MARKETING', 'SEO'].map(filter => (
//             <button
//               key={filter}
//               onClick={() => handleFilterChange(filter)}
//               className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
//                 activeFilter === filter
//                   ? 'bg-amber-500 text-white shadow-md'
//                   : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
//               }`}
//             >
//               {filter.replace(/_/g, ' ')}
//             </button>
//           ))}
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredMembers.slice(0, itemsToShow).map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden"
//             >
//               <div className="relative h-80">
//                 <Image
//                   src={member.img}
//                   alt={member.name}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-110"
//                   loading="lazy"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-amber-500 to-transparent opacity-80"></div>
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
//                 <p className="text-amber-500 font-semibold mb-2">{member.position}</p>
//                 <p className="text-gray-600 text-sm mb-4">{member.role}</p>
//                 <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
//                 <div className="flex justify-center gap-4">
//                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-600">
//                     <BiLogoLinkedinSquare size={24} />
//                   </a>
//                   <a href={`mailto:${member.email}`} className="text-amber-500 hover:text-amber-600">
//                     <MdEmail size={24} />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         {itemsToShow < filteredMembers.length && (
//           <div className="text-center mt-8">
//             <button
//               onClick={showMore}
//               className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300"
//             >
//               Show More
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Quotes Section */}
//       <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-amber-50 to-white max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inspiring Quotes</h2>
//           <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8"></div>
//         </motion.div>
//         <Swiper
//           slidesPerView={1}
//           breakpoints={{
//             700: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 2,
//             },
//           }}
//           spaceBetween={20}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           modules={[Autoplay]}
//           loop={true}
//           className="relative"
//         >
//           {quotesData.map((quote, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
//                 <IoMdQuote className="text-amber-500 text-4xl mx-auto mb-4 rotate-180" />
//                 <p className="text-gray-600 text-lg mb-4">{quote.quote}</p>
//                 <IoMdQuote className="text-amber-500 text-4xl mx-auto mb-4" />
//                 <p className="text-amber-500 font-semibold">{quote.name} ({quote.position})</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* Join Us Section */}
//       <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Become a <span className="text-amber-500">Team Member</span>
//           </h2>
//           <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//             Join our dynamic team and contribute to innovative projects. We value passion, creativity, and growth.
//           </p>
//           {!showJoinForm ? (
//             <button
//               onClick={() => setShowJoinForm(true)}
//               className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300"
//             >
//               Join Us
//             </button>
//           ) : (
//             <form className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
//               <input type="text" placeholder="Name" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500" required />
//               <input type="email" placeholder="Email" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500" required />
//               <input type="tel" placeholder="Phone" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500" required />
//               <input type="text" placeholder="Company" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500" required />
//               <div className="flex gap-4">
//                 <button type="button" className="flex-1 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300 flex items-center justify-center gap-2">
//                   Upload CV <FaCloudUploadAlt />
//                 </button>
//                 <button type="submit" className="flex-1 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           )}
//         </motion.div>
//       </section>
//     </div>
//     <Footer/>
//     </>
//   );
// }
















// "use client"

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { BiLogoLinkedinSquare } from "react-icons/bi";
// import { MdEmail } from "react-icons/md";
// import { IoMdQuote } from "react-icons/io";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import Head from "next/head";

// const teamMembers = [
//   {
//     img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759932169/image-4096x4096_axfq0s.png",
//     name: "Fahad Joyia",
//     position: "Founder",
//     role: "WEB DEVELOPMENT",
//     bio: "With over 10 years of experience in web development, Fahad leads our team with innovation and precision.",
//     linkedin: "https://www.linkedin.com/in/fahad-joyia/",
//     email: "fahad.joyia@example.com",
//   },
//   {
//     img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759944280/image-4096x4096_1_vs23xw.png",
//     name: "Hisham Hussain",
//     position: "Team Member",
//     role: "GRAPHICS DESIGNING",
//     bio: "Hisham brings creativity and passion to our designs, turning concepts into visual stories.",
//     linkedin: "https://www.linkedin.com/in/hisham-hussain/",
//     email: "hisham.hussain@example.com",
//   },
//   {
//     img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759944545/image-4096x4096_3_bmva0b.png",
//     name: "Hamiz Asghat",
//     position: "Team Member",
//     role: "WEB DEVELOPMENT",
//     bio: "Hamiz crafts fast, scalable web experiences with full-stack precision.",
//     linkedin: "https://www.linkedin.com/in/hamiz-asghat/",
//     email: "hamiz.asghat@example.com",
//   },
//   {
//     img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759943688/image-4096x4096_2_abeh5p.png",
//     name: "Taha Khurram",
//     position: "Team Member",
//     role: "DIGITAL MARKETING",
//     bio: "Taha drives impactful marketing strategies that amplify brand reach.",
//     linkedin: "https://www.linkedin.com/in/taha-khurram/",
//     email: "taha.khurram@example.com",
//   },
// ];

// const quotesData = [
//   {
//     quote:
//       "At VersaNex, creativity and innovation drive everything we do. We craft solutions that empower brands to thrive.",
//     name: "Moaz",
//     position: "Founder",
//   },
//   {
//     quote:
//       "Every project is a story of collaboration and excellence — we build partnerships that last.",
//     name: "Hisham",
//     position: "Co-Founder",
//   },
//   {
//     quote:
//       "Our vision is to merge technology and creativity, delivering results that truly matter.",
//     name: "Fahad",
//     position: "Co-Founder",
//   },
// ];

// export default function TeamPage() {
//   const [activeFilter, setActiveFilter] = useState("ALL");
//   const [showJoinForm, setShowJoinForm] = useState(false);

//   const filteredMembers =
//     activeFilter === "ALL"
//       ? teamMembers
//       : teamMembers.filter(
//           (member) => member.role.toUpperCase().replace(/ /g, "_") === activeFilter
//         );

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <Head>
//         <title>Our Team | VersaNex Professionals</title>
//         <meta
//           name="description"
//           content="Meet the VersaNex team — experts in web development, marketing, and creative technology. Passionate people driving digital excellence."
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://www.versanex.com/team" />
//       </Head>

//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white py-24 px-6 text-center font-sans">
//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-extrabold mb-4"
//         >
//           Meet Our <span className="text-[#f2ad08]">Exceptional Team</span>
//         </motion.h1>
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: 120 }}
//           transition={{ duration: 1 }}
//           className="h-[3px] bg-[#f2ad08] mx-auto mb-6 rounded-full"
//         />
//         <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
//           Driven by innovation, united by excellence — together, we turn ideas into impact.
//         </p>
//       </section>

//       {/* Filter Buttons */}
//       <section className="py-12 px-6 text-center bg-white">
//         <div className="flex flex-wrap justify-center gap-3">
//           {["ALL", "WEB_DEVELOPMENT", "GRAPHICS_DESIGNING", "DIGITAL_MARKETING"].map(
//             (filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
//                   activeFilter === filter
//                     ? "bg-[#f2ad08] text-white shadow-md"
//                     : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//                 }`}
//               >
//                 {filter.replace(/_/g, " ")}
//               </button>
//             )
//           )}
//         </div>
//       </section>

//       {/* Team Cards */}
//       <section className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 py-12">
//         {filteredMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//           >
//             <div className="relative w-full h-80">
//               <Image
//                 src={member.img}
//                 alt={`Profile picture of ${member.name}`}
//                 fill
//                 loading="lazy"
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//             </div>
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-bold text-gray-900 mb-1">
//                 {member.name}
//               </h3>
//               <p className="text-[#f2ad08] font-semibold">{member.position}</p>
//               <p className="text-gray-600 text-sm mb-3">{member.role}</p>
//               <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href={member.linkedin}
//                   aria-label={`${member.name} LinkedIn`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#f2ad08] hover:scale-110 transition"
//                 >
//                   <BiLogoLinkedinSquare size={24} />
//                 </a>
//                 <a
//                   href={`mailto:${member.email}`}
//                   aria-label={`Email ${member.name}`}
//                   className="text-[#f2ad08] hover:scale-110 transition"
//                 >
//                   <MdEmail size={24} />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </section>

//       {/* Quotes Carousel */}
//       <section className="bg-[#f2ad0815] py-16">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mb-10"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-2">
//             Voices of Inspiration
//           </h2>
//           <div className="h-[3px] w-24 bg-[#f2ad08] mx-auto rounded-full" />
//         </motion.div>

//         <Swiper
//           slidesPerView={1}
//           breakpoints={{ 768: { slidesPerView: 2 } }}
//           spaceBetween={20}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           loop
//           modules={[Autoplay]}
//           className="max-w-5xl mx-auto px-4"
//         >
//           {quotesData.map((quote, i) => (
//             <SwiperSlide key={i}>
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-white rounded-2xl p-8 shadow-md text-center"
//               >
//                 <IoMdQuote className="text-[#f2ad08] text-4xl mx-auto mb-4 rotate-180" />
//                 <p className="text-gray-700 mb-4 leading-relaxed">{quote.quote}</p>
//                 <IoMdQuote className="text-[#f2ad08] text-4xl mx-auto mb-2" />
//                 <p className="text-[#f2ad08] font-semibold">
//                   {quote.name} ({quote.position})
//                 </p>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* Join Section */}
//       <section className="py-20 text-center bg-white">
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-gray-900 mb-4"
//         >
//           Join <span className="text-[#f2ad08]">Our Family</span>
//         </motion.h2>
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ delay: 0.2 }}
//           className="text-gray-600 max-w-2xl mx-auto mb-10"
//         >
//           Be a part of a passionate team that values creativity, growth, and
//           innovation. We’d love to work with talented minds like you.
//         </motion.p>

//         {!showJoinForm ? (
//           <button
//             onClick={() => setShowJoinForm(true)}
//             className="px-8 py-3 bg-[#f2ad08] text-white rounded-lg font-semibold hover:bg-[#e09b06] transition-all duration-300"
//           >
//             Join Us
//           </button>
//         ) : (
//           <form className="max-w-md mx-auto bg-white border border-gray-200 shadow-lg p-6 rounded-2xl">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full px-4 py-3 mb-3 border rounded-lg focus:ring-2 focus:ring-[#f2ad08]"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-3 mb-3 border rounded-lg focus:ring-2 focus:ring-[#f2ad08]"
//               required
//             />
//             <input
//               type="tel"
//               placeholder="Phone"
//               className="w-full px-4 py-3 mb-3 border rounded-lg focus:ring-2 focus:ring-[#f2ad08]"
//               required
//             />
//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 className="flex-1 px-4 py-3 bg-[#f2ad08] text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#e09b06]"
//               >
//                 Upload CV <FaCloudUploadAlt />
//               </button>
//               <button
//                 type="submit"
//                 className="flex-1 px-4 py-3 bg-[#f2ad08] text-white rounded-lg font-medium hover:bg-[#e09b06]"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}
//       </section>

//       <Footer />
//     </>
//   );
// }












// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Head from "next/head";
// import { BiLogoLinkedinSquare } from "react-icons/bi";
// import { MdEmail } from "react-icons/md";
// import { IoMdQuote } from "react-icons/io";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

// const teamMembers = [
//   {
//     img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759932169/image-4096x4096_axfq0s.png",
//     name: "Fahad Joyia",
//     position: "Founder",
//     role: "WEB DEVELOPMENT",
//     bio: "Leading our development team with a vision for innovation and quality-driven solutions.",
//     linkedin: "https://www.linkedin.com/in/fahad-joyia/",
//     email: "fahad.joyia@example.com",
//   },
//   {
//     img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759944280/image-4096x4096_1_vs23xw.png",
//     name: "Hisham Hussain",
//     position: "Graphic Designer",
//     role: "GRAPHICS DESIGN",
//     bio: "Crafting visual identities that connect brands and audiences through creativity.",
//     linkedin: "https://www.linkedin.com/in/hisham-hussain/",
//     email: "hisham.hussain@example.com",
//   },
//   {
//     img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759944545/image-4096x4096_3_bmva0b.png",
//     name: "Hamiz Asghat",
//     position: "Full Stack Developer",
//     role: "WEB DEVELOPMENT",
//     bio: "Building robust and scalable web systems with a focus on performance and UX.",
//     linkedin: "https://www.linkedin.com/in/hamiz-asghat/",
//     email: "hamiz.asghat@example.com",
//   },
//   {
//     img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759943688/image-4096x4096_2_abeh5p.png",
//     name: "Taha Khurram",
//     position: "Digital Marketer",
//     role: "DIGITAL MARKETING",
//     bio: "Driving growth through strategic campaigns and data-driven marketing efforts.",
//     linkedin: "https://www.linkedin.com/in/taha-khurram/",
//     email: "taha.khurram@example.com",
//   },
//   {
//     img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759946290/image-4096x4096_4_v1in8h.png",
//     name: "Muneeb Naqvi",
//     position: "Content Writer",
//     role: "CONTENT WRITING",
//     bio: "Creating powerful narratives and SEO-optimized content that inspires engagement.",
//     linkedin: "https://www.linkedin.com/in/muneeb-naqvi/",
//     email: "muneeb.naqvi@example.com",
//   },
// ];

// const quotes = [
//   {
//     quote:
//       "At Versanex, innovation and collaboration fuel every project we build.",
//     name: "Moaz",
//     position: "Founder",
//   },
//   {
//     quote:
//       "Success comes from teamwork, dedication, and the passion to create impact.",
//     name: "Hisham",
//     position: "Co-Founder",
//   },
//   {
//     quote:
//       "We build technology not just for today — but for the digital future.",
//     name: "Fahad",
//     position: "Co-Founder",
//   },
// ];

// export default function TeamPage() {
//   const [showJoinForm, setShowJoinForm] = useState(false);

//   return (
//     <>
//       <Head>
//         <title>Our Team | Versanex</title>
//         <meta
//           name="description"
//           content="Meet the talented team behind Versanex — innovators in web development, design, and digital strategy."
//         />
//         <link rel="canonical" href="https://www.versanex.com/team" />
//       </Head>

//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 text-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//           Meet Our <span className="text-amber-400">Team</span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
//           Passionate creators, developers, and thinkers — shaping the digital
//           future, one idea at a time.
//         </p>
//         <div className="h-[3px] bg-amber-400 w-24 mx-auto mt-6 rounded-full animate-pulse" />
//       </section>

//       {/* Culture & Values */}
//       <section className="bg-white py-16 px-6 text-center max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//           Our Culture & Values
//         </h2>
//         <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
//         <p className="text-gray-600 max-w-3xl mx-auto text-lg">
//           We believe in collaboration, transparency, and growth. Every member of
//           Versanex brings their expertise and creativity, making innovation our
//           shared language.
//         </p>
//       </section>

//       {/* Team Grid */}
//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
//             >
//               <div className="relative h-80 w-full overflow-hidden">
//                 <Image
//                   src={member.img}
//                   alt={member.name}
//                   fill
//                   className="object-cover hover:scale-110 transition-transform duration-700 ease-out"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold text-gray-900">
//                   {member.name}
//                 </h3>
//                 <p className="text-amber-500 font-semibold mb-2">
//                   {member.position}
//                 </p>
//                 <p className="text-gray-600 text-sm mb-3">{member.role}</p>
//                 <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
//                 <div className="flex justify-center gap-4">
//                   <a
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={`${member.name}'s LinkedIn`}
//                     className="text-amber-500 hover:text-amber-600"
//                   >
//                     <BiLogoLinkedinSquare size={24} />
//                   </a>
//                   <a
//                     href={`mailto:${member.email}`}
//                     aria-label={`Email ${member.name}`}
//                     className="text-amber-500 hover:text-amber-600"
//                   >
//                     <MdEmail size={24} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Quotes Section */}
//       <section className="bg-amber-50 py-20 px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
//           Words That Inspire Us
//         </h2>
//         <Swiper
//           slidesPerView={1}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 2 },
//           }}
//           spaceBetween={24}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop
//           modules={[Autoplay]}
//           className="max-w-6xl mx-auto"
//         >
//           {quotes.map((quote, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-xl mx-auto transition-transform hover:scale-[1.02]">
//                 <IoMdQuote className="text-amber-500 text-4xl mx-auto mb-4 rotate-180" />
//                 <p className="text-gray-700 text-lg leading-relaxed mb-4">
//                   {quote.quote}
//                 </p>
//                 <IoMdQuote className="text-amber-500 text-4xl mx-auto mb-4" />
//                 <p className="text-amber-500 font-semibold">
//                   {quote.name} ({quote.position})
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* Join Us Section */}
//       <section className="py-20 px-6 max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//           Become a <span className="text-amber-500">Team Member</span>
//         </h2>
//         <div className="h-1 w-20 bg-amber-500 mx-auto mb-6 rounded-full" />
//         <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
//           We’re always looking for passionate individuals to join our growing
//           team. Shape the future with creativity and purpose.
//         </p>

//         {!showJoinForm ? (
//           <button
//             onClick={() => setShowJoinForm(true)}
//             className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-all duration-300"
//           >
//             Join Us
//           </button>
//         ) : (
//           <form className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
//               required
//             />
//             <input
//               type="file"
//               className="w-full mb-4 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-500 file:text-white hover:file:bg-amber-600"
//             />
//             <button
//               type="submit"
//               className="w-full py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         )}
//       </section>

//       <Footer />
//     </>
//   );
// }


"use client";

import React, { useState, memo } from "react";
import Image from "next/image";
import Head from "next/head";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoMdQuote } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const teamMembers = [
  {
    img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759932169/image-4096x4096_axfq0s.png",
    name: "Fahad Joyia",
    position: "Founder",
    role: "WEB DEVELOPMENT",
    bio: "Leading our development team with a vision for innovation and quality-driven solutions.",
    linkedin: "https://www.linkedin.com/in/fahad-joyia/",
    email: "fahad.joyia@example.com",
  },
  {
    img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759944280/image-4096x4096_1_vs23xw.png",
    name: "Hisham Hussain",
    position: "Graphic Designer",
    role: "GRAPHICS DESIGN",
    bio: "Crafting visual identities that connect brands and audiences through creativity.",
    linkedin: "https://www.linkedin.com/in/hisham-hussain/",
    email: "hisham.hussain@example.com",
  },
  {
    img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759944545/image-4096x4096_3_bmva0b.png",
    name: "Hamiz Asghat",
    position: "Full Stack Developer",
    role: "WEB DEVELOPMENT",
    bio: "Building robust and scalable web systems with a focus on performance and UX.",
    linkedin: "https://www.linkedin.com/in/hamiz-asghat/",
    email: "hamiz.asghat@example.com",
  },
  {
    img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759943688/image-4096x4096_2_abeh5p.png",
    name: "Taha Khurram",
    position: "Digital Marketer",
    role: "DIGITAL MARKETING",
    bio: "Driving growth through strategic campaigns and data-driven marketing efforts.",
    linkedin: "https://www.linkedin.com/in/taha-khurram/",
    email: "taha.khurram@example.com",
  },
  {
    img: "https://res.cloudinary.com/dit3dubrf/image/upload/v1759946290/image-4096x4096_4_v1in8h.png",
    name: "Muneeb Naqvi",
    position: "Content Writer",
    role: "CONTENT WRITING",
    bio: "Creating powerful narratives and SEO-optimized content that inspires engagement.",
    linkedin: "https://www.linkedin.com/in/muneeb-naqvi/",
    email: "muneeb.naqvi@example.com",
  },
];

const quotes = [
  {
    quote: "At Versanex, innovation and collaboration fuel every project we build.",
    name: "Moaz",
    position: "Founder",
  },
  {
    quote: "Success comes from teamwork, dedication, and the passion to create impact.",
    name: "Hisham",
    position: "Co-Founder",
  },
  {
    quote: "We build technology not just for today — but for the digital future.",
    name: "Fahad",
    position: "Co-Founder",
  },
];

// ✅ Optimized memoized team card
const TeamCard = memo(({ member, index }) => (
  <div
    className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-[1.015] hover:shadow-xl will-change-transform"
  >
    <div className="relative w-full h-80 overflow-hidden">
      <Image
        src={member.img}
        alt={member.name}
        width={500}
        height={320}
        quality={70}
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
        fetchPriority={index === 0 ? "high" : "low"}
        className="object-cover w-full h-full opacity-0 animate-fadeIn transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>

    <div className="p-6 text-center">
      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
      <p className="text-amber-500 font-semibold mb-1">{member.position}</p>
      <p className="text-gray-600 text-sm mb-2">{member.role}</p>
      <p className="text-gray-500 text-sm mb-3">{member.bio}</p>
      <div className="flex justify-center gap-4">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name}'s LinkedIn`}
          className="text-amber-500 hover:text-amber-600 transition-colors"
        >
          <BiLogoLinkedinSquare size={22} />
        </a>
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          className="text-amber-500 hover:text-amber-600 transition-colors"
        >
          <MdEmail size={22} />
        </a>
      </div>
    </div>
  </div>
));
TeamCard.displayName = "TeamCard";

export default function TeamPage() {
  const [showJoinForm, setShowJoinForm] = useState(false);

  return (
    <>
      <Head>
        <title>Our Team | Versanex</title>
        <meta
          name="description"
          content="Meet the talented team behind Versanex — innovators in web development, design, and digital strategy."
        />
        <link rel="canonical" href="https://www.versanex.com/team" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Meet Our <span className="text-amber-400">Team</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          Passionate creators, developers, and thinkers — shaping the digital
          future, one idea at a time.
        </p>
        <div className="h-[3px] bg-amber-400 w-24 mx-auto mt-6 rounded-full animate-pulse" />
      </section>

      {/* Culture & Values */}
      <section className="bg-white py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Culture & Values
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We believe in collaboration, transparency, and growth. Every member of
          Versanex brings their expertise and creativity, making innovation our
          shared language.
        </p>
      </section>

      {/* Team Grid — Optimized */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Quotes Section */}
      <section className="bg-amber-50 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Words That Inspire Us
        </h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          spaceBetween={24}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          lazyPreloadPrevNext={1}
          modules={[Autoplay]}
          loop
          className="max-w-6xl mx-auto"
        >
          {quotes.map((quote, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-xl mx-auto transition-transform duration-200 hover:scale-[1.02]">
                <IoMdQuote className="text-amber-500 text-4xl mx-auto mb-4 rotate-180" />
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {quote.quote}
                </p>
                <IoMdQuote className="text-amber-500 text-4xl mx-auto mb-4" />
                <p className="text-amber-500 font-semibold">
                  {quote.name} ({quote.position})
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Become a <span className="text-amber-500">Team Member</span>
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto mb-6 rounded-full" />
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          We’re always looking for passionate individuals to join our growing
          team. Shape the future with creativity and purpose.
        </p>

        {!showJoinForm ? (
          <button
            onClick={() => setShowJoinForm(true)}
            className="px-8 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-all duration-300"
          >
            Join Us
          </button>
        ) : (
          <form className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg animate-fadeIn">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
              required
            />
            <input
              type="file"
              className="w-full mb-4 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-500 file:text-white hover:file:bg-amber-600"
            />
            <button
              type="submit"
              className="w-full py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </section>

      <Footer />
    </>
  );
}

