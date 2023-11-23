const camelize = require('camelize');
const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(products);
};

module.exports = {
  getProducts,
};