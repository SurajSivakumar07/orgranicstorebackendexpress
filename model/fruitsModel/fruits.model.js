const mongoose = require("mongoose");

const fruitsScheme = mongoose.Schema(
  {
    fruitsName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const fruits = mongoose.model("Fruits", fruitsScheme);

module.exports = fruits;
