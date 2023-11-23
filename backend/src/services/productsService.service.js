const productModel = require('../models');

const getAllProducts = async () => {
  const products = await productModel.getProducts();

  return { status: 'SUCCESS', data: products };
};

module.exports = {
  getAllProducts,
};