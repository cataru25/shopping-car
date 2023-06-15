const { Router } = require("express");
const { healthCheck, welcomePage, User } = require("../controllers");
const {
  validateCreateUser,
  validateUpdateUser,
  isAuth,
} = require("../middlewares");

const userRouter = new Router();
const USER_URL_BASE = "/api/v1/user";

userRouter.get("/", welcomePage);
userRouter.get("/health", healthCheck);

userRouter.get(USER_URL_BASE, isAuth(1), User.getAllUsers);
userRouter.get(`${USER_URL_BASE}/:userId`, isAuth(), User.getOneUser);
userRouter.post(USER_URL_BASE, validateCreateUser, User.createUser);
userRouter.patch(
  `${USER_URL_BASE}/:userId`,
  isAuth(1),
  validateUpdateUser,
  User.updateUser
);
userRouter.delete(`${USER_URL_BASE}/:userId`, isAuth(1), User.deleteUser);

module.exports = userRouter;
