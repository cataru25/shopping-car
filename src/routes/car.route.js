const { Router } = require("express");
const { healthCheck, welcomePage, Car } = require("../controllers");

const carRouter = new Router();
const CAR_URL_BASE = "/api/v1/car";

carRouter.get("/", welcomePage);
carRouter.get("/health", healthCheck);
carRouter.get(CAR_URL_BASE, Car.getAllProducts);
carRouter.post(CAR_URL_BASE, Car.addToCar);
carRouter.patch(`${CAR_URL_BASE}/:productId`, Car.updateQuantityProduct);
carRouter.delete(`${CAR_URL_BASE}/:productId`, Car.deleteProductFromCar);

module.exports = carRouter;
