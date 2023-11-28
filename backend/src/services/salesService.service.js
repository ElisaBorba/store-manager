const { salesModel, productsModel } = require('../models');

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

const insertNewSales = async (newSales) => {
  const areProductsInDB = await Promise.all(newSales.map(async (sale) => {
    const product = await productsModel.getSingleProduct(sale.productId);
    return product;
  }));

  if (areProductsInDB.some((product) => product === undefined)) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  const newSaleCreated = await salesModel.insertSales(newSales);
  return { status: 'CREATED', data: newSaleCreated };
};

module.exports = {
  getAllSales,
  getSaleById,
  insertNewSales,
};