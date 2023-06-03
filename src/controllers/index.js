const { healthCheck, welcomePage } = require("./app.controller");
const User = require("./user.controller");
const Product = require("./product.controller");

module.exports = {
  healthCheck,
  welcomePage,
  User,
  Product,
};
