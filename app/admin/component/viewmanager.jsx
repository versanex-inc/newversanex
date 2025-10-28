// 'use client';
// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaEye, FaSync, FaTimes } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ViewManager = () => {
//     const [projects, setProjects] = useState([]);
//     const [selectedProject, setSelectedProject] = useState(null);
//     const [views, setViews] = useState([]);
//     const [manualViews, setManualViews] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [addingViews, setAddingViews] = useState(false);

//     // Fetch Projects on Mount
//     useEffect(() => {
//         fetchProjects();
//     }, []);

//     const fetchProjects = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch('/api/projects');
//             const data = await res.json();
//             if (res.ok && data.success) {
//                 setProjects(data.data);
//             } else {
//                 toast.error(data.error || 'Failed to fetch projects');
//             }
//         } catch (err) {
//             toast.error('Error fetching projects');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Fetch Views for Selected Project
//     const fetchViews = async (projectId) => {
//         setLoading(true);
//         try {
//             const res = await fetch(`/api/views?projectId=${projectId}`);
//             const data = await res.json();
//             if (res.ok && data.success) {
//                 setViews(data.views);
//             } else {
//                 toast.error(data.error || 'Failed to fetch views');
//             }
//         } catch (err) {
//             toast.error('Error fetching views');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Add Manual Views
//     const handleAddViews = async () => {
//         if (!manualViews || isNaN(manualViews) || manualViews <= 0) {
//             toast.error('Enter a valid number of views');
//             return;
//         }
//         setAddingViews(true);
//         try {
//             const res = await fetch('/api/views', {
//                 method: 'PATCH',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     projectId: selectedProject,
//                     count: parseInt(manualViews),
//                 }),
//             });
//             const data = await res.json();
//             if (res.ok && data.success) {
//                 toast.success(`+${manualViews} views added successfully`);
//                 fetchViews(selectedProject);
//                 setManualViews('');
//             } else {
//                 toast.error(data.error || 'Failed to add manual views');
//             }
//         } catch (err) {
//             toast.error('Error adding manual views');
//         } finally {
//             setAddingViews(false);
//         }
//     };

//     return (
//         <div className="space-y-6">
//             {/* Project Selector */}
//             <div>
//                 <label className="block text-sm font-medium text-amber-700 mb-2">Select Project</label>
//                 <select
//                     value={selectedProject || ''}
//                     onChange={(e) => {
//                         const id = e.target.value;
//                         setSelectedProject(id);
//                         if (id) fetchViews(id);
//                     }}
//                     className="w-full max-w-md px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                 >
//                     <option value="">Select a project</option>
//                     {projects.map((p) => (
//                         <option key={p._id} value={p._id}>
//                             {p.title}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             {/* Manual Add Views Section */}
//             {selectedProject && (
//                 <div className="flex flex-col sm:flex-row items-center gap-4">
//                     <input
//                         type="number"
//                         min="1"
//                         value={manualViews}
//                         onChange={(e) => setManualViews(e.target.value)}
//                         placeholder="Enter views to add"
//                         className="flex-1 px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                     />
//                     <button
//                         onClick={handleAddViews}
//                         disabled={addingViews}
//                         className="flex items-center gap-2 px-5 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
//                     >
//                         <FaPlus /> {addingViews ? 'Adding...' : 'Add Views'}
//                     </button>
//                 </div>
//             )}

//             {/* Views Table */}
//             {selectedProject && (
//                 <div className="mt-8">
//                     <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-xl font-semibold text-amber-800 flex items-center gap-2">
//                             <FaEye /> Project Views
//                         </h2>
//                         <button
//                             onClick={() => fetchViews(selectedProject)}
//                             className="flex items-center gap-2 px-3 py-2 border border-amber-300 rounded-lg hover:bg-amber-50 transition"
//                         >
//                             <FaSync /> Refresh
//                         </button>
//                     </div>

//                     {loading ? (
//                         <div className="flex justify-center py-6">
//                             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
//                         </div>
//                     ) : views.length > 0 ? (
//                         <div className="overflow-x-auto border border-amber-100 rounded-xl">
//                             <table className="min-w-full divide-y divide-amber-100 text-sm">
//                                 <thead className="bg-amber-50 text-amber-800">
//                                     <tr>
//                                         <th className="px-4 py-3 text-left font-semibold">#</th>
//                                         <th className="px-4 py-3 text-left font-semibold">IP Address</th>
//                                         <th className="px-4 py-3 text-left font-semibold">Date</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="divide-y divide-amber-100 bg-white">
//                                     {views.map((v, index) => (
//                                         <tr key={index}>
//                                             <td className="px-4 py-3">{index + 1}</td>
//                                             <td className="px-4 py-3 text-gray-700">{v.ip || 'N/A'}</td>
//                                             <td className="px-4 py-3 text-gray-600">
//                                                 {new Date(v.timestamp).toLocaleString()}
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     ) : (
//                         <p className="text-gray-500 text-center py-6">No views found for this project.</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ViewManager;








'use client';
import React, { useState, useEffect } from 'react';
import { FaEye, FaSync, FaSave } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewManager = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [views, setViews] = useState([]);
  const [totalViews, setTotalViews] = useState('');
  const [loading, setLoading] = useState(false);
  const [savingViews, setSavingViews] = useState(false);

  // Fetch Projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (res.ok && data.success) {
        setProjects(data.data);
      } else {
        toast.error(data.error || 'Failed to fetch projects');
      }
    } catch (err) {
      toast.error('Error fetching projects');
    } finally {
      setLoading(false);
    }
  };

  // Fetch Views and Current View Count
  const fetchViews = async (projectId) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/views?projectId=${projectId}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setViews(data.views);
        setTotalViews(data.totalViews || 0);
      } else {
        toast.error(data.error || 'Failed to fetch views');
      }
    } catch (err) {
      toast.error('Error fetching views');
    } finally {
      setLoading(false);
    }
  };

  // Update Total Views
  const handleUpdateViews = async () => {
    if (isNaN(totalViews) || totalViews < 0) {
      toast.error('Enter a valid number of views');
      return;
    }

    setSavingViews(true);
    try {
  const res = await fetch('/api/views', {
                method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: selectedProject,
          newTotal: parseInt(totalViews),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        toast.success('Views updated successfully');
        fetchViews(selectedProject);
      } else {
        toast.error(data.error || 'Failed to update views');
      }
    } catch (err) {
      toast.error('Error updating views');
    } finally {
      setSavingViews(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Project Selector */}
      <div>
        <label className="block text-sm font-medium text-amber-700 mb-2">
          Select Project
        </label>
        <select
          value={selectedProject || ''}
          onChange={(e) => {
            const id = e.target.value;
            setSelectedProject(id);
            if (id) fetchViews(id);
          }}
          className="w-full max-w-md px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        >
          <option value="">Select a project</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      {/* Total Views Editor */}
      {selectedProject && (
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-amber-700 mb-2">
              Total Views
            </label>
            <input
              type="number"
              min="0"
              value={totalViews}
              onChange={(e) => setTotalViews(e.target.value)}
              placeholder="Total views count"
              className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleUpdateViews}
            disabled={savingViews}
            className="flex items-center gap-2 px-5 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            <FaSave /> {savingViews ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      )}

      {/* Views Table */}
      {selectedProject && (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-amber-800 flex items-center gap-2">
              <FaEye /> View Details
            </h2>
            <button
              onClick={() => fetchViews(selectedProject)}
              className="flex items-center gap-2 px-3 py-2 border border-amber-300 rounded-lg hover:bg-amber-50 transition"
            >
              <FaSync /> Refresh
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center py-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
            </div>
          ) : views.length > 0 ? (
            <div className="overflow-x-auto border border-amber-100 rounded-xl">
              <table className="min-w-full divide-y divide-amber-100 text-sm">
                <thead className="bg-amber-50 text-amber-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">#</th>
                    <th className="px-4 py-3 text-left font-semibold">IP Address</th>
                    <th className="px-4 py-3 text-left font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100 bg-white">
                  {views.map((v, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3 text-gray-700">{v.ip || 'N/A'}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {new Date(v.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-6">
              No views found for this project.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewManager;
