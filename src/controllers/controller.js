const debug = require("debug")("app:controller");
const User = require("../models/users");

exports.getHome = (req, res) => {
  const message = {
    message: "Bienvenido a la api",
  };
  res.send(`<h1>${message.message}</h1>`);
};

exports.getUsers = (req, res) => {
  const users = [
    {
      name: "Ricardo José Guevara Guzmán",
      age: 21,
    },
    {
      name: "Carolina Magos Salazar",
      age: 21,
    },
    {
      name: "Ernesto Guevara Guzmán",
      age: 16,
    },
  ];

  res.json(users);
};

exports.addUsers = async (req, res) => {
  try {
    const { name, email } = req.body;
    debug(name, email);
    if (name && email) {
      const newUser = new User({ name, email });
      debug(newUser);
      res.json("datos recibidos");
    } else {
      res.json("Datos inválidos");
    }
  } catch (error) {
    res.json(error);
  }
};

exports.editUser = (req, res) => {
  const id = req.params.id;
  debug(id);
  res.json("datos recibidos para actualizar");
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  debug(id);
  res.json("datos recibidos para actualizar");
};
