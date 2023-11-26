const validateSales = (req, res, next) => {
  // Será validado que não é possível cadastrar uma venda sem o campo productId
  
  //   Será validado que não é possível cadastrar uma venda sem o campo quantity
    
  //   if (!) {
  //     return res.status(400).json({ message: '"productId" is required' });
  //   }

  // if (!) {
  //     return res.status(400).json({ "message": "\"quantity\" is required" });
  //   }
        
  next();
};

const validateSalesFields = (req, res, next) => {
  next();
};
  
module.exports = {
  validateSales,
  validateSalesFields,

};