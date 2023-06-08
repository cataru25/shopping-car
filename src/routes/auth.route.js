const { Router } = require("express");
const { Auth } = require("../controllers");

const authRouter = new Router();
const AUTH_URL_BASE = "/api/v1";

authRouter.post(`${AUTH_URL_BASE}/register`, Auth.login);

module.exports = authRouter;
