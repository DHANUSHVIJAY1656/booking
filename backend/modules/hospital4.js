const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  hospital: String,
});

const hospital4 = mongoose.model("hospital4", appointmentSchema);

module.exports = hospital4;
