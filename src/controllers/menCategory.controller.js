const MenProduct = require("../models/menCategory");

//get products Photos
exports.getProducts = (req, res) => {
  MenProduct.find()
    .then((data) => res.json(data))
    .catch((error) => cres.json(data));
};

//add product photo

exports.addProduct = (req, res) => {
  const { url, title, price } = req.body;
  const product = new MenProduct({ url, title, price });
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};
