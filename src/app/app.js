const express = require("express");
const routesApp = require("../routes/routes");
const app = express();
app.use(express.json());
app.use("/", routesApp);
module.exports = app;