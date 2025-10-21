// // components/projects/SingleProject/tabs/ReviewsTab.jsx
// import { Star, Heart } from "lucide-react"
// import { motion } from "framer-motion"

// export default function ReviewsTab({
//   reviews,
//   fadeIn,
//   staggerContainer,
//   motion,
// }) {
//   return (
//     <motion.div variants={staggerContainer} initial="hidden" animate="visible">
//       <motion.div variants={fadeIn}>
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">Customer Reviews</h2>
//         <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm">
//           <h3 className="text-lg font-semibold text-gray-800 mb-5">Reviews</h3>
//           <p className="text-gray-600 text-base">
//             View existing reviews for this project.
//           </p>
//         </div>
//         <div className="space-y-6">
//           {reviews.length > 0 ? (
//             reviews.map((review) => (
//               <motion.div
//                 key={review.id}
//                 variants={fadeIn}
//                 className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex flex-col">
//                     <div className="flex items-center gap-2">
//                       <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
//                         {review.name}
//                       </span>
//                       <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <div className="flex">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star
//                           key={star}
//                           className={`h-5 w-5 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-600 ml-1">({review.rating}/5)</span>
//                   </div>
//                 </div>
//                 <h4 className="text-xl font-semibold text-teal-700 mb-3 border-b pb-2 border-teal-100">
//                   {review.title}
//                 </h4>
//                 <p className="text-gray-600 text-base leading-relaxed mb-4">{review.comment}</p>
//                 {review.adminReply && (
//                   <p className="text-gray-700 text-sm italic bg-gray-50 p-3 rounded-lg mt-2">
//                     Admin Reply: {review.adminReply}
//                   </p>
//                 )}
//                 <div className="flex items-center justify-between mt-4 border-t pt-3 border-gray-100">
//                   <div className="flex items-center gap-2 text-sm text-black">
//                     <Heart className="h-5 w-5" />
//                     <span>{review.likesCount || 0} likes</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="text-center py-8 bg-gray-50 rounded-xl text-gray-500 text-base">
//               No reviews yet.
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }
















// // components/projects/SingleProject/tabs/ReviewsTab.jsx
// import { Star, Heart } from "lucide-react"
// import { motion } from "framer-motion"

// export default function ReviewsTab({
//   reviews,
//   fadeIn,
//   staggerContainer,
//   motion,
// }) {
//   return (
//     <motion.div variants={staggerContainer} initial="hidden" animate="visible">
//       <motion.div variants={fadeIn}>
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-100">
//           Customer Reviews
//         </h2>

//         <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 mb-8 shadow-sm border border-teal-100">
//           <h3 className="text-lg font-semibold text-gray-800 mb-3">Reviews</h3>
//           <p className="text-gray-600 text-base">
//             View existing reviews for this project.
//           </p>
//         </div>

//         <div className="space-y-6">
//           {reviews.length > 0 ? (
//             reviews.map((review) => (
//               <motion.div
//                 key={review.id}
//                 variants={fadeIn}
//                 className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex flex-col">
//                     <div className="flex items-center gap-2">
//                       <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
//                         {review.name}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         {new Date(review.createdAt).toLocaleDateString()}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <div className="flex">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star
//                           key={star}
//                           className={`h-5 w-5 ${
//                             star <= review.rating
//                               ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
//                               : "text-gray-300"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-600 ml-1">
//                       ({review.rating}/5)
//                     </span>
//                   </div>
//                 </div>

//                 <h4 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-2 border-teal-50">
//                   {review.title}
//                 </h4>

//                 <p className="text-gray-600 text-base leading-relaxed mb-4">
//                   {review.comment}
//                 </p>

//                 {review.adminReply && (
//                   <p className="text-gray-700 text-sm italic bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg mt-2 border border-gray-100">
//                     <span className="font-medium text-teal-700">Admin Reply:</span>{" "}
//                     {review.adminReply}
//                   </p>
//                 )}

//                 <div className="flex items-center justify-between mt-4 border-t pt-3 border-gray-100">
//                   <div className="flex items-center gap-2 text-sm text-gray-700">
//                     <Heart className="h-5 w-5 text-teal-500" />
//                     <span>{review.likesCount || 0} likes</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="text-center py-10 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-500 text-base border border-gray-100">
//               No reviews yet.
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }














// // components/projects/SingleProject/tabs/ReviewsTab.jsx
// import { Star, Heart } from "lucide-react"
// import { motion } from "framer-motion"

// export default function ReviewsTab({
//   reviews,
//   fadeIn,
//   staggerContainer,
//   motion,
// }) {
//   return (
//     <motion.div variants={staggerContainer} initial="hidden" animate="visible">
//       <motion.div variants={fadeIn}>
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-100">
//           Customer Reviews
//         </h2>

//         <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 mb-8 shadow-sm border border-orange-100">
//           <h3 className="text-lg font-semibold text-gray-800 mb-3">Reviews</h3>
//           <p className="text-gray-600 text-base">
//             View existing reviews for this project.
//           </p>
//         </div>

//         <div className="space-y-6">
//           {reviews.length > 0 ? (
//             reviews.map((review) => (
//               <motion.div
//                 key={review.id}
//                 variants={fadeIn}
//                 className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex flex-col">
//                     <div className="flex items-center gap-2">
//                       <span className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
//                         {review.name}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         {new Date(review.createdAt).toLocaleDateString()}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <div className="flex">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star
//                           key={star}
//                           className={`h-5 w-5 ${
//                             star <= review.rating
//                               ? "fill-amber-400 text-amber-400 drop-shadow-sm"
//                               : "text-gray-300"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-600 ml-1">
//                       ({review.rating}/5)
//                     </span>
//                   </div>
//                 </div>

//                 <h4 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-2 border-orange-50">
//                   {review.title}
//                 </h4>

//                 <p className="text-gray-600 text-base leading-relaxed mb-4">
//                   {review.comment}
//                 </p>

//                 {review.adminReply && (
//                   <p className="text-gray-700 text-sm italic bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg mt-2 border border-gray-100">
//                     <span className="font-medium text-orange-700">Admin Reply:</span>{" "}
//                     {review.adminReply}
//                   </p>
//                 )}

//                 <div className="flex items-center justify-between mt-4 border-t pt-3 border-gray-100">
//                   <div className="flex items-center gap-2 text-sm text-gray-700">
//                     <Heart className="h-5 w-5 text-orange-500" />
//                     <span>{review.likesCount || 0} likes</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="text-center py-10 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl text-gray-500 text-base border border-gray-100">
//               No reviews yet.
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }


















// // components/projects/SingleProject/tabs/ReviewsTab.jsx
// import { Star, Heart } from "lucide-react"
// import { motion } from "framer-motion"

// export default function ReviewsTab({
//   reviews,
//   fadeIn,
//   staggerContainer,
//   motion,
// }) {
//   return (
//     <motion.div variants={staggerContainer} initial="hidden" animate="visible">
//       <motion.div variants={fadeIn}>
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-100">
//           Customer Reviews
//         </h2>

//         <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-6 mb-8 shadow-sm border border-amber-100">
//           <h3 className="text-lg font-semibold text-gray-800 mb-3">Reviews</h3>
//           <p className="text-gray-600 text-base">
//             View existing reviews for this project.
//           </p>
//         </div>

//         <div className="space-y-6">
//           {reviews.length > 0 ? (
//             reviews.map((review) => (
//               <motion.div
//                 key={review.id}
//                 variants={fadeIn}
//                 className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex flex-col">
//                     <div className="flex items-center gap-2">
//                       <span className="inline-block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
//                         {review.name}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         {new Date(review.createdAt).toLocaleDateString()}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <div className="flex">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star
//                           key={star}
//                           className={`h-5 w-5 ${
//                             star <= review.rating
//                               ? "fill-amber-400 text-amber-400 drop-shadow-sm"
//                               : "text-gray-300"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-600 ml-1">
//                       ({review.rating}/5)
//                     </span>
//                   </div>
//                 </div>

//                 <h4 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-2 border-amber-50">
//                   {review.title}
//                 </h4>

//                 <p className="text-gray-600 text-base leading-relaxed mb-4">
//                   {review.comment}
//                 </p>

//                 {review.adminReply && (
//                   <p className="text-gray-700 text-sm italic bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg mt-2 border border-gray-100">
//                     <span className="font-medium text-amber-700">Admin Reply:</span>{" "}
//                     {review.adminReply}
//                   </p>
//                 )}

//                 <div className="flex items-center justify-between mt-4 border-t pt-3 border-gray-100">
//                   <div className="flex items-center gap-2 text-sm text-gray-700">
//                     <Heart className="h-5 w-5 text-amber-500" />
//                     <span>{review.likesCount || 0} likes</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="text-center py-10 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl text-gray-500 text-base border border-amber-100">
//               No reviews yet.
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }















import { Star, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function ReviewsTab({
  reviews,
  fadeIn,
  staggerContainer,
  motion,
}) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <motion.div variants={fadeIn}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-100">
          Customer Reviews
        </h2>

        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-6 mb-8 shadow-sm border border-amber-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Reviews</h3>
          <p className="text-gray-600 text-base">
            View existing reviews for this project.
          </p>
        </div>

        <div className="space-y-6">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <motion.div
                key={review._id} // Changed from review.id to review._id
                variants={fadeIn}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                        {review.reviewerName || "Anonymous"}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= review.rating
                              ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">
                      ({review.rating}/5)
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-2 border-amber-50">
                  {review.title}
                </h4>

                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  {review.description || "No description provided."} // Changed from review.comment to review.description
                </p>

                {review.adminReply && (
                  <p className="text-gray-700 text-sm italic bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg mt-2 border border-gray-100">
                    <span className="font-medium text-amber-700">Admin Reply:</span>{" "}
                    {review.adminReply}
                  </p>
                )}

                <div className="flex items-center justify-between mt-4 border-t pt-3 border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Heart className="h-5 w-5 text-amber-500" />
                    <span>{review.likesCount || 0} likes</span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-10 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl text-gray-500 text-base border border-amber-100">
              No reviews available for this project yet.
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}