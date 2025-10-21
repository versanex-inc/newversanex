// import mongoose from "mongoose";

// const reviewSchema = new mongoose.Schema(
//   {
//     projectId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Project",
//       required: [true, "Project ID is required"],
//     },
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: [true, "User ID is required"],
//     },
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//       minlength: [2, "Name must be at least 2 characters"],
//       maxlength: [50, "Name cannot exceed 50 characters"],
//     },
//     title: {
//       type: String,
//       required: [true, "Title is required"],
//       trim: true,
//       minlength: [3, "Title must be at least 3 characters"],
//       maxlength: [100, "Title cannot exceed 100 characters"],
//     },
//     comment: {
//       type: String,
//       required: [true, "Comment is required"],
//       trim: true,
//       minlength: [10, "Comment must be at least 10 characters"],
//       maxlength: [500, "Comment cannot exceed 500 characters"],
//     },
//     rating: {
//       type: Number,
//       required: [true, "Rating is required"],
//       min: [1, "Rating must be at least 1"],
//       max: [5, "Rating cannot exceed 5"],
//     },
//     adminReply: {
//       type: String,
//       default: "",
//       trim: true,
//       maxlength: [500, "Admin reply cannot exceed 500 characters"],
//     },
//     likes: {
//       type: Number,
//       default: 0,
//       min: [0, "Likes cannot be negative"],
//     },
//     likedBy: {
//       type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//       default: [],
//     },
//   },
//   { timestamps: true }
// );

// reviewSchema.index({ projectId: 1, userId: 1 }, { unique: true });

// export default mongoose.models.Review || mongoose.model("Review", reviewSchema);








// lib/models/Review.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: [true, "Project ID is required"],
    },
    userId: {
      type: String, // Changed to String, optional (no users)
      default: null,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
      minlength: [10, "Comment must be at least 10 characters"],
      maxlength: [500, "Comment cannot exceed 500 characters"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
    },
    adminReply: {
      type: String,
      default: "",
      trim: true,
      maxlength: [500, "Admin reply cannot exceed 500 characters"],
    },
    likes: {
      type: Number,
      default: 0,
      min: [0, "Likes cannot be negative"],
    },
    likedBy: {
      type: [String], // Changed to [String] (no users)
      default: [],
    },
  },
  { timestamps: true }
);

// Removed unique index on userId since no users
reviewSchema.index({ projectId: 1 });

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);