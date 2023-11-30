const VALID_SALES = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const INVALID_SALES_1 = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    quantity: 5,
  },
];

const INVALID_SALES_2 = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
  },
];

const INVALID_SALES_3 = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 0,
  },
];

const allProductsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const getProductByIdFromModel = {
  id: 1,
  name: 'Martelo de Thor',
};

const updatedProduct = {
  id: 1,
  name: 'Martelo do Batman',
};

const returnFromDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1,
  },
  undefined,
];

// const serviceCreated = {
//   status: 'CREATED',
//   data: productFromModel,
// };

const serviceSuccessAllProducts = {
  status: 'SUCCESS',
  data: allProductsFromModel,
};

const serviceSuccessProductById = {
  status: 'SUCCESS',
  data: getProductByIdFromModel,
};

const serviceNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'message' },
};

const serviceConflict = {
  status: 'CONFLICT',
  data: { message: 'message' },
};

const serviceInvalidValue = {
  status: 'INVALID_VALUE',
  data: { message: 'message' },
};

module.exports = {
  allProductsFromModel,
  getProductByIdFromModel,
  // serviceCreated,
  serviceSuccessProductById,
  serviceSuccessAllProducts,
  serviceNotFound,
  serviceConflict,
  serviceInvalidValue,
  VALID_SALES,
  INVALID_SALES_1,
  INVALID_SALES_2,
  INVALID_SALES_3,
  returnFromDB,
  updatedProduct,
};
