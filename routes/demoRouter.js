const express = require("express");
const router = express.Router();

const userModel = require("../model/securityMdeol/securityModel");

router.post("/", async (req, res) => {
  const { userName, password } = req.body;

  const data = await userModel.findOne({ userName });

  console.log(data);
});

module.exports = router;
