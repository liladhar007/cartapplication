const userController = require("../controller/user.controller");
const { postValRegistration ,postValLogin} = require("../validation/user.validation");
const { findLoginVal } = require("../util/user.jwt");

const route = require("express").Router();

route.post("/user/registration",[postValRegistration],userController.postRegistration);
route.post("/user/Login",[postValLogin],userController.postLogin);
route.post("/user/Find",[findLoginVal],userController.postFindLogin);

module.exports = route;