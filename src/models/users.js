const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.plugin(uniqueValidator, { message: "Nombre de usuario existente" });

module.exports = model("User", userSchema);
