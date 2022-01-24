const { Schema, model } = require("mongoose");

const bestSellers = new Schema({
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
    rewuireed: true,
  },
});

module.exports = model("BestSellerProduct", bestSellers);
