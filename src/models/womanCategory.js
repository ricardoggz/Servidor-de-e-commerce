const { Schema, model } = require("mongoose");

const womanCategory = new Schema({
  url: {
    type: String,
    required: true,
  },
});

module.exports = model("Woman", womanCategory);
