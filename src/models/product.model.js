const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

exports.Product = mongoose.model("products", ProductSchema);
