const TravelGuide = require("../models/TravelGuide");

// 📌 Fetch all travel guides (Public)
exports.getAllTravelGuides = async (req, res) => {
  try {
    const guides = await TravelGuide.find().sort({ createdAt: -1 });
    res.json(guides);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Fetch single travel guide by ID (Public)
exports.getTravelGuideById = async (req, res) => {
  try {
    const guide = await TravelGuide.findById(req.params.id);
    if (!guide) {
      return res.status(404).json({ message: "Travel guide not found" });
    }
    res.json(guide);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Add a new travel guide (Admin Only)
exports.addTravelGuide = async (req, res) => {
  try {
    const { destination, insights, travelTips, culturalInfo, imageUrl } = req.body;

    const newGuide = new TravelGuide({
      destination,
      insights,
      travelTips,
      culturalInfo,
      imageUrl,
    });

    await newGuide.save();
    res.status(201).json({ message: "Travel guide added successfully", guide: newGuide });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
