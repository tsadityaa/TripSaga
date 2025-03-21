const Contact = require("../models/Contact");

// 📌 Save user inquiry (Public)
exports.saveInquiry = async (req, res) => {
  try {
    console.log("Request received:", req.body);  // ✅ Debugging line

    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const newInquiry = new Contact({ name, email, phone, message });
    await newInquiry.save();

    res.status(201).json({ message: "Inquiry submitted successfully", inquiry: newInquiry });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


// 📌 Get all contact messages (Admin Only)
exports.getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Contact.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
