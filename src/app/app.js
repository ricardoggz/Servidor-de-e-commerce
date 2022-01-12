const express = require("express");
const routesApp = require("../routes/routes");
const { dbConnection } =require("../database/index");
const app = express();
app.use(express.json());
app.use("/", routesApp);
dbConnection();
module.exports = app;