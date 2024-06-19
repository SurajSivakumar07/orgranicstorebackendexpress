const mongoose = require("mongoose");

const veggiesModel = mongoose.Schema(
  {
    veggieName: {
      type: String,
      required: true,
    },

    Image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const veggies = mongoose.model("Veggies", veggiesModel);

module.exports = veggies;
