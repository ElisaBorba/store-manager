const { salesModel } = require('../models');

const getAllSales = async () => {
  const sales = await salesModel.getSales();
  return { status: 'SUCCESS', data: sales };
};

const getSaleById = async (saleId) => {
  const sale = await salesModel.getSingleSale(saleId);
  if (!sale || sale.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }

  return { status: 'SUCCESS', data: sale };
};

module.exports = {
  getAllSales,
  getSaleById,
};