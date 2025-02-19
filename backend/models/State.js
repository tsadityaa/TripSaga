const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageUrl: { type: String }, // AWS S3 URL for state image
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("State", StateSchema);
