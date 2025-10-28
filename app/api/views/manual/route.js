import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Project from "../../../../lib/model/Projects";

export async function POST(req) {
  try {
    await dbConnect();
    const { projectId, count } = await req.json();

    if (!projectId || !count)
      return NextResponse.json({ success: false, error: "projectId and count are required" }, { status: 400 });

    const project = await Project.findById(projectId);
    if (!project)
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });

    project.views = (project.views || 0) + count;

    if (!project.viewDetails) project.viewDetails = [];
    const now = new Date();
    for (let i = 0; i < count; i++) {
      project.viewDetails.push({ ip: "manual", timestamp: now });
    }

    await project.save();

    return NextResponse.json({ success: true, views: project.views });
  } catch (err) {
    console.error("Error adding manual views:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
