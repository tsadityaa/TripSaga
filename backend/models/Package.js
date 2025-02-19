const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: {
    type: String,
    enum: ["India Inbound", "Domestic Travel", "India Outbound", "International Trips", "India Pilgrimage"],
    required: true,
  },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true }, 
  imageUrl: { type: String }, 
  itineraryPdfUrl: { type: String }, // AWS S3 URL for itinerary PDF
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Package", PackageSchema);
