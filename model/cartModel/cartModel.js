const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  image: {
    type: String,
    require: true,
  },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

//hashed passoword for pass
