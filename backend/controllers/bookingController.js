const Booking = require("../models/Booking");
const Package = require("../models/Package");

// 📌 Create a new booking (User Only)
exports.createBooking = async (req, res) => {
  try {
    const { packageId, nooftravelers } = req.body;
    const userId = req.user._id; // User ID from JWT token

    // Check if package exists
    const packageData = await Package.findById(packageId);
    if (!packageData) {
      return res.status(404).json({ message: "Package not found" });
    }

    // Calculate total price
    const totalPrice = packageData.price * nooftravelers;

    // Create new booking
    const newBooking = new Booking({
      user: userId,
      package: packageId,
      travelers:nooftravelers,
      totalPrice,
      status: "Pending",
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Get all bookings (Admin Only)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user", "name email").populate("package", "title price");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Get user's bookings (User Only)
exports.getUserBookings = async (req, res) => {
  try {
    const userId = req.user._id;
    const bookings = await Booking.find({ user: userId }).populate("package", "title price");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


// 📌 Cancel a booking (Admin Only)
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: "Cancelled" }, { new: true });

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking cancelled successfully", booking });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
