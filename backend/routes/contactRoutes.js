const express = require("express");
const { saveInquiry, getAllInquiries } = require("../controllers/contactController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/", saveInquiry); // Public 
router.get("/", authMiddleware, getAllInquiries); //  (Admins Only)

module.exports = router;
