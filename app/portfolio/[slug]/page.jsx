// "use client"

// import { useRef, useEffect, useState } from "react"
// import { useParams, useRouter } from "next/navigation"
// import { motion } from "framer-motion"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import ProjectHeader from "@/components/projects/SingleProject/ProjectHeader"
// import ProjectTabs from "@/components/projects/SingleProject/tabs/ProjectTabs"
// import OverviewTab from "@/components/projects/SingleProject/tabs/OverviewTab"
// import FeaturesTab from "@/components/projects/SingleProject/tabs/FeaturesTab"
// import GalleryTab from "@/components/projects/SingleProject/tabs/GalleryTab"
// import ReviewsTab from "@/components/projects/SingleProject/tabs/ReviewsTab"
// import RelatedProjects from "@/components/projects/SingleProject/RelatedProjects"

// gsap.registerPlugin(ScrollTrigger)

// export default function ProjectDetailPage() {
//   const params = useParams()
//   const router = useRouter()
//   const wrapperRef = useRef(null)
//   const prefersReducedMotion = useRef(false)
//   const [project, setProject] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [activeTab, setActiveTab] = useState("overview")
//   const [reviews, setReviews] = useState([])
//   const [relatedProjects, setRelatedProjects] = useState([])
//   const [refreshKey, setRefreshKey] = useState(0)
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [zoom, setZoom] = useState(1)

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   }, [])

//   useGSAP(() => {
//     if (prefersReducedMotion.current || !wrapperRef.current) return
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".pd-card",
//         { y: 24, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.1 }
//       )

//       const targets = gsap.utils.toArray(".pd-media")
//       targets.forEach((el) => {
//         gsap.fromTo(
//           el,
//           { y: 40, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: el,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         )
//       })
//     }, wrapperRef)
//     return () => ctx.revert()
//   }, [])

//   useEffect(() => {
//     const fetchProject = async () => {
//       setLoading(true)
//       try {
//         // Fetch project data
//         const response = await fetch(`/api/projects/${params.slug}`)
//         const data = await response.json()
//         if (!data.success) {
//           setError(data.error || "Project not found")
//           setProject(null)
//         } else {
//           setProject(data.data || {})
//           const reviewsResponse = await fetch(`/api/projects/${params.slug}/reviews`)
//           const reviewsData = await reviewsResponse.json()
//           if (reviewsData.success) {
//             setReviews(reviewsData.data || [])
//           }
//           const relatedResponse = await fetch(`/api/projects?category=${data.data.category}&limit=3&exclude=${params.slug}`)
//           const relatedData = await relatedResponse.json()
//           if (relatedData.success) setRelatedProjects(relatedData.data || [])
//         }
//       } catch (err) {
//         console.error("Error fetching project:", err)
//         setError("Error fetching project: " + err.message)
//         setProject(null)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (params.slug) fetchProject()
//   }, [params.slug])

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-teal-100 to-emerald-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-600"></div>
//       </div>
//     )
//   }

//   if (error || !project) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-teal-100 to-emerald-50 flex flex-col items-center justify-center">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{error || "Project not found"}</h1>
//         <button
//           onClick={() => router.push("/portfolio")}
//           className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-base sm:text-lg"
//         >
//           Back to Portfolio
//         </button>
//       </div>
//     )
//   }

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   }

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const averageRating = reviews.length
//     ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
//     : 0

//   return (
//     <>
//       <Navbar />
//       <style jsx>{`
//         @media (max-width: 799px) {
//           .forcesmallh1 {
//             font-size: 1.5rem;
//           }
//           .forcesmallp {
//             font-size: .8rem;
//           }
//         }
//         @media (max-width: 640px) {
//           .forcesmallh1 {
//             font-size: 1.2rem;
//           }
//           .forcesmallp {
//             font-size: .7rem;
//           }
//           .forcesmallweb {
//             font-size: .6rem;
//           }
//         }
//       `}</style>
//       <div ref={wrapperRef} className="">
//         <div className="mx-auto px-6 py-10 sm:py-2 sm:px-5">
//           <div className="bg-white rounded-2xl shadow-xl mt-5 overflow-hidden">
//             <ProjectHeader 
//               project={project} 
//               averageRating={averageRating} 
//               reviews={reviews} 
//             />
//             <div className="p-4 sm:p-6 md:p-8">
//               <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />
//               {activeTab === "overview" && (
//                 <OverviewTab project={project} fadeIn={fadeIn} staggerContainer={staggerContainer} motion={motion} />
//               )}
//               {activeTab === "features" && (
//                 <FeaturesTab project={project} fadeIn={fadeIn} staggerContainer={staggerContainer} motion={motion} />
//               )}
//               {activeTab === "gallery" && (
//                 <GalleryTab 
//                   project={project} 
//                   refreshKey={refreshKey} 
//                   setRefreshKey={setRefreshKey} 
//                   fadeIn={fadeIn} 
//                   staggerContainer={staggerContainer} 
//                   motion={motion}
//                   selectedImage={selectedImage}
//                   setSelectedImage={setSelectedImage}
//                   zoom={zoom}
//                   setZoom={setZoom}
//                 />
//               )}
//               {activeTab === "reviews" && (
//                 <ReviewsTab 
//                   reviews={reviews} 
//                   fadeIn={fadeIn} 
//                   staggerContainer={staggerContainer} 
//                   motion={motion}
//                 />
//               )}
//             </div>
//           </div>
//           <RelatedProjects relatedProjects={relatedProjects} router={router} />
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }
























// "use client"

// import { useRef, useEffect, useState } from "react"
// import { useParams, useRouter } from "next/navigation"
// import { motion } from "framer-motion"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import ProjectHeader from "@/components/projects/SingleProject/ProjectHeader"
// import ProjectTabs from "@/components/projects/SingleProject/tabs/ProjectTabs"
// import OverviewTab from "@/components/projects/SingleProject/tabs/OverviewTab"
// import FeaturesTab from "@/components/projects/SingleProject/tabs/FeaturesTab"
// import GalleryTab from "@/components/projects/SingleProject/tabs/GalleryTab"
// import ReviewsTab from "@/components/projects/SingleProject/tabs/ReviewsTab"
// import RelatedProjects from "@/components/projects/SingleProject/RelatedProjects"

// gsap.registerPlugin(ScrollTrigger)

// export default function ProjectDetailPage() {
//   const params = useParams()
//   const router = useRouter()
//   const wrapperRef = useRef(null)
//   const prefersReducedMotion = useRef(false)
//   const [project, setProject] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [activeTab, setActiveTab] = useState("overview")
//   const [reviews, setReviews] = useState([])
//   const [relatedProjects, setRelatedProjects] = useState([])
//   const [refreshKey, setRefreshKey] = useState(0)
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [zoom, setZoom] = useState(1)

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   }, [])

//   useGSAP(() => {
//     if (prefersReducedMotion.current || !wrapperRef.current) return
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".pd-card",
//         { y: 24, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.1 }
//       )

//       const targets = gsap.utils.toArray(".pd-media")
//       targets.forEach((el) => {
//         gsap.fromTo(
//           el,
//           { y: 40, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: el,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         )
//       })
//     }, wrapperRef)
//     return () => ctx.revert()
//   }, [])

//   useEffect(() => {
//     const fetchProject = async () => {
//       setLoading(true)
//       try {
//         const response = await fetch(`/api/projects/${params.slug}`)
//         const data = await response.json()
//         if (!data.success) {
//           setError(data.error || "Project not found")
//           setProject(null)
//         } else {
//           setProject(data.data || {})
//           const reviewsResponse = await fetch(`/api/projects/${params.slug}/reviews`)
//           const reviewsData = await reviewsResponse.json()
//           if (reviewsData.success) setReviews(reviewsData.data || [])
//           const relatedResponse = await fetch(
//             `/api/projects?category=${data.data.category}&limit=3&exclude=${params.slug}`
//           )
//           const relatedData = await relatedResponse.json()
//           if (relatedData.success) setRelatedProjects(relatedData.data || [])
//         }
//       } catch (err) {
//         console.error("Error fetching project:", err)
//         setError("Error fetching project: " + err.message)
//         setProject(null)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (params.slug) fetchProject()
//   }, [params.slug])

//   if (loading) {
//     return (
//       <div
//         className="min-h-screen flex items-center justify-center"
//         style={{
//           background: "linear-gradient(135deg, #f5e2b8, #f9f0d0, #fffaf2)",
//         }}
//       >
//         <div
//           className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2"
//           style={{
//             borderColor: "#d88f07",
//             boxShadow: "0 0 10px rgba(216, 143, 7, 0.3)",
//           }}
//         ></div>
//       </div>
//     )
//   }

//   if (error || !project) {
//     return (
//       <div
//         className="min-h-screen flex flex-col items-center justify-center"
//         style={{
//           background: "linear-gradient(135deg, #f5e2b8, #f9f0d0, #fffaf2)",
//         }}
//       >
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//           {error || "Project not found"}
//         </h1>
//         <button
//           onClick={() => router.push("/portfolio")}
//           className="px-4 py-2 text-white rounded-lg transition-all text-base sm:text-lg"
//           style={{
//             background: "linear-gradient(90deg, #d88f07, #e2a63c)",
//             boxShadow: "0 4px 10px rgba(216, 143, 7, 0.4)",
//           }}
//         >
//           Back to Portfolio
//         </button>
//       </div>
//     )
//   }

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   }

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   }

//   const averageRating = reviews.length
//     ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
//     : 0

//   return (
//     <>
//       <Navbar />
//       <style jsx>{`
//         @media (max-width: 799px) {
//           .forcesmallh1 {
//             font-size: 1.5rem;
//           }
//           .forcesmallp {
//             font-size: 0.8rem;
//           }
//         }
//         @media (max-width: 640px) {
//           .forcesmallh1 {
//             font-size: 1.2rem;
//           }
//           .forcesmallp {
//             font-size: 0.7rem;
//           }
//           .forcesmallweb {
//             font-size: 0.6rem;
//           }
//         }
//       `}</style>

//       <div ref={wrapperRef}>
//         <div className="mx-auto px-6 py-10 sm:py-2 sm:px-5">
//           <div className="bg-white rounded-2xl shadow-xl mt-5 overflow-hidden">
//             <ProjectHeader project={project} averageRating={averageRating} reviews={reviews} />
//             <div className="p-4 sm:p-6 md:p-8">
//               <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />

//               {activeTab === "overview" && (
//                 <OverviewTab project={project} fadeIn={fadeIn} staggerContainer={staggerContainer} motion={motion} />
//               )}
//               {activeTab === "features" && (
//                 <FeaturesTab project={project} fadeIn={fadeIn} staggerContainer={staggerContainer} motion={motion} />
//               )}
//               {activeTab === "gallery" && (
//                 <GalleryTab
//                   project={project}
//                   refreshKey={refreshKey}
//                   setRefreshKey={setRefreshKey}
//                   fadeIn={fadeIn}
//                   staggerContainer={staggerContainer}
//                   motion={motion}
//                   selectedImage={selectedImage}
//                   setSelectedImage={setSelectedImage}
//                   zoom={zoom}
//                   setZoom={setZoom}
//                 />
//               )}
//               {activeTab === "reviews" && (
//                 <ReviewsTab reviews={reviews} fadeIn={fadeIn} staggerContainer={staggerContainer} motion={motion} />
//               )}
//             </div>
//           </div>
//           <RelatedProjects relatedProjects={relatedProjects} router={router} />
//         </div>
//       </div>

//       <Footer />
//     </>
//   )
// }


























// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import ProjectHeader from "@/components/projects/SingleProject/ProjectHeader";
// import ProjectTabs from "@/components/projects/SingleProject/tabs/ProjectTabs";
// import OverviewTab from "@/components/projects/SingleProject/tabs/OverviewTab";
// import FeaturesTab from "@/components/projects/SingleProject/tabs/FeaturesTab";
// import GalleryTab from "@/components/projects/SingleProject/tabs/GalleryTab";
// import ReviewsTab from "@/components/projects/SingleProject/tabs/ReviewsTab";
// import RelatedProjects from "@/components/projects/SingleProject/RelatedProjects";

// gsap.registerPlugin(ScrollTrigger);

// export default function ProjectDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const wrapperRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
//   const [reviews, setReviews] = useState([]);
//   const [relatedProjects, setRelatedProjects] = useState([]);
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [zoom, setZoom] = useState(1);

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(() => {
//     if (prefersReducedMotion.current || !wrapperRef.current) return;
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".pd-card",
//         { y: 24, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.1 }
//       );

//       const targets = gsap.utils.toArray(".pd-media");
//       targets.forEach((el) => {
//         gsap.fromTo(
//           el,
//           { y: 40, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: el,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });
//     }, wrapperRef);
//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     const fetchProject = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`/api/projects/${params.slug}`);
//         const result = await response.json();

//         if (!result.success) {
//           setError(result.error || "Project not found");
//           setProject(null);
//           return;
//         }

//         // ✅ Fix: use result.data (not result)
//         const projectData = result.data || {};
//         setProject(projectData);

//         // Fetch Reviews
//         const reviewsResponse = await fetch(
//           `/api/projects/${params.slug}/reviews`
//         );
//         const reviewsData = await reviewsResponse.json();
//         if (reviewsData.success) setReviews(reviewsData.data || []);

//         // Fetch Related Projects
//         const relatedResponse = await fetch(
//           `/api/projects?category=${projectData.category}&limit=3&exclude=${params.slug}`
//         );
//         const relatedData = await relatedResponse.json();
//         if (relatedData.success)
//           setRelatedProjects(relatedData.data || []);
//       } catch (err) {
//         console.error("Error fetching project:", err);
//         setError("Error fetching project: " + err.message);
//         setProject(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (params.slug) fetchProject();
//   }, [params.slug]);

//   if (loading) {
//     return (
//       <div
//         className="min-h-screen flex items-center justify-center"
//         style={{
//           background: "linear-gradient(135deg, #f5e2b8, #f9f0d0, #fffaf2)",
//         }}
//       >
//         <div
//           className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2"
//           style={{
//             borderColor: "#d88f07",
//             boxShadow: "0 0 10px rgba(216, 143, 7, 0.3)",
//           }}
//         ></div>
//       </div>
//     );
//   }

//   if (error || !project) {
//     return (
//       <div
//         className="min-h-screen flex flex-col items-center justify-center"
//         style={{
//           background: "linear-gradient(135deg, #f5e2b8, #f9f0d0, #fffaf2)",
//         }}
//       >
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//           {error || "Project not found"}
//         </h1>
//         <button
//           onClick={() => router.push("/portfolio")}
//           className="px-4 py-2 text-white rounded-lg transition-all text-base sm:text-lg"
//           style={{
//             background: "linear-gradient(90deg, #d88f07, #e2a63c)",
//             boxShadow: "0 4px 10px rgba(216, 143, 7, 0.4)",
//           }}
//         >
//           Back to Portfolio
//         </button>
//       </div>
//     );
//   }

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const averageRating = reviews.length
//     ? (
//         reviews.reduce((sum, review) => sum + review.rating, 0) /
//         reviews.length
//       ).toFixed(1)
//     : 0;

//   return (
//     <>
//       <Navbar />
//       <style jsx>{`
//         @media (max-width: 799px) {
//           .forcesmallh1 {
//             font-size: 1.5rem;
//           }
//           .forcesmallp {
//             font-size: 0.8rem;
//           }
//         }
//         @media (max-width: 640px) {
//           .forcesmallh1 {
//             font-size: 1.2rem;
//           }
//           .forcesmallp {
//             font-size: 0.7rem;
//           }
//           .forcesmallweb {
//             font-size: 0.6rem;
//           }
//         }
//       `}</style>

//       <div ref={wrapperRef}>
//         <div className="mx-auto px-6 py-10 sm:py-2 sm:px-5">
//           <div className="bg-white rounded-2xl shadow-xl mt-5 overflow-hidden">
//             {/* 🧩 Header */}
//             <ProjectHeader
//               project={project}
//               averageRating={averageRating}
//               reviews={reviews}
//             />

//             {/* 🧠 Tabs */}
//             <div className="p-4 sm:p-6 md:p-8">
//               <ProjectTabs
//                 activeTab={activeTab}
//                 setActiveTab={setActiveTab}
//               />

//               {activeTab === "overview" && (
//                 <OverviewTab
//                   project={project}
//                   fadeIn={fadeIn}
//                   staggerContainer={staggerContainer}
//                   motion={motion}
//                 />
//               )}

//               {activeTab === "features" && (
//                 <FeaturesTab
//                   project={project}
//                   fadeIn={fadeIn}
//                   staggerContainer={staggerContainer}
//                   motion={motion}
//                 />
//               )}

//               {activeTab === "gallery" && (
//                 <GalleryTab
//                   project={project}
//                   refreshKey={refreshKey}
//                   setRefreshKey={setRefreshKey}
//                   fadeIn={fadeIn}
//                   staggerContainer={staggerContainer}
//                   motion={motion}
//                   selectedImage={selectedImage}
//                   setSelectedImage={setSelectedImage}
//                   zoom={zoom}
//                   setZoom={setZoom}
//                 />
//               )}

//               {activeTab === "reviews" && (
//                 <ReviewsTab
//                   reviews={reviews}
//                   fadeIn={fadeIn}
//                   staggerContainer={staggerContainer}
//                   motion={motion}
//                 />
//               )}
//             </div>
//           </div>

//           {/* 🧩 Related Projects */}
//           <RelatedProjects
//             relatedProjects={relatedProjects}
//             router={router}
//           />
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }


















// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import ProjectHeader from "@/components/projects/SingleProject/ProjectHeader";
// import ProjectTabs from "@/components/projects/SingleProject/tabs/ProjectTabs";
// import OverviewTab from "@/components/projects/SingleProject/tabs/OverviewTab";
// import FeaturesTab from "@/components/projects/SingleProject/tabs/FeaturesTab";
// import GalleryTab from "@/components/projects/SingleProject/tabs/GalleryTab";
// import ReviewsTab from "@/components/projects/SingleProject/tabs/ReviewsTab";
// import RelatedProjects from "@/components/projects/SingleProject/RelatedProjects";

// gsap.registerPlugin(ScrollTrigger);

// export default function ProjectDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const wrapperRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
//   const [reviews, setReviews] = useState([]);
//   const [relatedProjects, setRelatedProjects] = useState([]);
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [zoom, setZoom] = useState(1);

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(() => {
//     if (prefersReducedMotion.current || !wrapperRef.current) return;
//     const ctx = gsap.context(() => {
//       gsap.from(".pd-card", {
//         y: 24,
//         opacity: 0,
//         duration: 0.6,
//         ease: "power3.out",
//         stagger: 0.1
//       });

//       const targets = gsap.utils.toArray(".pd-media");
//       targets.forEach((el) => {
//         gsap.fromTo(
//           el,
//           { y: 40, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: el,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });
//     }, wrapperRef);
//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     const fetchProject = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`/api/projects/${params.slug}`);
//         const result = await response.json();

//         if (!result.success) {
//           setError(result.error || "Project not found");
//           setProject(null);
//           return;
//         }

//         // ✅ Fix: use result.data (not result)
//         const projectData = result.data || {};
//         setProject(projectData);

//         // Fetch Reviews
//         const reviewsResponse = await fetch(
//           `/api/projects/${params.slug}/reviews`
//         );
//         const reviewsData = await reviewsResponse.json();
//         if (reviewsData.success) setReviews(reviewsData.data || []);

//         // Fetch Related Projects
//         const relatedResponse = await fetch(
//           `/api/projects?category=${projectData.category}&limit=3&exclude=${params.slug}`
//         );
//         const relatedData = await relatedResponse.json();
//         if (relatedData.success)
//           setRelatedProjects(relatedData.data || []);
//       } catch (err) {
//         console.error("Error fetching project:", err);
//         setError("Error fetching project: " + err.message);
//         setProject(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (params.slug) fetchProject();
//   }, [params.slug]);

//   if (loading) {
//     return (
//       <div
//         className="min-h-screen flex items-center justify-center"
//         style={{
//           background: "linear-gradient(135deg, #f5e2b8, #f9f0d0, #fffaf2)",
//         }}
//       >
//         <div
//           className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2"
//           style={{
//             borderColor: "#d88f07",
//             boxShadow: "0 0 10px rgba(216, 143, 7, 0.3)",
//           }}
//         ></div>
//       </div>
//     );
//   }

//   if (error || !project) {
//     return (
//       <div
//         className="min-h-screen flex flex-col items-center justify-center"
//         style={{
//           background: "linear-gradient(135deg, #f5e2b8, #f9f0d0, #fffaf2)",
//         }}
//       >
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//           {error || "Project not found"}
//         </h1>
//         <button
//           onClick={() => router.push("/portfolio")}
//           className="px-4 py-2 text-white rounded-lg transition-all text-base sm:text-lg"
//           style={{
//             background: "linear-gradient(90deg, #d88f07, #e2a63c)",
//             boxShadow: "0 4px 10px rgba(216, 143, 7, 0.4)",
//           }}
//         >
//           Back to Portfolio
//         </button>
//       </div>
//     );
//   }

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const averageRating = reviews.length
//     ? (
//         reviews.reduce((sum, review) => sum + review.rating, 0) /
//         reviews.length
//       ).toFixed(1)
//     : 0;

//   return (
//     <>
//       <Navbar />
//       <style jsx>{`
//         @media (max-width: 799px) {
//           .forcesmallh1 {
//             font-size: 1.5rem;
//           }
//           .forcesmallp {
//             font-size: 0.8rem;
//           }
//         }
//         @media (max-width: 640px) {
//           .forcesmallh1 {
//             font-size: 1.2rem;
//           }
//           .forcesmallp {
//             font-size: 0.7rem;
//           }
//           .forcesmallweb {
//             font-size: 0.6rem;
//           }
//         }
//       `}</style>

//       <div ref={wrapperRef}>
//         <div className="max-w-7xl mx-auto px-6 py-10 sm:py-2 sm:px-5">
//           <div className="bg-white rounded-2xl shadow-xl mt-5 overflow-hidden">
//             {/* 🧩 Header */}
//             <ProjectHeader
//               project={project}
//               averageRating={averageRating}
//               reviews={reviews}
//             />

//             {/* 🧠 Tabs */}
//             <div className="p-4 sm:p-6 md:p-8">
//               <ProjectTabs
//                 activeTab={activeTab}
//                 setActiveTab={setActiveTab}
//               />

//               {activeTab === "overview" && (
//                 <OverviewTab
//                   project={project}
//                   fadeIn={fadeIn}
//                   staggerContainer={staggerContainer}
//                   motion={motion}
//                 />
//               )}

//               {activeTab === "features" && (
//                 <FeaturesTab
//                   project={project}
//                   fadeIn={fadeIn}
//                   staggerContainer={staggerContainer}
//                   motion={motion}
//                 />
//               )}

//               {activeTab === "gallery" && (
//                 <GalleryTab
//                   project={project}
//                   refreshKey={refreshKey}
//                   setRefreshKey={setRefreshKey}
//                   fadeIn={fadeIn}
//                   staggerContainer={staggerContainer}
//                   motion={motion}
//                   selectedImage={selectedImage}
//                   setSelectedImage={setSelectedImage}
//                   zoom={zoom}
//                   setZoom={setZoom}
//                 />
//               )}

//               {activeTab === "reviews" && (
//                 <ReviewsTab
//                   reviews={reviews}
//                   fadeIn={fadeIn}
//                   staggerContainer={staggerContainer}
//                   motion={motion}
//                 />
//               )}
//             </div>
//           </div>

//           {/* 🧩 Related Projects */}
//           <RelatedProjects
//             relatedProjects={relatedProjects}
//             router={router}
//           />
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }


















"use client";

import { useRef, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LoadingAnimation from "../../loading";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectHeader from "@/components/projects/SingleProject/ProjectHeader";
import ProjectTabs from "@/components/projects/SingleProject/tabs/ProjectTabs";
import OverviewTab from "@/components/projects/SingleProject/tabs/OverviewTab";
import FeaturesTab from "@/components/projects/SingleProject/tabs/FeaturesTab";
import GalleryTab from "@/components/projects/SingleProject/tabs/GalleryTab";
import ReviewsTab from "@/components/projects/SingleProject/tabs/ReviewsTab";
import RelatedProjects from "@/components/projects/SingleProject/RelatedProjects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const wrapperRef = useRef(null);
  const prefersReducedMotion = useRef(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [reviews, setReviews] = useState([]);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    prefersReducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useGSAP(() => {
    if (prefersReducedMotion.current || !wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".pd-card", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1
      });

      const targets = gsap.utils.toArray(".pd-media");
      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/projects/${params.slug}`);
        const result = await response.json();

        if (!result.success) {
          setError(result.error || "Project not found");
          setProject(null);
          return;
        }

        const projectData = result.data || {};
        setProject(projectData);

        // Fetch Reviews with enhanced error handling
        try {
          const reviewsResponse = await fetch(`/api/projects/${params.slug}/reviews`);
          if (!reviewsResponse.ok) {
            throw new Error(`HTTP error! Status: ${reviewsResponse.status}`);
          }
          const reviewsData = await reviewsResponse.json();
          console.log("Reviews fetched:", reviewsData); // Debug log
          if (reviewsData.success) {
            setReviews(reviewsData.data || []);
          } else {
            console.error("Reviews fetch failed:", reviewsData.error);
            setReviews([]);
          }
        } catch (reviewsError) {
          console.error("Error fetching reviews:", reviewsError.message);
          setReviews([]);
        }

        // Fetch Related Projects
        const relatedResponse = await fetch(
          `/api/projects?category=${projectData.category}&limit=3&exclude=${params.slug}`
        );
        const relatedData = await relatedResponse.json();
        if (relatedData.success)
          setRelatedProjects(relatedData.data || []);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Error fetching project: " + err.message);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) fetchProject();
  }, [params.slug]);

  if (loading) {
    return (
      // <div
      //   className="min-h-screen flex items-center justify-center"
      //   style={{
      //     background: "linear-gradient(135deg, #f5e2b8, #f9f0d0, #fffaf2)",
      //   }}
      // >
      //   <div
      //     className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2"
      //     style={{
      //       borderColor: "#d88f07",
      //       boxShadow: "0 0 10px rgba(216, 143, 7, 0.3)",
      //     }}
      //   ></div>
      // </div>
      <>
      <LoadingAnimation/>
      </>
    );
  }

  if (error || !project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #f5e2b8, #f9f0d0, #fffaf2)",
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          {error || "Project not found"}
        </h1>
        <button
          onClick={() => router.push("/portfolio")}
          className="px-4 py-2 text-white rounded-lg transition-all text-base sm:text-lg"
          style={{
            background: "linear-gradient(90deg, #d88f07, #e2a63c)",
            boxShadow: "0 4px 10px rgba(216, 143, 7, 0.4)",
          }}
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const averageRating = reviews.length
    ? (
        reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length
      ).toFixed(1)
    : 0;

  return (
    <>
      <Navbar />
      <style jsx>{`
        @media (max-width: 799px) {
          .forcesmallh1 {
            font-size: 1.5rem;
          }
          .forcesmallp {
            font-size: 0.8rem;
          }
        }
        @media (max-width: 640px) {
          .forcesmallh1 {
            font-size: 1.2rem;
          }
          .forcesmallp {
            font-size: 0.7rem;
          }
          .forcesmallweb {
            font-size: 0.6rem;
          }
        }
      `}</style>

      <div ref={wrapperRef}>
        <div className="max-w-7xl mx-auto px-6 py-10 sm:py-2 sm:px-5">
          <div className="bg-white rounded-2xl shadow-xl mt-5 overflow-hidden">
            {/* 🧩 Header */}
            <ProjectHeader
              project={project}
              averageRating={averageRating}
              reviews={reviews}
            />

            {/* 🧠 Tabs */}
            <div className="p-4 sm:p-6 md:p-8">
              <ProjectTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {activeTab === "overview" && (
                <OverviewTab
                  project={project}
                  fadeIn={fadeIn}
                  staggerContainer={staggerContainer}
                  motion={motion}
                />
              )}

              {activeTab === "features" && (
                <FeaturesTab
                  project={project}
                  fadeIn={fadeIn}
                  staggerContainer={staggerContainer}
                  motion={motion}
                />
              )}

              {activeTab === "gallery" && (
                <GalleryTab
                  project={project}
                  refreshKey={refreshKey}
                  setRefreshKey={setRefreshKey}
                  fadeIn={fadeIn}
                  staggerContainer={staggerContainer}
                  motion={motion}
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  zoom={zoom}
                  setZoom={setZoom}
                />
              )}

              {activeTab === "reviews" && (
                <ReviewsTab
                  reviews={reviews}
                  fadeIn={fadeIn}
                  staggerContainer={staggerContainer}
                  motion={motion}
                />
              )}
            </div>
          </div>

          {/* 🧩 Related Projects */}
          <RelatedProjects
            relatedProjects={relatedProjects}
            router={router}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}