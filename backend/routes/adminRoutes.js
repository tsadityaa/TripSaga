const express = require("express");
const { registerAdmin, loginAdmin, getAdminDashboard, getAllContactMessages ,adminlogout} = require("../controllers/adminController");
const {authMiddleware,adminAuth} = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerAdmin); 
router.post("/login", loginAdmin);
router.get("/dashboard", authMiddleware, adminAuth, getAdminDashboard);
router.get("/contacts", authMiddleware, adminAuth, getAllContactMessages);
router.get("/logout",adminlogout);
module.exports = router;
