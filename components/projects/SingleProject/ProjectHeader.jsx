// // components/projects/SingleProject/ProjectHeader.jsx
// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { Star, Heart } from "lucide-react"

// export default function ProjectHeader({ project, averageRating, reviews }) {
//   const [imgSrc, setImgSrc] = useState(project.images?.[0]?.url || "/placeholder.svg?height=800&width=1200")
//   const [hasError, setHasError] = useState(false)

//   useEffect(() => {
//     setImgSrc(project.images?.[0]?.url || "/placeholder.svg?height=800&width=1200")
//     setHasError(false)
//   }, [project.images])

//   return (
//     <>
//       <div className="relative h-48 sm:h-64 md:h-80 w-full">
//         <Image
//           src={imgSrc}
//           alt={project.title}
//           fill
//           className="object-cover"
//           onError={() => {
//             if (!hasError) {
//               setHasError(true)
//               setImgSrc("/placeholder.svg?height=800&width=1200")
//             }
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent" />
//         <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6 text-white">
//           <div className="pd-card flex items-start gap-4 mb-4">
//             <div className="relative size-12 sm:size-16 rounded-full overflow-hidden border">
//               {project.creatorPicture ? (
//                 <Image
//                   src={project.creatorPicture}
//                   alt={`${project.creatorName || "Creator"} avatar`}
//                   width={128}
//                   height={128}
//                   className="h-full w-full object-cover"
//                   loading="lazy"
//                   unoptimized
//                 />
//               ) : (
//                 <img src="/creator-avatar.png" alt="creator placeholder" className="h-full w-full object-cover" />
//               )}
//             </div>
//             <div className="min-w-0">
//               <a
//                 href={project.creatorProfile || "#"}
//                 className="font-semibold hover:underline text-sm sm:text-base"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {project.creatorName || "Creator"}
//               </a>
//               <div className="text-xs sm:text-sm text-foreground/70">{project.creatorNiche}</div>
//             </div>
//           </div>
//           <div className="flex items-center gap-1.5 mb-1 sm:mb-2 ">
//             <span className="px-2 py-1 bg-teal-500 text-white text-xs sm:text-sm rounded-full forcesmallweb">{project.category} {project.subCategory ? `- ${project.subCategory}` : ""}</span>
//           </div>
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 forcesmallh1">{project.title}</h1>
//           <p className="text-white/80 text-xs sm:text-sm max-w-md sm:max-w-xl line-clamp-3 forcesmallp">
//             {project.description || "No description available"}
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-wrap items-center justify-between mb-4 sm:mb-6 p-4 sm:p-6 md:p-8 pt-4">
//         <div className="flex items-center gap-4 sm:gap-6">
//           <div className="flex items-center gap-1.5 text-gray-600 text-sm sm:text-base">
//             <Heart className="h-4 w-4" />
//             <span>{project.likesCount || 0} likes</span>
//           </div>
//           <div className="flex items-center gap-1.5">
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   className={`h-4 w-4 ${star <= Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
//                 />
//               ))}
//             </div>
//             <span className="text-gray-600 text-sm sm:text-base">
//               {averageRating} ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


















// components/projects/SingleProject/ProjectHeader.jsx
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, Heart } from "lucide-react"

export default function ProjectHeader({ project, averageRating, reviews }) {
  const [imgSrc, setImgSrc] = useState(project.images?.[0]?.url || "/placeholder.svg?height=800&width=1200")
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImgSrc(project.images?.[0]?.url || "/placeholder.svg?height=800&width=1200")
    setHasError(false)
  }, [project.images])

  return (
    <>
      <div className="relative h-48 sm:h-64 md:h-80 w-full">
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          className="object-cover"
          onError={() => {
            if (!hasError) {
              setHasError(true)
              setImgSrc("/placeholder.svg?height=800&width=1200")
            }
          }}
        />

        {/* Soft gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6 text-white">
          {/* Creator Info */}
          <div className="pd-card flex items-start gap-4 mb-4">
            <div
              className="relative size-12 sm:size-16 rounded-full overflow-hidden border"
              style={{
                borderColor: "#d88f07",
                boxShadow: "0 0 10px rgba(216, 143, 7, 0.3)",
              }}
            >
              {project.creatorPicture ? (
                <Image
                  src={project.creatorPicture}
                  alt={`${project.creatorName || "Creator"} avatar`}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  unoptimized
                />
              ) : (
                <img src="/creator-avatar.png" alt="creator placeholder" className="h-full w-full object-cover" />
              )}
            </div>

            <div className="min-w-0">
              <a
                href={project.creatorProfile || "#"}
                className="font-semibold text-sm sm:text-base transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#d88f07",
                  textShadow: "0 0 5px rgba(216, 143, 7, 0.4)",
                }}
              >
                {project.creatorName || "Creator"}
              </a>
              <div className="text-xs sm:text-sm text-white/70">{project.creatorNiche}</div>
            </div>
          </div>

          {/* Category Badge */}
          <div className="flex items-center gap-1.5 mb-1 sm:mb-2">
            <span
              className="px-2 py-1 text-white text-xs sm:text-sm rounded-full forcesmallweb"
              style={{
                background: "linear-gradient(90deg, #d88f07, #e2a63c)",
                boxShadow: "0 2px 6px rgba(216, 143, 7, 0.4)",
              }}
            >
              {project.category} {project.subCategory ? `- ${project.subCategory}` : ""}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 forcesmallh1">
            {project.title}
          </h1>
          <p className="text-white/80 text-xs sm:text-sm max-w-md sm:max-w-xl line-clamp-3 forcesmallp">
            {project.description || "No description available"}
          </p>
        </div>
      </div>
    </>
  )
}
