const express = require("express");
const benRouter = express.Router();
const Center3 = require("../modules/Center3.js");

// Fetch available times for a selected date and hospital
benRouter.get("/sung", async (req, res) => {
  const { date, hospital } = req.query;

  try {
    const existingBookings = await Center3.find({ date, hospital });
    const bookedTimes = existingBookings.map((booking) => booking.time);

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
      (time) => !bookedTimes.includes(time)
    );
    res.json(availableTimes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching available times." });
  }
});

// Fetch all upcoming bookings
benRouter.get("/sam", async (req, res) => {
  try {
    const bookings = await Center3.find();
    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings." });
  }
});

// Book an appointment
benRouter.post("/sung", async (req, res) => {
  const { name, phone, date, time, hospital } = req.body;

  if (!name || !phone || !date || !time || !hospital) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check if the selected time is already booked
  try {
    const existingBooking = await Center3.findOne({ date, time, hospital });
    if (existingBooking) {
      return res
        .status(400)
        .json({ error: "This time slot is already booked." });
    }

    const newBooking = new Center3({ name, phone, date, time, hospital });
    await newBooking.save();

    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error booking appointment." });
  }
});

module.exports = benRouter;
