const cartController = require("../controller/cart.controller");
const { jwtToken } = require("../util/jwt.token");
const { cartValPost } = require("../validation/cart.validation");

const route = require("express").Router();

route.put("/cart", [jwtToken, cartValPost], cartController.cartUpData);
route.put("/remove", [jwtToken], cartController.removeFromCart);
route.delete("/delete/:_id", [jwtToken], cartController.deleteFromCart);

module.exports = route;