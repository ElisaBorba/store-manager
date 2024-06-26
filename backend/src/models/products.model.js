const connection = require('./connection');

const getProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getSingleProduct = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

const insertProduct = async (productName) => {
  const query = 'INSERT INTO products (name) VALUES (?);';
  const [result] = await connection.execute(query, [productName]);
 
  return { id: result.insertId, name: productName };
};

const updateProduct = async (id, productName) => {
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  const [result] = await connection.execute(query, [productName, id]);
  return result;
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getProducts,
  getSingleProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
};
