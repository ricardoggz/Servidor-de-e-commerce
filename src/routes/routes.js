const { Router } = require("express");
const controller = require("../controllers/controller");
const routesApp = Router();

//GET
routesApp.get("/api/", controller.getHome);

routesApp.get("/api/users", controller.getUsers);

//POST
routesApp.post("/users", controller.addUsers);

//PUT
routesApp.put("/users/:id", controller.editUser);

//DELETE
routesApp.delete("/users/:id", controller.deleteUser);

module.exports = routesApp;
