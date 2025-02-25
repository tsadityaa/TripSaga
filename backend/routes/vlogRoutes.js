const express = require("express");
const {
  getAllVlogs,
  getVlogById,
  addVlog,
  updateVlog,
  deleteVlog,
} = require("../controllers/vlogController");
const {authMiddleware,adminAuth} = require("../middleware/auth");

const router = express.Router();
console.log(typeof authMiddleware, typeof adminAuth);

router.get("/", getAllVlogs); // Public (Users can see vlogs)
router.get("/:id", getVlogById); // Public (Users can see vlog details)
router.post("/", authMiddleware,adminAuth, addVlog); // Protected (Admins Only)
router.put("/:id", authMiddleware,adminAuth, updateVlog); // Protected (Admins Only)
router.delete("/:id", authMiddleware,adminAuth, deleteVlog); // Protected (Admins Only)

module.exports = router;
