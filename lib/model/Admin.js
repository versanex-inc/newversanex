import mongoose from "mongoose";

// Define the schema
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [30, "Username cannot exceed 30 characters"],
    match: [/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, underscores, or hyphens"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    maxlength: [254, "Email cannot exceed 254 characters"],
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"],
  },
password: {
  type: String,
  required: [true, "Password is required"],
  minlength: [8, "Password must be at least 8 characters long"],
},
  isAdmin: {
    type: Boolean,
    required: [true, "Admin status is required"],
    default: false,
  },
}, { timestamps: true });

// Delete any cached model to ensure the updated schema is used
if (mongoose.models.Admin) {
  delete mongoose.models.Admin;
}

// Create or get the model
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;