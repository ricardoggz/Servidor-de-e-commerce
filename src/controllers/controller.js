const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/users");

//encriptar contraseña
const salt = bcrypt.genSaltSync();
//all users
exports.getUsers = (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

//one user
exports.getUser = (req, res) => {
  const { email } = req.params;
  User.findOne({ email })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

//create user
exports.addUsers = (req, res) => {
  const user = new User(req.body);
  const { password } = req.body;
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));

  user.password= bcrypt.hashSync(password, salt);
};

//update user
exports.editUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  User.updateOne({ _id: id }, { $set: { name, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

//delete user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};
