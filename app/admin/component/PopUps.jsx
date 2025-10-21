// "use client";
// import React, { useState, useEffect } from "react";

// const PopUps = () => {
//   const [title, setTitle] = useState("");
//   const [customCode, setCustomCode] = useState("");
//   const [active, setActive] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // Fetch current popup on mount
//   useEffect(() => {
//     const fetchPopup = async () => {
//       try {
//         const res = await fetch("/api/popups");
//         const data = await res.json();
//         if (data && data.title) {
//           setTitle(data.title);
//           setCustomCode(data.customCode);
//           setActive(data.active);
//         }
//       } catch (err) {
//         console.error("Failed to fetch popup:", err);
//       }
//     };
//     fetchPopup();
//   }, []);

//   // Function to save popup (create new)
//   const handleSave = async (isActive) => {
//     setLoading(true);
//     setMessage("");
//     try {
//       const res = await fetch("/api/popups", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           title,
//           customCode,
//           active: isActive,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage(isActive ? "✅ Popup Activated & Saved!" : "✅ Popup Saved (Hidden)");
//         setActive(isActive);
//       } else {
//         setMessage("❌ Failed to save popup.");
//         console.error("Error:", data.error);
//       }
//     } catch (error) {
//       console.error("Request failed:", error);
//       setMessage("❌ Request failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto bg-white rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Popup Management</h2>

//       {/* Title */}
//       <label className="block font-medium mb-1">Popup Title</label>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="border p-2 rounded w-full mb-4"
//         placeholder="e.g. Black Friday Offer"
//       />

//       {/* HTML Code */}
//       <label className="block font-medium mb-1">Popup Code (HTML)</label>
//       <textarea
//         value={customCode}
//         onChange={(e) => setCustomCode(e.target.value)}
//         className="border p-2 rounded w-full h-64 font-mono mb-4"
//         placeholder="<div>...</div>"
//       ></textarea>

//       {/* Buttons */}
//       <div className="flex gap-3 mb-4">
//         <button
//           onClick={() => handleSave(true)}
//           disabled={loading}
//           className={`${
//             active ? "bg-green-600" : "bg-green-500"
//           } text-white px-4 py-2 rounded hover:bg-green-600 transition`}
//         >
//           {loading ? "Saving..." : "Show Popup"}
//         </button>

//         <button
//           onClick={() => handleSave(false)}
//           disabled={loading}
//           className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
//         >
//           {loading ? "Saving..." : "Hide Popup"}
//         </button>
//       </div>

//       {/* Status Message */}
//       {message && <p className="mt-2 text-sm font-medium text-gray-700">{message}</p>}

//       {/* Live Preview */}
//       <div className="mt-6 border-t pt-4">
//         <h3 className="font-semibold mb-2">Live Preview</h3>
//         <div className="relative border rounded-lg p-4 min-h-[300px] max-h-[70vh] overflow-auto bg-gray-50 flex items-center justify-center">
          
//           {/* Preview Overlay to mimic modal */}
//           <div className="absolute inset-0 bg-black/10 pointer-events-none rounded-lg"></div>
          
//           {/* Render actual popup inside */}
//           <div
//             className="relative w-full max-w-full"
//             dangerouslySetInnerHTML={{ __html: customCode || "<p class='text-gray-400'>No popup HTML yet</p>" }}
//           />
//         </div>
//         <p className="mt-1 text-xs text-gray-500">This preview shows the popup exactly as it will appear on the site. You can scroll if content is larger than preview area.</p>
//       </div>
//     </div>
//   );
// };

// export default PopUps;























// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function PopUpsPage() {
//   const [popups, setPopups] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [activeTab, setActiveTab] = useState("add");
//   const [previewPopup, setPreviewPopup] = useState(null);

//   const [newPopup, setNewPopup] = useState({
//     title: "",
//     customCode: "",
//   });

//   // Fetch popups
//   const fetchPopups = async () => {
//     try {
//       const res = await fetch("/api/popups");
//       const data = await res.json();
//       if (Array.isArray(data)) setPopups(data);
//       else if (data) setPopups([data]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchPopups();
//   }, []);

//   // Add / Update Popup
//   const handleSave = async (popupData, isActive = false) => {
//     setLoading(true);
//     setMessage("");
//     try {
//       const method = popupData._id ? "PUT" : "POST";
//       const url = popupData._id
//         ? `/api/popups/${popupData._id}`
//         : "/api/popups";

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...popupData, active: isActive }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setMessage(
//           isActive ? "✅ Popup Activated & Saved!" : "✅ Popup Saved!"
//         );
//         fetchPopups();
//         setNewPopup({ title: "", customCode: "" });
//       } else {
//         setMessage("❌ Failed to save popup");
//         console.error(data);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Request failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete Popup
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this popup?")) return;
//     try {
//       const res = await fetch(`/api/popups/${id}`, { method: "DELETE" });
//       const data = await res.json();
//       if (res.ok) {
//         setMessage("✅ Popup deleted successfully");
//         fetchPopups();
//       } else {
//         setMessage("❌ Failed to delete popup");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Request failed.");
//     }
//   };

//   // Activate only one popup
//   const activatePopup = async (popupData) => {
//     await handleSave(popupData, true);
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto bg-white rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Popup Admin Panel</h2>

//       {message && <p className="mb-4 text-sm text-gray-700">{message}</p>}

//       {/* Tabs */}
//       <div className="flex gap-2 mb-6">
//         {["add", "preview", "edit", "delete"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-xl font-semibold transition ${
//               activeTab === tab
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Add Tab */}
//       {activeTab === "add" && (
//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Popup Title"
//             value={newPopup.title}
//             onChange={(e) =>
//               setNewPopup((prev) => ({ ...prev, title: e.target.value }))
//             }
//             className="w-full border rounded px-3 py-2"
//           />
//           <textarea
//             placeholder="Popup HTML content"
//             value={newPopup.customCode}
//             onChange={(e) =>
//               setNewPopup((prev) => ({ ...prev, customCode: e.target.value }))
//             }
//             className="w-full border rounded px-3 py-2 h-40"
//           />
//           <button
//             onClick={() => handleSave(newPopup)}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//             disabled={loading}
//           >
//             {loading ? "Saving..." : "Add Popup"}
//           </button>
//         </div>
//       )}

//       {/* Preview Tab */}
//       {activeTab === "preview" && (
//         <div className="grid md:grid-cols-2 gap-4">
//           {popups.map((popup, idx) => (
//             <div
//               key={popup._id || idx}
//               className="border rounded-xl p-4 bg-gray-50 shadow hover:shadow-lg transition"
//             >
//               <h3 className="font-semibold text-lg">{popup.title}</h3>
//               <div
//                 className="mt-2 border rounded p-2 bg-white max-h-40 overflow-auto prose prose-sm"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     popup.customCode ||
//                     "<p class='text-gray-400 italic'>Empty popup content</p>",
//                 }}
//               />
//               <p className="mt-2 text-sm text-gray-500">
//                 Status:{" "}
//                 <span
//                   className={popup.active ? "text-green-600" : "text-gray-400"}
//                 >
//                   {popup.active ? "Active" : "Inactive"}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Edit Tab */}
//       {activeTab === "edit" && (
//         <div className="grid md:grid-cols-2 gap-4">
//           {popups.map((popup, idx) => (
//             <div
//               key={popup._id || idx}
//               className="border rounded-xl p-4 bg-gray-50 shadow hover:shadow-lg transition flex flex-col gap-2"
//             >
//               <input
//                 type="text"
//                 value={popup.title || ""}
//                 onChange={(e) =>
//                   setPopups((prev) =>
//                     prev.map((p) =>
//                       p._id === popup._id
//                         ? { ...p, title: e.target.value }
//                         : p
//                     )
//                   )
//                 }
//                 className="border rounded px-2 py-1"
//               />
//               <textarea
//                 value={popup.customCode || ""}
//                 onChange={(e) =>
//                   setPopups((prev) =>
//                     prev.map((p) =>
//                       p._id === popup._id
//                         ? { ...p, customCode: e.target.value }
//                         : p
//                     )
//                   )
//                 }
//                 className="border rounded px-2 py-1 h-24"
//               />
//               <div className="flex gap-2 mt-2">
//                 <button
//                   onClick={() => activatePopup(popup)}
//                   className={`px-3 py-1 rounded text-white ${
//                     popup.active
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-blue-500 hover:bg-blue-600"
//                   }`}
//                   disabled={popup.active}
//                 >
//                   Activate
//                 </button>
//                 <button
//                   onClick={() => handleSave(popup)}
//                   className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Delete Tab */}
//       {activeTab === "delete" && (
//         <div className="grid md:grid-cols-2 gap-4">
//           {popups.map((popup, idx) => (
//             <div
//               key={popup._id || idx}
//               className="border rounded-xl p-4 bg-gray-50 shadow hover:shadow-lg transition flex flex-col gap-2"
//             >
//               <h3 className="font-semibold text-lg">{popup.title}</h3>
//               <div
//                 className="mt-2 border rounded p-2 bg-white max-h-40 overflow-auto prose prose-sm"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     popup.customCode ||
//                     "<p class='text-gray-400 italic'>Empty popup content</p>",
//                 }}
//               />
//               <button
//                 onClick={() => handleDelete(popup._id)}
//                 className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//           {popups.length > 0 && (
//             <button
//               onClick={async () => {
//                 if (!confirm("Delete ALL popups?")) return;
//                 for (const p of popups) {
//                   await handleDelete(p._id);
//                 }
//               }}
//               className="col-span-full mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             >
//               Delete All
//             </button>
//           )}
//         </div>
//       )}

//       {/* Popup Preview Modal */}
//       <AnimatePresence>
//         {previewPopup && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             onClick={() => setPreviewPopup(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="bg-white rounded-xl p-6 max-w-lg w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h3 className="text-xl font-semibold mb-4">
//                 {previewPopup.title}
//               </h3>
//               <div
//                 dangerouslySetInnerHTML={{ __html: previewPopup.customCode }}
//               />
//               <button
//                 onClick={() => setPreviewPopup(null)}
//                 className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }









// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function PopUpsPage() {
//   const [popups, setPopups] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [activeTab, setActiveTab] = useState("add");
//   const [previewPopup, setPreviewPopup] = useState(null);

//   const [newPopup, setNewPopup] = useState({
//     title: "",
//     customCode: "",
//   });

//   // Fetch popups
//   const fetchPopups = async () => {
//     try {
//       const res = await fetch("/api/admin/popups");
//       const data = await res.json();
//       if (Array.isArray(data)) setPopups(data);
//       else if (data) setPopups([data]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchPopups();
//   }, []);

//   // Add / Update Popup
//   const handleSave = async (popupData, setActive = null) => {
//     setLoading(true);
//     setMessage("");
//     try {
//       const method = popupData._id ? "PUT" : "POST";
//       const url = popupData._id
//         ? `/api/admin/popups/${popupData._id}`
//         : "/api/admin/popups";

//       let bodyData = {
//         title: popupData.title,
//         customCode: popupData.customCode,
//       };
//       if (setActive !== null) {
//         bodyData.active = setActive;
//       } else if (popupData.active !== undefined) {
//         bodyData.active = popupData.active;
//       }

//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bodyData),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setMessage(
//           setActive === true
//             ? "✅ Popup Activated & Saved!"
//             : setActive === false
//             ? "✅ Popup Deactivated & Saved!"
//             : "✅ Popup Saved!"
//         );
//         fetchPopups();
//         if (!popupData._id) {
//           setNewPopup({ title: "", customCode: "" });
//         }
//       } else {
//         setMessage("❌ Failed to save popup");
//         console.error(data);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Request failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete Popup
//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this popup?")) return;
//     setLoading(true);
//     try {
//       const res = await fetch(`/api/admin/popups/${id}`, { method: "DELETE" });
//       const data = await res.json();
//       if (res.ok) {
//         setMessage("✅ Popup deleted successfully");
//         fetchPopups();
//       } else {
//         setMessage("❌ Failed to delete popup");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Request failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete All Popups
//   const handleDeleteAll = async () => {
//     if (!confirm("Are you sure you want to delete ALL popups?")) return;
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin/popups", { method: "DELETE" });
//       const data = await res.json();
//       if (res.ok) {
//         setMessage("✅ All popups deleted successfully");
//         fetchPopups();
//       } else {
//         setMessage("❌ Failed to delete all popups");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Request failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto bg-white rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Popup Admin Panel</h2>

//       {message && <p className="mb-4 text-sm text-gray-700">{message}</p>}

//       {/* Tabs */}
//       <div className="flex gap-2 mb-6">
//         {["add", "preview", "edit", "delete"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-xl font-semibold transition ${
//               activeTab === tab
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Add Tab */}
//       {activeTab === "add" && (
//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Popup Title"
//             value={newPopup.title}
//             onChange={(e) =>
//               setNewPopup((prev) => ({ ...prev, title: e.target.value }))
//             }
//             className="w-full border rounded px-3 py-2"
//           />
//           <textarea
//             placeholder="Popup HTML content"
//             value={newPopup.customCode}
//             onChange={(e) =>
//               setNewPopup((prev) => ({ ...prev, customCode: e.target.value }))
//             }
//             className="w-full border rounded px-3 py-2 h-40"
//           />
//           <button
//             onClick={() => handleSave(newPopup)}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//             disabled={loading}
//           >
//             {loading ? "Saving..." : "Add Popup"}
//           </button>
//         </div>
//       )}

//       {/* Preview Tab */}
//       {activeTab === "preview" && (
//         <div className="grid md:grid-cols-2 gap-4">
//           {popups.map((popup) => (
//             <div
//               key={popup._id}
//               className="border rounded-xl p-4 bg-gray-50 shadow hover:shadow-lg transition"
//             >
//               <h3 className="font-semibold text-lg">{popup.title}</h3>
//               <div
//                 className="mt-2 border rounded p-2 bg-white max-h-40 overflow-auto prose prose-sm"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     popup.customCode ||
//                     "<p class='text-gray-400 italic'>Empty popup content</p>",
//                 }}
//               />
//               <p className="mt-2 text-sm text-gray-500">
//                 Status:{" "}
//                 <span
//                   className={popup.active ? "text-green-600" : "text-gray-400"}
//                 >
//                   {popup.active ? "Active" : "Inactive"}
//                 </span>
//               </p>
//               <button
//                 onClick={() => setPreviewPopup(popup)}
//                 className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//               >
//                 Full Preview
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Edit Tab */}
//       {activeTab === "edit" && (
//         <div className="grid md:grid-cols-2 gap-4">
//           {popups.map((popup) => (
//             <div
//               key={popup._id}
//               className="border rounded-xl p-4 bg-gray-50 shadow hover:shadow-lg transition flex flex-col gap-2"
//             >
//               <input
//                 type="text"
//                 value={popup.title || ""}
//                 onChange={(e) =>
//                   setPopups((prev) =>
//                     prev.map((p) =>
//                       p._id === popup._id
//                         ? { ...p, title: e.target.value }
//                         : p
//                     )
//                   )
//                 }
//                 className="border rounded px-2 py-1"
//               />
//               <textarea
//                 value={popup.customCode || ""}
//                 onChange={(e) =>
//                   setPopups((prev) =>
//                     prev.map((p) =>
//                       p._id === popup._id
//                         ? { ...p, customCode: e.target.value }
//                         : p
//                     )
//                   )
//                 }
//                 className="border rounded px-2 py-1 h-24"
//               />
//               <div className="flex gap-2 mt-2">
//                 <button
//                   onClick={() => handleSave(popup, true)}
//                   className={`px-3 py-1 rounded text-white ${
//                     popup.active
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-blue-500 hover:bg-blue-600"
//                   }`}
//                   disabled={popup.active || loading}
//                 >
//                   Activate
//                 </button>
//                 <button
//                   onClick={() => handleSave(popup, false)}
//                   className={`px-3 py-1 rounded text-white ${
//                     !popup.active
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-orange-500 hover:bg-orange-600"
//                   }`}
//                   disabled={!popup.active || loading}
//                 >
//                   Deactivate
//                 </button>
//                 <button
//                   onClick={() => handleSave(popup)}
//                   className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
//                   disabled={loading}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Delete Tab */}
//       {activeTab === "delete" && (
//         <div className="grid md:grid-cols-2 gap-4">
//           {popups.map((popup) => (
//             <div
//               key={popup._id}
//               className="border rounded-xl p-4 bg-gray-50 shadow hover:shadow-lg transition flex flex-col gap-2"
//             >
//               <h3 className="font-semibold text-lg">{popup.title}</h3>
//               <div
//                 className="mt-2 border rounded p-2 bg-white max-h-40 overflow-auto prose prose-sm"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     popup.customCode ||
//                     "<p class='text-gray-400 italic'>Empty popup content</p>",
//                 }}
//               />
//               <button
//                 onClick={() => handleDelete(popup._id)}
//                 className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 disabled={loading}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//           {popups.length > 0 && (
//             <button
//               onClick={handleDeleteAll}
//               className="col-span-full mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               disabled={loading}
//             >
//               Delete All
//             </button>
//           )}
//         </div>
//       )}

//       {/* Popup Preview Modal */}
//       <AnimatePresence>
//         {previewPopup && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             onClick={() => setPreviewPopup(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               className="bg-white rounded-xl p-6 max-w-lg w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h3 className="text-xl font-semibold mb-4">
//                 {previewPopup.title}
//               </h3>
//               <div
//                 dangerouslySetInnerHTML={{ __html: previewPopup.customCode }}
//               />
//               <button
//                 onClick={() => setPreviewPopup(null)}
//                 className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }













"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PopUpsPage() {
  const [popups, setPopups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("add");
  const [previewPopup, setPreviewPopup] = useState(null);

  const [newPopup, setNewPopup] = useState({
    title: "",
    customCode: "",
  });

  // Fetch popups
  const fetchPopups = async () => {
    try {
      const res = await fetch("/api/admin/popups");
      const data = await res.json();
      if (Array.isArray(data)) setPopups(data);
      else if (data) setPopups([data]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPopups();
  }, []);

  // Add / Update Popup
  const handleSave = async (popupData, setActive = null) => {
    setLoading(true);
    setMessage("");
    try {
      const method = popupData._id ? "PUT" : "POST";
      const url = popupData._id
        ? `/api/admin/popups/${popupData._id}`
        : "/api/admin/popups";

      let bodyData = {
        title: popupData.title,
        customCode: popupData.customCode,
      };
      if (setActive !== null) {
        bodyData.active = setActive;
      } else if (popupData.active !== undefined) {
        bodyData.active = popupData.active;
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(
          setActive === true
            ? "✅ Popup Activated & Saved!"
            : setActive === false
            ? "✅ Popup Deactivated & Saved!"
            : "✅ Popup Saved!"
        );
        fetchPopups();
        if (!popupData._id) {
          setNewPopup({ title: "", customCode: "" });
        }
      } else {
        setMessage("❌ Failed to save popup");
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Request failed.");
    } finally {
      setLoading(false);
    }
  };

  // Delete Popup
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this popup?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/popups/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Popup deleted successfully");
        fetchPopups();
      } else {
        setMessage("❌ Failed to delete popup");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Request failed.");
    } finally {
      setLoading(false);
    }
  };

  // Delete All Popups
  const handleDeleteAll = async () => {
    if (!confirm("Are you sure you want to delete ALL popups?")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin/popups", { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ All popups deleted successfully");
        fetchPopups();
      } else {
        setMessage("❌ Failed to delete all popups");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Request failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Popup Admin Panel</h2>

      {message && <p className="mb-4 text-sm text-gray-700">{message}</p>}

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {["add", "preview", "edit", "delete"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Add Tab */}
      {activeTab === "add" && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Popup Title"
            value={newPopup.title}
            onChange={(e) =>
              setNewPopup((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full border rounded px-3 py-2"
          />
          <textarea
            placeholder="Popup HTML content"
            value={newPopup.customCode}
            onChange={(e) =>
              setNewPopup((prev) => ({ ...prev, customCode: e.target.value }))
            }
            className="w-full border rounded px-3 py-2 h-40"
          />
          <button
            onClick={() => handleSave(newPopup)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Popup"}
          </button>
        </div>
      )}

      {/* Preview Tab */}
      {activeTab === "preview" && (
        <div className="grid md:grid-cols-2 gap-4">
          {popups.map((popup) => (
            <div
              key={popup._id}
              className="border rounded-xl p-4 bg-gray-50 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{popup.title}</h3>
              <div className="mt-2 border rounded bg-white max-h-40 overflow-hidden">
                <iframe
                  srcDoc={popup.customCode || "<p class='text-gray-400 italic'>Empty popup content</p>"}
                  className="w-full h-40"
                  sandbox="allow-scripts"
                  title={`Preview of ${popup.title}`}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Status:{" "}
                <span
                  className={popup.active ? "text-green-600" : "text-gray-400"}
                >
                  {popup.active ? "Active" : "Inactive"}
                </span>
              </p>
              <button
                onClick={() => setPreviewPopup(popup)}
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Full Preview
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Edit Tab */}
      {activeTab === "edit" && (
        <div className="grid md:grid-cols-2 gap-4">
          {popups.map((popup) => (
            <div
              key={popup._id}
              className="border rounded-xl p-4 bg-gray-50 shadow hover:shadow-lg transition flex flex-col gap-2"
            >
              <input
                type="text"
                value={popup.title || ""}
                onChange={(e) =>
                  setPopups((prev) =>
                    prev.map((p) =>
                      p._id === popup._id
                        ? { ...p, title: e.target.value }
                        : p
                    )
                  )
                }
                className="border rounded px-2 py-1"
              />
              <textarea
                value={popup.customCode || ""}
                onChange={(e) =>
                  setPopups((prev) =>
                    prev.map((p) =>
                      p._id === popup._id
                        ? { ...p, customCode: e.target.value }
                        : p
                    )
                  )
                }
                className="border rounded px-2 py-1 h-24"
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleSave(popup, true)}
                  className={`px-3 py-1 rounded text-white ${
                    popup.active
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  disabled={popup.active || loading}
                >
                  Activate
                </button>
                <button
                  onClick={() => handleSave(popup, false)}
                  className={`px-3 py-1 rounded text-white ${
                    !popup.active
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600"
                  }`}
                  disabled={!popup.active || loading}
                >
                  Deactivate
                </button>
                <button
                  onClick={() => handleSave(popup)}
                  className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
                  disabled={loading}
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Tab */}
      {activeTab === "delete" && (
        <div className="grid md:grid-cols-2 gap-4">
          {popups.map((popup) => (
            <div
              key={popup._id}
              className="border rounded-xl p-4 bg-gray-50 shadow hover:shadow-lg transition flex flex-col gap-2"
            >
              <h3 className="font-semibold text-lg">{popup.title}</h3>
              <div className="mt-2 border rounded bg-white max-h-40 overflow-hidden">
                <iframe
                  srcDoc={popup.customCode || "<p class='text-gray-400 italic'>Empty popup content</p>"}
                  className="w-full h-40"
                  sandbox="allow-scripts"
                  title={`Preview of ${popup.title}`}
                />
              </div>
              <button
                onClick={() => handleDelete(popup._id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                disabled={loading}
              >
                Delete
              </button>
            </div>
          ))}
          {popups.length > 0 && (
            <button
              onClick={handleDeleteAll}
              className="col-span-full mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              disabled={loading}
            >
              Delete All
            </button>
          )}
        </div>
      )}

      {/* Popup Preview Modal */}
      <AnimatePresence>
        {previewPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setPreviewPopup(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-xl p-6 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">
                {previewPopup.title}
              </h3>
              <div
                className="relative"
                dangerouslySetInnerHTML={{ __html: previewPopup.customCode }}
              />
              <button
                onClick={() => setPreviewPopup(null)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}