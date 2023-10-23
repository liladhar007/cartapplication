const orderController = require("../controller/order.controller");
const { jwtToken } = require("../util/jwt.token");


const route = require("express").Router();

route.post("/orderCreate/List",[jwtToken], orderController.postCreate);
route.get("/getById/:_id",orderController.getById)


module.exports = route;