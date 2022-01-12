const mongoose = require("mongoose");
const debug = require("debug")("app:database");
require("dotenv").config();

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => debug(`Conexion con mongo atlas exitosa`))
    .catch((error) => debug("Conexion fallida", error));
};

module.exports = {
  dbConnection,
};
