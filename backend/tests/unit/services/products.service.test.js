const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

const { allProductsFromModel, getProductByIdFromModel, serviceSuccessAllProducts, serviceSuccessProductById } = require('../mocks/products.mock');
  
describe('Realizando testes de Products - SERVICE:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todos os produtos com sucesso', async function () {
    sinon.stub(productsModel, 'getProducts').resolves(allProductsFromModel);

    const products = await productsService.getAllProducts();
  
    expect(products).to.be.an('object');
    expect(products).to.be.deep.equal(serviceSuccessAllProducts);
  });

  it('Recuperando um produto específico pelo seu ID com sucesso', async function () {
    sinon.stub(productsModel, 'getSingleProduct').withArgs(1).resolves(getProductByIdFromModel);

    const INPUT_ID = 1;
    const product = await productsService.getProductById(INPUT_ID);
  
    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(serviceSuccessProductById);
  });

  it('Recuperando um produto específico pelo seu ID, caso não encontrado', async function () {
    sinon.stub(productsModel, 'getSingleProduct').withArgs(5).resolves(null);
    
    const INPUT_ID = 5;
    const product = await productsService.getProductById(INPUT_ID);
  
    expect(product).to.be.an('object');
    expect(product.status).to.equal('NOT_FOUND');
    expect(product.data).to.deep.equal({ message: 'Product not found' }); 
  });
});
