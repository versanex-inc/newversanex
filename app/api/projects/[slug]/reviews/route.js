

import connectDB from "@/lib/dbConnect";
import Project from "@/lib/model/Projects";

// 🟢 GET all reviews for a project
export async function GET(req, { params }) {
  const slug = await params.slug; // Await params.slug to fix warning

  await connectDB();

  const project = await Project.findOne({ slug }).select("reviews title slug");
  if (!project) {
    return Response.json({ error: "Project not found", success: false }, { status: 404 });
  }

  return Response.json({ success: true, data: project.reviews || [] });
}

// 🟢 POST a new review to the project
export async function POST(req, { params }) {
  const slug = await params.slug; // Await params.slug

  await connectDB();

  const body = await req.json();
  const project = await Project.findOne({ slug });
  if (!project) {
    return Response.json({ error: "Project not found", success: false }, { status: 404 });
  }

  const newReview = {
    reviewerName: body.reviewerName || "Anonymous",
    reviewerProfile: body.reviewerProfile || null,
    rating: body.rating || 0,
    title: body.title || null,
    description: body.description || null,
    adminReply: body.adminReply || null,
    likesCount: body.likesCount || 0,
    createdAt: new Date(),
  };

  project.reviews.push(newReview);
  await project.save();

  return Response.json({ success: true, review: newReview }, { status: 201 });
}

// 🟡 PUT to update a review (optional)
export async function PUT(req, { params }) {
  const slug = await params.slug; // Await params.slug

  await connectDB();
  const body = await req.json();

  const project = await Project.findOne({ slug });
  if (!project) return Response.json({ error: "Project not found", success: false }, { status: 404 });

  const review = project.reviews.id(body.reviewId);
  if (!review) return Response.json({ error: "Review not found", success: false }, { status: 404 });

  Object.assign(review, body);
  await project.save();

  return Response.json({ success: true, review });
}

// 🔴 DELETE a review (optional)
export async function DELETE(req, { params }) {
  const slug = await params.slug; // Await params.slug
  const { searchParams } = new URL(req.url);
  const reviewId = searchParams.get("reviewId");

  await connectDB();

  const project = await Project.findOne({ slug });
  if (!project) return Response.json({ error: "Project not found", success: false }, { status: 404 });

  project.reviews = project.reviews.filter((r) => r._id.toString() !== reviewId);
  await project.save();

  return Response.json({ success: true });
}