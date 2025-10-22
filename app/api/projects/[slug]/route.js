

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