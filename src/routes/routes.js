const { Router } = require("express");
const controller = require("../controllers/controller");
const routesApp = Router();

//GET all users
routesApp.get("/api/users", controller.getUsers);

//GET one user
routesApp.get("/api/users/:id", controller.getUser);

//POST user
routesApp.post("/api/users", controller.addUsers);

//PUT user
routesApp.put("/api/users/:id", controller.editUser);

//DELETE user
routesApp.delete("/api/users/:id", controller.deleteUser);

module.exports = routesApp;
