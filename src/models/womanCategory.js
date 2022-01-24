const { Schema, model } = require("mongoose");

const womanCategory = new Schema({
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

module.exports = model("WomanProduct", womanCategory);
