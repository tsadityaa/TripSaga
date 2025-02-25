const Vlog = require("../models/Vlog");

// 📌 Fetch all vlogs (Public)
exports.getAllVlogs = async (req, res) => {
  try {
    const vlogs = await Vlog.find().sort({ createdAt: -1 });
    res.json(vlogs);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Fetch single vlog by ID (Public)
exports.getVlogById = async (req, res) => {
  try {
    const vlog = await Vlog.findById(req.params.id);
    if (!vlog) {
      return res.status(404).json({ message: "Vlog not found" });
    }
    res.json(vlog);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Add a new vlog (Admin Only)
exports.addVlog = async (req, res) => {
  try {
    const { title, content, videoUrl, imageUrl, author } = req.body;

    const newVlog = new Vlog({
      title,
      content,
      videoUrl,
      imageUrl,
      author,
    });
    console.log(title);
    await newVlog.save();
    res.status(201).json({ message: "Vlog added successfully", vlog: newVlog });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Update vlog by ID (Admin Only)
exports.updateVlog = async (req, res) => {
  try {
    const updatedVlog = await Vlog.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedVlog) {
      return res.status(404).json({ message: "Vlog not found" });
    }

    res.json({ message: "Vlog updated successfully", vlog: updatedVlog });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Delete vlog by ID (Admin Only)
exports.deleteVlog = async (req, res) => {
  try {
    const vlog = await Vlog.findByIdAndDelete(req.params.id);

    if (!vlog) {
      return res.status(404).json({ message: "Vlog not found" });
    }

    res.json({ message: "Vlog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
