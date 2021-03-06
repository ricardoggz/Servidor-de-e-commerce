const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/users");
//encriptar contraseña
const salt = bcrypt.genSaltSync();

//login user
exports.getUser = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email, password })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

//signup user
exports.addUsers = (req, res) => {
  const user = new User(req.body);
  const { password } = req.body;
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));

  user.password = bcrypt.hashSync(password, salt);
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
