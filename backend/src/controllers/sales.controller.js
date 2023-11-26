const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allSales = async (_req, res) => {
  const { status, data } = await salesService.getAllSales();
  return res.status(mapStatusHTTP(status)).json(data);
};

const saleById = async (_req, res) => {
  const { id } = _req.params;
  const { status, data } = await salesService.getSaleById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allSales,
  saleById,
};