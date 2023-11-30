const { productsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allProducts = async (_req, res) => {
  const { status, data } = await productsService.getAllProducts();
  return res.status(mapStatusHTTP(status)).json(data);
};

const productById = async (_req, res) => {
  const { id } = _req.params;
  const { status, data } = await productsService.getProductById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const addProduct = async (_req, res) => {
  const { status, data } = await productsService.insertNewProduct(_req.body.name);
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateProduct = async (_req, res) => {
  const { id } = _req.params;
  const { status, data } = await productsService.updateProduct(id, _req.body.name);
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteProduct = async (_req, res) => {
  const { id } = _req.params;
  const { status, data } = await productsService.deleteProduct(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allProducts,
  productById,
  addProduct,
  updateProduct,
  deleteProduct,
};