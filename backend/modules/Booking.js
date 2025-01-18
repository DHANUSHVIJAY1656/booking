const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  hospital: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
