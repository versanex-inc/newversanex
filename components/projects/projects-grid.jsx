
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// export default function ProjectsGrid() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("/api/projects", { cache: "no-store" });
//         const result = await res.json();

//         if (res.ok && result.success) {
//           // ✅ Use result.data (array of projects)
//           if (Array.isArray(result.data)) {
//             setProjects(result.data);
//           } else {
//             console.error("Expected array but got:", result.data);
//             setProjects([]);
//           }
//         } else {
//           console.error(result.error || "Failed to fetch projects");
//           setError(result.error || "Failed to load projects");
//         }
//       } catch (err) {
//         console.error("Error fetching projects:", err);
//         setError("Error loading projects");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return (
//       <p className="text-center text-gray-600 py-10">Loading projects...</p>
//     );
//   }

//   if (error) {
//     return <p className="text-center text-red-500 py-10">{error}</p>;
//   }

//   if (!projects || projects.length === 0) {
//     return (
//       <p className="text-center text-gray-600 py-10">No projects found.</p>
//     );
//   }

//   return (
//     <section className="py-6 sm:py-10 lg:py-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
//         {projects.slice(0, 9).map((project) => (
//           <motion.div
//             key={project._id}
//             whileHover={{ y: -4 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100"
//           >
//             {/* 🖼️ Image Section */}
//             <div className="relative w-full h-48 sm:h-56 lg:h-60">
//               <Image
//                 src={
//                   project.images?.[0]?.url ||
//                   "/placeholder.svg?height=800&width=1200"
//                 }
//                 alt={project.title || "Project Image"}
//                 fill
//                 className="object-cover"
//                 onError={(e) => {
//                   e.currentTarget.src = "/placeholder.svg?height=800&width=1200";
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//               <div className="absolute bottom-0 left-0 p-3 text-white">
//                 <h3 className="font-semibold text-base sm:text-lg">
//                   {project.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-white/80">
//                   {project.category}
//                   {project.subCategory ? ` - ${project.subCategory}` : ""}
//                 </p>
//               </div>
//             </div>

//             {/* 📄 Content Section */}
//             <div className="p-4 sm:p-5">
//               <p className="text-gray-600 text-sm mb-3 line-clamp-3">
//                 {project.description}
//               </p>

//               {/* 🧠 Skills */}
//               {project.skills?.length > 0 && (
//                 <div className="flex flex-wrap gap-2 mb-3">
//                   {project.skills.slice(0, 5).map((skill, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* 🔗 Links + Status */}
//               <div className="flex items-center justify-between">
//                 <Link
//                   href={`/portfolio/${project.slug}`}
//                   className="flex items-center text-sm font-medium transition-colors duration-300"
//                   style={{
//                     color: "#d88f07",
//                     textShadow: "0 0 4px rgba(216, 143, 7, 0.35)",
//                   }}
//                 >
//                   <span>View Project</span>
//                   <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300" />
//                 </Link>

//                 <span
//                   className={`px-2 py-1 rounded-full text-xs ${
//                     project.status === "Completed"
//                       ? "bg-green-100 text-green-700"
//                       : project.status === "Progress"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : project.status === "Holding"
//                       ? "bg-blue-100 text-blue-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {project.status}
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }











// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// export default function ProjectsGrid({ category }) {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("/api/projects", { cache: "no-store" });
//         const result = await res.json();

//         if (res.ok && result.success) {
//           // ✅ Use result.data (array of projects)
//           if (Array.isArray(result.data)) {
//             setProjects(result.data);
//           } else {
//             console.error("Expected array but got:", result.data);
//             setProjects([]);
//           }
//         } else {
//           console.error(result.error || "Failed to fetch projects");
//           setError(result.error || "Failed to load projects");
//         }
//       } catch (err) {
//         console.error("Error fetching projects:", err);
//         setError("Error loading projects");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const filteredProjects = projects.filter((project) => {
//     if (!category || category === "All") return true;
//     // Assuming project.category is like "Graphics Design" and category is slug like "graphics-designing"
//     // Slugify project.category for comparison
//     const slugify = (str) => str?.toLowerCase().replace(/\s+/g, "-") || "";
//     return slugify(project.category) === category;
//   });

//   if (loading) {
//     return (
//       <p className="text-center text-gray-600 py-10">Loading projects...</p>
//     );
//   }

//   if (error) {
//     return <p className="text-center text-red-500 py-10">{error}</p>;
//   }

//   if (filteredProjects.length === 0) {
//     return (
//       <p className="text-center text-gray-600 py-10">No projects found in this category.</p>
//     );
//   }

//   return (
//     <section className="py-6 sm:py-10 lg:py-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
//         {filteredProjects.slice(0, 9).map((project) => (
//           <motion.div
//             key={project._id}
//             whileHover={{ y: -4 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100"
//           >
//             {/* 🖼️ Image Section */}
//             <div className="relative w-full h-48 sm:h-56 lg:h-60">
//               <Image
//                 src={
//                   project.images?.[0]?.url ||
//                   "/placeholder.svg?height=800&width=1200"
//                 }
//                 alt={project.title || "Project Image"}
//                 fill
//                 className="object-cover"
//                 onError={(e) => {
//                   e.currentTarget.src = "/placeholder.svg?height=800&width=1200";
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//               <div className="absolute bottom-0 left-0 p-3 text-white">
//                 <h3 className="font-semibold text-base sm:text-lg">
//                   {project.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-white/80">
//                   {project.category}
//                   {project.subCategory ? ` - ${project.subCategory}` : ""}
//                 </p>
//               </div>
//             </div>

//             {/* 📄 Content Section */}
//             <div className="p-4 sm:p-5">
//               <p className="text-gray-600 text-sm mb-3 line-clamp-3">
//                 {project.description}
//               </p>

//               {/* 🧠 Skills */}
//               {project.skills?.length > 0 && (
//                 <div className="flex flex-wrap gap-2 mb-3">
//                   {project.skills.slice(0, 5).map((skill, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* 🔗 Links + Status */}
//               <div className="flex items-center justify-between">
//                 <Link
//                   href={`/projects/${project.slug}`}
//                   className="flex items-center text-sm font-medium transition-colors duration-300"
//                   style={{
//                     color: "#d88f07",
//                     textShadow: "0 0 4px rgba(216, 143, 7, 0.35)",
//                   }}
//                 >
//                   <span>View Project</span>
//                   <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300" />
//                 </Link>

//                 <span
//                   className={`px-2 py-1 rounded-full text-xs ${
//                     project.status === "Completed"
//                       ? "bg-green-100 text-green-700"
//                       : project.status === "Progress"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : project.status === "Holding"
//                       ? "bg-blue-100 text-blue-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {project.status}
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }












"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProjectsGrid({ category }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const filteredProjects = projects.filter((project) => {
    if (!category || category === "All") return true;
    // Assuming project.category is like "Graphics Design" and category is slug like "graphics-designing"
    // Slugify project.category for comparison
    const slugify = (str) => str?.toLowerCase().replace(/\s+/g, "-") || "";
    return slugify(project.category) === category;
  });

  if (loading) {
    return (
      <p className="text-center text-gray-600 py-10">Loading projects...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  if (filteredProjects.length === 0) {
    return (
      <p className="text-center text-gray-600 py-10">No projects found in this category.</p>
    );
  }

  // Mix projects by category only if showing "All"
  let mixedProjects = filteredProjects;
  if (!category || category === "All") {
    const uniqueCategories = [...new Set(filteredProjects.map(p => p.category))].sort();
    const projectsByCat = {};
    uniqueCategories.forEach(cat => {
      projectsByCat[cat] = filteredProjects.filter(p => p.category === cat);
    });
    let mixed = [];
    const maxLen = Math.max(...uniqueCategories.map(cat => projectsByCat[cat].length));
    for (let i = 0; i < maxLen; i++) {
      uniqueCategories.forEach(cat => {
        if (projectsByCat[cat][i]) {
          mixed.push(projectsByCat[cat][i]);
        }
      });
    }
    mixedProjects = mixed;
  }

  const totalPages = Math.ceil(mixedProjects.length / projectsPerPage);
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = mixedProjects.slice(indexOfFirst, indexOfLast);

  return (
    <section className="py-6 sm:py-10 lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {currentProjects.map((project) => (
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
                  href={`/projects/${project.slug}`}
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

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-amber-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}