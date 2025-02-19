const express = require("express");
const { getAllPlaces, addPlace, deletePlace } = require("../controllers/placeController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/", getAllPlaces); // Public (Users can see places)
router.post("/", authMiddleware, addPlace); // Protected (Admins Only)
router.delete("/:id", authMiddleware, deletePlace); // Protected (Admins Only)

module.exports = router;
