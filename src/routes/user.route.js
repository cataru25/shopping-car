const { Router } = require("express");
const { healthCheck, welcomePage, User } = require("../controllers");
const { validateCreateUser, validateUpdateUser } = require("../middlewares");

const userRouter = new Router();
const USER_URL_BASE = "/api/v1/user";

userRouter.get("/", welcomePage);
userRouter.get("/health", healthCheck);
userRouter.get(USER_URL_BASE, User.getAllUsers);
userRouter.get(`${USER_URL_BASE}/:userId`, User.getOneUser);
userRouter.post(USER_URL_BASE, validateCreateUser, User.createUser);
userRouter.patch(
  `${USER_URL_BASE}/:userId`,
  validateUpdateUser,
  User.updateUser
);

module.exports = userRouter;
