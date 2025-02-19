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

exports.getStateByName = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ message: "Please provide a state name" });
    }

    const state = await State.findOne({ name: { $regex: new RegExp(name, "i") } });

    if (!state) {
      return res.status(404).json({ message: "State not found" });
    }

    res.json(state);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


exports.getStateById = async (req, res) => {
  try {
    const state = await State.findById(req.params.id);

    if (!state) {
      return res.status(404).json({ message: "State not found" });
    }

    res.json(state);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
