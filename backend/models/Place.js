const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: mongoose.Schema.Types.ObjectId, ref: "State", required: true }, // References a State
  description: { type: String, required: true },
  imageUrl: { type: String }, // AWS S3 URL for place image
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Place", PlaceSchema);
