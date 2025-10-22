


// lib/models/Like.js
import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: String, // Changed to String, optional (no users)
      default: null,
    },
    targetType: {
      type: String,
      enum: ["Project", "Review"],
      required: [true, "Target type is required"],
    },
    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Target ID is required"],
      refPath: "targetType",
    },
  },
  { timestamps: true }
);

// Removed unique index on userId since no users
likeSchema.index({ targetId: 1, targetType: 1 });

export default mongoose.models.Like || mongoose.model("Like", likeSchema);