const express = require("express");
const router = express.Router();
const Booking = require("../modules/Booking"); // Ensure this path is correct

// Route to fetch upcoming bookings
router.get("/center1", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Server error." });
  }
});

// Route to fetch available times
router.get("/vivo", async (req, res) => {
  const { date, hospital } = req.query;

  if (!date || !hospital) {
    return res.status(400).json({ error: "Date and hospital are required." });
  }

  try {
    const bookedTimes = await Booking.find({ date, hospital }).select("time -_id");
    const allTimes = [
      "09:00 AM-10:00 AM",
      "10:00 AM-11:00 AM",
      "12:00 PM-01:00 PM",
      "01:00 PM-02:00 PM",
      "02:00 PM-03:00 PM",
      "03:00 PM-04:00 PM",
      "04:00 PM-05:00 PM",
    ];

    const availableTimes = allTimes.filter(
      (time) => !bookedTimes.some((booking) => booking.time === time)
    );

    res.json(availableTimes);
  } catch (error) {
    console.error("Error fetching available times:", error);
    res.status(500).json({ error: "Server error." });
  }
});

// Route to create a new booking
router.post("/vivo", async (req, res) => {
  const { name, phone, date, time, hospital } = req.body;

  if (!name || !phone || !date || !time || !hospital) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const existingBooking = await Booking.findOne({ date, time, hospital });

    if (existingBooking) {
      return res.status(400).json({ error: "This time slot is already booked." });
    }

    const newBooking = new Booking({ name, phone, date, time, hospital });
    await newBooking.save();

    res.json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
