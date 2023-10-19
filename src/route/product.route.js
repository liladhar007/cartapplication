const productController = require("../controller/product.controller");
const { postValProduct } = require("../validation/product.validation");

const route= require("express").Router();

route.post("/postProduct/List",[postValProduct],productController.postProductList);
route.get("/getProduct/Find",productController.getProductFind);
route.get("/getFind/category/:_id",productController.getFindCategory);


module.exports=route;