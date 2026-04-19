const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String, // engineer, manager, analyst
});

module.exports = mongoose.model("User", UserSchema);