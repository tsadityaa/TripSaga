const express = require("express");
const { createBooking, getAllBookings, getUserBookings, cancelBooking } = require("../controllers/bookingController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/", authMiddleware, createBooking); // ✅ Only logged-in users can book
router.get("/", authMiddleware, authMiddleware.adminAuth, getAllBookings); // ✅ Only admins can view all bookings
router.get("/my-bookings", authMiddleware, getUserBookings); // ✅ Users can view their own bookings
router.delete("/:id", authMiddleware, authMiddleware.adminAuth, cancelBooking); // ✅ Only admins can cancel bookings

module.exports = router;
