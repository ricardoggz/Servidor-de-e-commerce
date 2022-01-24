const BestSellerProduct = require("../models/bestSellers");

exports.getProducts = (req, res) => {
  BestSellerProduct.find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

exports.addProduct = (req, res) => {
  const { url, title, price } = req.body;
  const product = new BestSellerProduct({ url, title, price });
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};
