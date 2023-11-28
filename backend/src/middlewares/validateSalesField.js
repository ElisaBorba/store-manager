const validateSales = (req, res, next) => {
  const missingProductId = req.body.every((saleProps) => 'productId' in saleProps);

  if (!missingProductId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  const missingQuantity = req.body.every((sale) => 'quantity' in sale);

  if (!missingQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
        
  next();
};

const validateSalesQuantity = (req, res, next) => {
  const quantityProps = req.body.filter((sale) => {
    const invalidQuantity = sale.quantity < 1;
    return invalidQuantity;
  });

  if (quantityProps.length > 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};
  
module.exports = {
  validateSales,
  validateSalesQuantity,
};