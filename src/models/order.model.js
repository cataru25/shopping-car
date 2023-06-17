const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 250 },
  email: { type: String, required: true, min: 6, max: 1000 },
  products: [],
});

exports.Order = mongoose.model("orders", OrderSchema);
