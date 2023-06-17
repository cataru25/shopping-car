const { healthCheck, welcomePage } = require("./app.controller");
const User = require("./user.controller");
const Product = require("./product.controller");
const Car = require("./car.controller");
const Auth = require("./auth.controller");
const Order = require("./order.controller");

module.exports = {
  healthCheck,
  welcomePage,
  User,
  Product,
  Car,
  Auth,
  Order,
};
