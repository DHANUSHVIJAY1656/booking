const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Appointment = require('./modules/Booking');
const hospital2 = require('./modules/hospital2');
const hospital3 = require('./modules/hospital3');
const hospital4 = require("./modules/hospital4");
const hospital5 = require("./modules/hospital5");
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/appointments", { useNewUrlParser: true, useUnifiedTopology: true });
// Endpoint to fetch available times based on date and hospital

const availableTimes = {
  "Hospital A": {
    "2025-01-19": ["09:00 AM", "11:00 AM", "01:00 PM"],
    "2025-01-20": ["10:00 AM", "12:00 PM", "02:00 PM"],
  },
  "Hospital B": {
    "2025-01-19": ["10:00 AM", "12:00 PM", "02:00 PM"],
  },
};

app.get("/api/available-times", (req, res) => {
  const { date, hospital } = req.query;
  if (availableTimes[hospital] && availableTimes[hospital][date]) {
    res.json(availableTimes[hospital][date]);
  } else {
    res.status(404).json({ error: "No available times for this date and hospital." });
  }
});

// Endpoint to handle booking an appointment
app.post("/api/book-appointment", async (req, res) => {
  const { name, phone, date, time, hospital } = req.body;

  if (!name || !phone || !date || !time || !hospital) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Check if the time slot is already booked
    const existingAppointment = await Appointment.findOne({ date, time, hospital });
    if (existingAppointment) {
      return res.status(400).json({ error: "This time slot is already booked. Please choose another time." });
    }

    // Save the new appointment
    const newAppointment = new Appointment({ name, phone, date, time, hospital });
    await newAppointment.save();
    res.status(200).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).json({ error: "Failed to book appointment. Please try again." });
  }
});

//hospital2
app.get("/api/available-times", (req, res) => {
  const { date, hospital } = req.query;
  if (availableTimes[hospital] && availableTimes[hospital][date]) {
    res.json(availableTimes[hospital][date]);
  } else {
    res.status(404).json({ error: "No available times for this date and hospital." });
  }
});

// Endpoint to handle booking an appointment
app.post("/api/book-hospital2", async (req, res) => {
  const { name, phone, date, time, hospital } = req.body;

  if (!name || !phone || !date || !time || !hospital) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Check if the time slot is already booked
    const existinghospital2 = await hospital2.findOne({ date, time, hospital });
    if (existinghospital2) {
      return res.status(400).json({ error: "This time slot is already booked. Please choose another time." });
    }

    // Save the new appointment
    const newAppointment = new hospital2({ name, phone, date, time, hospital });
    await newAppointment.save();
    res.status(200).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).json({ error: "Failed to book appointment. Please try again." });
  }
});
//hospital3
app.get("/api/available-times", (req, res) => {
  const { date, hospital } = req.query;
  if (availableTimes[hospital] && availableTimes[hospital][date]) {
    res.json(availableTimes[hospital][date]);
  } else {
    res.status(404).json({ error: "No available times for this date and hospital." });
  }
});

// Endpoint to handle booking an appointment
app.post("/api/book-hospital3", async (req, res) => {
  const { name, phone, date, time, hospital } = req.body;

  if (!name || !phone || !date || !time || !hospital) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Check if the time slot is already booked
    const existinghospital3 = await hospital3.findOne({ date, time, hospital });
    if (existinghospital3) {
      return res.status(400).json({ error: "This time slot is already booked. Please choose another time." });
    }

    // Save the new appointment
    const newAppointment = new hospital3({ name, phone, date, time, hospital });
    await newAppointment.save();
    res.status(200).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).json({ error: "Failed to book appointment. Please try again." });
  }
});
app.get("/api/available-times", (req, res) => {
  const { date, hospital } = req.query;
  if (availableTimes[hospital] && availableTimes[hospital][date]) {
    res.json(availableTimes[hospital][date]);
  } else {
    res.status(404).json({ error: "No available times for this date and hospital." });
  }
});

// Endpoint to handle booking an appointment
app.post("/api/book-hospital4", async (req, res) => {
  const { name, phone, date, time, hospital } = req.body;

  if (!name || !phone || !date || !time || !hospital) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Check if the time slot is already booked
    const existinghospital4 = await hospital4.findOne({ date, time, hospital });
    if (existinghospital4) {
      return res.status(400).json({ error: "This time slot is already booked. Please choose another time." });
    }

    // Save the new appointment
    const newAppointment = new hospital4({ name, phone, date, time, hospital });
    await newAppointment.save();
    res.status(200).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).json({ error: "Failed to book appointment. Please try again." });
  }
});
app.get("/api/available-times", (req, res) => {
  const { date, hospital } = req.query;
  if (availableTimes[hospital] && availableTimes[hospital][date]) {
    res.json(availableTimes[hospital][date]);
  } else {
    res.status(404).json({ error: "No available times for this date and hospital." });
  }
});

// Endpoint to handle booking an appointment
app.post("/api/book-hospital5", async (req, res) => {
  const { name, phone, date, time, hospital } = req.body;

  if (!name || !phone || !date || !time || !hospital) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Check if the time slot is already booked
    const existinghospital5 = await hospital5.findOne({ date, time, hospital });
    if (existinghospital5) {
      return res.status(400).json({ error: "This time slot is already booked. Please choose another time." });
    }

    // Save the new appointment
    const newAppointment = new hospital5({ name, phone, date, time, hospital });
    await newAppointment.save();
    res.status(200).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).json({ error: "Failed to book appointment. Please try again." });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
