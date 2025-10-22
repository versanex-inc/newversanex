

import dbConnect from "@/lib/dbConnect";
import Like from "@/lib/model/Like";
import Project from "@/lib/model/Projects";
import { NextResponse } from "next/server";

// 🚫 POST handler (disabled since login is not implemented)
export async function POST(request, { params }) {
  const { slug } = params;
  await dbConnect();

  // Optionally verify that the project exists
  const project = await Project.findOne({ slug }).lean();
  if (!project) {
    return NextResponse.json(
      { success: false, error: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { success: false, error: "Liking requires login, which is not available" },
    { status: 400 }
  );
}

// 🚫 DELETE handler (disabled since login is not implemented)
export async function DELETE(request, { params }) {
  const { slug } = params;
  await dbConnect();

  // Optionally verify that the project exists
  const project = await Project.findOne({ slug }).lean();
  if (!project) {
    return NextResponse.json(
      { success: false, error: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { success: false, error: "Unliking requires login, which is not available" },
    { status: 400 }
  );
}
