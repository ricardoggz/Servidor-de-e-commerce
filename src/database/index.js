const mongoose = require("mongoose");
const debug = require("debug")("app:database");
require("dotenv").config();

//conexión con mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    debug(`Conexión con mongo atlas exitosa`);
  })
  .catch((error) => debug(error));
