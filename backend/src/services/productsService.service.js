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

const insertNewProduct = async (newProduct) => {
  const product = await productsModel.insertProduct(newProduct);
  return { status: 'CREATED', data: product };
};

const updateProduct = async (productId, name) => {
  const product = await productsModel.updateProduct(productId, name);

  if (product < 1) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  } 

  return { status: 'SUCCESS',
    data: {
      id: Number(productId),
      name,
    } };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProduct,
};