const app = require("./src/app/app");
const debug = require("debug")("app:main");
const { Config } = require("./src/config/config");

app.listen(Config.port, () => {
  debug(`servidor iniciado en ${Config.port}`);
  console.log(`servidor iniciado en ${Config.port}`);
});
