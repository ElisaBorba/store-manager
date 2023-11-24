const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );

  return products;
};

const getSingleProduct = async (productId) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

module.exports = {
  getProducts,
  getSingleProduct,
};