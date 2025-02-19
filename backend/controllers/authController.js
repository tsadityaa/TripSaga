const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const Admin = require("../models/Admin");
// 📌 Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name) {
      throw new Error("Name is not valid!");
    } else if (!validator.isEmail(email)) {
      throw new Error("Email is not valid!");
    } else if (!validator.isStrongPassword(password)) {
      throw new Error("Please enter a strong password!");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    let user = new User({ name, email, password: passwordHash });
    const savedUser = await user.save();
    
    // Generate JWT token
    const token = await savedUser.getJWT();
    
    // Store token in a cookie
    res.cookie("token", token, { httpOnly: true });

    res.status(201).json({ msg: "User registered successfully", data: savedUser });
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};

// 📌 User login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = await user.getJWT();
    console.log(token);
    res.cookie("token", token, { httpOnly: true });

    res.json({ token, user: { name: user.name, email: user.email, role: "User" } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// 📌 Fetch user profile (Protected)
exports.getUserProfile = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.userlogout = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true
  });
  res.send("Logout Successful!!");
};


// 📌 Admin Login

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



// const User = require("a:/TripSaga/backend/models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// // 📌 Register a new user
// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ msg: "User already exists" });

//     user = new User({ name, email, password });
//     await user.save();

//     res.status(201).json({ msg: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Server Error", details: error.message });
//   }
// };

// // 📌 User login
// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

//     const token = jwt.sign(
//       { id: user._id, role: "User" },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ token, user: { name: user.name, email: user.email, role: "User" } });
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// };

// // 📌 Fetch user profile
// const getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// };

// // 📌 Admin Login
// const loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const admin = await User.findOne({ email }); // ⚠ FIXED: `Admin` was undefined, using `User` for now

//     if (!admin) return res.status(400).json({ msg: "Invalid Credentials" });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

//     const token = jwt.sign(
//       { id: admin._id, role: "Admin" },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ token, admin: { name: admin.name, email: admin.email, role: "Admin" } });
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// };

// // ✅ Properly export all functions
// module.exports = {
//   registerUser,
//   loginUser,
//   getUserProfile,
//   loginAdmin,
// };
