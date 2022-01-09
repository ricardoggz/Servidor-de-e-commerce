const express = require("express");
const debug = require("debug")("app:main");
const app = express();
const PORT = 3000;
require("dotenv").config();
//GET
app.get("/", (req, res) => {
  const data = [
    {
      name: "Ricardo",
      lastName: "Guevara",
      hoobie: "Chess",
      age: 23,
    },
  ];
  res.json(data);
});

app.listen(PORT, () => debug(`servidor iniciado en http://localhost:${PORT}`));
