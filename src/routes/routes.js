const { Router } = require("express");
const controller = require("../controllers/controller");
const routesApp = Router();

//GET
routesApp.get("/api/", controller.getHome);

routesApp.get("/api/users", controller.getUsers);

//POST
routesApp.post("/api/users", controller.addUsers);

//PUT
routesApp.put("/api/users/:id", controller.editUser);

//DELETE
routesApp.delete("/api/users/:id", controller.deleteUser);

module.exports = routesApp;
