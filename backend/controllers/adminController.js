const Admin = require("../models/Admin");
const Contact = require("../models/Contact"); // For fetching contact messages

const bcrypt = require("bcryptjs");


// 📌 Register a new admin (For first-time setup)
exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name+""+email);
    // Check if admin already exists
    let admin = await Admin.findOne({ email });
    if (admin) return res.status(400).json({ msg: "Admin already exists" });

    admin = new Admin({ name, email, password });
    await admin.save();

    // Create new admin
    const token = await admin.getJWT();
    res.cookie("token", token, { httpOnly: true });
    
    
    res.status(201).json({ msg: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};

// 📌 Admin login

exports.adminlogout = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true
  });
  res.send("Logout Successful!!");
};


exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) return res.status(400).json({ msg: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = await admin.getJWT();
    res.cookie("token", token, { httpOnly: true });

    res.json({ token, admin: { name: admin.name, email: admin.email, role: "Admin" } });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};



// 📌 Fetch admin dashboard data (Protected Route)
exports.getAdminDashboard = async (req, res) => {
  try {
    // Fetch total bookings, users, contact messages count
    const totalContacts = await Contact.countDocuments();
    res.json({ totalContacts });
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};

// 📌 Get all contact messages (Admin Only)
exports.getAllContactMessages = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
