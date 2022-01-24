const { Router }= require("express");
const controller = require("../controllers/bestSellers.controller");
const bestSellersProductsRoute = Router();

bestSellersProductsRoute.get("/api/bestsellerproducts", controller.getProducts);

bestSellersProductsRoute.post("/api/bestsellerproducts/addproduct", controller.addProduct);

module.exports = bestSellersProductsRoute;