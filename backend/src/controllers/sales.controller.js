const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allSales = async (_req, res) => {
  const { status, data } = await salesService.getAllSales();
  const statusCode = mapStatusHTTP(status);

  return res.status(statusCode).json(data);
};

const saleById = async (_req, res) => {
  const { id } = _req.params;
  const { status, data } = await salesService.getSaleById(id);
  const statusCode = mapStatusHTTP(status);

  return res.status(statusCode).json(data);
};

module.exports = {
  allSales,
  saleById,
};