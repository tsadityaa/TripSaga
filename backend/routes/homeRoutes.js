const express = require("express");
const { getHomePageContent, updateHomePageContent } = require("../controllers/homeController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/", getHomePageContent);  // Users 
router.post("/", authMiddleware, updateHomePageContent);  // Only Admins 

module.exports = router;
