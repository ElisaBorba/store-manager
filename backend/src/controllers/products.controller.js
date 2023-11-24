const { productsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allProducts = async (_req, res) => {
  const { status, data } = await productsService.getAllProducts();
  const statusCode = mapStatusHTTP(status);

  return res.status(statusCode).json(data);
};

const productById = async (_req, res) => {
  const { id } = _req.params;
  const { status, data } = await productsService.getProductById(id);
  const statusCode = mapStatusHTTP(status);

  return res.status(statusCode).json(data);
};

module.exports = {
  allProducts,
  productById,
};