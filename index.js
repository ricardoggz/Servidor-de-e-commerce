const express = require("express");
const res = require("express/lib/response");
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
      age: 21,
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
  ];

  res.json(students);
});

app.post("/students", (req, res) => {
  const { name, age } = req.body;
  debug(name, age);
  res.json("datos recibidos");
});

app.put("/students/:id", (req, res) => {
  const id = req.params.id;
  debug(id);
  res.json("datos recibidos para actualizar");
});

app.delete("/students/:id", (req, res) => {
  const id = req.params.id;
  debug(id);
  res.json("datos recibidos para eliminar");
});

app.listen(PORT, () => debug(`servidor iniciado en http://localhost:${PORT}`));
