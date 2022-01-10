const express = require("express");
const debug = require("debug")("app:main");
const app = express();
const PORT = 3000;
app.use(express.json());
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

app.get("/students", (req, res) => {
  const students = [
    {
      name: "Ernesto Guevara Guzmán",
      age: 16,
    },
    {
      name: "Fernando Gachuz Guzmán",
      age: 23,
    },
  ];

  res.json(students);
});

app.post( "/students", (req, res) => {

  res.json("datos recibidos");
  debug(req.body);
   
})

app.listen(PORT, () => debug(`servidor iniciado en http://localhost:${PORT}`));
