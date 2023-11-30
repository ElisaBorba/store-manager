const allSalesFromModel = [
  {
    saleId: 1,
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
];
  
const serviceSuccessAllSales = {
  status: 'SUCCESS',
  data: allSalesFromModel,
};

const saleByIdFromModel = [
  {
    date: '2023-11-30T12:58:04.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    date: '2023-11-30T12:58:04.000Z',
    productId: 2,
    quantity: 10,
  },
];
  
module.exports = {
  allSalesFromModel,
  serviceSuccessAllSales,
  saleByIdFromModel,
};
