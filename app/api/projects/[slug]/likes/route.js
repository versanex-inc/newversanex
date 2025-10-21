// // api/projects/[id]/likes/route.js
// import dbConnect from "@/lib/dbCon";
// import Like from "@/lib/models/Like";
// import Project from "@/lib/models/Project";

// // POST handler (disabled for no login; return error. If you want anonymous likes, use IP as userId String)
// export async function POST(request, { params }) {
//   await dbConnect();

//   const { id } = params; // No await needed, params is object in Next.js

//   return new Response(
//     JSON.stringify({ success: false, error: "Liking requires login, which is not available" }),
//     { status: 400 }
//   );
// }

// // DELETE handler (disabled for no login)
// export async function DELETE(request, { params }) {
//   await dbConnect();

//   const { id } = params;

//   return new Response(
//     JSON.stringify({ success: false, error: "Unliking requires login, which is not available" }),
//     { status: 400 }
//   );
// }







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
