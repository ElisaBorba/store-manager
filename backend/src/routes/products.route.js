const route = require('express').Router();
const validateName = require('../middlewares/validateProductField');
const { productsController } = require('../controllers');

route.get('/', productsController.allProducts);

route.get('/:id', productsController.productById);

route.post('/', validateName, productsController.addProduct);

route.put('/:id', validateName, productsController.updateProduct);

route.delete('/:id', productsController.deleteProduct);
  
module.exports = route;
