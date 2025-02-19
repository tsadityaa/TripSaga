const mongoose = require("mongoose");

const TravelGuideSchema = new mongoose.Schema({
  destination: { type: String, required: true }, 
  insights: { type: String, required: true }, // information about the destination
  travelTips: [{ type: String }], // Array of travel tips
  culturalInfo: { type: String }, // Details about local traditions, food, and etiquette
  imageUrl: { type: String }, // AWS S3 URL for cover image
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TravelGuide", TravelGuideSchema);
