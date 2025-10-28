// import mongoose from "mongoose";

// const projectSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Project title is required"],
//       trim: true,
//       minlength: [3, "Title must be at least 3 characters"],
//       maxlength: [100, "Title cannot exceed 100 characters"],
//     },
//     slug: {
//       type: String,
//       required: [true, "Slug is required"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: [true, "Description is required"],
//       trim: true,
//       minlength: [10, "Description must be at least 10 characters"],
//       maxlength: [1000, "Description cannot exceed 1000 characters"],
//     },
//     category: {
//       type: String,
//       required: [true, "Category is required"],
//       enum: ["graphics-designing", "website-developing", "video-editing", "ui-ux"],
//     },
//     subCategory: {
//       type: String,
//       default: null,
//     },
//     status: {
//       type: String,
//       required: [true, "Status is required"],
//       enum: ["Completed", "Progress", "Holding", "Cancelled"],
//       default: "Progress",
//     },
//     projectType: {
//       type: String,
//       enum: ["iframe", "imageGallery"],
//       default: "imageGallery",
//     },
//     images: [
//       {
//         url: { type: String, required: true },
//         alt: { type: String, default: "" },
//       },
//     ],
//     skills: {
//       type: [String],
//       default: [],
//       validate: {
//         validator: (arr) => arr.every((skill) => typeof skill === "string" && skill.trim().length > 0),
//         message: "Skills must be non-empty strings",
//       },
//     },
//     liveLink: {
//       type: String,
//       trim: true,
//       match: [/^https?:\/\/.+$/, "Please provide a valid URL"],
//       default: null,
//     },
//     repoLink: {
//       type: String,
//       trim: true,
//       match: [/^https?:\/\/.+$/, "Please provide a valid URL"],
//       default: null,
//     },
//     creatorName: {
//       type: String,
//       required: [true, "Creator name is required"],
//       trim: true,
//     },
//     creatorPicture: {
//       type: String,
//       default: "/creator-avatar.png",
//     },
//     creatorProfile: {
//       type: String,
//       trim: true,
//       match: [/^https?:\/\/.+$/, "Please provide a valid URL"],
//       default: null,
//     },
//     creatorNiche: {
//       type: String,
//       trim: true,
//       default: "",
//     },
//     deadline: {
//       type: Date,
//       default: null,
//     },
//     likes: {
//       type: Number,
//       default: 0,
//       min: [0, "Likes cannot be negative"],
//     },
//     likedBy: {
//       type: [String], // Changed to [String] (no users)
//       default: [],
//     },
//     views: {
//       type: Number,
//       default: 0,
//       min: [0, "Views cannot be negative"],
//     },
//     viewedBy: {
//       type: [String],
//       default: [],
//     },
//   },
//   { timestamps: true }
// );

// projectSchema.pre("save", function (next) {
//   if (!this.slug && this.title) {
//     this.slug = this.title
//       .toLowerCase()
//       .replace(/ /g, "-")
//       .replace(/[^\w-]+/g, "");
//   }
//   next();
// });

// export default mongoose.models.Project || mongoose.model("Project", projectSchema);

















import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "graphic-designing",
        "website-developing",
        "video-editing",
        "content-writing",
        "digital-marketing",
        "software-quality-assurance",
        "ui-ux",
      ],
    },
    subCategory: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: ["Completed", "Progress", "Holding", "Cancelled"],
      default: "Progress",
    },
    projectType: {
      type: String,
      enum: ["iframe", "imageGallery"],
      default: "imageGallery",
    },
    images: [
      {
        url: { type: String, required: true },
        alt: { type: String, default: "" },
      },
    ],
    skills: {
      type: [String],
      default: [],
      validate: {
        validator: (arr) => arr.every((skill) => typeof skill === "string" && skill.trim().length > 0),
        message: "Skills must be non-empty strings",
      },
    },
    features: {
      type: [String],
      default: [],
      validate: {
        validator: (arr) => arr.every((feature) => typeof feature === "string" && feature.trim().length > 0),
        message: "Features must be non-empty strings",
      },
    },
    liveLink: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+$/, "Please provide a valid URL"],
      default: null,
    },
    repoLink: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+$/, "Please provide a valid URL"],
      default: null,
    },
    creatorName: {
      type: String,
      required: [true, "Creator name is required"],
      trim: true,
    },
    creatorPicture: {
      type: String,
      default: "/creator-avatar.png",
    },
    creatorProfile: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+$/, "Please provide a valid URL"],
      default: null,
    },
    reviews: [
      {
        reviewerName: { type: String, default: null },
        reviewerProfile: { type: String, default: null }, // e.g., URL to profile image
        rating: { type: Number, min: 1, max: 5, default: null },
        title: { type: String, default: null },
        description: { type: String, default: null },
        createdAt: { type: Date, default: Date.now },
        adminReply: { type: String, default: null },
        likesCount: { type: Number, default: 0 },
      },
    ],
    creatorNiche: {
      type: String,
      trim: true,
      default: "",
    },
    views: {
      type: Number,
      default: 0,
      min: [0, "Views cannot be negative"],
    },
    deadline: {
      type: Date,
      default: null,
    },
    viewedIPs: {
      type: [String], // stores unique IPs that viewed this project
      default: [],
    },
  },
  { timestamps: true }
);

projectSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  next();
});



export default mongoose.models.Project || mongoose.model("Project", projectSchema);
