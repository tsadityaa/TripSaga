const mongoose = require("mongoose");

const VlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  videoUrl: { type: String, required: true }, // YouTube link
  imageUrl: { type: String }, // AWS S3 URL for cover image
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vlog", VlogSchema);
