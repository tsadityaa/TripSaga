const express = require("express");
const { saveInquiry, getAllInquiries } = require("../controllers/contactController");
const {authMiddleware,adminAuth} = require("../middleware/auth");

const router = express.Router();

router.post("/", saveInquiry); // Public 
router.get("/", authMiddleware,adminAuth, getAllInquiries); //  (Admins Only)

module.exports = router;
