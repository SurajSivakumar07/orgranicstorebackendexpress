const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Veggies = require("../model/veggiesModel/veggiesModel");

router.get("/", async (req, res) => {
  try {
    const veggies = await Veggies.find({});

    res.status(200).json(veggies);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const veggie = await Veggies.create(req.body);
    res.status(201).json(veggie);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "An error occurred" }); // Send error response with status 500
  }
});

module.exports = router;
