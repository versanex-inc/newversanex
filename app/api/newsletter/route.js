import { NextResponse } from "next/server";
import connectDB from "../../../lib/dbConnect";
import Newsletter from "../../../lib/model/NewsLetter";

export async function GET() {
  try {
    await connectDB();
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    return NextResponse.json({
      success: true,
      count: subscribers.length,
      data: subscribers,
    });
  } catch (error) {
    console.error("GET /api/newsletter error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch subscribers", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "You are already subscribed" },
        { status: 400 }
      );
    }

    // Save new subscriber
    const newSubscriber = await Newsletter.create({ email });
    return NextResponse.json(
      { success: true, message: "Subscribed successfully", data: newSubscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/newsletter error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to subscribe", error: error.message },
      { status: 500 }
    );
  }
}
