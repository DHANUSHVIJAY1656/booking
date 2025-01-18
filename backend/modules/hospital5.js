const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  hospital: String,
});

const hospital5 = mongoose.model("hospital5", appointmentSchema);

module.exports = hospital5;
