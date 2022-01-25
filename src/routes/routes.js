const { Router } = require("express");
const controller = require("../controllers/controller");
const routesApp = Router();

//LOGIN
routesApp.post("/api/users/login", controller.getUser);

//SIGNUP
routesApp.post("/api/users/signup", controller.addUsers);

//PUT user
routesApp.put("/api/users/:id", controller.editUser);

//DELETE user
routesApp.delete("/api/users/:id", controller.deleteUser);

module.exports = routesApp;
