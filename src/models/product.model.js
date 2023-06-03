const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
});

exports.Product = mongoose.model("products", ProductSchema);