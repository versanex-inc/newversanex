// 'use client';
// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
// import { gsap } from 'gsap';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ReviewSection = ({ projectSlug }) => {
//   const [reviews, setReviews] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch all reviews for the project
//   useEffect(() => {
//     fetchReviews();
//   }, [projectSlug]);

//   const fetchReviews = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/projects/${projectSlug}/reviews`);
//       const result = await response.json();
//       if (response.ok) {
//         setReviews(result || []);
//       } else {
//         toast.error(result.error || 'Failed to fetch reviews');
//       }
//     } catch (error) {
//       toast.error('Error fetching reviews');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Lock scroll when modal open
//   useEffect(() => {
//     document.body.style.overflow = showReviewModal ? 'hidden' : '';
//   }, [showReviewModal]);

//   // Modal for add/edit
//   const ReviewModal = ({ review, onClose }) => {
//     const [formData, setFormData] = useState({
//       reviewerName: review?.reviewerName || null,
//       reviewerProfile: review?.reviewerProfile || null,
//       rating: review?.rating || null,
//       title: review?.title || null,
//       description: review?.description || null,
//       adminReply: review?.adminReply || null,
//       likesCount: review?.likesCount || 0,
//     });

//     useEffect(() => {
//       gsap.fromTo(
//         '.modal-content',
//         { opacity: 0, scale: 0.9 },
//         { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
//       );
//     }, []);

//     const handleSubmit = async () => {
//       setLoading(true);
//       try {
//         const url = review ? `/api/reviews/${review._id}` : `/api/projects/${projectSlug}/reviews`;
//         const method = review ? 'PUT' : 'POST';
//         const body = {
//           reviewerName: formData.reviewerName,
//           reviewerProfile: formData.reviewerProfile,
//           rating: formData.rating,
//           title: formData.title,
//           description: formData.description,
//           adminReply: formData.adminReply,
//           likesCount: formData.likesCount,
//         };

//         const response = await fetch(url, {
//           method,
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(body),
//         });
//         const result = await response.json();

//         if (response.ok && result) {
//           toast.success(review ? 'Review updated successfully' : 'Review added successfully');
//           fetchReviews();
//           onClose();
//         } else {
//           toast.error(result.error || 'Failed to save review');
//         }
//       } catch (error) {
//         toast.error('Error saving review');
//       } finally {
//         setLoading(false);
//       }
//     };

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg p-4">
//         <div className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative overflow-y-auto max-h-[90vh]">
//           <div className="flex justify-between items-center border-b pb-3 mb-4">
//             <h2 className="text-xl font-semibold text-amber-800">
//               {review ? 'Edit Review' : 'Add Review'}
//             </h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <FaTimes />
//             </button>
//           </div>

//           <div className="space-y-4">
//             {/* Reviewer Name */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Name</label>
//               <input
//                 type="text"
//                 value={formData.reviewerName || ''}
//                 onChange={(e) => setFormData({ ...formData, reviewerName: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Reviewer Profile */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Profile</label>
//               <input
//                 type="url"
//                 value={formData.reviewerProfile || ''}
//                 onChange={(e) => setFormData({ ...formData, reviewerProfile: e.target.value || null })}
//                 placeholder="https://profile-link.com"
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Rating */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Rating</label>
//               <select
//                 value={formData.rating || ''}
//                 onChange={(e) => setFormData({ ...formData, rating: e.target.value ? parseInt(e.target.value) : null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               >
//                 <option value="">Select Rating</option>
//                 {[1, 2, 3, 4, 5].map((num) => (
//                   <option key={num} value={num}>{num}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Review Title */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Review Title</label>
//               <input
//                 type="text"
//                 value={formData.title || ''}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Review Description */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Review Description</label>
//               <textarea
//                 rows={3}
//                 value={formData.description || ''}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Admin Reply */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Admin Reply</label>
//               <input
//                 type="text"
//                 value={formData.adminReply || ''}
//                 onChange={(e) => setFormData({ ...formData, adminReply: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Likes Count */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Likes Count</label>
//               <input
//                 type="number"
//                 value={formData.likesCount || ''}
//                 onChange={(e) => setFormData({ ...formData, likesCount: e.target.value ? parseInt(e.target.value) : 0 })}
//                 className="w-full px-4 py-2 border rounded-lg"
//                 min="0"
//               />
//             </div>

//             <div className="flex gap-3 pt-4">
//               <button
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50"
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//                 disabled={loading}
//               >
//                 {loading ? 'Saving...' : review ? 'Update' : 'Add'} Review
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Delete review
//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure you want to delete this review?')) return;
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/reviews/${id}`, { method: 'DELETE' });
//       const result = await response.json();
//       if (response.ok && result) {
//         toast.success('Review deleted successfully');
//         fetchReviews();
//       } else {
//         toast.error(result.error || 'Failed to delete review');
//       }
//     } catch (error) {
//       toast.error('Error deleting review');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-semibold text-amber-800">Reviews</h2>
//         <button
//           onClick={() => {
//             setSelectedReview(null);
//             setShowReviewModal(true);
//           }}
//           className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//           disabled={loading}
//         >
//           <FaPlus /> Add Review
//         </button>
//       </div>

//       {/* Reviews Grid */}
//       {loading ? (
//         <p>Loading reviews...</p>
//       ) : reviews.length === 0 ? (
//         <p>No reviews found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review) => (
//             <div
//               key={review._id}
//               className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-md"
//             >
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-lg font-semibold text-amber-800">
//                     {review.title || 'Untitled Review'}
//                   </h3>
//                 </div>
//                 <p className="text-amber-600 text-sm mb-4 line-clamp-3">
//                   {review.description || 'No description provided'}
//                 </p>
//                 {review.rating && (
//                   <div className="mb-4">
//                     Rating: {review.rating}/5
//                   </div>
//                 )}
//                 {review.reviewerName && (
//                   <div className="mb-2 text-sm text-amber-700">
//                     By: {review.reviewerName}
//                   </div>
//                 )}
//                 {review.reviewerProfile && (
//                   <div className="mb-2">
//                     <img src={review.reviewerProfile} alt="Reviewer" className="w-16 h-16 object-cover rounded-full" />
//                   </div>
//                 )}
//                 {review.adminReply && (
//                   <p className="text-sm text-amber-600 italic mb-2">
//                     Admin Reply: {review.adminReply}
//                   </p>
//                 )}
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => {
//                       setSelectedReview(review);
//                       setShowReviewModal(true);
//                     }}
//                     className="flex-1 px-3 py-2 text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-50"
//                     disabled={loading}
//                   >
//                     <FaEdit className="inline-block mr-1" /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(review._id)}
//                     className="px-3 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
//                     disabled={loading}
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modal */}
//       {showReviewModal && (
//         <ReviewModal
//           review={selectedReview}
//           onClose={() => {
//             setShowReviewModal(false);
//             setSelectedReview(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ReviewSection;




















// 'use client';
// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
// import { gsap } from 'gsap';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ReviewSection = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch all projects
//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('/api/projects');
//       const result = await response.json();
//       if (response.ok && result.success) {
//         setProjects(result.data || []);
//         if (result.data.length > 0 && !selectedProject) {
//           setSelectedProject(result.data[0].slug); // Default to first project
//           fetchReviews(result.data[0].slug);
//         }
//       } else {
//         toast.error(result.error || 'Failed to fetch projects');
//       }
//     } catch (error) {
//       toast.error('Error fetching projects');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch reviews for selected project
//   const fetchReviews = async (slug) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/projects/${slug}/reviews`);
//       const result = await response.json();
//       if (response.ok) {
//         setReviews(result || []);
//       } else {
//         toast.error(result.error || 'Failed to fetch reviews');
//       }
//     } catch (error) {
//       toast.error('Error fetching reviews');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Lock scroll when modal open
//   useEffect(() => {
//     document.body.style.overflow = showReviewModal ? 'hidden' : '';
//   }, [showReviewModal]);

//   // Modal for add/edit reviews
//   const ReviewModal = ({ review, onClose }) => {
//     const [formData, setFormData] = useState({
//       reviewerName: review?.reviewerName || null,
//       reviewerProfile: review?.reviewerProfile || null,
//       rating: review?.rating || null,
//       title: review?.title || null,
//       description: review?.description || null,
//       adminReply: review?.adminReply || null,
//       likesCount: review?.likesCount || 0,
//     });

//     useEffect(() => {
//       gsap.fromTo(
//         '.modal-content',
//         { opacity: 0, scale: 0.9 },
//         { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
//       );
//     }, []);

//     const handleSubmit = async () => {
//       setLoading(true);
//       try {
//         const url = review ? `/api/reviews/${review._id}` : `/api/projects/${selectedProject}/reviews`;
//         const method = review ? 'PUT' : 'POST';
//         const body = {
//           reviewerName: formData.reviewerName,
//           reviewerProfile: formData.reviewerProfile,
//           rating: formData.rating,
//           title: formData.title,
//           description: formData.description,
//           adminReply: formData.adminReply,
//           likesCount: formData.likesCount,
//         };

//         const response = await fetch(url, {
//           method,
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(body),
//         });
//         const result = await response.json();

//         if (response.ok && result) {
//           toast.success(review ? 'Review updated successfully' : 'Review added successfully');
//           fetchReviews(selectedProject);
//           onClose();
//         } else {
//           toast.error(result.error || 'Failed to save review');
//         }
//       } catch (error) {
//         toast.error('Error saving review');
//       } finally {
//         setLoading(false);
//       }
//     };

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg p-4">
//         <div className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative overflow-y-auto max-h-[90vh]">
//           <div className="flex justify-between items-center border-b pb-3 mb-4">
//             <h2 className="text-xl font-semibold text-amber-800">
//               {review ? 'Edit Review' : 'Add Review'}
//             </h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <FaTimes />
//             </button>
//           </div>

//           <div className="space-y-4">
//             {/* Reviewer Name */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Name</label>
//               <input
//                 type="text"
//                 value={formData.reviewerName || ''}
//                 onChange={(e) => setFormData({ ...formData, reviewerName: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Reviewer Profile */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Profile</label>
//               <input
//                 type="url"
//                 value={formData.reviewerProfile || ''}
//                 onChange={(e) => setFormData({ ...formData, reviewerProfile: e.target.value || null })}
//                 placeholder="https://profile-link.com"
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Rating */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Rating</label>
//               <select
//                 value={formData.rating || ''}
//                 onChange={(e) => setFormData({ ...formData, rating: e.target.value ? parseInt(e.target.value) : null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               >
//                 <option value="">Select Rating</option>
//                 {[1, 2, 3, 4, 5].map((num) => (
//                   <option key={num} value={num}>{num}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Review Title */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Review Title</label>
//               <input
//                 type="text"
//                 value={formData.title || ''}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Review Description */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Review Description</label>
//               <textarea
//                 rows={3}
//                 value={formData.description || ''}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Admin Reply */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Admin Reply</label>
//               <input
//                 type="text"
//                 value={formData.adminReply || ''}
//                 onChange={(e) => setFormData({ ...formData, adminReply: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Likes Count */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Likes Count</label>
//               <input
//                 type="number"
//                 value={formData.likesCount || ''}
//                 onChange={(e) => setFormData({ ...formData, likesCount: e.target.value ? parseInt(e.target.value) : 0 })}
//                 className="w-full px-4 py-2 border rounded-lg"
//                 min="0"
//               />
//             </div>

//             <div className="flex gap-3 pt-4">
//               <button
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50"
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//                 disabled={loading}
//               >
//                 {loading ? 'Saving...' : review ? 'Update' : 'Add'} Review
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Delete review
//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure you want to delete this review?')) return;
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/reviews/${id}`, { method: 'DELETE' });
//       const result = await response.json();
//       if (response.ok && result) {
//         toast.success('Review deleted successfully');
//         fetchReviews(selectedProject);
//       } else {
//         toast.error(result.error || 'Failed to delete review');
//       }
//     } catch (error) {
//       toast.error('Error deleting review');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Project Selection */}
//       {loading ? (
//         <p>Loading projects...</p>
//       ) : projects.length === 0 ? (
//         <p>No projects found.</p>
//       ) : (
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-amber-700 mb-2">Select Project</label>
//           <select
//             value={selectedProject || ''}
//             onChange={(e) => {
//               const slug = e.target.value;
//               setSelectedProject(slug);
//               fetchReviews(slug);
//             }}
//             className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//           >
//             <option value="">Select a project</option>
//             {projects.map((project) => (
//               <option key={project._id} value={project.slug}>{project.title}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Reviews Header */}
//       {selectedProject && (
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-semibold text-amber-800">Reviews for {projects.find(p => p.slug === selectedProject)?.title || 'Selected Project'}</h2>
//           <button
//             onClick={() => {
//               setSelectedReview(null);
//               setShowReviewModal(true);
//             }}
//             className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//             disabled={loading}
//           >
//             <FaPlus /> Add Review
//           </button>
//         </div>
//       )}

//       {/* Reviews Grid */}
//       {selectedProject && reviews.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review) => (
//             <div
//               key={review._id}
//               className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-md"
//             >
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-lg font-semibold text-amber-800">
//                     {review.title || 'Untitled Review'}
//                   </h3>
//                 </div>
//                 <p className="text-amber-600 text-sm mb-4 line-clamp-3">
//                   {review.description || 'No description provided'}
//                 </p>
//                 {review.rating && (
//                   <div className="mb-4">
//                     Rating: {review.rating}/5
//                   </div>
//                 )}
//                 {review.reviewerName && (
//                   <div className="mb-2 text-sm text-amber-700">
//                     By: {review.reviewerName}
//                   </div>
//                 )}
//                 {review.reviewerProfile && (
//                   <div className="mb-2">
//                     <img src={review.reviewerProfile} alt="Reviewer" className="w-16 h-16 object-cover rounded-full" />
//                   </div>
//                 )}
//                 {review.adminReply && (
//                   <p className="text-sm text-amber-600 italic mb-2">
//                     Admin Reply: {review.adminReply}
//                   </p>
//                 )}
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => {
//                       setSelectedReview(review);
//                       setShowReviewModal(true);
//                     }}
//                     className="flex-1 px-3 py-2 text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-600"
//                     disabled={loading}
//                   >
//                     <FaEdit className="inline-block mr-1" /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(review._id)}
//                     className="px-3 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
//                     disabled={loading}
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       {selectedProject && reviews.length === 0 && (
//         <p>No reviews found for this project.</p>
//       )}

//       {/* Modal */}
//       {showReviewModal && (
//         <ReviewModal
//           review={selectedReview}
//           onClose={() => {
//             setShowReviewModal(false);
//             setSelectedReview(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ReviewSection;
















// 'use client';
// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
// import { gsap } from 'gsap';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ReviewSection = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch all projects
//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('/api/projects');
//       const result = await response.json();
//       if (response.ok && result.success) {
//         setProjects(result.data || []);
//         if (result.data.length > 0 && !selectedProject) {
//           setSelectedProject(result.data[0].slug); // Default to first project
//           fetchReviews(result.data[0].slug);
//         }
//       } else {
//         toast.error(result.error || 'Failed to fetch projects');
//       }
//     } catch (error) {
//       toast.error('Error fetching projects');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch reviews for selected project
//   const fetchReviews = async (slug) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/projects/${slug}/reviews`);
//       const result = await response.json();
//       if (response.ok) {
//         setReviews(result || []);
//       } else {
//         toast.error(result.error || 'Failed to fetch reviews');
//       }
//     } catch (error) {
//       toast.error('Error fetching reviews');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Lock scroll when modal open
//   useEffect(() => {
//     document.body.style.overflow = showReviewModal ? 'hidden' : '';
//   }, [showReviewModal]);

//   // Modal for add/edit reviews
//   const ReviewModal = ({ review, onClose }) => {
//     const [formData, setFormData] = useState({
//       reviewerName: review?.reviewerName || null,
//       reviewerProfile: review?.reviewerProfile || null,
//       rating: review?.rating || null,
//       title: review?.title || null,
//       description: review?.description || null,
//       adminReply: review?.adminReply || null,
//       likesCount: review?.likesCount || 0,
//     });

//     useEffect(() => {
//       gsap.fromTo(
//         '.modal-content',
//         { opacity: 0, scale: 0.9 },
//         { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
//       );
//     }, []);

//     const handleSubmit = async () => {
//       setLoading(true);
//       try {
//         const url = review 
//           ? `/api/projects/${selectedProject}/reviews/${review._id}` 
//           : `/api/projects/${selectedProject}/reviews`;
//         const method = review ? 'PUT' : 'POST';
//         const body = {
//           reviewerName: formData.reviewerName,
//           reviewerProfile: formData.reviewerProfile,
//           rating: formData.rating,
//           title: formData.title,
//           description: formData.description,
//           adminReply: formData.adminReply,
//           likesCount: formData.likesCount,
//         };

//         const response = await fetch(url, {
//           method,
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(body),
//         });
//         const result = await response.json();

//         if (response.ok && result) {
//           toast.success(review ? 'Review updated successfully' : 'Review added successfully');
//           fetchReviews(selectedProject);
//           onClose();
//         } else {
//           toast.error(result.error || 'Failed to save review');
//         }
//       } catch (error) {
//         toast.error('Error saving review');
//       } finally {
//         setLoading(false);
//       }
//     };

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg p-4">
//         <div className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative overflow-y-auto max-h-[90vh]">
//           <div className="flex justify-between items-center border-b pb-3 mb-4">
//             <h2 className="text-xl font-semibold text-amber-800">
//               {review ? 'Edit Review' : 'Add Review'}
//             </h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <FaTimes />
//             </button>
//           </div>

//           <div className="space-y-4">
//             {/* Reviewer Name */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Name</label>
//               <input
//                 type="text"
//                 value={formData.reviewerName || ''}
//                 onChange={(e) => setFormData({ ...formData, reviewerName: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Reviewer Profile */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Profile</label>
//               <input
//                 type="url"
//                 value={formData.reviewerProfile || ''}
//                 onChange={(e) => setFormData({ ...formData, reviewerProfile: e.target.value || null })}
//                 placeholder="https://profile-link.com"
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Rating */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Rating</label>
//               <select
//                 value={formData.rating || ''}
//                 onChange={(e) => setFormData({ ...formData, rating: e.target.value ? parseInt(e.target.value) : null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               >
//                 <option value="">Select Rating</option>
//                 {[1, 2, 3, 4, 5].map((num) => (
//                   <option key={num} value={num}>{num}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Review Title */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Review Title</label>
//               <input
//                 type="text"
//                 value={formData.title || ''}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Review Description */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Review Description</label>
//               <textarea
//                 rows={3}
//                 value={formData.description || ''}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Admin Reply */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Admin Reply</label>
//               <input
//                 type="text"
//                 value={formData.adminReply || ''}
//                 onChange={(e) => setFormData({ ...formData, adminReply: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Likes Count */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Likes Count</label>
//               <input
//                 type="number"
//                 value={formData.likesCount || ''}
//                 onChange={(e) => setFormData({ ...formData, likesCount: e.target.value ? parseInt(e.target.value) : 0 })}
//                 className="w-full px-4 py-2 border rounded-lg"
//                 min="0"
//               />
//             </div>

//             <div className="flex gap-3 pt-4">
//               <button
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50"
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//                 disabled={loading}
//               >
//                 {loading ? 'Saving...' : review ? 'Update' : 'Add'} Review
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Delete review
//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure you want to delete this review?')) return;
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/projects/${selectedProject}/reviews/${id}`, { method: 'DELETE' });
//       const result = await response.json();
//       if (response.ok && result) {
//         toast.success('Review deleted successfully');
//         fetchReviews(selectedProject);
//       } else {
//         toast.error(result.error || 'Failed to delete review');
//       }
//     } catch (error) {
//       toast.error('Error deleting review');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Project Selection */}
//       {loading ? (
//         <p>Loading projects...</p>
//       ) : projects.length === 0 ? (
//         <p>No projects found.</p>
//       ) : (
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-amber-700 mb-2">Select Project</label>
//           <select
//             value={selectedProject || ''}
//             onChange={(e) => {
//               const slug = e.target.value;
//               setSelectedProject(slug);
//               fetchReviews(slug);
//             }}
//             className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//           >
//             <option value="">Select a project</option>
//             {projects.map((project) => (
//               <option key={project._id} value={project.slug}>{project.title}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Reviews Header */}
//       {selectedProject && (
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-semibold text-amber-800">Reviews for {projects.find(p => p.slug === selectedProject)?.title || 'Selected Project'}</h2>
//           <button
//             onClick={() => {
//               setSelectedReview(null);
//               setShowReviewModal(true);
//             }}
//             className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//             disabled={loading}
//           >
//             <FaPlus /> Add Review
//           </button>
//         </div>
//       )}

//       {/* Reviews Grid */}
//       {selectedProject && reviews.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review) => (
//             <div
//               key={review._id}
//               className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-md"
//             >
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-lg font-semibold text-amber-800">
//                     {review.title || 'Untitled Review'}
//                   </h3>
//                 </div>
//                 <p className="text-amber-600 text-sm mb-4 line-clamp-3">
//                   {review.description || 'No description provided'}
//                 </p>
//                 {review.rating && (
//                   <div className="mb-4">
//                     Rating: {review.rating}/5
//                   </div>
//                 )}
//                 {review.reviewerName && (
//                   <div className="mb-2 text-sm text-amber-700">
//                     By: {review.reviewerName}
//                   </div>
//                 )}
//                 {review.reviewerProfile && (
//                   <div className="mb-2">
//                     <img src={review.reviewerProfile} alt="Reviewer" className="w-16 h-16 object-cover rounded-full" />
//                   </div>
//                 )}
//                 {review.adminReply && (
//                   <p className="text-sm text-amber-600 italic mb-2">
//                     Admin Reply: {review.adminReply}
//                   </p>
//                 )}
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => {
//                       setSelectedReview(review);
//                       setShowReviewModal(true);
//                     }}
//                     className="flex-1 px-3 py-2 text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-600"
//                     disabled={loading}
//                   >
//                     <FaEdit className="inline-block mr-1" /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(review._id)}
//                     className="px-3 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
//                     disabled={loading}
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       {selectedProject && reviews.length === 0 && (
//         <p>No reviews found for this project.</p>
//       )}

//       {/* Modal */}
//       {showReviewModal && (
//         <ReviewModal
//           review={selectedReview}
//           onClose={() => {
//             setShowReviewModal(false);
//             setSelectedReview(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ReviewSection;




















// 'use client';
// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
// import { gsap } from 'gsap';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ReviewSection = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch all projects
//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('/api/projects');
//       const result = await response.json();
//       if (response.ok && result.success) {
//         setProjects(result.data || []);
//         if (result.data.length > 0 && !selectedProject) {
//           setSelectedProject(result.data[0].slug); // Default to first project
//           fetchReviews(result.data[0].slug);
//         }
//       } else {
//         toast.error(result.error || 'Failed to fetch projects');
//       }
//     } catch (error) {
//       toast.error('Error fetching projects');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch reviews for selected project
//   const fetchReviews = async (slug) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/projects/${slug}/reviews`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const result = await response.json();
//       console.log("Admin Reviews fetched:", result); // Debug log
//       if (result.success) {
//         setReviews(result.data || []);
//       } else {
//         toast.error(result.error || 'Failed to fetch reviews');
//         setReviews([]);
//       }
//     } catch (error) {
//       console.error('Error fetching reviews:', error.message);
//       toast.error('Error fetching reviews');
//       setReviews([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Lock scroll when modal open
//   useEffect(() => {
//     document.body.style.overflow = showReviewModal ? 'hidden' : '';
//   }, [showReviewModal]);

//   // Modal for add/edit reviews
//   const ReviewModal = ({ review, onClose }) => {
//     const [formData, setFormData] = useState({
//       reviewerName: review?.reviewerName || null,
//       reviewerProfile: review?.reviewerProfile || null,
//       rating: review?.rating || null,
//       title: review?.title || null,
//       description: review?.description || null,
//       adminReply: review?.adminReply || null,
//       likesCount: review?.likesCount || 0,
//     });

//     useEffect(() => {
//       gsap.fromTo(
//         '.modal-content',
//         { opacity: 0, scale: 0.9 },
//         { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
//       );
//     }, []);

//     const handleSubmit = async () => {
//       setLoading(true);
//       try {
//         const url = review 
//           ? `/api/projects/${selectedProject}/reviews/${review._id}` 
//           : `/api/projects/${selectedProject}/reviews`;
//         const method = review ? 'PUT' : 'POST';
//         const body = {
//           reviewerName: formData.reviewerName,
//           reviewerProfile: formData.reviewerProfile,
//           rating: formData.rating,
//           title: formData.title,
//           description: formData.description,
//           adminReply: formData.adminReply,
//           likesCount: formData.likesCount,
//         };

//         const response = await fetch(url, {
//           method,
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(body),
//         });
//         const result = await response.json();

//         if (response.ok && result) {
//           toast.success(review ? 'Review updated successfully' : 'Review added successfully');
//           fetchReviews(selectedProject);
//           onClose();
//         } else {
//           toast.error(result.error || 'Failed to save review');
//         }
//       } catch (error) {
//         toast.error('Error saving review');
//       } finally {
//         setLoading(false);
//       }
//     };

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg p-4">
//         <div className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative overflow-y-auto max-h-[90vh]">
//           <div className="flex justify-between items-center border-b pb-3 mb-4">
//             <h2 className="text-xl font-semibold text-amber-800">
//               {review ? 'Edit Review' : 'Add Review'}
//             </h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <FaTimes />
//             </button>
//           </div>

//           <div className="space-y-4">
//             {/* Reviewer Name */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Name</label>
//               <input
//                 type="text"
//                 value={formData.reviewerName || ''}
//                 onChange={(e) => setFormData({ ...formData, reviewerName: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Reviewer Profile */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Profile</label>
//               <input
//                 type="url"
//                 value={formData.reviewerProfile || ''}
//                 onChange={(e) => setFormData({ ...formData, reviewerProfile: e.target.value || null })}
//                 placeholder="https://profile-link.com"
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Rating */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Rating</label>
//               <select
//                 value={formData.rating || ''}
//                 onChange={(e) => setFormData({ ...formData, rating: e.target.value ? parseInt(e.target.value) : null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               >
//                 <option value="">Select Rating</option>
//                 {[1, 2, 3, 4, 5].map((num) => (
//                   <option key={num} value={num}>{num}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Review Title */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Review Title</label>
//               <input
//                 type="text"
//                 value={formData.title || ''}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Review Description */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Review Description</label>
//               <textarea
//                 rows={3}
//                 value={formData.description || ''}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Admin Reply */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Admin Reply</label>
//               <input
//                 type="text"
//                 value={formData.adminReply || ''}
//                 onChange={(e) => setFormData({ ...formData, adminReply: e.target.value || null })}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Likes Count */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Likes Count</label>
//               <input
//                 type="number"
//                 value={formData.likesCount || ''}
//                 onChange={(e) => setFormData({ ...formData, likesCount: e.target.value ? parseInt(e.target.value) : 0 })}
//                 className="w-full px-4 py-2 border rounded-lg"
//                 min="0"
//               />
//             </div>

//             <div className="flex gap-3 pt-4">
//               <button
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50"
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//                 disabled={loading}
//               >
//                 {loading ? 'Saving...' : review ? 'Update' : 'Add'} Review
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Delete review
//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure you want to delete this review?')) return;
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/projects/${selectedProject}/reviews/${id}`, { method: 'DELETE' });
//       const result = await response.json();
//       if (response.ok && result) {
//         toast.success('Review deleted successfully');
//         fetchReviews(selectedProject);
//       } else {
//         toast.error(result.error || 'Failed to delete review');
//       }
//     } catch (error) {
//       toast.error('Error deleting review');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Project Selection */}
//       {loading ? (
//         <p>Loading projects...</p>
//       ) : projects.length === 0 ? (
//         <p>No projects found.</p>
//       ) : (
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-amber-700 mb-2">Select Project</label>
//           <select
//             value={selectedProject || ''}
//             onChange={(e) => {
//               const slug = e.target.value;
//               setSelectedProject(slug);
//               fetchReviews(slug);
//             }}
//             className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//           >
//             <option value="">Select a project</option>
//             {projects.map((project) => (
//               <option key={project._id} value={project.slug}>{project.title}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Reviews Header */}
//       {selectedProject && (
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-semibold text-amber-800">Reviews for {projects.find(p => p.slug === selectedProject)?.title || 'Selected Project'}</h2>
//           <button
//             onClick={() => {
//               setSelectedReview(null);
//               setShowReviewModal(true);
//             }}
//             className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//             disabled={loading}
//           >
//             <FaPlus /> Add Review
//           </button>
//         </div>
//       )}

//       {/* Reviews Grid */}
//       {selectedProject && reviews.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review) => (
//             <div
//               key={review._id}
//               className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-md"
//             >
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-lg font-semibold text-amber-800">
//                     {review.title || 'Untitled Review'}
//                   </h3>
//                 </div>
//                 <p className="text-amber-600 text-sm mb-4 line-clamp-3">
//                   {review.description || 'No description provided'}
//                 </p>
//                 {review.rating && (
//                   <div className="mb-4">
//                     Rating: {review.rating}/5
//                   </div>
//                 )}
//                 {review.reviewerName && (
//                   <div className="mb-2 text-sm text-amber-700">
//                     By: {review.reviewerName}
//                   </div>
//                 )}
//                 {review.reviewerProfile && (
//                   <div className="mb-2">
//                     <img src={review.reviewerProfile} alt="Reviewer" className="w-16 h-16 object-cover rounded-full" />
//                   </div>
//                 )}
//                 {review.adminReply && (
//                   <p className="text-sm text-amber-600 italic mb-2">
//                     Admin Reply: {review.adminReply}
//                   </p>
//                 )}
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => {
//                       setSelectedReview(review);
//                       setShowReviewModal(true);
//                     }}
//                     className="flex-1 px-3 py-2 text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-600"
//                     disabled={loading}
//                   >
//                     <FaEdit className="inline-block mr-1" /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(review._id)}
//                     className="px-3 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
//                     disabled={loading}
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       {selectedProject && reviews.length === 0 && (
//         <p>No reviews found for this project.</p>
//       )}

//       {/* Modal */}
//       {showReviewModal && (
//         <ReviewModal
//           review={selectedReview}
//           onClose={() => {
//             setShowReviewModal(false);
//             setSelectedReview(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ReviewSection;
















// 'use client';
// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
// import { gsap } from 'gsap';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ReviewSection = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('/api/projects');
//       const result = await response.json();
//       if (response.ok && result.success) {
//         setProjects(result.data || []);
//         if (result.data.length > 0 && !selectedProject) {
//           setSelectedProject(result.data[0].slug);
//           fetchReviews(result.data[0].slug);
//         }
//       } else {
//         toast.error(result.error || 'Failed to fetch projects');
//       }
//     } catch (error) {
//       toast.error('Error fetching projects');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchReviews = async (slug) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/projects/${slug}/reviews`);
//       const result = await response.json();
//       if (result.success) {
//         setReviews(result.data || []);
//       } else {
//         toast.error(result.error || 'Failed to fetch reviews');
//         setReviews([]);
//       }
//     } catch (error) {
//       toast.error('Error fetching reviews');
//       setReviews([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Lock scroll when modal is open
//   useEffect(() => {
//     document.body.style.overflow = showReviewModal ? 'hidden' : '';
//   }, [showReviewModal]);

//   // 🔹 Responsive, scroll-safe modal
//   const ReviewModal = ({ review, onClose }) => {
//     const [formData, setFormData] = useState({
//       reviewerName: review?.reviewerName || '',
//       reviewerProfile: review?.reviewerProfile || '',
//       rating: review?.rating || '',
//       title: review?.title || '',
//       description: review?.description || '',
//       adminReply: review?.adminReply || '',
//       likesCount: review?.likesCount || 0,
//     });

//     useEffect(() => {
//       gsap.fromTo(
//         '.modal-content',
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
//       );
//     }, []);

//     const handleSubmit = async () => {
//       setLoading(true);
//       try {
//         const url = review
//           ? `/api/projects/${selectedProject}/reviews/${review._id}`
//           : `/api/projects/${selectedProject}/reviews`;
//         const method = review ? 'PUT' : 'POST';
//         const body = {
//           reviewerName: formData.reviewerName,
//           reviewerProfile: formData.reviewerProfile,
//           rating: formData.rating,
//           title: formData.title,
//           description: formData.description,
//           adminReply: formData.adminReply,
//           likesCount: formData.likesCount,
//         };

//         const response = await fetch(url, {
//           method,
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(body),
//         });
//         const result = await response.json();

//         if (response.ok && result) {
//           toast.success(review ? 'Review updated successfully' : 'Review added successfully');
//           fetchReviews(selectedProject);
//           onClose();
//         } else {
//           toast.error(result.error || 'Failed to save review');
//         }
//       } catch (error) {
//         toast.error('Error saving review');
//       } finally {
//         setLoading(false);
//       }
//     };

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
//         <div className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-lg md:max-w-xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
//           <div className="flex justify-between items-center border-b pb-3 mb-4 sticky top-0 bg-white z-10">
//             <h2 className="text-xl font-semibold text-amber-800">
//               {review ? 'Edit Review' : 'Add Review'}
//             </h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <FaTimes />
//             </button>
//           </div>

//           <div className="space-y-4">
//             {/* Reviewer Name */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Name</label>
//               <input
//                 type="text"
//                 value={formData.reviewerName}
//                 onChange={(e) => setFormData({ ...formData, reviewerName: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
//               />
//             </div>

//             {/* Reviewer Profile */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Profile</label>
//               <input
//                 type="url"
//                 placeholder="https://profile-link.com"
//                 value={formData.reviewerProfile}
//                 onChange={(e) => setFormData({ ...formData, reviewerProfile: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
//               />
//             </div>

//             {/* Rating */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Rating</label>
//               <select
//                 value={formData.rating}
//                 onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
//               >
//                 <option value="">Select Rating</option>
//                 {[1, 2, 3, 4, 5].map((num) => (
//                   <option key={num} value={num}>
//                     {num}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Review Title */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Review Title</label>
//               <input
//                 type="text"
//                 value={formData.title}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
//               />
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Description</label>
//               <textarea
//                 rows={3}
//                 value={formData.description}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 resize-none"
//               />
//             </div>

//             {/* Admin Reply */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Admin Reply</label>
//               <input
//                 type="text"
//                 value={formData.adminReply}
//                 onChange={(e) => setFormData({ ...formData, adminReply: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
//               />
//             </div>

//             {/* Likes Count */}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Likes Count</label>
//               <input
//                 type="number"
//                 min="0"
//                 value={formData.likesCount}
//                 onChange={(e) =>
//                   setFormData({ ...formData, likesCount: parseInt(e.target.value) || 0 })
//                 }
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 pt-4">
//               <button
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-all"
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all"
//                 disabled={loading}
//               >
//                 {loading ? 'Saving...' : review ? 'Update Review' : 'Add Review'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure you want to delete this review?')) return;
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/projects/${selectedProject}/reviews/${id}`, { method: 'DELETE' });
//       const result = await response.json();
//       if (response.ok && result) {
//         toast.success('Review deleted successfully');
//         fetchReviews(selectedProject);
//       } else {
//         toast.error(result.error || 'Failed to delete review');
//       }
//     } catch (error) {
//       toast.error('Error deleting review');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Project Selection */}
//       {loading ? (
//         <p>Loading projects...</p>
//       ) : projects.length === 0 ? (
//         <p>No projects found.</p>
//       ) : (
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-amber-700 mb-2">Select Project</label>
//           <select
//             value={selectedProject || ''}
//             onChange={(e) => {
//               const slug = e.target.value;
//               setSelectedProject(slug);
//               fetchReviews(slug);
//             }}
//             className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//           >
//             <option value="">Select a project</option>
//             {projects.map((project) => (
//               <option key={project._id} value={project.slug}>
//                 {project.title}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Reviews */}
//       {selectedProject && (
//         <>
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//             <h2 className="text-2xl font-semibold text-amber-800">
//               Reviews for {projects.find((p) => p.slug === selectedProject)?.title || 'Selected Project'}
//             </h2>
//             <button
//               onClick={() => {
//                 setSelectedReview(null);
//                 setShowReviewModal(true);
//               }}
//               className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all"
//               disabled={loading}
//             >
//               <FaPlus /> Add Review
//             </button>
//           </div>

//           {reviews.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {reviews.map((review) => (
//                 <div
//                   key={review._id}
//                   className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
//                 >
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold text-amber-800 mb-2">{review.title || 'Untitled Review'}</h3>
//                     <p className="text-amber-600 text-sm mb-4 line-clamp-3">{review.description || 'No description provided'}</p>
//                     {review.rating && <div className="text-sm mb-2">⭐ Rating: {review.rating}/5</div>}
//                     {review.reviewerName && <div className="text-sm text-amber-700">By: {review.reviewerName}</div>}
//                     {review.reviewerProfile && (
//                       <img src={review.reviewerProfile} alt="Reviewer" className="w-14 h-14 object-cover rounded-full mt-3" />
//                     )}
//                     {review.adminReply && (
//                       <p className="text-sm text-amber-600 italic mt-3">Admin Reply: {review.adminReply}</p>
//                     )}

//                     <div className="flex gap-2 mt-4">
//                       <button
//                         onClick={() => {
//                           setSelectedReview(review);
//                           setShowReviewModal(true);
//                         }}
//                         className="flex-1 px-3 py-2 text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-50"
//                       >
//                         <FaEdit className="inline mr-1" /> Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(review._id)}
//                         className="px-3 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500 mt-4">No reviews found for this project.</p>
//           )}
//         </>
//       )}

//       {/* Modal */}
//       {showReviewModal && (
//         <ReviewModal
//           review={selectedReview}
//           onClose={() => {
//             setShowReviewModal(false);
//             setSelectedReview(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ReviewSection;



















'use client';
import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewSection = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/projects');
      const result = await response.json();
      if (response.ok && result.success) {
        setProjects(result.data || []);
        if (result.data.length > 0 && !selectedProject) {
          setSelectedProject(result.data[0].slug);
          fetchReviews(result.data[0].slug);
        }
      } else {
        toast.error(result.error || 'Failed to fetch projects');
      }
    } catch (error) {
      toast.error('Error fetching projects');
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async (slug) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/projects/${slug}/reviews`);
      const result = await response.json();
      if (result.success) {
        setReviews(result.data || []);
      } else {
        toast.error(result.error || 'Failed to fetch reviews');
        setReviews([]);
      }
    } catch (error) {
      toast.error('Error fetching reviews');
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = showReviewModal ? 'hidden' : '';
  }, [showReviewModal]);

  const ReviewModal = ({ review, onClose }) => {
    const [formData, setFormData] = useState({
      reviewerName: review?.reviewerName || '',
      reviewerProfile: review?.reviewerProfile || '',
      rating: review?.rating || '',
      title: review?.title || '',
      description: review?.description || '',
      adminReply: review?.adminReply || '',
      likesCount: review?.likesCount || 0,
    });

    useEffect(() => {
      gsap.fromTo(
        '.modal-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }, []);

    const handleSubmit = async () => {
      setLoading(true);
      try {
        const url = review
          ? `/api/projects/${selectedProject}/reviews/${review._id}`
          : `/api/projects/${selectedProject}/reviews`;
        const method = review ? 'PUT' : 'POST';
        const body = {
          reviewerName: formData.reviewerName,
          reviewerProfile: formData.reviewerProfile,
          rating: formData.rating,
          title: formData.title,
          description: formData.description,
          adminReply: formData.adminReply,
          likesCount: formData.likesCount,
        };

        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const result = await response.json();

        if (response.ok && result) {
          toast.success(review ? 'Review updated successfully' : 'Review added successfully');
          fetchReviews(selectedProject);
          onClose();
        } else {
          toast.error(result.error || 'Failed to save review');
        }
      } catch (error) {
        toast.error('Error saving review');
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto p-4">
        <div className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center border-b border-amber-100 pb-4 mb-4 sticky top-0 bg-white z-10">
            <h2 className="text-xl font-semibold text-amber-800">
              {review ? 'Edit Review' : 'Add Review'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-amber-700 transition-colors">
              <FaTimes className="text-lg" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Name</label>
              <input
                type="text"
                value={formData.reviewerName}
                onChange={(e) => setFormData({ ...formData, reviewerName: e.target.value })}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Reviewer Profile URL</label>
              <input
                type="url"
                placeholder="https://profile-link.com"
                value={formData.reviewerProfile}
                onChange={(e) => setFormData({ ...formData, reviewerProfile: e.target.value })}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Rating</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select Rating</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Stars
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Description</label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-y"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Admin Reply</label>
              <input
                type="text"
                value={formData.adminReply}
                onChange={(e) => setFormData({ ...formData, adminReply: e.target.value })}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Likes Count</label>
              <input
                type="number"
                min="0"
                value={formData.likesCount}
                onChange={(e) =>
                  setFormData({ ...formData, likesCount: parseInt(e.target.value) || 0 })
                }
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                disabled={loading}
              >
                {loading ? 'Saving...' : review ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this review?')) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/projects/${selectedProject}/reviews/${id}`, { method: 'DELETE' });
      const result = await response.json();
      if (response.ok && result) {
        toast.success('Review deleted successfully');
        fetchReviews(selectedProject);
      } else {
        toast.error(result.error || 'Failed to delete review');
      }
    } catch (error) {
      toast.error('Error deleting review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
        </div>
      ) : projects.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No projects found.</p>
      ) : (
        <div className="mb-6">
          <label className="block text-sm font-medium text-amber-700 mb-2">Select Project</label>
          <select
            value={selectedProject || ''}
            onChange={(e) => {
              const slug = e.target.value;
              setSelectedProject(slug);
              fetchReviews(slug);
            }}
            className="w-full max-w-md px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Select a project</option>
            {projects.map((project) => (
              <option key={project._id} value={project.slug}>
                {project.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedProject && (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-semibold text-amber-800">
              Reviews for {projects.find((p) => p.slug === selectedProject)?.title || 'Selected Project'}
            </h2>
            <button
              onClick={() => {
                setSelectedReview(null);
                setShowReviewModal(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors shadow-sm"
              disabled={loading}
            >
              <FaPlus /> Add Review
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
            </div>
          ) : reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2 line-clamp-1">{review.title || 'Untitled'}</h3>
                    <p className="text-amber-600 text-sm mb-4 line-clamp-3">{review.description || 'No description'}</p>
                    {review.rating && <div className="text-sm mb-2 flex items-center gap-1">{'⭐'.repeat(review.rating)} ({review.rating}/5)</div>}
                    {review.reviewerName && <div className="text-sm text-amber-700 mb-2">By: {review.reviewerName}</div>}
                    {review.reviewerProfile && (
                      <img src={review.reviewerProfile} alt="Reviewer" className="w-10 h-10 object-cover rounded-full mb-3" />
                    )}
                    {review.adminReply && (
                      <p className="text-sm text-amber-600 italic mt-3">Reply: {review.adminReply}</p>
                    )}

                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => {
                          setSelectedReview(review);
                          setShowReviewModal(true);
                        }}
                        className="flex-1 px-3 py-2 text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors"
                      >
                        <FaEdit className="inline mr-1" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="px-3 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No reviews found for this project.</p>
          )}
        </>
      )}

      {showReviewModal && (
        <ReviewModal
          review={selectedReview}
          onClose={() => {
            setShowReviewModal(false);
            setSelectedReview(null);
          }}
        />
      )}
    </div>
  );
};

export default ReviewSection;