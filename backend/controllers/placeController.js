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


exports.getPlaceByName = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Please provide a place name to search" });
    }

    
    const places = await Place.find({
      $or: [
        { name: { $regex: name, $options: "i" } },
        { state: { $regex: name, $options: "i" } } // Search by state name
      ]
    }).populate("state", "name");

    if (places.length === 0) {
      return res.status(404).json({ message: "No places found" });
    }

    res.json(places);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


exports.getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id).populate("state", "name");

    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    res.json(place);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
