"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function ProjectHeader({ project }) {
  const rawUrl = project.images?.[0]?.url;
  const initialSrc = rawUrl && typeof rawUrl === 'string' && rawUrl.trim() !== ''
    ? rawUrl
    : "/placeholder.svg";

  const [imgSrc, setImgSrc] = useState(initialSrc)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const nextUrl = project.images?.[0]?.url;
    setImgSrc(nextUrl && typeof nextUrl === 'string' && nextUrl.trim() !== '' ? nextUrl : "/placeholder.svg")
    setHasError(false)
  }, [project.images])

  return (
    <>
      <div className="relative h-48 sm:h-64 md:h-80 w-full bg-gray-100">
        <Image
          src={imgSrc}
          alt={project.title || "Project Image"}
          fill
          unoptimized
          className="object-cover"
          onError={() => {
            if (!hasError) {
              setHasError(true)
              setImgSrc("/placeholder.svg")
            }
          }}
        />

        {/* Soft gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6 text-white">
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
