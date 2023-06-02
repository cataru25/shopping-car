const { Router } = require("express");
const { healthCheck, welcomePage, User } = require("../controllers");
const { validateCreateUser } = require("../middlewares");

const userRouter = new Router();
const USER_URL_BASE = "/api/v1/user";

userRouter.get("/", welcomePage);
userRouter.get("/health", healthCheck);
userRouter.get(USER_URL_BASE, User.getAllUsers);
userRouter.post(USER_URL_BASE, validateCreateUser, User.createUser);

module.exports = userRouter;
