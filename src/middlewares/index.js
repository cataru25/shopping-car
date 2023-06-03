const { validateCreateUser, validateUpdateUser } = require("./user.middleware");
const {
  validateCreateProduct,
  validateUpdateProduct,
} = require("./product.middleware");

module.exports = {
  validateCreateUser,
  validateUpdateUser,
  validateCreateProduct,
  validateUpdateProduct,
};
