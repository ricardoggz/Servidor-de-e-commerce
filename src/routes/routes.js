const { Router } = require("express");
const controller = require("../controllers/controller");
const routesApp = Router();

//GET
routesApp.get("/api/", controller.getHome);

routesApp.get("/api/students", controller.getUsers);

//POST
routesApp.post("/students", controller.addUsers);

//PUT
routesApp.put("/students/:id", controller.editUser);

//DELETE
routesApp.delete("/students/:id", controller.deleteUser);

module.exports = routesApp;
