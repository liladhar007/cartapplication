const userController = require("../controller/user.controller");
const { postValRegistration ,postValLogin} = require("../validation/user.validation");

const { jwtToken } = require("../util/jwt.token");

const route = require("express").Router();

route.post("/user/registration",[postValRegistration],userController.postRegistration);
route.post("/user/Login",[postValLogin],userController.postLogin);
route.post("/user/Find",[jwtToken],userController.postFindLogin);
route.get("/user/get/info",userController.findPage);
module.exports = route;