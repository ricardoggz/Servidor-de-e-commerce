const { Router } = require("express");
const controller = require("../controllers/womanCategory.controller");
const womanCategoryRoute = Router();

womanCategoryRoute.get("/api/womanproducts", controller.getProducts);

womanCategoryRoute.post("/api/womanproducts/addproduct", controller.addProduct);

module.exports= womanCategoryRoute;
