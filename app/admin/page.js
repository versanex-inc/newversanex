// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import { FaFolder, FaEnvelope, FaSearch } from 'react-icons/fa';
// import gsap from 'gsap';
// import ProjectsSection from './component/ProjectSection';
// import ContactsSection from './component/ContactSection';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('projects');
//   const [searchTerm, setSearchTerm] = useState('');
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);

//   const projects = [
//     { id: 1, title: 'E-commerce Platform', category: 'Web Development', status: 'Completed', image: '/ecommerce.jpg', description: 'A scalable e-commerce solution', technologies: ['React', 'Node.js', 'MongoDB'], createdAt: '2025-09-15' },
//     { id: 2, title: 'Mobile App', category: 'Mobile Development', status: 'In Progress', image: '/mobile.jpg', description: 'A cross-platform fitness app', technologies: ['React Native', 'Firebase'], createdAt: '2025-10-01' },
//   ];

//   const contacts = [
//     { id: 1, fullName: 'John Doe', email: 'john@example.com', service: 'Web Development', status: 'Pending', priority: 'High', budget: '$10,000', createdAt: '2025-10-10', message: 'Interested in a custom web solution.' },
//     { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', service: 'UI/UX Design', status: 'In Review', priority: 'Medium', budget: '$5,000', createdAt: '2025-10-12', message: 'Need a redesign for our app.' },
//   ];

//   useEffect(() => {
//     gsap.from(containerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
//     gsap.from(contentRef.current?.children, { opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3 });
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case 'completed': return 'bg-green-100 text-green-800';
//       case 'in progress': return 'bg-blue-100 text-blue-800';
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       case 'in review': return 'bg-amber-100 text-amber-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority.toLowerCase()) {
//       case 'high': return 'bg-red-100 text-red-800';
//       case 'medium': return 'bg-amber-100 text-amber-800';
//       case 'low': return 'bg-green-100 text-green-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       <div ref={containerRef} className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-white rounded-xl shadow-lg p-6 mb-6">
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <p className="mt-2 text-amber-100">Manage your projects and contact queries with ease</p>
//         </div>

//         {/* Tabs */}
//         <div className="flex border-b border-amber-200 mb-6">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'projects' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('projects')}
//           >
//             <FaFolder className="inline-block mr-2" /> Projects
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'contacts' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('contacts')}
//           >
//             <FaEnvelope className="inline-block mr-2" /> Contact Queries
//           </button>
//         </div>

//         {/* Search */}
//         <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-6 mb-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-2">Search</label>
//               <div className="relative">
//                 <FaSearch className="absolute left-3 top-3 text-amber-500" />
//                 <input
//                   type="text"
//                   placeholder={activeTab === 'projects' ? 'Search projects...' : 'Search contacts...'}
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div ref={contentRef}>
//           {activeTab === 'projects' && (
//             <ProjectsSection projects={projects} getStatusColor={getStatusColor} />
//           )}
//           {activeTab === 'contacts' && (
//             <ContactsSection contacts={contacts} getStatusColor={getStatusColor} getPriorityColor={getPriorityColor} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;






















// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { FaFolder, FaEnvelope, FaSearch } from 'react-icons/fa';
// import gsap from 'gsap';
// import ProjectsSection from './component/ProjectSection';
// import ContactsSection from './component/ContactSection';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('projects');
//   const [searchTerm, setSearchTerm] = useState('');
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);

//   const contacts = [
//     { id: 1, fullName: 'John Doe', email: 'john@example.com', service: 'Web Development', status: 'Pending', priority: 'High', budget: '$10,000', createdAt: '2025-10-10', message: 'Interested in a custom web solution.' },
//     { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', service: 'UI/UX Design', status: 'In Review', priority: 'Medium', budget: '$5,000', createdAt: '2025-10-12', message: 'Need a redesign for our app.' },
//   ];

//   useEffect(() => {
//     gsap.from(containerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
//     gsap.from(contentRef.current?.children, { opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3 });
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case 'completed': return 'bg-green-100 text-green-800';
//       case 'progress': return 'bg-blue-100 text-blue-800';
//       case 'holding': return 'bg-yellow-100 text-yellow-800';
//       case 'cancelled': return 'bg-red-100 text-red-800';
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       case 'in review': return 'bg-amber-100 text-amber-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority.toLowerCase()) {
//       case 'high': return 'bg-red-100 text-red-800';
//       case 'medium': return 'bg-amber-100 text-amber-800';
//       case 'low': return 'bg-green-100 text-green-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       <div ref={containerRef} className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-white rounded-xl shadow-lg p-6 mb-6">
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <p className="mt-2 text-amber-100">Manage your projects and contact queries with ease</p>
//         </div>

//         {/* Tabs */}
//         <div className="flex border-b border-amber-200 mb-6">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'projects' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('projects')}
//           >
//             <FaFolder className="inline-block mr-2" /> Projects
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'contacts' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('contacts')}
//           >
//             <FaEnvelope className="inline-block mr-2" /> Contact Queries
//           </button>
//         </div>

//         {/* Search */}
//         <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-6 mb-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-2">Search</label>
//               <div className="relative">
//                 <FaSearch className="absolute left-3 top-3 text-amber-500" />
//                 <input
//                   type="text"
//                   placeholder={activeTab === 'projects' ? 'Search projects...' : 'Search contacts...'}
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div ref={contentRef}>
//           {activeTab === 'projects' && <ProjectsSection getStatusColor={getStatusColor} />}
//           {activeTab === 'contacts' && (
//             <ContactsSection
//               contacts={contacts.filter(
//                 (contact) =>
//                   contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   contact.email.toLowerCase().includes(searchTerm.toLowerCase())
//               )}
//               getStatusColor={getStatusColor}
//               getPriorityColor={getPriorityColor}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;












// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { FaFolder, FaEnvelope, FaSearch, FaStar } from 'react-icons/fa';
// import gsap from 'gsap';
// import ProjectsSection from './component/ProjectSection';
// import ContactsSection from './component/ContactSection';
// import ReviewSection from './component/ReviewSecion'; // Updated ReviewSection
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('projects');
//   const [searchTerm, setSearchTerm] = useState('');
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);

//   const contacts = [
//     { id: 1, fullName: 'John Doe', email: 'john@example.com', service: 'Web Development', status: 'Pending', priority: 'High', budget: '$10,000', createdAt: '2025-10-10', message: 'Interested in a custom web solution.' },
//     { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', service: 'UI/UX Design', status: 'In Review', priority: 'Medium', budget: '$5,000', createdAt: '2025-10-12', message: 'Need a redesign for our app.' },
//   ];

//   useEffect(() => {
//     gsap.from(containerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
//     gsap.from(contentRef.current?.children, { opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3 });
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case 'completed': return 'bg-green-100 text-green-800';
//       case 'progress': return 'bg-blue-100 text-blue-800';
//       case 'holding': return 'bg-yellow-100 text-yellow-800';
//       case 'cancelled': return 'bg-red-100 text-red-800';
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       case 'in review': return 'bg-amber-100 text-amber-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority.toLowerCase()) {
//       case 'high': return 'bg-red-100 text-red-800';
//       case 'medium': return 'bg-amber-100 text-amber-800';
//       case 'low': return 'bg-green-100 text-green-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       <div ref={containerRef} className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-white rounded-xl shadow-lg p-6 mb-6">
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <p className="mt-2 text-amber-100">Manage your projects, contact queries, and reviews with ease</p>
//         </div>

//         {/* Tabs */}
//         <div className="flex border-b border-amber-200 mb-6">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'projects' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('projects')}
//           >
//             <FaFolder className="inline-block mr-2" /> Projects
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'contacts' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('contacts')}
//           >
//             <FaEnvelope className="inline-block mr-2" /> Contact Queries
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'reviews' ? 'border-b-2 border-amber-500 text-amber-600' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('reviews')}
//           >
//             <FaStar className="inline-block mr-2" /> Reviews
//           </button>
//         </div>

//         {/* Search */}
//         <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-6 mb-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-2">Search</label>
//               <div className="relative">
//                 <FaSearch className="absolute left-3 top-3 text-amber-500" />
//                 <input
//                   type="text"
//                   placeholder={activeTab === 'projects' ? 'Search projects...' : activeTab === 'contacts' ? 'Search contacts...' : 'Search reviews...'}
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div ref={contentRef}>
//           {activeTab === 'projects' && <ProjectsSection getStatusColor={getStatusColor} />}
//           {activeTab === 'contacts' && (
//             <ContactsSection
//               contacts={contacts.filter(
//                 (contact) =>
//                   contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   contact.email.toLowerCase().includes(searchTerm.toLowerCase())
//               )}
//               getStatusColor={getStatusColor}
//               getPriorityColor={getPriorityColor}
//             />
//           )}
//           {activeTab === 'reviews' && <ReviewSection />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;









// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { FaFolder, FaEnvelope, FaSearch, FaStar } from 'react-icons/fa';
// import gsap from 'gsap';
// import ProjectsSection from './component/ProjectSection';
// import ContactsSection from './component/ContactSection';
// import ReviewSection from './component/ReviewSecion';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('projects');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [contacts, setContacts] = useState([]); // 🟡 replaced static contacts
//   const [loading, setLoading] = useState(false);

//   const containerRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.from(containerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
//     gsap.from(contentRef.current?.children, {
//       opacity: 0,
//       y: 40,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: 'power3.out',
//       delay: 0.3,
//     });
//   }, []);

//   // 🟢 Fetch contacts from API
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch('/api/contact', { cache: 'no-store' });
//         const data = await res.json();

//         if (data.success && Array.isArray(data.data)) {
//           setContacts(data.data);
//         } else {
//           toast.error('Failed to load contact queries');
//         }
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//         toast.error('Error fetching contacts');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status?.toLowerCase()) {
//       case 'completed':
//         return 'bg-green-100 text-green-800';
//       case 'progress':
//         return 'bg-blue-100 text-blue-800';
//       case 'holding':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'cancelled':
//         return 'bg-red-100 text-red-800';
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'in review':
//         return 'bg-amber-100 text-amber-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority?.toLowerCase()) {
//       case 'high':
//         return 'bg-red-100 text-red-800';
//       case 'medium':
//         return 'bg-amber-100 text-amber-800';
//       case 'low':
//         return 'bg-green-100 text-green-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
//       <div ref={containerRef} className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-white rounded-xl shadow-lg p-6 mb-6">
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <p className="mt-2 text-amber-100">Manage your projects, contact queries, and reviews with ease</p>
//         </div>

//         {/* Tabs */}
//         <div className="flex border-b border-amber-200 mb-6">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'projects'
//               ? 'border-b-2 border-amber-500 text-amber-600'
//               : 'text-gray-600'
//               }`}
//             onClick={() => setActiveTab('projects')}
//           >
//             <FaFolder className="inline-block mr-2" /> Projects
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'contacts'
//               ? 'border-b-2 border-amber-500 text-amber-600'
//               : 'text-gray-600'
//               }`}
//             onClick={() => setActiveTab('contacts')}
//           >
//             <FaEnvelope className="inline-block mr-2" /> Contact Queries
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'reviews'
//               ? 'border-b-2 border-amber-500 text-amber-600'
//               : 'text-gray-600'
//               }`}
//             onClick={() => setActiveTab('reviews')}
//           >
//             <FaStar className="inline-block mr-2" /> Reviews
//           </button>
//         </div>

//         {/* Search */}
//         <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-6 mb-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-2">Search</label>
//               <div className="relative">
//                 <FaSearch className="absolute left-3 top-3 text-amber-500" />
//                 <input
//                   type="text"
//                   placeholder={
//                     activeTab === 'projects'
//                       ? 'Search projects...'
//                       : activeTab === 'contacts'
//                         ? 'Search contacts...'
//                         : 'Search reviews...'
//                   }
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div ref={contentRef}>
//           {activeTab === 'projects' && <ProjectsSection getStatusColor={getStatusColor} />}

//           {activeTab === 'contacts' && (
//             <>
//               {loading ? (
//                 <p className="text-gray-500 text-center mt-6">Loading contacts...</p>
//               ) : contacts.length === 0 ? (
//                 <p className="text-gray-500 text-center mt-6">No contact queries found.</p>
//               ) : (
//                 <ContactsSection
//                   contacts={contacts.filter(
//                     (contact) =>
//                       contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                       contact.email?.toLowerCase().includes(searchTerm.toLowerCase())
//                   )}
//                   getStatusColor={getStatusColor}
//                   getPriorityColor={getPriorityColor}
//                 />
//               )}
//             </>
//           )}

//           {activeTab === 'reviews' && <ReviewSection />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
























// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { FaFolder, FaEnvelope, FaSearch, FaStar } from 'react-icons/fa';
// import gsap from 'gsap';
// import ProjectsSection from './component/ProjectSection';
// import ContactsSection from './component/ContactSection';
// import ReviewSection from './component/ReviewSecion';
// import PopUps from './component/PopUps';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('projects');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const containerRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.from(containerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
//     gsap.from(contentRef.current?.children, {
//       opacity: 0,
//       y: 40,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: 'power3.out',
//       delay: 0.3,
//     });
//   }, []);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch('/api/contact', { cache: 'no-store' });
//         const data = await res.json();

//         if (data.success && Array.isArray(data.data)) {
//           setContacts(data.data);
//         } else {
//           toast.error('Failed to load contact queries');
//         }
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//         toast.error('Error fetching contacts');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status?.toLowerCase()) {
//       case 'completed':
//         return 'bg-green-100 text-green-800';
//       case 'progress':
//         return 'bg-blue-100 text-blue-800';
//       case 'holding':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'cancelled':
//         return 'bg-red-100 text-red-800';
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'in review':
//         return 'bg-amber-100 text-amber-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority?.toLowerCase()) {
//       case 'high':
//         return 'bg-red-100 text-red-800';
//       case 'medium':
//         return 'bg-amber-100 text-amber-800';
//       case 'low':
//         return 'bg-green-100 text-green-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50/30 p-4 sm:p-6 lg:p-8 overflow-hidden">
//       <div ref={containerRef} className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-white p-6 sm:p-8">
//           <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Admin Dashboard</h1>
//           <p className="mt-2 text-amber-100 text-sm sm:text-base">Seamlessly manage projects, queries, and reviews</p>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-wrap border-b border-amber-200 px-4 sm:px-6">
//           <button
//             className={`flex items-center px-4 py-3 sm:py-4 font-medium text-sm sm:text-base transition-colors ${activeTab === 'projects'
//               ? 'border-b-2 border-amber-500 text-amber-600'
//               : 'text-gray-600 hover:text-amber-600'
//               }`}
//             onClick={() => setActiveTab('projects')}
//           >
//             <FaFolder className="mr-2 text-lg" /> Projects
//           </button>
//           <button
//             className={`flex items-center px-4 py-3 sm:py-4 font-medium text-sm sm:text-base transition-colors ${activeTab === 'contacts'
//               ? 'border-b-2 border-amber-500 text-amber-600'
//               : 'text-gray-600 hover:text-amber-600'
//               }`}
//             onClick={() => setActiveTab('contacts')}
//           >
//             <FaEnvelope className="mr-2 text-lg" /> Queries
//           </button>
//           <button
//             className={`flex items-center px-4 py-3 sm:py-4 font-medium text-sm sm:text-base transition-colors ${activeTab === 'Popup'
//               ? 'border-b-2 border-amber-500 text-amber-600'
//               : 'text-gray-600 hover:text-amber-600'
//               }`}
//             onClick={() => setActiveTab('Popup')}
//           >
//             <FaEnvelope className="mr-2 text-lg" /> PopUps
//           </button>
//           <button
//             className={`flex items-center px-4 py-3 sm:py-4 font-medium text-sm sm:text-base transition-colors ${activeTab === 'reviews'
//               ? 'border-b-2 border-amber-500 text-amber-600'
//               : 'text-gray-600 hover:text-amber-600'
//               }`}
//             onClick={() => setActiveTab('reviews')}
//           >
//             <FaStar className="mr-2 text-lg" /> Reviews
//           </button>
//         </div>

//         {/* Search */}
//         <div className="p-4 sm:p-6">
//           <div className="bg-amber-50/50 rounded-xl p-4 sm:p-6">
//             <div className="max-w-md">
//               <label className="block text-sm font-medium text-amber-700 mb-2">Search</label>
//               <div className="relative">
//                 <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500" />
//                 <input
//                   type="text"
//                   placeholder={
//                     activeTab === 'projects'
//                       ? 'Search projects...'
//                       : activeTab === 'contacts'
//                         ? 'Search queries...'
//                         : 'Search reviews...'
//                   }
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div ref={contentRef} className="p-4 sm:p-6">
//           {activeTab === 'projects' && <ProjectsSection getStatusColor={getStatusColor} />}

//           {activeTab === 'contacts' && (
//             <>
//               {loading ? (
//                 <div className="flex justify-center items-center h-32">
//                   <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
//                 </div>
//               ) : contacts.length === 0 ? (
//                 <p className="text-gray-500 text-center py-8">No contact queries found.</p>
//               ) : (
//                 <ContactsSection
//                   contacts={contacts.filter(
//                     (contact) =>
//                       contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                       contact.email?.toLowerCase().includes(searchTerm.toLowerCase())
//                   )}
//                   getStatusColor={getStatusColor}
//                   getPriorityColor={getPriorityColor}
//                 />
//               )}
//             </>
//           )}

//           {activeTab === 'reviews' && <ReviewSection />}

//           {activeTab === 'Popup' && <PopUps />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
















'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaFolder, FaEnvelope, FaSearch, FaStar } from 'react-icons/fa';
import gsap from 'gsap';
import ProjectsSection from './component/ProjectSection';
import ContactsSection from './component/ContactSection';
import ReviewSection from './component/ReviewSecion';
import PopUps from './component/PopUps';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ Track mount

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // Only run GSAP animations on **first mount**
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (containerRef.current) {
      gsap.from(containerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
    }
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      });
    }
  }, [mounted]);

  // Fetch contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/contact', { cache: 'no-store' });
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          setContacts(data.data);
        } else {
          toast.error('Failed to load contact queries');
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
        toast.error('Error fetching contacts');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'progress':
        return 'bg-blue-100 text-blue-800';
      case 'holding':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in review':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-amber-100 text-amber-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50/30 p-4 sm:p-6 lg:p-8 overflow-auto">
      <div ref={containerRef} className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-visible">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="mt-2 text-amber-100 text-sm sm:text-base">Seamlessly manage projects, queries, and reviews</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-amber-200 px-4 sm:px-6">
          <button
            className={`flex items-center px-4 py-3 sm:py-4 font-medium text-sm sm:text-base transition-colors ${activeTab === 'projects'
              ? 'border-b-2 border-amber-500 text-amber-600'
              : 'text-gray-600 hover:text-amber-600'
              }`}
            onClick={() => setActiveTab('projects')}
          >
            <FaFolder className="mr-2 text-lg" /> Projects
          </button>
          <button
            className={`flex items-center px-4 py-3 sm:py-4 font-medium text-sm sm:text-base transition-colors ${activeTab === 'contacts'
              ? 'border-b-2 border-amber-500 text-amber-600'
              : 'text-gray-600 hover:text-amber-600'
              }`}
            onClick={() => setActiveTab('contacts')}
          >
            <FaEnvelope className="mr-2 text-lg" /> Queries
          </button>
          <button
            className={`flex items-center px-4 py-3 sm:py-4 font-medium text-sm sm:text-base transition-colors ${activeTab === 'Popup'
              ? 'border-b-2 border-amber-500 text-amber-600'
              : 'text-gray-600 hover:text-amber-600'
              }`}
            onClick={() => setActiveTab('Popup')}
          >
            <FaEnvelope className="mr-2 text-lg" /> PopUps
          </button>
          <button
            className={`flex items-center px-4 py-3 sm:py-4 font-medium text-sm sm:text-base transition-colors ${activeTab === 'reviews'
              ? 'border-b-2 border-amber-500 text-amber-600'
              : 'text-gray-600 hover:text-amber-600'
              }`}
            onClick={() => setActiveTab('reviews')}
          >
            <FaStar className="mr-2 text-lg" /> Reviews
          </button>
        </div>

        {/* Search */}
        <div className="p-4 sm:p-6">
          <div className="bg-amber-50/50 rounded-xl p-4 sm:p-6">
            <div className="max-w-md">
              <label className="block text-sm font-medium text-amber-700 mb-2">Search</label>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500" />
                <input
                  type="text"
                  placeholder={
                    activeTab === 'projects'
                      ? 'Search projects...'
                      : activeTab === 'contacts'
                        ? 'Search queries...'
                        : 'Search reviews...'
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="p-4 sm:p-6">
          {activeTab === 'projects' && <ProjectsSection getStatusColor={getStatusColor} />}
          {activeTab === 'contacts' && (
            <>
              {loading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
                </div>
              ) : contacts.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No contact queries found.</p>
              ) : (
                <ContactsSection
                  contacts={contacts.filter(
                    (contact) =>
                      contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      contact.email?.toLowerCase().includes(searchTerm.toLowerCase())
                  )}
                  getStatusColor={getStatusColor}
                  getPriorityColor={getPriorityColor}
                />
              )}
            </>
          )}
          {activeTab === 'reviews' && <ReviewSection />}
          {activeTab === 'Popup' && <PopUps />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
