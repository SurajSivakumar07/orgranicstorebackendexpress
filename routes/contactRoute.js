const express = require("express");
const bodyParser = require("body-parser");
const User = require("../model/contactModel/contactModel"); // Import the User model

const router = express.Router();

router.use(bodyParser.json());

router.post("/", async (req, res) => {
  try {
    const contact = await User.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
