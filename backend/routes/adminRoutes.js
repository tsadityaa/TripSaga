const express = require("express");
const { registerAdmin, loginAdmin, getAdminDashboard, getAllContactMessages } = require("../controllers/adminController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerAdmin); 
router.post("/login", loginAdmin);
router.get("/dashboard", authMiddleware, authMiddleware.adminAuth, getAdminDashboard);
router.get("/contacts", authMiddleware, authMiddleware.adminAuth, getAllContactMessages);

module.exports = router;
