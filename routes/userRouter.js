const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/securityMdeol/securityModel");

const router = express.Router();
const secretKey = process.env.ACCESS_TOKEN_SECRET;

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const accessToken = jwt.sign(
    { username: user.username, id: user._id },
    secretKey
  );
  res.json({ accessToken });
});

// Registration route
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Create new user
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(200).json({ newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
