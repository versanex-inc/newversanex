
// // components/projects/SingleProject/RelatedProjects.jsx
// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight } from "lucide-react"
// import { motion } from "framer-motion"

// export default function RelatedProjects({ relatedProjects, router }) {
//   return (
//     <div className="mt-8 sm:mt-10 lg:mt-12">
//       <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">More Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
//         {relatedProjects.map((relatedProject, index) => {
//           const [imgSrc, setImgSrc] = useState(relatedProject.images?.[0]?.url || "/placeholder.svg?height=800&width=1200")
//           const [hasError, setHasError] = useState(false)

//           useEffect(() => {
//             setImgSrc(relatedProject.images?.[0]?.url || "/placeholder.svg?height=800&width=1200")
//             setHasError(false)
//           }, [relatedProject.images])

//           return (
//             <motion.div
//               key={relatedProject.id || index} // Fallback to index if id is not available
//               whileHover={{ y: -3 }}
//               className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
//             >
//               <div className="relative h-28 sm:h-32 w-full">
//                 <Image
//                   src={imgSrc}
//                   alt={relatedProject.title}
//                   fill
//                   className="object-cover"
//                   onError={() => {
//                     if (!hasError) {
//                       setHasError(true)
//                       setImgSrc("/placeholder.svg?height=800&width=1200")
//                     }
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 <div className="absolute bottom-0 left-0 p-2 sm:p-3 text-white">
//                   <h3 className="font-bold text-sm sm:text-base forcesmallh1">{relatedProject.title}</h3>
//                   <p className="text-xs sm:text-sm text-white/80">
//                     {relatedProject.category} {relatedProject.subCategory ? `- ${relatedProject.subCategory}` : ""}
//                   </p>
//                 </div>
//               </div>
//               <div className="p-2 sm:p-3">
//                 <Link
//                   href={`/projects/${relatedProject.slug}`}
//                   className="flex items-center justify-between font-medium text-sm sm:text-base transition-colors duration-300"
//                   style={{
//                     color: "#d88f07",
//                     textShadow: "0 0 4px rgba(216, 143, 7, 0.35)",
//                   }}
//                 >
//                   <span>View Project</span>
//                   <ChevronRight
//                     className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300"
//                     style={{ color: "#d88f07" }}
//                   />
//                 </Link>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }









"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function RelatedProjects({ relatedProjects, router }) {
  const uniqueCategories = [...new Set(relatedProjects.map(p => p.category))].sort();
  const projectsByCat = {};
  uniqueCategories.forEach(cat => {
    projectsByCat[cat] = relatedProjects.filter(p => p.category === cat);
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
  const displayedProjects = mixed.slice(0, 6);

  return (
    <div className="mt-8 sm:mt-10 lg:mt-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">More Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {displayedProjects.map((relatedProject, index) => {
          const [imgSrc, setImgSrc] = useState(relatedProject.images?.[0]?.url || "/placeholder.svg?height=800&width=1200")
          const [hasError, setHasError] = useState(false)

          useEffect(() => {
            setImgSrc(relatedProject.images?.[0]?.url || "/placeholder.svg?height=800&width=1200")
            setHasError(false)
          }, [relatedProject.images])

          return (
            <motion.div
              key={relatedProject.id || index} // Fallback to index if id is not available
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative h-28 sm:h-32 w-full">
                <Image
                  src={imgSrc}
                  alt={relatedProject.title}
                  fill
                  className="object-cover"
                  onError={() => {
                    if (!hasError) {
                      setHasError(true)
                      setImgSrc("/placeholder.svg?height=800&width=1200")
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-2 sm:p-3 text-white">
                  <h3 className="font-bold text-sm sm:text-base forcesmallh1">{relatedProject.title}</h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {relatedProject.category} {relatedProject.subCategory ? `- ${relatedProject.subCategory}` : ""}
                  </p>
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <Link
                  href={`/projects/${relatedProject.slug}`}
                  className="flex items-center justify-between font-medium text-sm sm:text-base transition-colors duration-300"
                  style={{
                    color: "#d88f07",
                    textShadow: "0 0 4px rgba(216, 143, 7, 0.35)",
                  }}
                >
                  <span>View Project</span>
                  <ChevronRight
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300"
                    style={{ color: "#d88f07" }}
                  />
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}