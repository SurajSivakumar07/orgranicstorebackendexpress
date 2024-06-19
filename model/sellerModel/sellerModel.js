const mongoose = require("mongoose");

// Define the schema
const sellerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  sellerName: {
    type: String,
    required: false,
  },
  sellingType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  request: {
    type: String,
    required: false,
    default: "pending",
  },
});

// Create the model from the schema
const Product = mongoose.model("seller", sellerSchema);

module.exports = Product;
