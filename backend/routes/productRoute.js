const express = require("express");
const ayncHandler = require("express-async-handler");
const Product = require("../models/productModal");
const router = express.Router();

router.get(
  "/",
  ayncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  ayncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
  })
);

module.exports = router;
