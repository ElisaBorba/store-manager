const route = require('express').Router();

const productController = require('../controllers');

route.get('/', productController.allProducts);
  
module.exports = route;
