const { Router } = require("express");
const controller = require("../controllers/menCategory.controller");
const menCategoryRoute = Router();

menCategoryRoute.get("/api/menproducts", controller.getProducts);

menCategoryRoute.post("/api/menproducts/addproduct", controller.addProduct);

module.exports = menCategoryRoute;
