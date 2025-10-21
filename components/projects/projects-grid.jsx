// "use client"
// import { useEffect, useRef } from "react"
// import useSWR from "swr"
// import Link from "next/link"
// import Image from "next/image"
// import { MdArrowOutward } from "react-icons/md"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react"

// gsap.registerPlugin(ScrollTrigger)

// const fetcher = (url) => fetch(url).then((r) => r.json())

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null)
//   const prefersReducedMotion = useRef(false)

//   const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_HOST}/api/projects`, fetcher, {
//     revalidateOnFocus: false,
//   })

//   const projects = (data?.result || [])
//     .slice()
//     .reverse()
//     .filter((p) => (category ? p.category?.toLowerCase() === category.toLowerCase() : true))
//     .filter((p) => (subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true))

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   }, [])

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return

//       const cards = containerRef.current.querySelectorAll(".project-card")
//       const ctx = gsap.context(() => {
//         cards.forEach((card) => {
//           gsap.fromTo(
//             card,
//             { y: 60, opacity: 0, scale: 0.98 },
//             {
//               y: 0,
//               opacity: 1,
//               scale: 1,
//               duration: 0.9,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 90%",
//                 toggleActions: "play none none reverse",
//               },
//             },
//           )
//         })
//       }, containerRef)
//       return () => ctx.revert()
//     },
//     { dependencies: [projects?.length] },
//   )

//   if (error) {
//     return <div className="text-sm text-destructive">Failed to load projects.</div>
//   }
//   if (isLoading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" aria-hidden />
//         ))}
//       </div>
//     )
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="w-full mx-auto [column-gap:1rem] sm:[column-gap:1.25rem] lg:[column-gap:2rem] columns-1 sm:columns-2 lg:columns-3"
//     >
//       {projects.map((item) => {
//         const cover = item.images?.[0]?.url
//         return (
//           <article key={item._id} className="mb-4 break-inside-avoid project-card cursor-pointer">
//             <Link href={`/portfolio/${item.slug}`} className="group relative block">
//               <div className="relative w-full overflow-hidden rounded-2xl bg-muted">
//                 {cover ? (
//                   <Image
//                     src={cover || "/placeholder.svg"}
//                     alt={item.title ? `${item.title} cover` : "project"}
//                     width={1200}
//                     height={800}
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                     className="h-auto w-full transform transition-transform duration-700 ease-out group-hover:scale-105"
//                     priority={false}
//                     loading="lazy"
//                     unoptimized
//                   />
//                 ) : (
//                   <img src="/project-cover-image.jpg" alt="project placeholder" className="h-auto w-full" />
//                 )}

//                 {/* overlay gradient + meta */}
//                 <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#f2ad08]/20 via-[#f2ad08]/10 to-transparent" />
//                 <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
//                   <div className="flex flex-col">
//                     <h3 className="text-sm md:text-base font-medium text-foreground/95 line-clamp-1">{item.title}</h3>
//                     <p className="text-xs md:text-sm text-foreground/70">{item.subCategory}</p>
//                   </div>
//                   <span className="rounded-full bg-background/70 border p-2 text-foreground/80 group-hover:bg-background transition-colors">
//                     <MdArrowOutward className="size-4" aria-hidden />
//                     <span className="sr-only">Read more</span>
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </article>
//         )
//       })}
//     </div>
//   )
// }







// "use client";
// import { useEffect, useRef, useState } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward, MdDelete, MdEdit } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const [showForm, setShowForm] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     description: "",
//     category: "",
//     subCategory: "",
//     status: "Progress",
//     projectType: "imageGallery",
//     images: [{ url: "", alt: "" }],
//     skills: [],
//     liveLink: "",
//     repoLink: "",
//     creatorName: "",
//     creatorPicture: "",
//     creatorProfile: "",
//     creatorNiche: "",
//     deadline: "",
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const { data, error, isLoading, mutate } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   const projects = (data || [])
//     .slice()
//     .reverse()
//     .filter((p) => (category ? p.category?.toLowerCase() === category.toLowerCase() : true))
//     .filter((p) => (subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true));

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = containerRef.current.querySelectorAll(".project-card");
//       const ctx = gsap.context(() => {
//         cards.forEach((card) => {
//           gsap.fromTo(
//             card,
//             { y: 60, opacity: 0, scale: 0.98 },
//             {
//               y: 0,
//               opacity: 1,
//               scale: 1,
//               duration: 0.9,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 90%",
//                 toggleActions: "play none none reverse",
//               },
//             }
//           );
//         });
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   const validateForm = () => {
//     if (!formData.title) return "Title is required.";
//     if (!formData.slug) return "Slug is required.";
//     if (!formData.category) return "Category is required.";
//     if (!formData.creatorName) return "Creator name is required.";
//     if (formData.images.length === 0 || !formData.images[0].url) return "At least one image URL is required.";
//     if (!["Completed", "Progress", "Holding", "Cancelled"].includes(formData.status)) {
//       return "Invalid status value.";
//     }
//     if (!["iframe", "imageGallery"].includes(formData.projectType)) {
//       return "Invalid project type.";
//     }
//     return "";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     const validationError = validateForm();
//     if (validationError) {
//       setErrorMessage(validationError);
//       return;
//     }

//     try {
//       const url = editingProject
//         ? `${process.env.NEXT_PUBLIC_HOST}/api/projects/${editingProject.slug}`
//         : `${process.env.NEXT_PUBLIC_HOST}/api/projects`;
//       const method = editingProject ? "PUT" : "POST";

//       const response = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to save project");
//       }

//       const newProject = await response.json();
//       mutate([...(data || []), newProject], false); // Optimistic update
//       setShowForm(false);
//       setEditingProject(null);
//       setFormData({
//         title: "",
//         slug: "",
//         description: "",
//         category: "",
//         subCategory: "",
//         status: "Progress",
//         projectType: "imageGallery",
//         images: [{ url: "", alt: "" }],
//         skills: [],
//         liveLink: "",
//         repoLink: "",
//         creatorName: "",
//         creatorPicture: "",
//         creatorProfile: "",
//         creatorNiche: "",
//         deadline: "",
//       });
//     } catch (error) {
//       setErrorMessage(error.message || "An error occurred while saving the project.");
//     }
//   };

//   const handleDelete = async (slug) => {
//     if (!confirm("Are you sure you want to delete this project?")) return;

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/projects/${slug}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete project");
//       }

//       mutate(data.filter((p) => p.slug !== slug), false); // Optimistic update
//     } catch (error) {
//       setErrorMessage(error.message || "An error occurred while deleting the project.");
//     }
//   };

//   const handleEdit = (project) => {
//     setEditingProject(project);
//     setFormData({
//       title: project.title,
//       slug: project.slug,
//       description: project.description || "",
//       category: project.category,
//       subCategory: project.subCategory || "",
//       status: project.status,
//       projectType: project.projectType,
//       images: project.images || [{ url: "", alt: "" }],
//       skills: project.skills || [],
//       liveLink: project.liveLink || "",
//       repoLink: project.repoLink || "",
//       creatorName: project.creatorName,
//       creatorPicture: project.creatorPicture || "",
//       creatorProfile: project.creatorProfile || "",
//       creatorNiche: project.creatorNiche || "",
//       deadline: project.deadline ? new Date(project.deadline).toISOString().split("T")[0] : "",
//     });
//     setShowForm(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (index, field, value) => {
//     const newImages = [...formData.images];
//     newImages[index] = { ...newImages[index], [field]: value };
//     setFormData((prev) => ({ ...prev, images: newImages }));
//   };

//   const addImageField = () => {
//     setFormData((prev) => ({ ...prev, images: [...prev.images, { url: "", alt: "" }] }));
//   };

//   const removeImageField = (index) => {
//     setFormData((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
//   };

//   if (error) {
//     return <div className="text-sm text-destructive">Failed to load projects.</div>;
//   }
//   if (isLoading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" aria-hidden />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <button
//         onClick={() => {
//           setShowForm(true);
//           setEditingProject(null);
//           setFormData({
//             title: "",
//             slug: "",
//             description: "",
//             category: "",
//             subCategory: "",
//             status: "Progress",
//             projectType: "imageGallery",
//             images: [{ url: "", alt: "" }],
//             skills: [],
//             liveLink: "",
//             repoLink: "",
//             creatorName: "",
//             creatorPicture: "",
//             creatorProfile: "",
//             creatorNiche: "",
//             deadline: "",
//           });
//         }}
//         className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300"
//       >
//         Add New Project
//       </button>

//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
//             <h2 className="text-xl font-semibold mb-4">{editingProject ? "Edit Project" : "Create Project"}</h2>
//             {errorMessage && <div className="text-sm text-red-600 mb-4">{errorMessage}</div>}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Slug</label>
//                 <input
//                   type="text"
//                   name="slug"
//                   value={formData.slug}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Category</label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Sub Category</label>
//                 <input
//                   type="text"
//                   name="subCategory"
//                   value={formData.subCategory}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Status</label>
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 >
//                   <option value="Progress">Progress</option>
//                   <option value="Completed">Completed</option>
//                   <option value="Holding">Holding</option>
//                   <option value="Cancelled">Cancelled</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Project Type</label>
//                 <select
//                   name="projectType"
//                   value={formData.projectType}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 >
//                   <option value="imageGallery">Image Gallery</option>
//                   <option value="iframe">Iframe</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Images</label>
//                 {formData.images.map((image, index) => (
//                   <div key={index} className="flex gap-2 mb-2">
//                     <input
//                       type="text"
//                       placeholder="Image URL"
//                       value={image.url}
//                       onChange={(e) => handleImageChange(index, "url", e.target.value)}
//                       className="flex-1 px-3 py-2 border border-gray-200 rounded-lg"
//                       required
//                     />
//                     <input
//                       type="text"
//                       placeholder="Alt Text"
//                       value={image.alt}
//                       onChange={(e) => handleImageChange(index, "alt", e.target.value)}
//                       className="flex-1 px-3 py-2 border border-gray-200 rounded-lg"
//                     />
//                     {formData.images.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeImageField(index)}
//                         className="px-2 py-1 text-red-600"
//                       >
//                         Remove
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={addImageField}
//                   className="text-sm text-blue-600 hover:underline"
//                 >
//                   Add Image
//                 </button>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
//                 <input
//                   type="text"
//                   name="skills"
//                   value={formData.skills.join(",")}
//                   onChange={(e) => setFormData((prev) => ({ ...prev, skills: e.target.value.split(",") }))}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Live Link</label>
//                 <input
//                   type="url"
//                   name="liveLink"
//                   value={formData.liveLink}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Repo Link</label>
//                 <input
//                   type="url"
//                   name="repoLink"
//                   value={formData.repoLink}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Creator Name</label>
//                 <input
//                   type="text"
//                   name="creatorName"
//                   value={formData.creatorName}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Creator Picture URL</label>
//                 <input
//                   type="url"
//                   name="creatorPicture"
//                   value={formData.creatorPicture}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Creator Profile URL</label>
//                 <input
//                   type="url"
//                   name="creatorProfile"
//                   value={formData.creatorProfile}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Creator Niche</label>
//                 <input
//                   type="text"
//                   name="creatorNiche"
//                   value={formData.creatorNiche}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Deadline</label>
//                 <input
//                   type="date"
//                   name="deadline"
//                   value={formData.deadline}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg"
//                 />
//               </div>
//               <div className="flex gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg">
//                   {editingProject ? "Update Project" : "Create Project"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div
//         ref={containerRef}
//         className="w-full mx-auto [column-gap:1rem] sm:[column-gap:1.25rem] lg:[column-gap:2rem] columns-1 sm:columns-2 lg:columns-3"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article key={item._id} className="mb-4 break-inside-avoid project-card cursor-pointer">
//               <div className="relative">
//                 <Link href={`/portfolio/${item.slug}`} className="group relative block">
//                   <div className="relative w-full overflow-hidden rounded-2xl bg-muted">
//                     {cover ? (
//                       <Image
//                         src={cover || "/placeholder.svg"}
//                         alt={item.title ? `${item.title} cover` : "project"}
//                         width={1200}
//                         height={800}
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         className="h-auto w-full transform transition-transform duration-700 ease-out group-hover:scale-105"
//                         priority={false}
//                         loading="lazy"
//                         unoptimized
//                       />
//                     ) : (
//                       <img src="/project-cover-image.jpg" alt="project placeholder" className="h-auto w-full" />
//                     )}
//                     <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#f2ad08]/20 via-[#f2ad08]/10 to-transparent" />
//                     <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
//                       <div className="flex flex-col">
//                         <h3 className="text-sm md:text-base font-medium text-foreground/95 line-clamp-1">
//                           {item.title}
//                         </h3>
//                         <p className="text-xs md:text-sm text-foreground/70">{item.subCategory}</p>
//                       </div>
//                       <span className="rounded-full bg-background/70 border p-2 text-foreground/80 group-hover:bg-background transition-colors">
//                         <MdArrowOutward className="size-4" aria-hidden />
//                         <span className="sr-only">Read more</span>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//                 <div className="absolute top-2 right-2 flex gap-2">
//                   <button
//                     onClick={() => handleEdit(item)}
//                     className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
//                     aria-label={`Edit ${item.title}`}
//                   >
//                     <MdEdit className="size-4" />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item.slug)}
//                     className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
//                     aria-label={`Delete ${item.title}`}
//                   >
//                     <MdDelete className="size-4" />
//                   </button>
//                 </div>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }










// "use client";
// import { useEffect, useRef } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   const projects = (data || [])
//     .slice()
//     .reverse()
//     .filter((p) => (category ? p.category?.toLowerCase() === category.toLowerCase() : true))
//     .filter((p) => (subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true));

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = containerRef.current.querySelectorAll(".project-card");
//       const ctx = gsap.context(() => {
//         gsap.fromTo(
//           cards,
//           { y: 30, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             ease: "power2.out",
//             stagger: 0.1,
//             scrollTrigger: {
//               trigger: containerRef.current,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   if (error) {
//     return <div className="text-sm text-destructive">Failed to load projects.</div>;
//   }
//   if (isLoading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" aria-hidden />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         ref={containerRef}
//         className="w-full mx-auto [column-gap:1rem] sm:[column-gap:1.25rem] lg:[column-gap:2rem] columns-1 sm:columns-2 lg:columns-3"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article key={item._id} className="mb-4 break-inside-avoid project-card cursor-pointer">
//               <div className="relative">
//                 <Link href={`/portfolio/${item.slug}`} className="group relative block">
//                   <div className="relative w-full overflow-hidden rounded-2xl bg-muted">
//                     {cover ? (
//                       <Image
//                         src={cover || "/placeholder.svg"}
//                         alt={item.title ? `${item.title} cover` : "project"}
//                         width={1200}
//                         height={800}
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         className="h-auto w-full transform transition-transform duration-700 ease-out group-hover:scale-105"
//                         priority={false}
//                         loading="lazy"
//                         unoptimized
//                       />
//                     ) : (
//                       <img src="/project-cover-image.jpg" alt="project placeholder" className="h-auto w-full" />
//                     )}
//                     <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#f2ad08]/20 via-[#f2ad08]/10 to-transparent" />
//                     <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
//                       <div className="flex flex-col">
//                         <h3 className="text-sm md:text-base font-medium text-foreground/95 line-clamp-1">
//                           {item.title}
//                         </h3>
//                         <p className="text-xs md:text-sm text-foreground/70">{item.subCategory}</p>
//                       </div>
//                       <span className="rounded-full bg-background/70 border p-2 text-foreground/80 group-hover:bg-background transition-colors">
//                         <MdArrowOutward className="size-4" aria-hidden />
//                         <span className="sr-only">Read more</span>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



// "use client";
// import { useEffect, useRef } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   const projects = (data || [])
//     .slice()
//     .reverse()
//     .filter((p) => (category ? p.category?.toLowerCase() === category.toLowerCase() : true))
//     .filter((p) => (subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true));

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = gsap.utils.toArray(containerRef.current.querySelectorAll(".project-card"));
//       if (!cards.length) return;

//       const ctx = gsap.context(() => {
//         cards.forEach((card, index) => {
//           gsap.fromTo(
//             card,
//             { y: 50, opacity: 0.2 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1,
//               ease: "power2.out",
//               overwrite: "auto",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse",
//               },
//               delay: index * 0.15, // Stagger effect
//             }
//           );
//         });
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   if (error) {
//     return <div className="text-sm text-destructive">Failed to load projects.</div>;
//   }
//   if (isLoading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" aria-hidden />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         ref={containerRef}
//         className="w-full mx-auto [column-gap:1rem] sm:[column-gap:1.25rem] lg:[column-gap:2rem] columns-1 sm:columns-2 lg:columns-3"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article key={item._id} className="mb-4 break-inside-avoid project-card cursor-pointer">
//               <div className="relative">
//                 <Link href={`/portfolio/${item.slug}`} className="group relative block">
//                   <div className="relative w-full overflow-hidden rounded-2xl bg-muted">
//                     {cover ? (
//                       <Image
//                         src={cover || "/placeholder.svg"}
//                         alt={item.title ? `${item.title} cover` : "project"}
//                         width={1200}
//                         height={800}
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         className="h-auto w-full transform transition-transform duration-700 ease-out group-hover:scale-105"
//                         priority={false}
//                         loading="lazy"
//                         unoptimized
//                       />
//                     ) : (
//                       <img src="/project-cover-image.jpg" alt="project placeholder" className="h-auto w-full" />
//                     )}
//                     <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#f2ad08]/20 via-[#f2ad08]/10 to-transparent" />
//                     <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
//                       <div className="flex flex-col">
//                         <h3 className="text-sm md:text-base font-medium text-foreground/95 line-clamp-1">
//                           {item.title}
//                         </h3>
//                         <p className="text-xs md:text-sm text-foreground/70">{item.subCategory}</p>
//                       </div>
//                       <span className="rounded-full bg-background/70 border p-2 text-foreground/80 group-hover:bg-background transition-colors">
//                         <MdArrowOutward className="size-4" aria-hidden />
//                         <span className="sr-only">Read more</span>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }















// "use client";
// import { useEffect, useRef } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   const projects = (data || [])
//     .slice()
//     .reverse()
//     .filter((p) => (category ? p.category?.toLowerCase() === category.toLowerCase() : true))
//     .filter((p) => (subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true));

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = gsap.utils.toArray(containerRef.current.querySelectorAll(".project-card"));
//       if (!cards.length) return;

//       const ctx = gsap.context(() => {
//         cards.forEach((card, index) => {
//           gsap.fromTo(
//             card,
//             { y: 50, opacity: 0.2 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1,
//               ease: "power2.out",
//               overwrite: "auto",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse",
//               },
//               delay: index * 0.15, // Stagger effect
//             }
//           );
//         });
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   if (error) {
//     return <div className="text-sm text-destructive">Failed to load projects.</div>;
//   }
//   if (isLoading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" aria-hidden />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         ref={containerRef}
//         className="w-full mx-auto [column-gap:1rem] sm:[column-gap:1.25rem] lg:[column-gap:2rem] columns-1 sm:columns-2 lg:columns-3"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article key={item._id} className="mb-4 break-inside-avoid project-card cursor-pointer">
//               <div className="relative">
//                 <Link href={`/portfolio/${item.slug}`} className="group relative block">
//                   <div className="relative w-full overflow-hidden rounded-2xl bg-muted">
//                     {cover ? (
//                       <Image
//                         src={cover || "/placeholder.svg"}
//                         alt={item.title ? `${item.title} cover` : "project"}
//                         width={1200}
//                         height={800}
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         className="h-auto w-full transform transition-transform duration-700 ease-out group-hover:scale-105"
//                         priority={false}
//                         loading="lazy"
//                         unoptimized
//                       />
//                     ) : (
//                       <img src="/project-cover-image.jpg" alt="project placeholder" className="h-auto w-full" />
//                     )}
//                     <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#f2ad08]/20 via-[#f2ad08]/10 to-transparent" />
//                     <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
//                       <div className="flex flex-col">
//                         <h3 className="text-sm md:text-base font-medium text-foreground/95 line-clamp-1 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
//                           {item.title}
//                         </h3>
//                         <p className="text-xs md:text-sm text-foreground/70 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
//                           {item.subCategory}
//                         </p>
//                       </div>
//                       <span className="rounded-full bg-background/70 border p-2 text-foreground/80 group-hover:bg-background transition-colors">
//                         <MdArrowOutward className="size-4" aria-hidden />
//                         <span className="sr-only">Read more</span>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }










// "use client";
// import { useEffect, useRef } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   const projects = (data || [])
//     .slice()
//     .reverse()
//     .filter((p) => (category ? p.category?.toLowerCase() === category.toLowerCase() : true))
//     .filter((p) => (subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true));

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = gsap.utils.toArray(containerRef.current.querySelectorAll(".project-card"));
//       if (!cards.length) return;

//       const ctx = gsap.context(() => {
//         cards.forEach((card, index) => {
//           gsap.fromTo(
//             card,
//             { y: 50, opacity: 0.2 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1,
//               ease: "power2.out",
//               overwrite: "auto",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse",
//               },
//               delay: index * 0.15, // Stagger effect
//             }
//           );
//         });
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   if (error) {
//     return <div className="text-sm text-destructive">Failed to load projects.</div>;
//   }
//   if (isLoading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" aria-hidden />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         ref={containerRef}
//         className="w-full mx-auto [column-gap:1rem] sm:[column-gap:1.25rem] lg:[column-gap:2rem] columns-1 sm:columns-2 lg:columns-3"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article key={item._id} className="mb-4 break-inside-avoid project-card cursor-pointer">
//               <div className="relative">
//                 <Link href={`/portfolio/${item.slug}`} className="group relative block">
//                   <div className="relative w-full overflow-hidden rounded-2xl bg-muted">
//                     {cover ? (
//                       <Image
//                         src={cover || "/placeholder.svg"}
//                         alt={item.title ? `${item.title} cover` : "project"}
//                         width={1200}
//                         height={800}
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         className="h-auto w-full transform transition-transform duration-700 ease-out group-hover:scale-105"
//                         priority={false}
//                         loading="lazy"
//                         unoptimized
//                       />
//                     ) : (
//                       <img src="/project-cover-image.jpg" alt="project placeholder" className="h-auto w-full" />
//                     )}
//                     <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#f2ad08]/40 via-[#f2ad08]/20 to-transparent" />
//                     <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
//                       <div className="flex flex-col">
//                         <h3 className="text-sm md:text-base font-medium text-foreground/95 line-clamp-1 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
//                           {item.title}
//                         </h3>
//                         <p className="text-xs md:text-sm text-foreground/70 [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
//                           {item.subCategory}
//                         </p>
//                       </div>
//                       <span className="rounded-full bg-background/70 border p-2 text-foreground/80 group-hover:bg-background transition-colors">
//                         <MdArrowOutward className="size-4" aria-hidden />
//                         <span className="sr-only">Read more</span>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }




// "use client";
// import { useEffect, useRef } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   const projects = (data || [])
//     .slice()
//     .reverse()
//     .filter((p) => (category ? p.category?.toLowerCase() === category.toLowerCase() : true))
//     .filter((p) => (subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true));

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = gsap.utils.toArray(containerRef.current.querySelectorAll(".project-card"));
//       if (!cards.length) return;

//       const ctx = gsap.context(() => {
//         cards.forEach((card, index) => {
//           gsap.fromTo(
//             card,
//             { y: 50, opacity: 0 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1.2,
//               ease: "power3.out",
//               overwrite: "auto",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 85%",
//                 end: "bottom 15%",
//                 toggleActions: "play none none reverse",
//               },
//               delay: index * 0.1, // Adjusted stagger for smoother entry
//             }
//           );
//         });
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   if (error) {
//     return <div className="text-sm text-destructive">Failed to load projects.</div>;
//   }
//   if (isLoading) {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-72 rounded-2xl bg-muted animate-pulse" aria-hidden />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         ref={containerRef}
//         className="w-full mx-auto [column-gap:1.5rem] sm:[column-gap:1.75rem] lg:[column-gap:2.5rem] columns-1 sm:columns-2 lg:columns-3"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article
//               key={item._id}
//               className="mb-6 break-inside-avoid project-card cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative">
//                 <Link href={`/portfolio/${item.slug}`} className="group relative block">
//                   <div className="relative w-full overflow-hidden bg-muted aspect-[4/3]"> {/* Added aspect ratio for consistent image sizing */}
//                     {cover ? (
//                       <Image
//                         src={cover || "/placeholder.svg"}
//                         alt={item.title ? `${item.title} cover` : "project"}
//                         fill
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         className="object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
//                         priority={false}
//                         loading="lazy"
//                         unoptimized
//                       />
//                     ) : (
//                       <img src="/project-cover-image.jpg" alt="project placeholder" className="h-auto w-full object-cover" />
//                     )}
//                     <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" /> {/* Neutral gradient */}
//                     <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex items-end justify-between">
//                       <div className="flex flex-col">
//                         <h3 className="text-base md:text-lg font-semibold text-white line-clamp-1">
//                           {item.title}
//                         </h3>
//                         <p className="text-sm md:text-base text-gray-300">
//                           {item.subCategory}
//                         </p>
//                       </div>
//                       <span className="rounded-full bg-white/10 backdrop-blur-md p-2.5 text-white group-hover:bg-white/20 transition-colors">
//                         <MdArrowOutward className="size-5" aria-hidden />
//                         <span className="sr-only">Read more</span>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useRef } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   const projects = (data || [])
//     .slice()
//     .reverse()
//     .filter((p) =>
//       category ? p.category?.toLowerCase() === category.toLowerCase() : true
//     )
//     .filter((p) =>
//       subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true
//     );

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = gsap.utils.toArray(containerRef.current.querySelectorAll(".project-card"));
//       if (!cards.length) return;

//       const ctx = gsap.context(() => {
//         cards.forEach((card, index) => {
//           gsap.fromTo(
//             card,
//             { y: 60, opacity: 0 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1.1,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 85%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse",
//               },
//               delay: index * 0.08,
//             }
//           );
//         });
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   if (error)
//     return <div className="text-sm text-red-500">Failed to load projects.</div>;

//   if (isLoading)
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-72 rounded-2xl bg-neutral-200/50 animate-pulse" />
//         ))}
//       </div>
//     );

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         ref={containerRef}
//         className="w-full mx-auto [column-gap:1.75rem] sm:[column-gap:2rem] lg:[column-gap:2.25rem] columns-1 sm:columns-2 lg:columns-3"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article
//               key={item._id}
//               className="mb-6 break-inside-avoid project-card group cursor-pointer rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
//             >
//               <Link href={`/portfolio/${item.slug}`} className="block relative">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   {cover ? (
//                     <Image
//                       src={cover}
//                       alt={item.title || "Project"}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       loading="lazy"
//                       unoptimized
//                     />
//                   ) : (
//                     <Image
//                       src="/project-cover-image.jpg"
//                       alt="Project placeholder"
//                       fill
//                       className="object-cover"
//                     />
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//                 <div className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-sm p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <MdArrowOutward className="size-5" />
//                 </div>

//                 <div className="p-4 md:p-5 bg-white">
//                   <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1 line-clamp-1">
//                     {item.subCategory || item.category}
//                   </p>
//                 </div>
//               </Link>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }




















// "use client";

// import { useEffect, useRef } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   // Ensure projects is always an array
//   const projects = Array.isArray(data?.data)
//     ? data.data
//         .slice()
//         .reverse()
//         .filter((p) =>
//           category ? p.category?.toLowerCase() === category.toLowerCase() : true
//         )
//         .filter((p) =>
//           subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true
//         )
//     : [];

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = gsap.utils.toArray(containerRef.current.querySelectorAll(".project-card"));
//       if (!cards.length) return;

//       const ctx = gsap.context(() => {
//         cards.forEach((card, index) => {
//           gsap.fromTo(
//             card,
//             { y: 60, opacity: 0 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1.1,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 85%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse",
//               },
//               delay: index * 0.08,
//             }
//           );
//         });
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   if (error)
//     return <div className="text-sm text-red-500">Failed to load projects.</div>;

//   if (isLoading)
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-72 rounded-2xl bg-neutral-200/50 animate-pulse" />
//         ))}
//       </div>
//     );

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         ref={containerRef}
//         className="w-full mx-auto [column-gap:1.75rem] sm:[column-gap:2rem] lg:[column-gap:2.25rem] columns-1 sm:columns-2 lg:columns-3"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article
//               key={item._id}
//               className="mb-6 break-inside-avoid project-card group cursor-pointer rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
//             >
//               <Link href={`/portfolio/${item.slug}`} className="block relative">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   {cover ? (
//                     <Image
//                       src={cover}
//                       alt={item.title || "Project"}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       loading="lazy"
//                       unoptimized
//                     />
//                   ) : (
//                     <Image
//                       src="/project-cover-image.jpg"
//                       alt="Project placeholder"
//                       fill
//                       className="object-cover"
//                     />
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//                 <div className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-sm p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <MdArrowOutward className="size-5" />
//                 </div>

//                 <div className="p-4 md:p-5 bg-white">
//                   <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1 line-clamp-1">
//                     {item.subCategory || item.category}
//                   </p>
//                 </div>
//               </Link>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



















// "use client";

// import { useEffect, useRef } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   // Ensure projects is always an array
//   const projects = Array.isArray(data?.data)
//     ? data.data
//         .slice()
//         .reverse()
//         .filter((p) =>
//           category ? p.category?.toLowerCase() === category.toLowerCase() : true
//         )
//         .filter((p) =>
//           subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true
//         )
//     : [];

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = gsap.utils.toArray(containerRef.current.querySelectorAll(".project-card"));
//       if (!cards.length) return;

//       const ctx = gsap.context(() => {
//         cards.forEach((card, index) => {
//           gsap.fromTo(
//             card,
//             { y: 60, opacity: 0 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1.1,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 85%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse",
//               },
//               delay: index * 0.08,
//             }
//           );
//         });
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   if (error)
//     return <div className="text-sm text-red-500">Failed to load projects.</div>;

//   if (isLoading)
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-72 rounded-2xl bg-neutral-200/50 animate-pulse" />
//         ))}
//       </div>
//     );

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         ref={containerRef}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article
//               key={item._id}
//               className="mb-6 break-inside-avoid project-card group cursor-pointer rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
//             >
//               <Link href={`/portfolio/${item.slug}`} className="block relative">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   {cover ? (
//                     <Image
//                       src={cover}
//                       alt={item.title || "Project"}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       loading="lazy"
//                       unoptimized
//                     />
//                   ) : (
//                     <Image
//                       src="/project-cover-image.jpg"
//                       alt="Project placeholder"
//                       fill
//                       className="object-cover"
//                     />
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//                 <div className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-sm p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <MdArrowOutward className="size-5" />
//                 </div>

//                 <div className="p-4 md:p-5 bg-white">
//                   <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1 line-clamp-1">
//                     {item.subCategory || item.category}
//                   </p>
//                 </div>
//               </Link>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }














// "use client";

// import { useEffect, useRef } from "react";
// import useSWR from "swr";
// import Link from "next/link";
// import Image from "next/image";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const fetcher = (url) => fetch(url).then((r) => r.json());

// export default function ProjectsGrid({ category, subCategory }) {
//   const containerRef = useRef(null);
//   const prefersReducedMotion = useRef(false);
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_HOST}/api/projects`,
//     fetcher,
//     { revalidateOnFocus: false }
//   );

//   // Ensure projects is always an array
//   const projects = Array.isArray(data?.data)
//     ? data.data
//         .slice()
//         .reverse()
//         .filter((p) =>
//           category ? p.category?.toLowerCase() === category.toLowerCase() : true
//         )
//         .filter((p) =>
//           subCategory ? p.subCategory?.toLowerCase() === subCategory.toLowerCase() : true
//         )
//     : [];

//   useEffect(() => {
//     prefersReducedMotion.current =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }, []);

//   useGSAP(
//     () => {
//       if (prefersReducedMotion.current || !containerRef.current) return;

//       const cards = gsap.utils.toArray(containerRef.current.querySelectorAll(".project-card"));
//       if (!cards.length) return;

//       const ctx = gsap.context(() => {
//         cards.forEach((card, index) => {
//           gsap.fromTo(
//             card,
//             { y: 60, opacity: 0 },
//             {
//               y: 0,
//               opacity: 1,
//               duration: 1.1,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: card,
//                 start: "top 85%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse",
//               },
//               delay: index * 0.08,
//             }
//           );
//         });
//       }, containerRef);
//       return () => ctx.revert();
//     },
//     { dependencies: [projects?.length] }
//   );

//   if (error)
//     return <div className="text-sm text-red-500">Failed to load projects.</div>;

//   if (isLoading)
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="h-72 rounded-2xl bg-neutral-200/50 animate-pulse" />
//         ))}
//       </div>
//     );

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div
//         ref={containerRef}
//         className="w-full mx-auto [column-gap:1.75rem] sm:[column-gap:2rem] lg:[column-gap:2.25rem] columns-1 sm:columns-2 lg:columns-3"
//       >
//         {projects.map((item) => {
//           const cover = item.images?.[0]?.url;
//           return (
//             <article
//               key={item._id}
//               className="mb-6 break-inside-avoid project-card group cursor-pointer rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
//             >
//               <Link href={`/portfolio/${item.slug}`} className="block relative">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   {cover ? (
//                     <Image
//                       src={cover}
//                       alt={item.title || "Project"}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       loading="lazy"
//                       unoptimized
//                     />
//                   ) : (
//                     <Image
//                       src="/project-cover-image.jpg"
//                       alt="Project placeholder"
//                       fill
//                       className="object-cover"
//                     />
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//                 <div className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-sm p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <MdArrowOutward className="size-5" />
//                 </div>

//                 <div className="p-4 md:p-5 bg-white">
//                   <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1 line-clamp-1">
//                     {item.subCategory || item.category}
//                   </p>
//                 </div>
//               </Link>
//             </article>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

















"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        const result = await res.json();

        if (res.ok && result.success) {
          // ✅ Use result.data (array of projects)
          if (Array.isArray(result.data)) {
            setProjects(result.data);
          } else {
            console.error("Expected array but got:", result.data);
            setProjects([]);
          }
        } else {
          console.error(result.error || "Failed to fetch projects");
          setError(result.error || "Failed to load projects");
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Error loading projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-600 py-10">Loading projects...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  if (!projects || projects.length === 0) {
    return (
      <p className="text-center text-gray-600 py-10">No projects found.</p>
    );
  }

  return (
    <section className="py-6 sm:py-10 lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {projects.slice(0, 9).map((project) => (
          <motion.div
            key={project._id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100"
          >
            {/* 🖼️ Image Section */}
            <div className="relative w-full h-48 sm:h-56 lg:h-60">
              <Image
                src={
                  project.images?.[0]?.url ||
                  "/placeholder.svg?height=800&width=1200"
                }
                alt={project.title || "Project Image"}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=800&width=1200";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 text-white">
                <h3 className="font-semibold text-base sm:text-lg">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80">
                  {project.category}
                  {project.subCategory ? ` - ${project.subCategory}` : ""}
                </p>
              </div>
            </div>

            {/* 📄 Content Section */}
            <div className="p-4 sm:p-5">
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {project.description}
              </p>

              {/* 🧠 Skills */}
              {project.skills?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.skills.slice(0, 5).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* 🔗 Links + Status */}
              <div className="flex items-center justify-between">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="flex items-center text-sm font-medium transition-colors duration-300"
                  style={{
                    color: "#d88f07",
                    textShadow: "0 0 4px rgba(216, 143, 7, 0.35)",
                  }}
                >
                  <span>View Project</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300" />
                </Link>

                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : project.status === "Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : project.status === "Holding"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}