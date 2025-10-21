// import { NextResponse } from 'next/server';
// import dbConnect from '../../../../lib/dbConnect';
// import Project from '../../../../lib/model/Projects'; // Fixed typo in path (Projects -> Project)

// export async function GET(request, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const project = await Project.findOne({ slug }).lean();
//     if (!project) {
//       return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
//     }

//     return NextResponse.json({
//       success: true,
//       data: {
//         _id: project._id.toString(),
//         title: project.title,
//         slug: project.slug,
//         description: project.description,
//         category: project.category,
//         status: project.status,
//         images: project.images || [],
//         skills: project.skills || [],
//         liveLink: project.liveLink || null,
//         repoLink: project.repoLink || null,
//         creatorName: project.creatorName,
//         creatorPicture: project.creatorPicture || '/creator-avatar.png',
//         creatorProfile: project.creatorProfile || null,
//         creatorNiche: project.creatorNiche || '',
//         deadline: project.deadline ? project.deadline.toISOString().split('T')[0] : null,
//         likes: project.likes || 0,
//         likesCount: project.likes || 0,
//         userHasLiked: false,
//         views: project.views || 0,
//         viewedBy: project.viewedBy || [],
//         likedBy: project.likedBy || [],
//         createdAt: project.createdAt ? project.createdAt.toISOString().split('T')[0] : null,
//       },
//     }, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching project by slug:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// export async function PUT(request, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const contentType = request.headers.get('content-type') || '';
//     let data = {};

//     if (contentType.includes('multipart/form-data')) {
//       const form = await request.formData();
//       data.title = form.get('title');
//       data.description = form.get('description');
//       data.category = form.get('category');
//       data.status = form.get('status');
//       data.technologies = form.get('technologies') ? form.get('technologies').split(',').map(t => t.trim()) : [];
//       data.liveLink = form.get('liveLink') || null;
//       data.repoLink = form.get('repoLink') || null;
//       data.imageFile = form.get('image');
//     } else if (contentType.includes('application/json')) {
//       data = await request.json();
//       data.technologies = data.technologies || [];
//     } else {
//       return NextResponse.json({ success: false, error: 'Unsupported content type' }, { status: 400 });
//     }

//     if (!data.title || !data.description || !data.category || !data.status) {
//       return NextResponse.json({ success: false, error: 'Required fields are missing' }, { status: 400 });
//     }

//     const project = await Project.findOne({ slug });
//     if (!project) {
//       return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
//     }

//     // Update fields
//     project.title = data.title;
//     project.slug = createSlug(data.title);
//     project.description = data.description;
//     project.category = data.category;
//     project.status = data.status;
//     project.skills = data.technologies;
//     project.liveLink = data.liveLink;
//     project.repoLink = data.repoLink;
//     project.images = data.imageFile ? [{ url: data.imageFile }] : project.images; // Simplified image handling
//     project.creatorNiche = data.category;
//     project.deadline = data.deadline || project.deadline;

//     await project.save();

//     return NextResponse.json({
//       success: true,
//       data: {
//         id: project._id.toString(),
//         title: project.title,
//         slug: project.slug,
//         description: project.description,
//         category: project.category,
//         status: project.status,
//         technologies: project.skills,
//         image: project.images[0]?.url,
//         liveLink: project.liveLink,
//         repoLink: project.repoLink,
//         createdAt: project.createdAt.toISOString().split('T')[0],
//       },
//     }, { status: 200 });
//   } catch (error) {
//     console.error('Error updating project:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//   }
// }

// export async function DELETE(request, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const project = await Project.findOneAndDelete({ slug });
//     if (!project) {
//       return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, message: 'Project deleted successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error deleting project:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// function createSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-');
// }















// import { NextResponse } from "next/server";
// import dbConnect from "../../../../lib/dbConnect";
// import Project from "../../../../lib/model/Projects"; // ✅ Corrected path

// // 🔧 Helper to make a URL-safe slug
// function createSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// }

// // ✅ GET /api/projects/[slug]
// export async function GET(request, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const project = await Project.findOne({ slug }).lean();
//     if (!project) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         data: {
//           _id: project._id.toString(),
//           title: project.title,
//           slug: project.slug,
//           description: project.description,
//           category: project.category,
//           subCategory: project.subCategory || null,
//           status: project.status,
//           images: project.images || [],
//           skills: project.skills || [],
//           features: project.features || [],
//           liveLink: project.liveLink || null,
//           repoLink: project.repoLink || null,
//           creatorName: project.creatorName,
//           creatorPicture: project.creatorPicture || "/creator-avatar.png",
//           creatorProfile: project.creatorProfile || null,
//           creatorNiche: project.creatorNiche || "",
//           deadline: project.deadline
//             ? project.deadline.toISOString().split("T")[0]
//             : null,
//           createdAt: project.createdAt
//             ? project.createdAt.toISOString().split("T")[0]
//             : null,
//         },
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching project by slug:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // ✅ PUT /api/projects/[slug]
// export async function PUT(request, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const contentType = request.headers.get("content-type") || "";
//     let data = {};

//     // Handle both JSON and FormData
//     if (contentType.includes("multipart/form-data")) {
//       const form = await request.formData();
//       data.title = form.get("title");
//       data.description = form.get("description");
//       data.category = form.get("category");
//       data.status = form.get("status");
//       data.skills = form.get("skills")
//         ? form.get("skills").split(",").map((s) => s.trim())
//         : [];
//       data.features = form.get("features")
//         ? form.get("features").split(",").map((f) => f.trim())
//         : [];
//       data.liveLink = form.get("liveLink") || null;
//       data.repoLink = form.get("repoLink") || null;
//       data.imageFile = form.get("image");
//     } else if (contentType.includes("application/json")) {
//       data = await request.json();
//       data.skills = data.skills || [];
//       data.features = data.features || [];
//     } else {
//       return NextResponse.json(
//         { success: false, error: "Unsupported content type" },
//         { status: 400 }
//       );
//     }

//     if (!data.title || !data.description || !data.category || !data.status) {
//       return NextResponse.json(
//         { success: false, error: "Required fields are missing" },
//         { status: 400 }
//       );
//     }

//     const project = await Project.findOne({ slug });
//     if (!project) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     // ✅ Update fields
//     project.title = data.title;
//     project.slug = createSlug(data.title);
//     project.description = data.description;
//     project.category = data.category;
//     project.status = data.status;
//     project.skills = data.skills;
//     project.features = data.features;
//     project.liveLink = data.liveLink;
//     project.repoLink = data.repoLink;
//     project.creatorNiche = data.category;
//     project.deadline = data.deadline || project.deadline;

//     if (data.imageFile) {
//       project.images = [{ url: data.imageFile }];
//     }

//     await project.save();

//     // ✅ Return updated project
//     return NextResponse.json(
//       {
//         success: true,
//         data: {
//           id: project._id.toString(),
//           title: project.title,
//           slug: project.slug,
//           description: project.description,
//           category: project.category,
//           status: project.status,
//           skills: project.skills,
//           features: project.features,
//           image: project.images[0]?.url,
//           liveLink: project.liveLink,
//           repoLink: project.repoLink,
//           createdAt: project.createdAt.toISOString().split("T")[0],
//         },
//       },
//       { status: 200 }
//     );

//     return NextResponse.json({ success: true, data: updatedProject }, { status: 200 });

//   } catch (error) {
//     console.error("Error updating project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }

// // ✅ DELETE /api/projects/[slug]
// export async function DELETE(request, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const project = await Project.findOneAndDelete({ slug });
//     if (!project) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, message: "Project deleted successfully" },
//       { status: 200 }
//     );

//     return NextResponse.json({ success: true, message: "Project deleted successfully" });


//   } catch (error) {
//     console.error("Error deleting project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }



















// import { NextResponse } from "next/server";
// import dbConnect from "../../../../lib/dbConnect";
// import Project from "../../../../lib/model/Projects";

// // ✅ Generate slug helper
// function createSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// }

// // ✅ PUT (Update Project by slug)
// export async function PUT(req, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const contentType = req.headers.get("content-type") || "";
//     let data = {};

//     if (contentType.includes("multipart/form-data")) {
//       const form = await req.formData();

//       // Parse all fields
//       data.title = form.get("title");
//       data.description = form.get("description");
//       data.category = form.get("category");
//       data.subCategory = form.get("subCategory");
//       data.status = form.get("status");
//       data.projectType = form.get("projectType");

//       data.skills = form.get("skills")
//         ? form.get("skills").split(",").map((s) => s.trim())
//         : [];

//       data.features = form.get("features")
//         ? form.get("features").split(",").map((f) => f.trim())
//         : [];

//       data.liveLink = form.get("liveLink");
//       data.repoLink = form.get("repoLink");

//       data.creatorName = form.get("creatorName");
//       data.creatorNiche = form.get("creatorNiche");
//       data.creatorProfile = form.get("creatorProfile");
//       data.creatorPicture = form.get("creatorPicture");

//       data.deadline = form.get("deadline")
//         ? new Date(form.get("deadline"))
//         : null;

//       // Handle image fields (main + gallery)
//       const imageFile = form.get("image");
//       const galleryFiles = form.getAll("gallery") || [];

//       if (imageFile && typeof imageFile === "string") {
//         data.images = [{ url: imageFile }, ...galleryFiles.map((url) => ({ url }))];
//       }
//     } else if (contentType.includes("application/json")) {
//       // Handle JSON update
//       data = await req.json();

//       // Normalize arrays
//       if (typeof data.skills === "string")
//         data.skills = data.skills.split(",").map((s) => s.trim());

//       if (typeof data.features === "string")
//         data.features = data.features.split(",").map((f) => f.trim());

//       if (typeof data.images === "string")
//         data.images = [{ url: data.images }];
//       else if (Array.isArray(data.images))
//         data.images = data.images.map((url) =>
//           typeof url === "string" ? { url } : url
//         );

//       if (data.deadline) data.deadline = new Date(data.deadline);
//     } else {
//       return NextResponse.json(
//         { success: false, error: "Unsupported content type" },
//         { status: 400 }
//       );
//     }

//     // If title changed → regenerate slug
//     if (data.title) {
//       data.slug = createSlug(data.title);
//     }

//     // ✅ Update all fields dynamically
//     const updatedProject = await Project.findOneAndUpdate(
//       { slug },
//       { $set: data },
//       { new: true, runValidators: true }
//     );

//     if (!updatedProject) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, data: updatedProject },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error updating project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // ✅ DELETE (Remove a project)
// export async function DELETE(req, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const deleted = await Project.findOneAndDelete({ slug });
//     if (!deleted) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, message: "Project deleted successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error deleting project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

















// import { NextResponse } from "next/server";
// import dbConnect from "../../../../lib/dbConnect";
// import Project from "../../../../lib/model/Projects";

// // ✅ Helper: Create SEO-friendly slug
// function createSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// }

// // ✅ GET (Fetch project by slug OR ID)
// export async function GET(req, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     // Try to find by slug first
//     let project = await Project.findOne({ slug });

//     // If not found, try to find by ID (if the slug looks like an ObjectId)
//     if (!project && slug.match(/^[0-9a-fA-F]{24}$/)) {
//       project = await Project.findById(slug);
//     }

//     if (!project) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: project }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // ✅ PUT (Update project by slug)
// export async function PUT(req, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const contentType = req.headers.get("content-type") || "";
//     let data = {};

//     if (contentType.includes("multipart/form-data")) {
//       const form = await req.formData();

//       // Parse all fields
//       data.title = form.get("title");
//       data.description = form.get("description");
//       data.category = form.get("category");
//       data.subCategory = form.get("subCategory");
//       data.status = form.get("status");
//       data.projectType = form.get("projectType");

//       data.skills = form.get("skills")
//         ? form.get("skills").split(",").map((s) => s.trim())
//         : [];

//       data.features = form.get("features")
//         ? form.get("features").split(",").map((f) => f.trim())
//         : [];

//       data.liveLink = form.get("liveLink");
//       data.repoLink = form.get("repoLink");

//       data.creatorName = form.get("creatorName");
//       data.creatorNiche = form.get("creatorNiche");
//       data.creatorProfile = form.get("creatorProfile");
//       data.creatorPicture = form.get("creatorPicture");

//       data.deadline = form.get("deadline")
//         ? new Date(form.get("deadline"))
//         : null;

//       // Handle images
//       const imageFile = form.get("image");
//       const galleryFiles = form.getAll("gallery") || [];

//       if (imageFile && typeof imageFile === "string") {
//         data.images = [{ url: imageFile }, ...galleryFiles.map((url) => ({ url }))];
//       }
//     } else if (contentType.includes("application/json")) {
//       data = await req.json();

//       // Normalize arrays
//       if (typeof data.skills === "string")
//         data.skills = data.skills.split(",").map((s) => s.trim());

//       if (typeof data.features === "string")
//         data.features = data.features.split(",").map((f) => f.trim());

//       if (typeof data.images === "string")
//         data.images = [{ url: data.images }];
//       else if (Array.isArray(data.images))
//         data.images = data.images.map((url) =>
//           typeof url === "string" ? { url } : url
//         );

//       if (data.deadline) data.deadline = new Date(data.deadline);
//     } else {
//       return NextResponse.json(
//         { success: false, error: "Unsupported content type" },
//         { status: 400 }
//       );
//     }

//     // If title changed → regenerate slug
//     if (data.title) {
//       data.slug = createSlug(data.title);
//     }

//     // ✅ Update all fields dynamically
//     const updatedProject = await Project.findOneAndUpdate(
//       { slug },
//       { $set: data },
//       { new: true, runValidators: true }
//     );

//     if (!updatedProject) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, data: updatedProject },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error updating project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // ✅ DELETE (Remove a project)
// export async function DELETE(req, { params }) {
//   await dbConnect();
//   const { slug } = params;

//   try {
//     const deleted = await Project.findOneAndDelete({ slug });
//     if (!deleted) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, message: "Project deleted successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error deleting project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }




















// import { NextResponse } from "next/server";
// import dbConnect from "../../../../lib/dbConnect";
// import Project from "../../../../lib/model/Projects";

// // ✅ Helper: Create SEO-friendly slug
// function createSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// }

// // ✅ GET (Fetch project by slug OR ID)
// export async function GET(req, { params }) {
//   await dbConnect();
//   const { slug } = await params;

//   try {
//     // Try to find by slug first
//     let project = await Project.findOne({ slug });

//     // If not found, try to find by ID (if the slug looks like an ObjectId)
//     if (!project && slug.match(/^[0-9a-fA-F]{24}$/)) {
//       project = await Project.findById(slug);
//     }

//     if (!project) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: project }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // ✅ PUT (Update project by slug)
// export async function PUT(req, { params }) {
//   await dbConnect();
//   const { slug } = await params;

//   try {
//     const contentType = req.headers.get("content-type") || "";
//     let data = {};
//     let newImages = [];

//     if (contentType.includes("multipart/form-data")) {
//       const form = await req.formData();

//       // Parse all fields
//       data.title = form.get("title");
//       data.description = form.get("description");
//       data.category = form.get("category");
//       data.subCategory = form.get("subCategory");
//       data.status = form.get("status");
//       data.projectType = form.get("projectType");

//       data.skills = form.get("skills")
//         ? form.get("skills").split(",").map((s) => s.trim())
//         : [];

//       data.features = form.get("features")
//         ? form.get("features").split(",").map((f) => f.trim())
//         : [];

//       data.liveLink = form.get("liveLink");
//       data.repoLink = form.get("repoLink");

//       data.creatorName = form.get("creatorName");
//       data.creatorNiche = form.get("creatorNiche");
//       data.creatorProfile = form.get("creatorProfile");
//       data.creatorPicture = form.get("creatorPicture");

//       data.deadline = form.get("deadline")
//         ? new Date(form.get("deadline"))
//         : null;

//       // Handle main image
//       const imageUrl = form.get("image");
//       if (imageUrl) {
//         if (imageUrl !== '') {
//           newImages.push({ url: imageUrl });
//         }
//       } else {
//         // If no image provided, keep existing main image
//       }

//       // Handle gallery
//       const galleryUrls = form.getAll("gallery");
//       newImages = [...newImages, ...galleryUrls.filter(url => url !== '').map(url => ({ url }))];

//       if (newImages.length > 0) {
//         data.images = newImages;
//       }

//     } else if (contentType.includes("application/json")) {
//       data = await req.json();

//       // Normalize arrays
//       if (typeof data.skills === "string")
//         data.skills = data.skills.split(",").map((s) => s.trim());

//       if (typeof data.features === "string")
//         data.features = data.features.split(",").map((f) => f.trim());

//       if (data.deadline) data.deadline = new Date(data.deadline);

//       // Handle images from JSON
//       if (data.imageUrl !== undefined) {
//         if (data.imageUrl !== '') {
//           newImages.push({ url: data.imageUrl });
//         }
//       }

//       if (data.galleryUrls) {
//         newImages = [...newImages, ...data.galleryUrls.filter(url => url !== '').map(url => ({ url }))];
//       }

//       if (newImages.length > 0) {
//         data.images = newImages;
//       } else {
//         // If no images provided, unset images to remove them
//         data.images = [];
//       }
//     } else {
//       return NextResponse.json(
//         { success: false, error: "Unsupported content type" },
//         { status: 400 }
//       );
//     }

//     // If title changed → regenerate slug
//     if (data.title) {
//       data.slug = createSlug(data.title);
//     }

//     // ✅ Update all fields dynamically
//     const updatedProject = await Project.findOneAndUpdate(
//       { slug },
//       { $set: data },
//       { new: true, runValidators: true }
//     );

//     if (!updatedProject) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, data: updatedProject },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error updating project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // ✅ DELETE (Remove a project)
// export async function DELETE(req, { params }) {
//   await dbConnect();
//   const { slug } = await params;

//   try {
//     const deleted = await Project.findOneAndDelete({ slug });
//     if (!deleted) {
//       return NextResponse.json(
//         { success: false, error: "Project not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, message: "Project deleted successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error deleting project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

















import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Project from "../../../../lib/model/Projects";

// ✅ Helper: Create SEO-friendly slug
function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ✅ GET (Fetch project by slug OR ID)
export async function GET(req, { params }) {
  await dbConnect();
  const { slug } = await params;

  try {
    // Try to find by slug first
    let project = await Project.findOne({ slug });

    // If not found, try to find by ID (if the slug looks like an ObjectId)
    if (!project && slug.match(/^[0-9a-fA-F]{24}$/)) {
      project = await Project.findById(slug);
    }

    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: project }, { status: 200 });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ✅ PUT (Update project by slug)
export async function PUT(req, { params }) {
  await dbConnect();
  const { slug } = await params;

  try {
    const contentType = req.headers.get("content-type") || "";
    let data = {};
    let newImages = [];

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();

      // Parse all fields
      data.title = form.get("title");
      data.description = form.get("description");
      data.category = form.get("category");
      data.subCategory = form.get("subCategory");
      data.status = form.get("status");
      data.projectType = form.get("projectType");

      data.skills = form.get("skills")
        ? form.get("skills").split(",").map((s) => s.trim())
        : [];

      data.features = form.get("features")
        ? form.get("features").split(",").map((f) => f.trim())
        : [];

      data.liveLink = form.get("liveLink");
      data.repoLink = form.get("repoLink");

      data.creatorName = form.get("creatorName");
      data.creatorNiche = form.get("creatorNiche");
      data.creatorProfile = form.get("creatorProfile");
      data.creatorPicture = form.get("creatorPicture");

      data.deadline = form.get("deadline")
        ? new Date(form.get("deadline"))
        : null;

      // Handle main image
      const imageUrl = form.get("imageUrl");
      if (imageUrl && imageUrl !== '') {
        newImages.push({ url: imageUrl });
      }

      // Handle gallery
      const galleryUrls = form.getAll("galleryUrls");
      newImages = [...newImages, ...galleryUrls.filter(url => url !== '').map(url => ({ url }))];

      if (newImages.length > 0 || (imageUrl === '' && galleryUrls.length === 0)) {
        data.images = newImages;
      }

    } else if (contentType.includes("application/json")) {
      data = await req.json();

      // Normalize arrays
      if (typeof data.skills === "string")
        data.skills = data.skills.split(",").map((s) => s.trim());

      if (typeof data.features === "string")
        data.features = data.features.split(",").map((f) => f.trim());

      if (data.deadline) data.deadline = new Date(data.deadline);

      // Handle images from JSON
      if (data.imageUrl !== undefined && data.imageUrl !== '') {
        newImages.push({ url: data.imageUrl });
      }

      if (data.galleryUrls) {
        newImages = [...newImages, ...data.galleryUrls.filter(url => url !== '').map(url => ({ url }))];
      }

      if (newImages.length > 0 || (data.imageUrl === '' && (!data.galleryUrls || data.galleryUrls.length === 0))) {
        data.images = newImages;
      }
    } else {
      return NextResponse.json(
        { success: false, error: "Unsupported content type" },
        { status: 400 }
      );
    }

    // If title changed → regenerate slug
    if (data.title) {
      data.slug = createSlug(data.title);
    }

    // ✅ Update all fields dynamically
    const updatedProject = await Project.findOneAndUpdate(
      { slug },
      { $set: data },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedProject },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ✅ DELETE (Remove a project)
export async function DELETE(req, { params }) {
  await dbConnect();
  const { slug } = await params;

  try {
    const deleted = await Project.findOneAndDelete({ slug });
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}