// // components/projects/SingleProject/tabs/FeaturesTab.jsx
// import { motion } from "framer-motion"

// export default function FeaturesTab({ project, fadeIn, staggerContainer, motion }) {
//   return (
//     <motion.div variants={staggerContainer} initial="hidden" animate="visible">
//       <motion.div variants={fadeIn}>
//         <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Key Features</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//           {(project.features || []).map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={fadeIn}
//               className="bg-white border border-gray-200 rounded-xl p-3 sm:p-5 hover:shadow-md transition-all"
//             >
//               <div className="flex items-start gap-2 sm:gap-3">
//                 <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xs sm:text-sm">
//                   {index + 1}
//                 </div>
//                 <p className="font-medium text-gray-800 text-sm sm:text-base">{feature}</p>
//               </div>
//             </motion.div>
//           ))}
//           {!(project.features && project.features.length) && (
//             <div className="text-gray-500 text-sm sm:text-base col-span-full">
//               No features listed for this project.
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }













// // components/projects/SingleProject/tabs/FeaturesTab.jsx
// import { motion } from "framer-motion"

// export default function FeaturesTab({ project, fadeIn, staggerContainer, motion }) {
//   return (
//     <motion.div variants={staggerContainer} initial="hidden" animate="visible">
//       <motion.div variants={fadeIn}>
//         <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Key Features</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//           {(project.features || []).map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={fadeIn}
//               className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 border border-teal-100 rounded-xl p-3 sm:p-5 hover:shadow-md hover:border-teal-300 transition-all"
//             >
//               <div className="flex items-start gap-2 sm:gap-3">
//                 <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-white text-xs sm:text-sm shadow-sm">
//                   {index + 1}
//                 </div>
//                 <p className="font-medium text-gray-800 text-sm sm:text-base">{feature}</p>
//               </div>
//             </motion.div>
//           ))}
//           {!(project.features && project.features.length) && (
//             <div className="text-gray-500 text-sm sm:text-base col-span-full">
//               No features listed for this project.
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }











// components/projects/SingleProject/tabs/FeaturesTab.jsx
import { motion } from "framer-motion"

export default function FeaturesTab({ project, fadeIn, staggerContainer, motion }) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <motion.div variants={fadeIn}>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {(project.features || []).map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 
              border border-amber-100 rounded-xl p-3 sm:p-5 
              hover:shadow-md hover:border-amber-300 transition-all"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full 
                bg-gradient-to-tr from-amber-500 to-orange-400 
                flex items-center justify-center text-white text-xs sm:text-sm shadow-sm">
                  {index + 1}
                </div>
                <p className="font-medium text-gray-800 text-sm sm:text-base">{feature}</p>
              </div>
            </motion.div>
          ))}

          {!(project.features && project.features.length) && (
            <div className="text-gray-500 text-sm sm:text-base col-span-full">
              No features listed for this project.
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
