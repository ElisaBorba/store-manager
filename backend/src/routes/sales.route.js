const route = require('express').Router();
const { validateSales, validateSalesQuantity } = require('../middlewares/validateSalesField');

const { salesController } = require('../controllers');

route.get('/', salesController.allSales);

route.get('/:id', salesController.saleById);

route.post('/', validateSales, validateSalesQuantity, salesController.addSales);
  
module.exports = route;
