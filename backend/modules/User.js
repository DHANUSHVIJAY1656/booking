const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin1", "admin2", "admin3", "admin4", "admin5", "superadmin"],
  },
  hospital: {
    type: String,
    default: null,
  },
  // hospital: {
  //   type: String,
  //   required: function () {
  //     return ["admin1", "admin2", "admin3"].includes(this.role);
  //   },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
