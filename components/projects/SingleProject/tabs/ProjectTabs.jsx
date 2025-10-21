// // components/projects/SingleProject/tabs/ProjectTabs.jsx
// export default function ProjectTabs({ activeTab, setActiveTab }) {
//   return (
//     <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 border-b border-gray-200 pb-3 sm:pb-4">
//       <button
//         onClick={() => setActiveTab("overview")}
//         className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-sm sm:text-base ${
//           activeTab === "overview" ? "bg-teal-100 text-teal-800" : "text-gray-600 hover:bg-gray-100"
//         }`}
//       >
//         Overview
//       </button>
//       <button
//         onClick={() => setActiveTab("features")}
//         className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-sm sm:text-base ${
//           activeTab === "features" ? "bg-teal-100 text-teal-800" : "text-gray-600 hover:bg-gray-100"
//         }`}
//       >
//         Features
//       </button>
//       <button
//         onClick={() => setActiveTab("gallery")}
//         className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-sm sm:text-base ${
//           activeTab === "gallery" ? "bg-teal-100 text-teal-800" : "text-gray-600 hover:bg-gray-100"
//         }`}
//       >
//         Gallery
//       </button>
//       <button
//         onClick={() => setActiveTab("reviews")}
//         className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-sm sm:text-base ${
//           activeTab === "reviews" ? "bg-teal-100 text-teal-800" : "text-gray-600 hover:bg-gray-100"
//         }`}
//       >
//         Reviews
//       </button>
//     </div>
//   )
// }















// components/projects/SingleProject/tabs/ProjectTabs.jsx
export default function ProjectTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 border-b border-amber-200 pb-3 sm:pb-4">
      {["overview", "features", "gallery", "reviews"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-sm sm:text-base font-medium
            ${
              activeTab === tab
                ? "bg-amber-100 text-amber-800 shadow-sm border border-amber-300"
                : "text-gray-600 hover:bg-amber-50 hover:text-amber-700"
            }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}
