import connectDB from "../../../../lib/dbConnect";
import Popup from "../../../../lib/model/Popup";

// GET: Return all popups
export async function GET() {
  try {
    await connectDB();

    // Fetch all popups sorted by newest first
    const popups = await Popup.find().sort({ createdAt: -1 });

    return Response.json(popups);
  } catch (error) {
    console.error("GET /api/popups error:", error);
    return Response.json({ error: "Failed to fetch popups" }, { status: 500 });
  }
}

// POST: Create or update popup
export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    // If this popup is active, deactivate previous ones
    if (data.active) {
      await Popup.updateMany({}, { active: false });
    }

    const popup = await Popup.create(data);
    return Response.json({ message: "Popup created successfully", popup });
  } catch (error) {
    console.error("POST /api/popups error:", error);
    return Response.json({ error: "Failed to create popup" }, { status: 500 });
  }
}// DELETE: Delete all popups
export async function DELETE(req) {
  try {
    await connectDB();

    const result = await Popup.deleteMany({}); // Deletes all documents in the collection

    return Response.json({ 
      message: `All popups deleted successfully (${result.deletedCount} removed)` 
    });
  } catch (error) {
    console.error("DELETE /api/popups error:", error);
    return Response.json({ error: "Failed to delete popups" }, { status: 500 });
  }
}
