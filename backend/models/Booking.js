const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
  package: { type: mongoose.Schema.Types.ObjectId, ref: "Package", required: true }, // Reference to Package
  travelers: { type: Number, required: true, min: 1 }, // Number of travelers
  totalPrice: { type: Number, required: true }, // Calculated based on package price
  status: { type: String, enum: ["Pending", "Confirmed", "Cancelled"], default: "Pending" }, // Booking status
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", BookingSchema);
