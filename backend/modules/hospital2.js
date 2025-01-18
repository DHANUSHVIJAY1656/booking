const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  hospital: String,
});

const hospital2 = mongoose.model("hospital2", appointmentSchema);

module.exports = hospital2;
