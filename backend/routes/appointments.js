const express = require("express");
const router = express.Router();
const Booking = require("../modules/Booking");

// Get all bookings (for superadmin)
router.get("api/center1", async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.json({ bookings });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });
  

module.exports=router
