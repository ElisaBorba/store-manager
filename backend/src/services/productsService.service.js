const { productsModel } = require('../models');
// const schema = require('./validations/validateInputValues');

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
  // const error = schema.validateRequestProduct(newProduct);

  // if (error) {
  //   return { status: error.status, data: { message: error.message } }; 
  // }
  
  const product = await productsModel.insertProduct(newProduct);

  if (!product) {
    return { status: 'INVALID_VALUE', data: { message: 'Product not created' } };
  }

  return { status: 'CREATED', data: product };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
};