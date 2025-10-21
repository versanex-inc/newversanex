// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
// import gsap from 'gsap';

// const ContactSection = ({ contactsData }) => {
//   const [contacts, setContacts] = useState(contactsData);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.from(contentRef.current?.children, {
//       opacity: 0,
//       y: 40,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: 'power3.out',
//     });
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

//   const ContactModal = ({ contact, onClose }) => {
//     const [formData, setFormData] = useState({
//       status: contact?.status || 'Pending',
//       priority: contact?.priority || 'Medium',
//       notes: contact?.notes || '',
//     });

//     const handleSubmit = () => {
//       console.log('Updating contact:', formData);
//       onClose();
//     };

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//           <div className="p-6 border-b border-amber-100 flex justify-between items-center">
//             <h2 className="text-xl font-semibold text-amber-800">Contact Details</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <FaTimes className="w-5 h-5" />
//             </button>
//           </div>
//           <div className="p-6 space-y-4">
//             {/* Contact Info */}
//             {contact && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Name</label>
//                   <p className="text-amber-800">{contact.fullName}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Email</label>
//                   <p className="text-amber-800">{contact.email}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Service</label>
//                   <p className="text-amber-800">{contact.service}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Budget</label>
//                   <p className="text-amber-800">{contact.budget}</p>
//                 </div>
//               </div>
//             )}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Status</label>
//               <select
//                 value={formData.status}
//                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               >
//                 <option>Pending</option>
//                 <option>In Review</option>
//                 <option>Approved</option>
//                 <option>Rejected</option>
//                 <option>Completed</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Priority</label>
//               <select
//                 value={formData.priority}
//                 onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               >
//                 <option>High</option>
//                 <option>Medium</option>
//                 <option>Low</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Notes</label>
//               <textarea
//                 rows={4}
//                 value={formData.notes}
//                 onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               />
//             </div>
//             <div className="flex gap-3 pt-4">
//               <button onClick={onClose} className="flex-1 px-4 py-2 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50">Cancel</button>
//               <button onClick={handleSubmit} className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">Update Contact</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div ref={contentRef} className="space-y-6">
//       <h2 className="text-2xl font-semibold text-amber-800">Contact Queries</h2>
//       <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-amber-50">
//             <tr>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Contact</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Service</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Status</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Priority</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-amber-100">
//             {contacts.map((contact) => (
//               <tr key={contact.id} className="hover:bg-amber-50">
//                 <td className="px-6 py-4">
//                   <p className="font-medium text-amber-800">{contact.fullName}</p>
//                   <p className="text-sm text-amber-600">{contact.email}</p>
//                 </td>
//                 <td className="px-6 py-4 text-amber-800">{contact.service}</td>
//                 <td className="px-6 py-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>{contact.status}</span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(contact.priority)}`}>{contact.priority}</span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex gap-2">
//                     <button onClick={() => { setSelectedContact(contact); setShowContactModal(true); }} className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg"><FaEdit /></button>
//                     <button onClick={() => console.log('Delete contact:', contact.id)} className="p-2 text-red-600 hover:bg-red-100 rounded-lg"><FaTrash /></button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showContactModal && (
//         <ContactModal
//           contact={selectedContact}
//           onClose={() => { setShowContactModal(false); setSelectedContact(null); }}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactSection;



















// 'use client'
// import React, { useState } from 'react';
// import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

// const ContactsSection = ({ contacts, getStatusColor, getPriorityColor }) => {
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);

//   const ContactModal = ({ contact, onClose }) => {
//     const [formData, setFormData] = useState({
//       status: contact?.status || 'Pending',
//       priority: contact?.priority || 'Medium',
//       notes: contact?.notes || '',
//     });

//     const handleSubmit = () => {
//       console.log('Updating contact:', formData);
//       onClose();
//     };

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//           <div className="p-6 border-b border-amber-100 flex justify-between items-center">
//             <h2 className="text-xl font-semibold text-amber-800">Contact Details</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <FaTimes className="w-5 h-5" />
//             </button>
//           </div>
//           <div className="p-6 space-y-4">
//             {contact && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Name</label>
//                   <p className="text-amber-800">{contact.fullName}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Email</label>
//                   <p className="text-amber-800">{contact.email}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Service</label>
//                   <p className="text-amber-800">{contact.service}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Budget</label>
//                   <p className="text-amber-800">{contact.budget}</p>
//                 </div>
//               </div>
//             )}
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Status</label>
//               <select
//                 value={formData.status}
//                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               >
//                 <option>Pending</option>
//                 <option>In Review</option>
//                 <option>Approved</option>
//                 <option>Rejected</option>
//                 <option>Completed</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Priority</label>
//               <select
//                 value={formData.priority}
//                 onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               >
//                 <option>High</option>
//                 <option>Medium</option>
//                 <option>Low</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Notes</label>
//               <textarea
//                 rows={4}
//                 value={formData.notes}
//                 onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               />
//             </div>
//             <div className="flex gap-3 pt-4">
//               <button
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//               >
//                 Update Contact
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-amber-800">Contact Queries</h2>
//       <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-amber-50">
//             <tr>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Contact</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Service</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Status</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Priority</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-amber-100">
//             {contacts.map((contact) => (
//               <tr key={contact.id} className="hover:bg-amber-50">
//                 <td className="px-6 py-4">
//                   <p className="font-medium text-amber-800">{contact.fullName}</p>
//                   <p className="text-sm text-amber-600">{contact.email}</p>
//                 </td>
//                 <td className="px-6 py-4 text-amber-800">{contact.service}</td>
//                 <td className="px-6 py-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
//                     {contact.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(contact.priority)}`}>
//                     {contact.priority}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => {
//                         setSelectedContact(contact);
//                         setShowContactModal(true);
//                       }}
//                       className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => console.log('Delete contact:', contact.id)}
//                       className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
//                     >
//                       <FaTrash />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showContactModal && (
//         <ContactModal
//           contact={selectedContact}
//           onClose={() => {
//             setShowContactModal(false);
//             setSelectedContact(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactsSection;











// 'use client';
// import React, { useState } from 'react';
// import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

// const ContactsSection = ({ contacts = [], getStatusColor, getPriorityColor }) => {
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);

//   const ContactModal = ({ contact, onClose }) => {
//     const [formData, setFormData] = useState({
//       status: contact?.status || 'Pending',
//       priority: contact?.priority || 'Medium',
//       notes: contact?.notes || '',
//     });

//     const handleSubmit = () => {
//       console.log('Updating contact:', formData);
//       onClose();
//     };

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//           <div className="p-6 border-b border-amber-100 flex justify-between items-center">
//             <h2 className="text-xl font-semibold text-amber-800">Contact Details</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <FaTimes className="w-5 h-5" />
//             </button>
//           </div>
//           <div className="p-6 space-y-4">
//             {contact && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Name</label>
//                   <p className="text-amber-800">{contact.name}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Email</label>
//                   <p className="text-amber-800">{contact.email}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Service</label>
//                   <p className="text-amber-800">{contact.service}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Budget</label>
//                   <p className="text-amber-800">{contact.budget || 'N/A'}</p>
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-amber-700">Description</label>
//                   <p className="text-amber-800">{contact.description || 'No description provided'}</p>
//                 </div>
//               </div>
//             )}

//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Status</label>
//               <select
//                 value={formData.status}
//                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               >
//                 <option>Pending</option>
//                 <option>In Review</option>
//                 <option>Approved</option>
//                 <option>Rejected</option>
//                 <option>Completed</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Priority</label>
//               <select
//                 value={formData.priority}
//                 onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               >
//                 <option>High</option>
//                 <option>Medium</option>
//                 <option>Low</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Notes</label>
//               <textarea
//                 rows={4}
//                 value={formData.notes}
//                 onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               />
//             </div>

//             <div className="flex gap-3 pt-4">
//               <button
//                 onClick={onClose}
//                 className="flex-1 px-4 py-2 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//               >
//                 Update Contact
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-amber-800">Contact Queries</h2>

//       <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-amber-50">
//             <tr>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Contact</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Service</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Status</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Priority</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-amber-100">
//             {contacts.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-6 text-amber-600">
//                   No contact queries found.
//                 </td>
//               </tr>
//             ) : (
//               contacts.map((contact) => (
//                 <tr key={contact._id} className="hover:bg-amber-50">
//                   <td className="px-6 py-4">
//                     <p className="font-medium text-amber-800">{contact.name}</p>
//                     <p className="text-sm text-amber-600">{contact.email}</p>
//                   </td>
//                   <td className="px-6 py-4 text-amber-800">{contact.service}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
//                         contact.status || 'Pending'
//                       )}`}
//                     >
//                       {contact.status || 'Pending'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
//                         contact.priority || 'Medium'
//                       )}`}
//                     >
//                       {contact.priority || 'Medium'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => {
//                           setSelectedContact(contact);
//                           setShowContactModal(true);
//                         }}
//                         className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg"
//                       >
//                         <FaEdit />
//                       </button>
//                       <button
//                         onClick={() => console.log('Delete contact:', contact._id)}
//                         className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {showContactModal && (
//         <ContactModal
//           contact={selectedContact}
//           onClose={() => {
//             setShowContactModal(false);
//             setSelectedContact(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactsSection;












// 'use client';
// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
// import { toast } from 'react-toastify';

// const ContactsSection = ({ contacts = [], getStatusColor, getPriorityColor }) => {
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [sortedContacts, setSortedContacts] = useState([]);

//   // 🔁 Sort contacts by priority (High → Medium → Low)
//   useEffect(() => {
//     const priorityOrder = { High: 1, Medium: 2, Low: 3 };
//     const sorted = [...contacts].sort(
//       (a, b) => (priorityOrder[a.priority] || 3) - (priorityOrder[b.priority] || 3)
//     );
//     setSortedContacts(sorted);
//   }, [contacts]);

//   // 🔁 Refresh contacts after changes
//   const refreshContacts = async () => {
//     try {
//       const res = await fetch('/api/contact', { cache: 'no-store' });
//       const data = await res.json();
//       if (data.success) {
//         const priorityOrder = { High: 1, Medium: 2, Low: 3 };
//         const sorted = data.data.sort(
//           (a, b) => (priorityOrder[a.priority] || 3) - (priorityOrder[b.priority] || 3)
//         );
//         setSortedContacts(sorted);
//       } else {
//         toast.error('Failed to refresh contacts');
//       }
//     } catch {
//       toast.error('Error refreshing contacts');
//     }
//   };

//   // 🟢 Contact Modal
//   const ContactModal = ({ contact }) => {
//     const [formData, setFormData] = useState({
//       status: contact?.status || 'Pending',
//       priority: contact?.priority || 'Medium',
//       notes: contact?.notes || '',
//     });

//     // 🟢 Update Contact
//     const handleSubmit = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/contact/${contact._id}`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData),
//         });

//         const data = await res.json();
//         if (data.success) {
//           toast.success('Contact updated successfully!');
//           await refreshContacts(); // update table instantly
//         } else {
//           toast.error('Failed to update contact');
//         }
//       } catch (error) {
//         console.error('Update error:', error);
//         toast.error('Error updating contact');
//       } finally {
//         setLoading(false);
//       }
//     };

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 z-50 overflow-y-auto">
//         <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl my-8 overflow-y-auto max-h-[90vh]">
//           {/* Header */}
//           <div className="p-5 border-b border-amber-100 flex justify-between items-center sticky top-0 bg-white z-10">
//             <h2 className="text-lg sm:text-xl font-semibold text-amber-800">Contact Details</h2>
//             <button onClick={() => setShowContactModal(false)} className="text-gray-500 hover:text-gray-700">
//               <FaTimes className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Content */}
//           <div className="p-6 space-y-4 text-sm sm:text-base">
//             {contact && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Name</label>
//                   <p className="text-amber-800">{contact.name}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Email</label>
//                   <p className="text-amber-800 break-all">{contact.email}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Service</label>
//                   <p className="text-amber-800">{contact.service}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-amber-700">Budget</label>
//                   <p className="text-amber-800">{contact.budget || 'N/A'}</p>
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-amber-700">Description</label>
//                   <p className="text-amber-800">{contact.description || 'No description provided'}</p>
//                 </div>
//               </div>
//             )}

//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Status</label>
//               <select
//                 value={formData.status}
//                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               >
//                 <option>Pending</option>
//                 <option>In Review</option>
//                 <option>Approved</option>
//                 <option>Rejected</option>
//                 <option>Completed</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Priority</label>
//               <select
//                 value={formData.priority}
//                 onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               >
//                 <option>High</option>
//                 <option>Medium</option>
//                 <option>Low</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-amber-700 mb-1">Notes</label>
//               <textarea
//                 rows={4}
//                 value={formData.notes}
//                 onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                 className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500"
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 pt-4">
//               <button
//                 onClick={() => setShowContactModal(false)}
//                 className="flex-1 px-4 py-2 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
//               >
//                 {loading ? 'Updating...' : 'Update Contact'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // 🗑️ Delete Contact
//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure you want to delete this contact?')) return;
//     try {
//       setLoading(true);
//       const res = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
//       const data = await res.json();
//       if (data.success) {
//         toast.success('Contact deleted successfully!');
//         refreshContacts();
//       } else {
//         toast.error('Failed to delete contact');
//       }
//     } catch (error) {
//       console.error('Delete error:', error);
//       toast.error('Error deleting contact');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-amber-800">Contact Queries</h2>

//       <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-x-auto">
//         <table className="w-full min-w-[600px]">
//           <thead className="bg-amber-50">
//             <tr>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Contact</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Service</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Status</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Priority</th>
//               <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-amber-100">
//             {sortedContacts.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center py-6 text-amber-600">
//                   No contact queries found.
//                 </td>
//               </tr>
//             ) : (
//               sortedContacts.map((contact) => (
//                 <tr key={contact._id} className="hover:bg-amber-50 transition">
//                   <td className="px-6 py-4">
//                     <p className="font-medium text-amber-800">{contact.name}</p>
//                     <p className="text-sm text-amber-600">{contact.email}</p>
//                   </td>
//                   <td className="px-6 py-4 text-amber-800">{contact.service}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
//                         contact.status || 'Pending'
//                       )}`}
//                     >
//                       {contact.status || 'Pending'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
//                         contact.priority || 'Medium'
//                       )}`}
//                     >
//                       {contact.priority || 'Medium'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 flex gap-2">
//                     <button
//                       onClick={() => {
//                         setSelectedContact(contact);
//                         setShowContactModal(true);
//                       }}
//                       className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(contact._id)}
//                       className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {showContactModal && selectedContact && <ContactModal contact={selectedContact} />}
//     </div>
//   );
// };

// export default ContactsSection;
















'use client';
import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactsSection = ({ contacts = [], getStatusColor, getPriorityColor }) => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortedContacts, setSortedContacts] = useState([]);

  useEffect(() => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    const sorted = [...contacts].sort(
      (a, b) => (priorityOrder[a.priority] || 3) - (priorityOrder[b.priority] || 3)
    );
    setSortedContacts(sorted);
  }, [contacts]);

  const refreshContacts = async () => {
    try {
      const res = await fetch('/api/contact', { cache: 'no-store' });
      const data = await res.json();
      if (data.success) {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        const sorted = data.data.sort(
          (a, b) => (priorityOrder[a.priority] || 3) - (priorityOrder[b.priority] || 3)
        );
        setSortedContacts(sorted);
      } else {
        toast.error('Failed to refresh contacts');
      }
    } catch {
      toast.error('Error refreshing contacts');
    }
  };

  const ContactModal = ({ contact }) => {
    const [formData, setFormData] = useState({
      status: contact?.status || 'Pending',
      priority: contact?.priority || 'Medium',
      notes: contact?.notes || '',
    });

    const handleSubmit = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/contact/${contact._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
          toast.success('Contact updated successfully!');
          await refreshContacts();
        } else {
          toast.error('Failed to update contact');
        }
      } catch (error) {
        toast.error('Error updating contact');
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-amber-100 flex justify-between items-center sticky top-0 bg-white z-10">
            <h2 className="text-xl font-semibold text-amber-800">Contact Details</h2>
            <button onClick={() => setShowContactModal(false)} className="text-gray-500 hover:text-amber-700">
              <FaTimes className="text-lg" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {contact && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-700 mb-1">Name</label>
                  <p className="px-4 py-2 bg-amber-50 rounded-lg text-amber-800">{contact.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-700 mb-1">Email</label>
                  <p className="px-4 py-2 bg-amber-50 rounded-lg text-amber-800 break-all">{contact.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-700 mb-1">Service</label>
                  <p className="px-4 py-2 bg-amber-50 rounded-lg text-amber-800">{contact.service}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-700 mb-1">Budget</label>
                  <p className="px-4 py-2 bg-amber-50 rounded-lg text-amber-800">{contact.budget || 'N/A'}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-amber-700 mb-1">Description</label>
                  <p className="px-4 py-2 bg-amber-50 rounded-lg text-amber-800">{contact.description || 'No description'}</p>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option>Pending</option>
                <option>In Review</option>
                <option>Approved</option>
                <option>Rejected</option>
                <option>Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Notes</label>
              <textarea
                rows={4}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-y"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowContactModal(false)}
                className="flex-1 px-4 py-3 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 px-4 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                {loading ? 'Updating...' : 'Update'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        toast.success('Contact deleted successfully!');
        refreshContacts();
      } else {
        toast.error('Failed to delete contact');
      }
    } catch (error) {
      toast.error('Error deleting contact');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-amber-800">Contact Queries</h2>

      <div className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-amber-100">
            <thead className="bg-amber-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Priority</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-amber-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100">
              {sortedContacts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-amber-600">
                    No contact queries found.
                  </td>
                </tr>
              ) : (
                sortedContacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-amber-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="font-medium text-amber-800">{contact.name}</p>
                      <p className="text-sm text-amber-600">{contact.email}</p>
                    </td>
                    <td className="px-6 py-4 text-amber-800 whitespace-nowrap">{contact.service}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          contact.status || 'Pending'
                        )}`}
                      >
                        {contact.status || 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                          contact.priority || 'Medium'
                        )}`}
                      >
                        {contact.priority || 'Medium'}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedContact(contact);
                          setShowContactModal(true);
                        }}
                        className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showContactModal && selectedContact && <ContactModal contact={selectedContact} />}
    </div>
  );
};

export default ContactsSection;