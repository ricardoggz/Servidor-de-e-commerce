const debug = require("debug")("app:controller");
const User = require("../models/users");
//all users
exports.getUsers = (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

//one user
exports.getUser = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

//create user
exports.addUsers = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
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
  .then((data)=>res.json(data))
  .catch((error)=>res.json(error));
};
