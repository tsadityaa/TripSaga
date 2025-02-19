const HomePage = require("../models/HomePage");

// 📌 Fetch home page content (Public)
exports.getHomePageContent = async (req, res) => {
  try {
    const homePageData = await HomePage.findOne();
    if (!homePageData) {
      return res.status(404).json({ message: "Home page content not found" });
    }
    res.json(homePageData);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// 📌 Update home page content (Admin Only)
exports.updateHomePageContent = async (req, res) => {
  try {
    const { aboutUs, upcomingTrips, associations, socialMedia } = req.body;

    let homePageData = await HomePage.findOne();

    if (!homePageData) {
      homePageData = new HomePage({ aboutUs, upcomingTrips, associations, socialMedia });
    } else {
      homePageData.aboutUs = aboutUs;
      homePageData.upcomingTrips = upcomingTrips;
      homePageData.associations = associations;
      homePageData.socialMedia = socialMedia;
    }

    await homePageData.save();
    res.status(200).json({ message: "Home page updated successfully", homePageData });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
