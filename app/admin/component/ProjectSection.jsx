'use client';
import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createPortal } from 'react-dom';
const ProjectsSection = ({ getStatusColor }) => {
  const [projects, setProjects] = useState([]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
}, []);

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
      } else {
        toast.error(result.error || 'Failed to fetch projects');
      }
    } catch (error) {
      toast.error('Error fetching projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = showProjectModal ? 'hidden' : '';
  }, [showProjectModal]);

  const ProjectModal = ({ project, onClose }) => {
    const [formData, setFormData] = useState({
      title: project?.title || '',
      category: project?.category || 'website-developing',
      subCategory: project?.subCategory || '',
      status: project?.status || 'Progress',
      projectType: project?.projectType || 'imageGallery',
      description: project?.description || '',
      skills: project?.skills?.join(', ') || '',
      features: project?.features?.join(', ') || '',
      liveLink: project?.liveLink || '',
      repoLink: project?.repoLink || '',
      creatorName: project?.creatorName || '',
      creatorNiche: project?.creatorNiche || '',
      creatorProfile: project?.creatorProfile || '',
      creatorPicture: project?.creatorPicture || '',
      deadline: project?.deadline ? project.deadline.split('T')[0] : '',
      imageUrl: project?.images?.[0]?.url || '',
      galleryUrls: project?.images?.slice(1).map(i => i.url) || [],
    });
    const [showPopup, setShowPopup] = useState(false);
    const [uploadField, setUploadField] = useState('main');

    useEffect(() => {
      gsap.fromTo(
        '.modal-content',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
      );
    }, []);

    useEffect(() => {
      const uploadScript = document.createElement('script');
      uploadScript.src = "https://upload-widget.cloudinary.com/global/all.js";
      uploadScript.async = true;
      document.body.appendChild(uploadScript);

      const mlScript = document.createElement('script');
      mlScript.src = "https://media-library.cloudinary.com/global/all.js";
      mlScript.async = true;
      document.body.appendChild(mlScript);

      return () => {
        document.body.removeChild(uploadScript);
        document.body.removeChild(mlScript);
      };
    }, []);

    const handleSubmit = async () => {
      setLoading(true);
      const form = new FormData();
      form.append('title', formData.title);
      form.append('description', formData.description);
      form.append('category', formData.category);
      form.append('subCategory', formData.subCategory);
      form.append('status', formData.status);
      form.append('projectType', formData.projectType);
      form.append('skills', formData.skills);
      form.append('features', formData.features);
      form.append('liveLink', formData.liveLink);
      form.append('repoLink', formData.repoLink);
      form.append('creatorName', formData.creatorName);
      form.append('creatorNiche', formData.creatorNiche);
      form.append('creatorProfile', formData.creatorProfile);
      form.append('creatorPicture', formData.creatorPicture);
      form.append('deadline', formData.deadline);
      form.append('imageUrl', formData.imageUrl);
      formData.galleryUrls.forEach((url) => form.append('galleryUrls', url));

      try {
        const url = project ? `/api/projects/${project.slug}` : '/api/projects';
        const method = project ? 'PUT' : 'POST';
        const response = await fetch(url, { method, body: form });
        const result = await response.json();

        if (response.ok && result.success) {
          toast.success(project ? 'Project updated successfully' : 'Project added successfully');
          fetchProjects();
          onClose();
        } else {
          toast.error(result.error || 'Failed to save project');
        }
      } catch (error) {
        toast.error('Error saving project');
      } finally {
        setLoading(false);
      }
    };

    const removeMainImage = () => setFormData({ ...formData, imageUrl: '' });

    const removeGalleryImage = (index) => {
      const newGallery = formData.galleryUrls.filter((_, i) => i !== index);
      setFormData({ ...formData, galleryUrls: newGallery });
    };

    const removeCreatorPicture = () => setFormData({ ...formData, creatorPicture: '' });

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto p-4">
        <div className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-6 relative max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center border-b border-amber-100 pb-4 mb-6 sticky top-0 bg-white z-10">
            <h2 className="text-xl font-semibold text-amber-800">
              {project ? 'Edit Project' : 'Add Project'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-amber-700 transition-colors">
              <FaTimes className="text-lg" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
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
                <label className="block text-sm font-medium text-amber-700 mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="website-developing">Website Development</option>
                  <option value="graphics-designing">Graphics Designing</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="ui-ux">UI/UX Design</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Sub Category</label>
                <input
                  type="text"
                  value={formData.subCategory}
                  onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="Completed">Completed</option>
                  <option value="Progress">In Progress</option>
                  <option value="Holding">Holding</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
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
                <label className="block text-sm font-medium text-amber-700 mb-1">Skills (comma-separated)</label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="React, Node.js, etc."
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Features (comma-separated)</label>
                <input
                  type="text"
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  placeholder="Dark mode, animations, etc."
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Creator Name</label>
                <input
                  type="text"
                  value={formData.creatorName}
                  onChange={(e) => setFormData({ ...formData, creatorName: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Creator Niche</label>
                <input
                  type="text"
                  value={formData.creatorNiche}
                  onChange={(e) => setFormData({ ...formData, creatorNiche: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Creator Profile URL</label>
                <input
                  type="url"
                  value={formData.creatorProfile}
                  onChange={(e) => setFormData({ ...formData, creatorProfile: e.target.value })}
                  placeholder="https://profile-link.com"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Creator Picture</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setUploadField('creator');
                      setShowPopup(true);
                    }}
                    className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    Upload
                  </button>
                  <input
                    type="text"
                    value={formData.creatorPicture}
                    onChange={(e) => setFormData({ ...formData, creatorPicture: e.target.value })}
                    placeholder="Image URL"
                    className="flex-1 px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                {formData.creatorPicture && (
                  <div className="mt-2 flex items-center gap-2">
                    <img src={formData.creatorPicture} alt="Creator" className="w-16 h-16 object-cover rounded-full" />
                    <button onClick={removeCreatorPicture} className="text-red-600 hover:text-red-800">
                      <FaTimes />
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Deadline</label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Live Link</label>
                <input
                  type="url"
                  value={formData.liveLink}
                  onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Repository Link</label>
                <input
                  type="url"
                  value={formData.repoLink}
                  onChange={(e) => setFormData({ ...formData, repoLink: e.target.value })}
                  placeholder="https://github.com/example"
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Main Image</label>
              <button
                onClick={() => {
                  setUploadField('main');
                  setShowPopup(true);
                }}
                className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Upload Main Image
              </button>
              {formData.imageUrl && (
                <div className="mt-2 flex items-center gap-2">
                  <img src={formData.imageUrl} alt="Main" className="w-32 h-32 object-cover rounded-lg" />
                  <button onClick={removeMainImage} className="text-red-600 hover:text-red-800">
                    <FaTimes />
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">Gallery Images</label>
              <button
                onClick={() => {
                  setUploadField('gallery');
                  setShowPopup(true);
                }}
                className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Upload Gallery Images
              </button>
              <div className="mt-2 grid grid-cols-4 gap-4">
                {formData.galleryUrls.map((url, index) => (
                  <div key={index} className="relative">
                    <img src={url} alt={`Gallery ${index}`} className="w-full h-24 object-cover rounded-lg" />
                    <button 
                      onClick={() => removeGalleryImage(index)} 
                      className="absolute top-1 right-1 bg-white/80 p-1 rounded-full text-red-600 hover:text-red-800"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-8">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-amber-200 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              disabled={loading}
            >
              {loading ? 'Saving...' : project ? 'Update Project' : 'Add Project'}
            </button>
          </div>
        </div>

        {showPopup && (
          <ImageUploadPopup
            isSingle={uploadField !== 'gallery'}
            onSelect={(urls) => {
              if (uploadField === 'main') {
                setFormData({ ...formData, imageUrl: urls[0] });
              } else if (uploadField === 'gallery') {
                setFormData({ ...formData, galleryUrls: [...formData.galleryUrls, ...urls] });
              } else if (uploadField === 'creator') {
                setFormData({ ...formData, creatorPicture: urls[0] });
              }
            }}
            onClose={() => setShowPopup(false)}
          />
        )}
      </div>
    );
  };

  const ImageUploadPopup = ({ isSingle, onSelect, onClose }) => {
    const [activeTab, setActiveTab] = useState('upload');
    const [images, setImages] = useState([]);
    const [selected, setSelected] = useState([]);
    const [galleryLoading, setGalleryLoading] = useState(false);

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;

    useEffect(() => {
      if (activeTab === 'gallery') {
        setGalleryLoading(true);
        fetch('/api/cloudinary/list')
          .then(res => res.json())
          .then(data => {
            setImages(data.resources || []);
          })
          .catch(() => toast.error('Error loading gallery'))
          .finally(() => setGalleryLoading(false));
      }
    }, [activeTab]);

    const toggleSelect = (url) => {
      if (isSingle) {
        setSelected([url]);
      } else {
        setSelected(selected.includes(url) ? selected.filter(s => s !== url) : [...selected, url]);
      }
    };

    const deleteImage = async (public_id) => {
      if (!confirm('Delete this image?')) return;
      await fetch('/api/cloudinary/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ public_ids: [public_id] }),
      });
      setImages(images.filter(img => img.public_id !== public_id));
      setSelected(selected.filter(url => url !== images.find(img => img.public_id === public_id)?.secure_url));
    };

    const deleteSelected = async () => {
      if (!confirm('Delete selected images?')) return;
      const public_ids = images.filter(img => selected.includes(img.secure_url)).map(img => img.public_id);
      await fetch('/api/cloudinary/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ public_ids }),
      });
      setImages(images.filter(img => !public_ids.includes(img.public_id)));
      setSelected([]);
    };

    const deleteAll = async () => {
      if (!confirm('Delete all images?')) return;
      const public_ids = images.map(img => img.public_id);
      await fetch('/api/cloudinary/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ public_ids }),
      });
      setImages([]);
      setSelected([]);
    };

    const insertSelected = () => {
      if (selected.length === 0) return;
      onSelect(selected);
      onClose();
    };

    const getUploadSignature = async () => {
      const response = await fetch('/api/cloudinary/upload-signature');
      if (!response.ok) throw new Error('Failed to get signature');
      return await response.json();
    };

    const openUploadWidget = (sources) => {
      getUploadSignature().then(({ timestamp, signature }) => {
        const myWidget = window.cloudinary.openUploadWidget(
          {
            cloudName,
            apiKey,
            uploadSignature: signature,
            uploadSignatureTimestamp: timestamp,
            sources,
            multiple: !isSingle,
            maxFiles: isSingle ? 1 : 10,
            folder: 'projects',
          },
          (error, result) => {
            if (error) {
              console.error(error);
              return;
            }
            if (result.event === 'success') {
              const url = result.info.secure_url;
              onSelect([url]);
              if (isSingle) onClose();
            }
            if (result.event === 'queues-end' && !isSingle) {
              onClose();
            }
          }
        );
      }).catch(error => {
        toast.error('Error opening upload widget');
      });
    };

    return (
      <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-amber-800">Image Upload</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-amber-700">
              <FaTimes />
            </button>
          </div>
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-2 rounded-lg transition-colors ${activeTab === 'upload' ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}
            >
              Upload
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`flex-1 py-2 rounded-lg transition-colors ${activeTab === 'url' ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}
            >
              URL
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex-1 py-2 rounded-lg transition-colors ${activeTab === 'gallery' ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}
            >
              Gallery
            </button>
          </div>
          <div>
            {activeTab === 'upload' && (
              <button
                onClick={() => openUploadWidget(['local'])}
                className="w-full px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Upload from Device
              </button>
            )}
            {activeTab === 'url' && (
              <button
                onClick={() => openUploadWidget(['url'])}
                className="w-full px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Add from URL
              </button>
            )}
            {activeTab === 'gallery' && (
              <div className="space-y-4">
                {galleryLoading ? (
                  <div className="flex justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-500"></div>
                  </div>
                ) : images.length === 0 ? (
                  <p className="text-center text-amber-600 py-4">No images in gallery.</p>
                ) : (
                  <div className="grid grid-cols-3 gap-3 max-h-64 overflow-y-auto p-2 border border-amber-200 rounded-lg">
                    {images.map((img) => (
                      <div key={img.public_id} className="relative">
                        <img src={img.secure_url} alt="" className="w-full h-24 object-cover rounded" />
                        <input
                          type="checkbox"
                          checked={selected.includes(img.secure_url)}
                          onChange={() => toggleSelect(img.secure_url)}
                          className="absolute top-1 right-1 w-4 h-4"
                        />
                        <button 
                          onClick={() => deleteImage(img.public_id)} 
                          className="absolute bottom-1 right-1 bg-white/80 p-1 rounded-full text-red-600 text-xs"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={deleteSelected}
                    disabled={selected.length === 0}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 transition-colors"
                  >
                    Delete Selected
                  </button>
                  <button
                    onClick={insertSelected}
                    disabled={selected.length === 0}
                    className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-50 transition-colors"
                  >
                    Insert
                  </button>
                </div>
                <button
                  onClick={deleteAll}
                  disabled={images.length === 0}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
                >
                  Delete All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const handleDelete = async (slug) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/projects/${slug}`, { method: 'DELETE' });
      const result = await response.json();
      if (response.ok && result.success) {
        toast.success('Project deleted successfully');
        fetchProjects();
      } else {
        toast.error(result.error || 'Failed to delete project');
      }
    } catch (error) {
      toast.error('Error deleting project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold text-amber-800">Projects</h2>
        <button
          onClick={() => {
            setSelectedProject(null);
            setShowProjectModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors shadow-sm"
          disabled={loading}
        >
          <FaPlus /> Add Project
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
        </div>
      ) : projects.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={project.images?.[0]?.url || '/placeholder.svg'}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-amber-800 line-clamp-1">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-amber-600 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills?.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setShowProjectModal(true);
                    }}
                    className="flex-1 px-3 py-2 text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors"
                    disabled={loading}
                  >
                    <FaEdit className="inline-block mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.slug)}
                    className="px-3 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                    disabled={loading}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

{showProjectModal && isMounted && createPortal(
  <ProjectModal
    project={selectedProject}
    onClose={() => {
      setShowProjectModal(false);
      setSelectedProject(null);
    }}
  />,
  document.body
)}
    </div>
  );
};

export default ProjectsSection;