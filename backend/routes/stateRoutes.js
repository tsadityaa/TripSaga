const express = require("express");
const { getAllStates, addState, deleteState } = require("../controllers/stateController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/", getAllStates); // Public (Users can see states)
router.post("/", authMiddleware, addState); // Protected (Admins Only)
router.delete("/:id", authMiddleware, deleteState); // Protected (Admins Only)

module.exports = router;
