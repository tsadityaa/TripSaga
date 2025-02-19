const express = require("express");
const { getAllPlaces, addPlace, deletePlace,getPlaceByName,getPlaceById } = require("../controllers/placeController");
const {authMiddleware,adminAuth} = require("../middleware/auth");

const router = express.Router();

router.get("/", getAllPlaces); // Public (Users can see places)
router.post("/", authMiddleware,adminAuth,addPlace); // Protected (Admins Only)
router.get("/:id", getPlaceById); // Public (Users can fetch a place by its ID)
router.delete("/:id", authMiddleware,adminAuth, deletePlace); // Protected (Admins Only)
router.get("/search", getPlaceByName); // Public route


module.exports = router;
