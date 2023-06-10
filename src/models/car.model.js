const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
  quantity: { type: Number, required: true },
});

exports.Car = mongoose.model("cars", CarSchema);
