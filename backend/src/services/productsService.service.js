const { productsModel } = require('../models');

const getAllProducts = async () => {
  const products = await productsModel.getProducts();
  return { status: 'SUCCESS', data: products };
};

const getProductById = async (productId) => {
  const product = await productsModel.getSingleProduct(productId);
  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }

  return { status: 'SUCCESS', data: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};