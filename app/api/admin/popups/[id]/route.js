import connectDB from "../../../../../lib/dbConnect";
import Popup from "../../../../../lib/model/Popup";

// GET /api/popups/[id] => Get popup by ID
export async function GET(req) {
  try {
    await connectDB();
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();

    const popup = await Popup.findById(id);
    if (!popup) {
      return Response.json({ error: "Popup not found" }, { status: 404 });
    }

    return Response.json(popup);
  } catch (error) {
    console.error("GET /api/popups/[id] error:", error);
    return Response.json({ error: "Failed to fetch popup" }, { status: 500 });
  }
}

// PUT /api/popups/[id] => Update popup by ID
export async function PUT(req) {
  try {
    await connectDB();
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();
    const data = await req.json();

    // If setting active, deactivate all others
    if (data.active) {
      await Popup.updateMany({}, { active: false });
    }

    const updated = await Popup.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      return Response.json({ error: "Popup not found" }, { status: 404 });
    }

    return Response.json({ message: "Popup updated successfully", popup: updated });
  } catch (error) {
    console.error("PUT /api/popups/[id] error:", error);
    return Response.json({ error: "Failed to update popup" }, { status: 500 });
  }
}

// DELETE /api/popups/[id] => Delete popup by ID
export async function DELETE(req) {
  try {
    await connectDB();
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();

    const deleted = await Popup.findByIdAndDelete(id);
    if (!deleted) {
      return Response.json({ error: "Popup not found" }, { status: 404 });
    }

    return Response.json({ message: "Popup deleted successfully", popup: deleted });
  } catch (error) {
    console.error("DELETE /api/popups/[id] error:", error);
    return Response.json({ error: "Failed to delete popup" }, { status: 500 });
  }
}
