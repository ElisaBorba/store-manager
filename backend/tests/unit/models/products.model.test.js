const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');

const { allProductsFromModel, getSingleProductFromModel } = require('../mocks/products.mock');
  
describe('Realizando testes de Products MODEL:', function () {
  it('Recuperando todos os produtos com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allProductsFromModel]);

    const products = await productsModel.getProducts();
  
    expect(products).to.be.an('array');
    expect(products).to.be.deep.equal(allProductsFromModel);
  });

  it('Recuperando um produto específico pelo seu ID com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[getSingleProductFromModel]]);

    const INPUT_ID = 1;
    const product = await productsModel.getSingleProduct(INPUT_ID);
  
    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(getSingleProductFromModel);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
