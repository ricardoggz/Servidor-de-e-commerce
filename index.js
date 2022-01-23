const app = require("./src/app/app");
const debug = require("debug")("app:main");
const { Config } = require("./src/config/config");

app.listen(Config.port, () => {
  debug(`servidor iniciado en https://server-e-commerce-api.herokuapp.com/`);
  console.log(`servidor iniciado en`);
});
