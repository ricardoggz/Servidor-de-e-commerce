const WomanProduct = require("../models/womanCategory");

exports.getProducts = (req, res) => {
  WomanProduct.find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

exports.addProduct = (req, res) => {
  const { url, title, price } = req.body;
  const product = new WomanProduct({ url, title, price });
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};
