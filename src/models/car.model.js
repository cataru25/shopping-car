const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
  name: { type: mongoose.Schema.Types.String, ref: "products" },
  quantity: { type: Number, required: true },
});

exports.Car = mongoose.model("cars", CarSchema);
