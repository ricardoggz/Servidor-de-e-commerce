const { Schema, model } = require("mongoose");

const menCategory = new Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = model("MenProduct", menCategory);
