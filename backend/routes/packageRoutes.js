const express = require("express");
const {
  getAllPackages,
  getPackageById,
  addPackage,
  updatePackage,
  deletePackage,
} = require("../controllers/packageController"); 

const {authMiddleware,adminAuth} = require("../middleware/auth");

const router = express.Router();

router.get("/", getAllPackages); // Public (Users can see packages)
router.get("/:id", getPackageById); // Public (Users can see package details)
router.post("/", authMiddleware,adminAuth,addPackage); // Protected (Admins Only)
router.put("/:id", authMiddleware,adminAuth, updatePackage); // Protected (Admins Only)
router.delete("/:id", authMiddleware,adminAuth, deletePackage); // Protected (Admins Only)

module.exports = router;
