const orderController = require("../controller/order.controller");


const route = require("express").Router();

route.post("/orderCreate/List", orderController.postCreate);


module.exports = route;