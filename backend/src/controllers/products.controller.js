const productsService = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allProducts = async (req, res) => {
  const { status, data } = await productsService.getAllProducts();
  const statusCode = mapStatusHTTP(status);

  return res.status(statusCode).json(data);
};

module.exports = {
  allProducts,
};