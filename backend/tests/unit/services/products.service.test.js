const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

const {
  allProductsFromModel,
  getProductByIdFromModel,
  serviceSuccessAllProducts,
  serviceSuccessProductById,
  serviceNotFound,
  updatedProduct,
} = require('../mocks/products.mock');

const INPUT_ID = 1;
const NOT_FOUND_ID = 5;
const PRODUCT_NAME = 'Martelo do Batman';
  
describe('Testa requisição para os produtos - SERVICE:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todos os produtos com sucesso', async function () {
    sinon.stub(productsModel, 'getProducts').resolves(allProductsFromModel);

    const products = await productsService.getAllProducts();
  
    expect(products).to.be.an('object');
    expect(products).to.be.deep.equal(serviceSuccessAllProducts);
  });

  it('Recuperando um produto pelo seu ID com sucesso', async function () {
    sinon.stub(productsModel, 'getSingleProduct').withArgs(INPUT_ID).resolves(getProductByIdFromModel);

    const product = await productsService.getProductById(INPUT_ID);
  
    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(serviceSuccessProductById);
  });

  it('Recuperando um produto pelo seu ID, caso não encontrado', async function () {
    sinon.stub(productsModel, 'getSingleProduct').withArgs(NOT_FOUND_ID).resolves(null);
    
    const product = await productsService.getProductById(NOT_FOUND_ID);
  
    expect(product).to.be.an('object');
    expect(product.status).to.equal('NOT_FOUND');
    expect(product.data).to.deep.equal({ message: 'Product not found' }); 
  });

  it('Atualizando um produto com sucesso', async function () {
    sinon.stub(productsModel, 'updateProduct')
      .onFirstCall()
      .resolves({ affectedRows: 1 })
      .onSecondCall()
      .resolves(updatedProduct);
  
    const responseService = await productsService.updateProduct(INPUT_ID, PRODUCT_NAME);

    expect(responseService.status).to.equal('SUCCESS');
    expect(responseService.data).to.deep.equal(updatedProduct);
  });

  it('Deleta um produto que não existe no banco de dados', async function () {
    sinon.stub(productsModel, 'deleteProduct').resolves({ affectedRows: 0 });

    const responseService = await productsService.deleteProduct(NOT_FOUND_ID);

    expect(responseService.status).to.equal(serviceNotFound.status);
    expect(responseService.data).to.deep.equal(serviceNotFound.data);
  });
});
