const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  city: String,
});

// Create a mongoose model for the user schema
const User = mongoose.model("Contact", userSchema);

module.exports = User;
