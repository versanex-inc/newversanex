import { NextResponse } from "next/server";
import connectDB from "../../../../lib/dbConnect";
import Contact from "../../../../lib/model/Contact";

// 🟢 GET Contact by ID
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params;

    const contact = await Contact.findById(id);
    if (!contact) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    console.error("GET /api/contact/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch contact", error: error.message },
      { status: 500 }
    );
  }
}

// 🟡 UPDATE (PUT) Contact by ID
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const body = await req.json();

    const updated = await Contact.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contact updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("PUT /api/contact/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update contact", error: error.message },
      { status: 500 }
    );
  }
}

// 🔴 DELETE Contact by ID
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = params;

    const deleted = await Contact.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/contact/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete contact", error: error.message },
      { status: 500 }
    );
  }
}
