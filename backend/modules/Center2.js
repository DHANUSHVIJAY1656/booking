const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  hospital: { type: String, required: true },
});

const Center2 = mongoose.model("Center2", bookingSchema);

module.exports = Center2;
