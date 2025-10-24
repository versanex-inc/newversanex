// // components/projects/SingleProject/tabs/GalleryTab.jsx
// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { motion } from "framer-motion"

// export default function GalleryTab({
//   project,
//   refreshKey,
//   setRefreshKey,
//   fadeIn,
//   staggerContainer,
//   motion,
//   selectedImage,
//   setSelectedImage,
//   zoom,
//   setZoom,
// }) {
//   return (
//     <motion.div variants={staggerContainer} initial="hidden" animate="visible">
//       <motion.div variants={fadeIn}>
//         <div className="flex items-center justify-between mb-4 sm:mb-6">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Project Gallery</h2>
//           <button
//             onClick={() => setRefreshKey(prev => prev + 1)}
//             className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
//           >
//             Refresh
//           </button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//           {(project.images || []).map((img, index) => {
//             const [imgSrc, setImgSrc] = useState(img.url || "/placeholder.svg?height=300&width=400")
//             const [hasError, setHasError] = useState(false)

//             useEffect(() => {
//               setImgSrc(img.url || "/placeholder.svg?height=300&width=400")
//               setHasError(false)
//             }, [img.url])

//             return (
//               <motion.div
//                 key={`${index}-${refreshKey}`}
//                 variants={fadeIn}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow-md cursor-pointer"
//                 onClick={() => setSelectedImage(img.url)}
//               >
//                 <Image
//                   src={imgSrc}
//                   alt={`${project.title} gallery image ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   onError={() => {
//                     if (!hasError) {
//                       setHasError(true)
//                       setImgSrc("/placeholder.svg?height=300&width=400")
//                     }
//                   }}
//                 />
//               </motion.div>
//             )
//           })}
//         </div>
//         {!(project.images && project.images.length) && (
//           <p className="text-gray-500 text-sm sm:text-base mt-4">
//             No gallery images available for this project.
//           </p>
//         )}
//       </motion.div>
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
//           <div className="relative max-w-6xl w-full flex flex-col items-center">
//             <div className="overflow-auto max-h-[90vh] max-w-full flex justify-center items-center">
//               <img
//                 src={selectedImage}
//                 alt="Full preview"
//                 className="max-h-[90vh] max-w-full rounded-lg shadow-lg transition-transform duration-300"
//                 style={{
//                   transform: `scale(${zoom})`,
//                   objectFit: "contain",
//                   cursor: zoom > 1 ? "grab" : "default",
//                 }}
//                 draggable={false}
//                 onMouseDown={(e) => {
//                   if (zoom <= 1) return;
//                   const img = e.target;
//                   let startX = e.pageX - img.offsetLeft;
//                   let startY = e.pageY - img.offsetTop;
//                   const onMouseMove = (moveEvent) => {
//                     img.parentElement.scrollLeft = moveEvent.pageX - startX;
//                     img.parentElement.scrollTop = moveEvent.pageY - startY;
//                   };
//                   const onMouseUp = () => {
//                     document.removeEventListener("mousemove", onMouseMove);
//                     document.removeEventListener("mouseup", onMouseUp);
//                   };
//                   document.addEventListener("mousemove", onMouseMove);
//                   document.addEventListener("mouseup", onMouseUp);
//                 }}
//               />
//             </div>
//             <div className="flex gap-3 mt-4">
//               <button
//                 onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
//                 className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition"
//               >
//                 -
//               </button>
//               <span className="text-white">{Math.round(zoom * 100)}%</span>
//               <button
//                 onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
//                 className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition"
//               >
//                 +
//               </button>
//               <button
//                 onClick={() => setZoom(1)}
//                 className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
//               >
//                 Reset
//               </button>
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   )
// }












// "use client";
// import { useState, useEffect, memo } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const ImageCard = memo(function ImageCard({ img, index, fadeIn, refreshKey, project, setSelectedImage }) {
//   const [loaded, setLoaded] = useState(false);
//   const [error, setError] = useState(false);

//   return (
//     <motion.div
//       key={`${index}-${refreshKey}`}
//       variants={fadeIn}
//       whileHover={{ y: -5, scale: 1.02 }}
//       className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow-md cursor-pointer bg-gray-100"
//       onClick={() => setSelectedImage(img.url)}
//     >
//       {!loaded && (
//         <div className="absolute inset-0 animate-pulse bg-gray-200" />
//       )}
//       <Image
//         src={!error ? img.url : "/placeholder.svg?height=300&width=400"}
//         alt={`${project.title} gallery image ${index + 1}`}
//         fill
//         sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
//         className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
//         onError={() => setError(true)}
//         onLoadingComplete={() => setLoaded(true)}
//         // ✅ only load first image eagerly
//         loading={index === 0 ? "eager" : "lazy"}
//         priority={index === 0}
//       />
//     </motion.div>
//   );
// });

// export default function GalleryTab({
//   project,
//   refreshKey,
//   setRefreshKey,
//   fadeIn,
//   staggerContainer,
//   motion,
//   selectedImage,
//   setSelectedImage,
//   zoom,
//   setZoom,
// }) {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       animate="visible"
//       className="w-full"
//     >
//       <motion.div variants={fadeIn}>
//         <div className="flex items-center justify-between mb-4 sm:mb-6">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Project Gallery</h2>

//           <button
//   onClick={() => setRefreshKey((prev) => prev + 1)}
//   className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-[#f2ad08] text-white rounded-lg shadow hover:bg-[#d88f07] active:bg-[#c27c05] transition"
// >
//   Refresh
// </button>

//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//           {(project.images || []).map((img, index) => (
//             <ImageCard
//               key={index}
//               img={img}
//               index={index}
//               fadeIn={fadeIn}
//               refreshKey={refreshKey}
//               project={project}
//               setSelectedImage={setSelectedImage}
//             />
//           ))}
//         </div>

//         {!(project.images && project.images.length) && (
//           <p className="text-gray-500 text-sm sm:text-base mt-4">
//             No gallery images available for this project.
//           </p>
//         )}
//       </motion.div>

//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
//           <div className="relative max-w-6xl w-full flex flex-col items-center">
//             <div className="overflow-auto max-h-[90vh] max-w-full flex justify-center items-center">
//               <img
//                 src={selectedImage}
//                 alt="Full preview"
//                 className="max-h-[90vh] max-w-full rounded-lg shadow-lg transition-transform duration-300"
//                 style={{
//                   transform: `scale(${zoom})`,
//                   objectFit: "contain",
//                   cursor: zoom > 1 ? "grab" : "default",
//                 }}
//                 draggable={false}
//                 onMouseDown={(e) => {
//                   if (zoom <= 1) return;
//                   const img = e.target;
//                   let startX = e.pageX - img.offsetLeft;
//                   let startY = e.pageY - img.offsetTop;
//                   const onMouseMove = (moveEvent) => {
//                     img.parentElement.scrollLeft = moveEvent.pageX - startX;
//                     img.parentElement.scrollTop = moveEvent.pageY - startY;
//                   };
//                   const onMouseUp = () => {
//                     document.removeEventListener("mousemove", onMouseMove);
//                     document.removeEventListener("mouseup", onMouseUp);
//                   };
//                   document.addEventListener("mousemove", onMouseMove);
//                   document.addEventListener("mouseup", onMouseUp);
//                 }}
//               />
//             </div>

//             <div className="flex flex-wrap gap-3 mt-4 justify-center">
//               <button
//                 onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
//                 className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition"
//               >
//                 -
//               </button>
//               <span className="text-white">{Math.round(zoom * 100)}%</span>
//               <button
//                 onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
//                 className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition"
//               >
//                 +
//               </button>
//               <button
//                 onClick={() => setZoom(1)}
//                 className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
//               >
//                 Reset
//               </button>
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// }














// "use client";
// import { useState, useEffect, memo, useMemo } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const ImageCard = memo(function ImageCard({ img, index, fadeIn, project, setSelectedImage }) {
//   const [loaded, setLoaded] = useState(false);
//   const [error, setError] = useState(false);

//   return (
//     <motion.div
//       key={index}
//       variants={fadeIn}
//       whileHover={{ y: -3, scale: 1.01 }}
//       className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow-md cursor-pointer bg-gray-100 will-change-transform"
//       onClick={() => setSelectedImage(img.url)}
//     >
//       {!loaded && (
//         <div className="absolute inset-0 animate-pulse bg-gray-200" />
//       )}
//       <Image
//         src={!error ? img.url : "/placeholder.svg?height=300&width=400"}
//         alt={`${project.title} gallery image ${index + 1}`}
//         fill
//         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//         className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
//         onError={() => setError(true)}
//         onLoad={() => setLoaded(true)}
//         loading={index < 3 ? "eager" : "lazy"}   // only eager load first 3
//         priority={index < 3}                     // keep LCP fast
//         placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" // tiny blur placeholder
//       />
//     </motion.div>
//   );
// });

// export default function GalleryTab({
//   project,
//   refreshKey,
//   setRefreshKey,
//   fadeIn,
//   staggerContainer,
//   selectedImage,
//   setSelectedImage,
//   zoom,
//   setZoom,
// }) {
//   const images = useMemo(() => project.images || [], [project.images]);

//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       animate="visible"
//       className="w-full"
//     >
//       <motion.div variants={fadeIn}>
//         <div className="flex items-center justify-between mb-4 sm:mb-6">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Project Gallery</h2>

//           <button
//             onClick={() => setRefreshKey((prev) => prev + 1)}
//             className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-[#f2ad08] text-white rounded-lg shadow hover:bg-[#d88f07] active:bg-[#c27c05] transition"
//           >
//             Refresh
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//           {images.map((img, index) => (
//             <ImageCard
//               key={`${index}-${refreshKey}`}
//               img={img}
//               index={index}
//               fadeIn={fadeIn}
//               project={project}
//               setSelectedImage={setSelectedImage}
//             />
//           ))}
//         </div>

//         {!images.length && (
//           <p className="text-gray-500 text-sm sm:text-base mt-4">
//             No gallery images available for this project.
//           </p>
//         )}
//       </motion.div>

//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
//           <div className="relative max-w-6xl w-full flex flex-col items-center">
//             <div className="overflow-auto max-h-[90vh] max-w-full flex justify-center items-center">
//               <img
//                 src={selectedImage}
//                 alt="Full preview"
//                 className="max-h-[90vh] max-w-full rounded-lg shadow-lg transition-transform duration-300"
//                 style={{
//                   transform: `scale(${zoom})`,
//                   objectFit: "contain",
//                   cursor: zoom > 1 ? "grab" : "default",
//                 }}
//                 draggable={false}
//                 onMouseDown={(e) => {
//                   if (zoom <= 1) return;
//                   const img = e.target;
//                   let startX = e.pageX - img.offsetLeft;
//                   let startY = e.pageY - img.offsetTop;
//                   const onMouseMove = (moveEvent) => {
//                     img.parentElement.scrollLeft = moveEvent.pageX - startX;
//                     img.parentElement.scrollTop = moveEvent.pageY - startY;
//                   };
//                   const onMouseUp = () => {
//                     document.removeEventListener("mousemove", onMouseMove);
//                     document.removeEventListener("mouseup", onMouseUp);
//                   };
//                   document.addEventListener("mousemove", onMouseMove);
//                   document.addEventListener("mouseup", onMouseUp);
//                 }}
//               />
//             </div>

//             <div className="flex flex-wrap gap-3 mt-4 justify-center">
//               <button
//                 onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
//                 className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition"
//               >
//                 -
//               </button>
//               <span className="text-white">{Math.round(zoom * 100)}%</span>
//               <button
//                 onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
//                 className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition"
//               >
//                 +
//               </button>
//               <button
//                 onClick={() => setZoom(1)}
//                 className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
//               >
//                 Reset
//               </button>
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// }












"use client";
import { useState, useEffect, memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageCard = memo(function ImageCard({ img, index, fadeIn, project, setSelectedImage }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      key={index}
      variants={fadeIn}
      className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow-md cursor-pointer bg-gray-100 hover:translate-y-[-3px] hover:scale-[1.01] transition-transform duration-200 ease-out will-change-transform"
      onClick={() => setSelectedImage(img.url)}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
      <Image
        src={!error ? img.url : "/placeholder.svg?height=300&width=400"}
        alt={`${project.title} gallery image ${index + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        loading={index < 6 ? "eager" : "lazy"}   // Eager load first 6 for smoother initial experience
        priority={index < 3}                     // Priority only for first 3 to optimize LCP
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" // Tiny blur placeholder
        quality={75}                             // Default quality, but explicit for thumbnails
      />
    </motion.div>
  );
});

export default function GalleryTab({
  project,
  refreshKey,
  setRefreshKey,
  fadeIn,
  staggerContainer,
  selectedImage,
  setSelectedImage,
  zoom,
  setZoom,
}) {
  const images = useMemo(() => project.images || [], [project.images]);

  // Preload images beyond the first few to reduce loading lag during scroll
  useEffect(() => {
    images.slice(6).forEach((img) => {
      const preloadImg = new window.Image();
      preloadImg.src = img.url;
    });
  }, [images]);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <motion.div variants={fadeIn}>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Project Gallery</h2>

          <button
            onClick={() => setRefreshKey((prev) => prev + 1)}
            className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-[#f2ad08] text-white rounded-lg shadow hover:bg-[#d88f07] active:bg-[#c27c05] transition"
          >
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, index) => (
            <ImageCard
              key={`${index}-${refreshKey}`}
              img={img}
              index={index}
              fadeIn={fadeIn}
              project={project}
              setSelectedImage={setSelectedImage}
            />
          ))}
        </div>

        {!images.length && (
          <p className="text-gray-500 text-sm sm:text-base mt-4">
            No gallery images available for this project.
          </p>
        )}
      </motion.div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="relative max-w-6xl w-full flex flex-col items-center">
            <div className="overflow-auto max-h-[90vh] max-w-full flex justify-center items-center">
              <img
                src={selectedImage}
                alt="Full preview"
                className="max-h-[90vh] max-w-full rounded-lg shadow-lg transition-transform duration-300"
                style={{
                  transform: `scale(${zoom})`,
                  objectFit: "contain",
                  cursor: zoom > 1 ? "grab" : "default",
                }}
                draggable={false}
                onMouseDown={(e) => {
                  if (zoom <= 1) return;
                  const img = e.target;
                  let startX = e.pageX - img.offsetLeft;
                  let startY = e.pageY - img.offsetTop;
                  const onMouseMove = (moveEvent) => {
                    img.parentElement.scrollLeft = moveEvent.pageX - startX;
                    img.parentElement.scrollTop = moveEvent.pageY - startY;
                  };
                  const onMouseUp = () => {
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", onMouseUp);
                  };
                  document.addEventListener("mousemove", onMouseMove);
                  document.addEventListener("mouseup", onMouseUp);
                }}
              />
            </div>

            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              <button
                onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition"
              >
                -
              </button>
              <span className="text-white">{Math.round(zoom * 100)}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition"
              >
                +
              </button>
              <button
                onClick={() => setZoom(1)}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
              >
                Reset
              </button>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}