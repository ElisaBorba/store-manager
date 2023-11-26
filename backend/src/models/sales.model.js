const connection = require('./connection');

const getSales = async () => {
  const [sales] = await connection.execute(
    `SELECT
    s.id AS saleId,
    s.date,
    sp.product_id AS productId,
    sp.quantity
  FROM sales AS s
  INNER JOIN sales_products AS sp
  ON s.id = sp.sale_id
  GROUP BY s.id, s.date, sp.product_id, sp.quantity
  ORDER BY s.id, productId;`,
  );

  return sales;
};

const getSingleSale = async (saleId) => {
  const [sale] = await connection.execute(`SELECT
  s.date AS date,
  sp.product_id AS productId,
  sp.quantity
FROM sales AS s
INNER JOIN sales_products AS sp
ON s.id = sp.sale_id
WHERE s.id = ?
GROUP BY s.id, s.date, sp.product_id, sp.quantity
ORDER BY s.id, productId;`, [saleId]);
  return sale;
};

module.exports = {
  getSales,
  getSingleSale,
};