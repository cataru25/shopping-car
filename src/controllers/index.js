const { healthCheck, welcomePage } = require("./app.controller");
const User = require("./user.controller");

module.exports = {
  healthCheck,
  welcomePage,
  User,
};
