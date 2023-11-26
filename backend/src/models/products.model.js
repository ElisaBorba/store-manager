const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getSingleProduct = async (productId) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [productId]);
  return product;
};

const insertProduct = async (productName) => {
  const query = 'INSERT INTO products (name) VALUES (?);';
  const [result] = await connection.execute(query, [productName]);
 
  return { id: result.insertId, name: productName };
};

module.exports = {
  getProducts,
  getSingleProduct,
  insertProduct,
};
