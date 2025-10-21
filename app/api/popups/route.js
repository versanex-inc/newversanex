// import connectDB from "../../../lib/dbConnect";
// import Popup from "../../../lib/model/Popup";

// // GET: Return the active popup
// export async function GET() {
//   try {
//     await connectDB();
//     const popup = await Popup.findOne({ active: true }).sort({ createdAt: -1 });
//     return Response.json(popup || {});
//   } catch (error) {
//     console.error("GET /api/popups error:", error);
//     return Response.json({ error: "Failed to fetch popup" }, { status: 500 });
//   }
// }

// // POST: Create or update popup
// export async function POST(req) {
//   try {
//     await connectDB();
//     const data = await req.json();

//     // If the admin wants to set this popup active, deactivate previous ones
//     if (data.active) {
//       await Popup.updateMany({}, { active: false });
//     }

//     const popup = await Popup.create(data);
//     return Response.json({ message: "Popup created successfully", popup });
//   } catch (error) {
//     console.error("POST /api/popups error:", error);
//     return Response.json({ error: "Failed to create popup" }, { status: 500 });
//   }
// }









import connectDB from "../../../lib/dbConnect";
import Popup from "../../../lib/model/Popup";

// GET: Return the active popup
export async function GET() {
  try {
    await connectDB();
    const popup = await Popup.findOne({ active: true }).sort({ createdAt: -1 });
    return Response.json(popup || {});
  } catch (error) {
    console.error("GET /api/popups error:", error);
    return Response.json({ error: "Failed to fetch popup" }, { status: 500 });
  }
}
