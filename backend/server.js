const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
// 🔹 Load environment variables
dotenv.config();

// 🔹 Connect to MongoDB
connectDB();

// 🔹 Initialize Express app
const app = express();
app.use(cookieParser());  
// 🔹 Middleware

app.use(express.json()); // Parse JSON body
app.use(cors()); // Enable CORS for API access

// // 🔹 Routes
app.use("/api/packages", require("./routes/packageRoutes"));
app.use("/api/vlogs", require("./routes/vlogRoutes"));
app.use("/api/travel-guide", require("./routes/travelGuideRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
// app.use("/api/states", require("./routes/stateRoutes"));
app.use("/api/places", require("./routes/placeRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
//app.use("/api/upload", require("./routes/uploadRoutes")); // 🔹 For AWS S3 Uploads
app.use("/api/home", require("./routes/homeRoutes"));

// 🔹 Start Server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
