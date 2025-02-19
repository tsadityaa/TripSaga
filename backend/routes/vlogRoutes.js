const express = require("express");
const {
  getAllVlogs,
  getVlogById,
  addVlog,
  updateVlog,
  deleteVlog,
} = require("../controllers/vlogController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/", getAllVlogs); // Public (Users can see vlogs)
router.get("/:id", getVlogById); // Public (Users can see vlog details)
router.post("/", authMiddleware, addVlog); // Protected (Admins Only)
router.put("/:id", authMiddleware, updateVlog); // Protected (Admins Only)
router.delete("/:id", authMiddleware, deleteVlog); // Protected (Admins Only)

module.exports = router;
