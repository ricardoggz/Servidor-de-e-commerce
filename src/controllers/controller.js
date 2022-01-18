const debug = require("debug")("app:controller");
const { response } = require("express");
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
exports.addUsers = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.json("email utilizado");
    } 
    user = new User(req.body)
    await user.save()
     
  } catch (error) {
    res.json(error);
  }
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
