const express = require("express");
const { getUserProfile, loginUser, registerUser, userlogout } = require("../controllers/authController");
const { authMiddleware } = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerUser);  // ✅ Register Route
router.post("/login", loginUser);  // ✅ Login Route
router.get("/profile", authMiddleware, getUserProfile); // ✅ Protected Route
router.post("/logout",userlogout);
module.exports = router;


