const mongoose = require("mongoose");

const HomePageSchema = new mongoose.Schema({
  aboutUs: { type: String, required: true },
  upcomingTrips: [
    {
      title: { type: String, required: true },
      destination: { type: String, required: true },
      date: { type: Date, required: true },
      imageUrl: { type: String }, // AWS S3 URL for trip image
    },
  ],
  associations: [
    {
      name: { type: String, required: true },
      logoUrl: { type: String }, // AWS S3 URL for partner logo
      website: { type: String },
    },
  ],
  socialMedia: {
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    youtube: { type: String },
  },
});

module.exports = mongoose.model("HomePage", HomePageSchema);
