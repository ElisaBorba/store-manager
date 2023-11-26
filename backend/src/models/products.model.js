const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getSingleProduct = async (productId) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

const insertProduct = async (valueName) => {
  const query = 'INSERT INTO products (name) VALUES (?);';
  const [result] = await connection.execute(query, [valueName]);
 
  return { id: result.insertId, name: valueName };
};

module.exports = {
  getProducts,
  getSingleProduct,
  insertProduct,
};
