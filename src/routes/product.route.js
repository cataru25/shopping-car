const { Router } = require("express");
const { healthCheck, welcomePage, Product } = require("../controllers");
const {
  validateCreateProduct,
  validateUpdateProduct,
  isAuth,
} = require("../middlewares");

const productRouter = new Router();
const PRODUCT_URL_BASE = "/api/v1/product";

productRouter.get("/", welcomePage);
productRouter.get("/health", healthCheck);

productRouter.get(PRODUCT_URL_BASE, Product.getAllProducts);
productRouter.get(`${PRODUCT_URL_BASE}/:productId`, Product.getOneProduct);
productRouter.post(
  PRODUCT_URL_BASE,
  isAuth(1),
  validateCreateProduct,
  Product.createProduct
);
productRouter.patch(
  `${PRODUCT_URL_BASE}/:productId`,
  isAuth(1),
  validateUpdateProduct,
  Product.updateProduct
);
productRouter.delete(
  `${PRODUCT_URL_BASE}/:productId`,
  isAuth(1),
  Product.deleteProduct
);

module.exports = productRouter;
