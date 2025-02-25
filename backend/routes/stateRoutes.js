const express = require("express");
const { getAllStates, addState, deleteState,getStateById,getStateByName } = require("..controllers/stateController");
const {authMiddleware,adminAuth} = require("../middleware/auth");

const router = express.Router();

router.get("/", getAllStates); // Public (Users can see states)
router.post("/", authMiddleware,adminAuth, addState); // Protected (Admins Only)
router.delete("/:id", authMiddleware,adminAuth, deleteState); // Protected (Admins Only)
router.get("/:id", getStateById); // Public (Users can fetch a place by its ID)
router.get("/search", getStateByName); // Public route

module.exports = router;
