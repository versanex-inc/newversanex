// import { NextResponse } from "next/server";
// import dbConnect from "../../../lib/dbConnect";
// import Project from "../../../lib/model/Projects";

// /**
//  * Extract the client IP from request headers.
//  * Works in both local and deployed environments.
//  */
// function getClientIP(req) {
//   const forwarded = req.headers.get("x-forwarded-for");
//   if (forwarded) return forwarded.split(",")[0].trim();
//   return req.headers.get("x-real-ip") || "unknown";
// }

// /**
//  * POST /api/views
//  * Body: { projectId: string }
//  */
// export async function POST(req) {
//   try {
//     await dbConnect();
//     const { projectId } = await req.json();

//     if (!projectId) {
//       return NextResponse.json({ success: false, error: "Project ID is required" }, { status: 400 });
//     }

//     const ip = getClientIP(req);
//     const cookieName = `viewed_${projectId}`;

//     // ✅ Check cookies for repeated view
//     const cookies = req.cookies.get(cookieName);
//     if (cookies) {
//       return NextResponse.json({ success: true, message: "Already viewed (cookie)", counted: false });
//     }

//     // ✅ Find project
//     const project = await Project.findById(projectId);
//     if (!project) {
//       return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
//     }

//     // ✅ Check if this IP already viewed the project
//     if (project.viewedIPs.includes(ip)) {
//       return NextResponse.json({ success: true, message: "Already viewed (IP check)", counted: false });
//     }

//     // ✅ Add new view
//     project.views += 1;
//     project.viewedIPs.push(ip);
//     await project.save();

//     // ✅ Set cookie to prevent re-viewing (lasts 24h)
//     const res = NextResponse.json({ success: true, views: project.views, counted: true });
//     res.cookies.set(cookieName, "true", { maxAge: 60 * 60 * 24, path: "/" });

//     return res;
//   } catch (err) {
//     console.error("Error in POST /api/views:", err);
//     return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
//   }
// }












import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Project from "../../../lib/model/Projects";

/**
 * Extract the client IP from request headers.
 */
function getClientIP(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/* ================================
   POST — Auto add new view
================================ */
export async function POST(req) {
  try {
    await dbConnect();
    const { projectId } = await req.json();

    if (!projectId) {
      return NextResponse.json({ success: false, error: "Project ID is required" }, { status: 400 });
    }

    const ip = getClientIP(req);
    const cookieName = `viewed_${projectId}`;
    const cookies = req.cookies.get(cookieName);

    if (cookies) {
      return NextResponse.json({ success: true, message: "Already viewed (cookie)", counted: false });
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }

    if (project.viewedIPs.includes(ip)) {
      return NextResponse.json({ success: true, message: "Already viewed (IP check)", counted: false });
    }

    project.views += 1;
    project.viewedIPs.push(ip);
    await project.save();

    const res = NextResponse.json({ success: true, views: project.views, counted: true });
    res.cookies.set(cookieName, "true", { maxAge: 60 * 60 * 24, path: "/" });

    return res;
  } catch (err) {
    console.error("Error in POST /api/views:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

/* ================================
   GET — Admin: Get project views + IP list
   Example: /api/views?projectId=123
================================ */
export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("projectId");

    if (!projectId) {
      return NextResponse.json({ success: false, error: "Project ID is required" }, { status: 400 });
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }

    // Prepare data for table
    const views = project.viewedIPs.map((ip, index) => ({
      ip,
      timestamp: project.updatedAt, // simplified timestamp (can store per-view later)
    }));

    return NextResponse.json({
      success: true,
      project: project.title,
      totalViews: project.views,
      views,
    });
  } catch (err) {
    console.error("Error in GET /api/views:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

/* ================================
   PATCH — Admin: Add manual views
   Body: { projectId: string, count: number }
================================ */
// export async function PATCH(req) {
//   try {
//     await dbConnect();
//     const { projectId, count } = await req.json();

//     if (!projectId || !count || count <= 0) {
//       return NextResponse.json(
//         { success: false, error: "Project ID and valid count are required" },
//         { status: 400 }
//       );
//     }

//     const project = await Project.findById(projectId);
//     if (!project) {
//       return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
//     }

//     project.views += count;
//     await project.save();

//     return NextResponse.json({
//       success: true,
//       message: `${count} manual views added`,
//       newTotal: project.views,
//     });
//   } catch (err) {
//     console.error("Error in PATCH /api/views:", err);
//     return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
//   }
// }





export async function PATCH(req) {
  try {
    await dbConnect();

    const body = await req.json();
    console.log("PATCH /api/views body:", body);

    const projectId = body.projectId;
    const newTotal = Number(body.newTotal ?? body.count); // ✅ Support both names

    if (!projectId || isNaN(newTotal) || newTotal < 0) {
      return NextResponse.json(
        { success: false, error: "Project ID and valid numeric total are required" },
        { status: 400 }
      );
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    // ✅ Set the views value instead of incrementing
    project.views = newTotal;
    await project.save();

    return NextResponse.json({
      success: true,
      message: `Views updated to ${newTotal}`,
      newTotal: project.views,
    });
  } catch (err) {
    console.error("Error in PATCH /api/views:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
