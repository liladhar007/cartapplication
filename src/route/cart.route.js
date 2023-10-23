const cartController=require("../controller/cart.controller");
const { jwtToken } = require("../util/jwt.token");
const { cartValPost } = require("../validation/cart.validation");

const route=require("express").Router();

route.post("/cart/post",[jwtToken,cartValPost],cartController.cartCreate);
route.delete("/delete/:_id",cartController.deleteFromCart)

module.exports=route;