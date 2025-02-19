const State = require("../models/State");

// 📌 Fetch all states (Public)
exports.getAllStates = async (req, res) => {
  try {
    const states = await State.find().sort({ createdAt: -1 });
    res.json(states);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Add a new state (Admin Only)
exports.addState = async (req, res) => {
  try {
    const { name, description, imageUrl } = req.body;

    const newState = new State({
      name,
      description,
      imageUrl,
    });

    await newState.save();
    res.status(201).json({ message: "State added successfully", state: newState });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Delete a state (Admin Only)
exports.deleteState = async (req, res) => {
  try {
    const state = await State.findByIdAndDelete(req.params.id);

    if (!state) {
      return res.status(404).json({ message: "State not found" });
    }

    res.json({ message: "State deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
