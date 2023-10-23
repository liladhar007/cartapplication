const cartController=require("../controller/cart.controller");
const { cartValJwt } = require("../util/cart.jwt");
const { cartValPost } = require("../validation/cart.validation");

const route=require("express").Router();

route.post("/cart/post",[cartValJwt,cartValPost],cartController.cartCreate);
route.delete("/delete/:_id",cartController.deleteFromCart)

module.exports=route;