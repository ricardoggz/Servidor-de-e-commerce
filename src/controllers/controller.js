const debug = require("debug")("app:controller");
const User = require("../models/users");

exports.getHome = (req, res) => {
  const message = {
    message: "Bienvenido a la api",
  };
  res.send(`<h1>${message.message}</h1>`);
};

exports.getUsers = (req, res) => {
  User.find().then((data) => {
    res.json(data);
    debug("Peticion exitosa");
  }).catch((error)=>{
    res.json(error);
    debug("Petición fallida");
  });
};

exports.addUsers = (req, res) => {
  const user = User(req.body);
  user
    .save()
    .then((data) => {
      res.json(data);
      debug("Datos almacenados correctamente");
    })
    .catch((error) => {
      res.json(error);
      debug("Datos inválidos");
    });
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
