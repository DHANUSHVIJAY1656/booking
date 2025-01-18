const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  hospital: String,
});

const hospital3 = mongoose.model("hospital3", appointmentSchema);

module.exports = hospital3;
