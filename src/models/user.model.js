const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 250 },
  email: { type: String, required: true, min: 6, max: 1000 },
  password: { type: String, required: true, min: 6, max: 250 },
  role: { type: Number, required: true, default: 2 },
});

exports.User = mongoose.model("users", UserSchema);
