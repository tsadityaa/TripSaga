const express = require("express");
const { getHomePageContent, updateHomePageContent } = require("../controllers/homeController");
const {authMiddleware,adminAuth} = require("../middleware/auth");

const router = express.Router();

router.get("/", getHomePageContent);  // Users 
router.post("/", authMiddleware,adminAuth, updateHomePageContent);  // Only Admins 

module.exports = router;
