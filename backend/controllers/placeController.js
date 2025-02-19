const Place = require("../models/Place");

// 📌 Fetch all places (Public)
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find().populate("state", "name").sort({ createdAt: -1 });
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Add a new place (Admin Only)
exports.addPlace = async (req, res) => {
  try {
    const { name, state, description, imageUrl } = req.body;

    const newPlace = new Place({
      name,
      state,
      description,
      imageUrl,
    });

    await newPlace.save();
    res.status(201).json({ message: "Place added successfully", place: newPlace });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Delete a place (Admin Only)
exports.deletePlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);

    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    res.json({ message: "Place deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
