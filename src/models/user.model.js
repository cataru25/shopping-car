const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: { type: Number, require: true, default: 2 },
});

exports.User = mongoose.model("users", UserSchema);
