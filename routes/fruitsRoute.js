const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Fruits = require("../model/fruitsModel/fruits.model");

router.get("/", async (req, res) => {
  try {
    const fruits = await Fruits.find({});

    res.status(200).json(fruits);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const fruit = await Fruits.create(req.body);
    res.status(201).json(fruit);
  } catch (err) {
    console.log(err.message); // Correct the typo here
    res.status(500).json({ message: "An error occurred" }); // Send error response with status 500
  }
});

module.exports = router;
