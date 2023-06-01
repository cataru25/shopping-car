const { Router } = require("express");
const { healthCheck, welcomePage } = require("../controllers");

const userRouter = new Router();

userRouter.get("/", welcomePage);
userRouter.get("/health", healthCheck);

module.exports = userRouter;
