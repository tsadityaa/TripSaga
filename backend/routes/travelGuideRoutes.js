const express = require("express");
const {
  getAllTravelGuides,
  getTravelGuideById,
  addTravelGuide,
} = require("../controllers/travelGuideController");
const {authMiddleware,adminAuth} = require("../middleware/auth");

const router = express.Router();

router.get("/", getAllTravelGuides); // Public (Users can see travel guides)
router.get("/:id", getTravelGuideById); // Public (Users can see travel guide details)
router.post("/", authMiddleware,adminAuth, addTravelGuide); // Protected (Admins Only)

module.exports = router;
