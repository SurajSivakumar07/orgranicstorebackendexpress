const express = require("express");
const router = express.Router();
const Product = require("../model/sellerModel/sellerModel");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getProduct, (req, res) => {
  res.json(res.product);
});

router.post("/", async (req, res) => {
  const product = new Product({
    id: req.body.id,
    sellingType: req.body.sellingType,
    name: req.body.name,
    img: req.body.img,
    price: req.body.price,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", getProduct, async (req, res) => {
  if (req.body.id != null) {
    res.product.id = req.body.id;
  }
  if (req.body.sellingType != null) {
    res.product.sellingType = req.body.sellingType;
  }
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.img != null) {
    res.product.img = req.body.img;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
