const { errorHandler, notFoundHandler } = require("./error.handler");
const { validateCreateUser, validateUpdateUser } = require("./user.handler");
const {
  validateCreateProduct,
  validateUpdateProduct,
} = require("./product.handler");

module.exports = {
  validateCreateUser,
  validateUpdateUser,
  validateCreateProduct,
  validateUpdateProduct,
  errorHandler,
  notFoundHandler,
};
