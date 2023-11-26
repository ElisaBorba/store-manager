const connection = require('./connection');

const { formattedColumnNames, formattedPlaceholders } = require('../utils/toSnakeizeNames');

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

const insertProduct = async (productObject) => {
  const columns = formattedColumnNames(productObject);
  const placeholders = formattedPlaceholders(productObject);
  const query = `INSERT INTO products (${columns}) VALUE (${placeholders});`;
  const [{ name }] = await connection.execute(query, [...Object.values(productObject)]);
  return name;
};

module.exports = {
  getProducts,
  getSingleProduct,
  insertProduct,
};