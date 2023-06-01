const mongoose = require("mongoose");

const mongooseConnection = mongoose.connect(process.env.MONGODB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongooseConnection;
