// models/Popup.js
import mongoose from "mongoose";

const popupSchema = new mongoose.Schema({
  title: String,
  customCode: String,      // your pasted HTML/JS/CSS
  active: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Popup || mongoose.model("Popup", popupSchema);
