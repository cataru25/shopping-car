const { Router } = require("express");
const { healthCheck, welcomePage, Order } = require("../controllers");
const { isAuth } = require("../middlewares");

const orderRouter = new Router();
const ORDER_URL_BASE = "/api/v1/order";

orderRouter.get("/", welcomePage);
orderRouter.get("/health", healthCheck);

orderRouter.get(ORDER_URL_BASE, isAuth(1), Order.getAllOrders);
orderRouter.post(ORDER_URL_BASE, Order.addOrder);

module.exports = orderRouter;
