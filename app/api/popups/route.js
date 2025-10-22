




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
