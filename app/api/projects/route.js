// import { NextResponse } from 'next/server';
// import dbConnect from '../../../lib/dbConnect';
// import Project from '../../../lib/model/Projects';

// // 🔧 Helper to make a URL-safe slug
// function createSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-');
// }

// export async function GET() {
//   try {
//     await dbConnect();

//     const projects = await Project.find().lean();

//     const formatted = projects.map(p => ({
//       _id: p._id.toString(),
//       title: p.title,
//       slug: p.slug,
//       description: p.description,
//       category: p.category,
//       subCategory: p.subCategory || null,
//       status: p.status,
//       images: p.images || [],
//       skills: p.skills || [],
//       liveLink: p.liveLink || null,
//       repoLink: p.repoLink || null,
//       creatorName: p.creatorName,
//       creatorPicture: p.creatorPicture || '/creator-avatar.png',
//       creatorProfile: p.creatorProfile || null,
//       creatorNiche: p.creatorNiche || '',
//       deadline: p.deadline ? p.deadline.toISOString().split('T')[0] : null,
//       likes: p.likes || 0,
//       likesCount: p.likes || 0,
//       userHasLiked: false,
//       views: p.views || 0,
//       viewedBy: p.viewedBy || [],
//       likedBy: p.likedBy || [],
//       createdAt: p.createdAt
//         ? p.createdAt.toISOString().split('T')[0]
//         : null,
//     }));

//     return NextResponse.json(formatted, { status: 200 });
//   } catch (err) {
//     console.error('Error fetching projects:', err);
//     return NextResponse.json([], { status: 500 });
//   }
// }

// export async function POST(req) {
//   await dbConnect();

//   try {
//     const contentType = req.headers.get('content-type') || '';
//     let data = {};

//     // Handle both JSON and FormData
//     if (contentType.includes('multipart/form-data')) {
//       const form = await req.formData();
//       data.title = form.get('title');
//       data.description = form.get('description');
//       data.category = form.get('category');
//       data.status = form.get('status');
//       data.technologies = form.get('technologies')
//         ? form.get('technologies').split(',').map(t => t.trim())
//         : [];
//       data.liveLink = form.get('liveLink') || '';
//       data.repoLink = form.get('githubUrl') || '';
//       data.imageFile = form.get('image');
//       data.galleryFiles = form.getAll('gallery') || [];
//     } else if (contentType.includes('application/json')) {
//       data = await req.json();
//       data.technologies = data.technologies || [];
//       data.galleryFiles = data.gallery || [];
//     } else {
//       return NextResponse.json(
//         { success: false, error: 'Unsupported content type' },
//         { status: 400 }
//       );
//     }

//     // Basic validation
//     if (!data.title || !data.description || !data.category || !data.status) {
//       return NextResponse.json(
//         { success: false, error: 'Required fields are missing' },
//         { status: 400 }
//       );
//     }

//     // Generate a slug
//     const slug = createSlug(data.title);

//     // Normalize image data
//     let imageUrl = '/placeholder.svg';
//     if (typeof data.imageFile === 'string' && data.imageFile) {
//       imageUrl = data.imageFile;
//     }

//     const galleryUrls = Array.isArray(data.galleryFiles)
//       ? data.galleryFiles.filter(Boolean)
//       : [];

//     // ✅ Create and save project according to your schema
//     const project = new Project({
//       title: data.title,
//       slug,
//       description: data.description,
//       category: data.category,
//       status: data.status,
//       skills: data.technologies,
//       liveLink: data.liveLink,
//       repoLink: data.repoLink,
//       images: [{ url: imageUrl }, ...galleryUrls.map(url => ({ url }))],
//       creatorName: 'Admin',
//       creatorPicture: '/creator-avatar.png',
//       creatorProfile: data.liveLink || null,
//       creatorNiche: data.category,
//       deadline: new Date(),
//       likes: 0,
//       views: 0,
//       viewedBy: [],
//       likedBy: [],
//     });

//     await project.save();

//     // ✅ Return formatted response
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
//           technologies: project.skills,
//           image: project.images[0]?.url,
//           gallery: project.images.slice(1).map(i => i.url),
//           liveLink: project.liveLink,
//           repoLink: project.repoLink,
//           createdAt: project.createdAt.toISOString().split('T')[0],
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error('Error creating project:', error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }













// import { NextResponse } from "next/server";
// import dbConnect from "../../../lib/dbConnect";
// import Project from "../../../lib/model/Projects"; // ✅ corrected model path

// // 🔧 Helper to create a slug from title
// function createSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// }

// // ✅ GET: Fetch all projects
// export async function GET() {
//   try {
//     await dbConnect();

//     const projects = await Project.find().lean();

//     const formatted = projects.map((p) => ({
//       _id: p._id.toString(),
//       title: p.title,
//       slug: p.slug,
//       description: p.description,
//       category: p.category,
//       subCategory: p.subCategory || null,
//       status: p.status,
//       images: p.images || [],
//       skills: p.skills || [],
//       features: p.features || [],
//       liveLink: p.liveLink || null,
//       repoLink: p.repoLink || null,
//       creatorName: p.creatorName,
//       creatorPicture: p.creatorPicture || "/creator-avatar.png",
//       creatorProfile: p.creatorProfile || null,
//       creatorNiche: p.creatorNiche || "",
//       deadline: p.deadline ? p.deadline.toISOString().split("T")[0] : null,
//       createdAt: p.createdAt
//         ? p.createdAt.toISOString().split("T")[0]
//         : null,
//     }));

//     return NextResponse.json(formatted, { status: 200 });
//   } catch (err) {
//     console.error("Error fetching projects:", err);
//     return NextResponse.json([], { status: 500 });
//   }
// }

// // ✅ POST: Create a new project
// export async function POST(req) {
//   await dbConnect();

//   try {
//     const contentType = req.headers.get("content-type") || "";
//     let data = {};

//     // Handle both JSON and FormData
//     if (contentType.includes("multipart/form-data")) {
//       const form = await req.formData();
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
//       data.liveLink = form.get("liveLink") || "";
//       data.repoLink = form.get("repoLink") || "";
//       data.imageFile = form.get("image");
//       data.galleryFiles = form.getAll("gallery") || [];
//     } else if (contentType.includes("application/json")) {
//       data = await req.json();
//       data.skills = data.skills || [];
//       data.features = data.features || [];
//       data.galleryFiles = data.gallery || [];
//     } else {
//       return NextResponse.json(
//         { success: false, error: "Unsupported content type" },
//         { status: 400 }
//       );
//     }

//     // Basic validation
//     if (!data.title || !data.description || !data.category || !data.status) {
//       return NextResponse.json(
//         { success: false, error: "Required fields are missing" },
//         { status: 400 }
//       );
//     }

//     // Generate slug
//     const slug = createSlug(data.title);

//     // Normalize image data
//     let imageUrl = "/placeholder.svg";
//     if (typeof data.imageFile === "string" && data.imageFile) {
//       imageUrl = data.imageFile;
//     }

//     const galleryUrls = Array.isArray(data.galleryFiles)
//       ? data.galleryFiles.filter(Boolean)
//       : [];

//     // ✅ Create and save project
//     const project = new Project({
//       title: data.title,
//       slug,
//       description: data.description,
//       category: data.category,
//       status: data.status,
//       skills: data.skills,
//       features: data.features,
//       liveLink: data.liveLink,
//       repoLink: data.repoLink,
//       images: [{ url: imageUrl }, ...galleryUrls.map((url) => ({ url }))],
//       creatorName: "Admin",
//       creatorPicture: "/creator-avatar.png",
//       creatorProfile: data.liveLink || null,
//       creatorNiche: data.category,
//       deadline: new Date(),
//     });

//     await project.save();

//     // ✅ Return formatted response
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
//           gallery: project.images.slice(1).map((i) => i.url),
//           liveLink: project.liveLink,
//           repoLink: project.repoLink,
//           createdAt: project.createdAt.toISOString().split("T")[0],
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error creating project:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }
















import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Project from "../../../lib/model/Projects";

function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ✅ GET: Fetch all projects
export async function GET() {
  try {
    await dbConnect();

    const projects = await Project.find().lean();

    const formatted = projects.map((p) => ({
      _id: p._id.toString(),
      title: p.title,
      slug: p.slug,
      description: p.description,
      category: p.category,
      subCategory: p.subCategory || null,
      status: p.status,
      images: p.images || [],
      skills: p.skills || [],
      features: p.features || [],
      liveLink: p.liveLink || null,
      repoLink: p.repoLink || null,
      creatorName: p.creatorName,
      creatorPicture: p.creatorPicture || "/creator-avatar.png",
      creatorProfile: p.creatorProfile || null,
      creatorNiche: p.creatorNiche || "",
      deadline: p.deadline ? p.deadline.toISOString().split("T")[0] : null,
      createdAt: p.createdAt ? p.createdAt.toISOString().split("T")[0] : null,
    }));

    // ✅ Always return success:true
    return NextResponse.json({ success: true, data: formatted }, { status: 200 });
  } catch (err) {
    console.error("Error fetching projects:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

// ✅ POST: Create a new project
export async function POST(req) {
  await dbConnect();

  try {
    const contentType = req.headers.get("content-type") || "";
    let data = {};

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      data.title = form.get("title");
      data.description = form.get("description");
      data.category = form.get("category");
      data.status = form.get("status");
      data.skills = form.get("skills")
        ? form.get("skills").split(",").map((s) => s.trim())
        : [];
      data.features = form.get("features")
        ? form.get("features").split(",").map((f) => f.trim())
        : [];
      data.liveLink = form.get("liveLink") || "";
      data.repoLink = form.get("repoLink") || "";
      data.imageFile = form.get("image");
      data.galleryFiles = form.getAll("gallery") || [];
    } else if (contentType.includes("application/json")) {
      data = await req.json();
      data.skills = data.skills || [];
      data.features = data.features || [];
      data.galleryFiles = data.gallery || [];
    } else {
      return NextResponse.json(
        { success: false, error: "Unsupported content type" },
        { status: 400 }
      );
    }

    if (!data.title || !data.description || !data.category || !data.status) {
      return NextResponse.json(
        { success: false, error: "Required fields are missing" },
        { status: 400 }
      );
    }

    const slug = createSlug(data.title);

    let imageUrl = "/placeholder.svg";
    if (typeof data.imageFile === "string" && data.imageFile) {
      imageUrl = data.imageFile;
    }

    const galleryUrls = Array.isArray(data.galleryFiles)
      ? data.galleryFiles.filter(Boolean)
      : [];

    const project = new Project({
      title: data.title,
      slug,
      description: data.description,
      category: data.category,
      status: data.status,
      skills: data.skills,
      features: data.features,
      liveLink: data.liveLink,
      repoLink: data.repoLink,
      images: [{ url: imageUrl }, ...galleryUrls.map((url) => ({ url }))],
      creatorName: "Admin",
      creatorPicture: "/creator-avatar.png",
      creatorProfile: data.liveLink || null,
      creatorNiche: data.category,
      deadline: new Date(),
    });

    await project.save();

    return NextResponse.json(
      { success: true, data: project },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
