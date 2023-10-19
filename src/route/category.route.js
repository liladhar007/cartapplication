const categoryController = require("../controller/category.controller");
const { postValCategory } = require("../validation/category.validation");

const route = require("express").Router();

route.post("/category/post",[postValCategory],categoryController.categoryCreate);

module.exports=route;