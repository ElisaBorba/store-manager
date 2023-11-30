const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');

const { allProductsFromModel, getProductByIdFromModel, returnFromDB } = require('../mocks/products.mock');

const INPUT_ID = 1;
const INPUT_NAME = {
  name: 'Martelo do Batman',
};
  
describe('Testa os requisição para Produtos - MODEL:', function () {
  it('Recuperando todos os produtos com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allProductsFromModel]);

    const products = await productsModel.getProducts();
  
    expect(products).to.be.an('array');
    expect(products).to.be.deep.equal(allProductsFromModel);
  });

  it('Recuperando um produto pelo seu ID com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[getProductByIdFromModel]]);

    const product = await productsModel.getSingleProduct(INPUT_ID);
  
    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(getProductByIdFromModel);
  });

  it('Atualizando um produto com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves(returnFromDB);

    const result = await productsModel.updateProduct(INPUT_ID, INPUT_NAME);

    sinon.assert.calledWithExactly(connection.execute, 'UPDATE products SET name = ? WHERE id = ?', [INPUT_NAME, INPUT_ID]);

    expect(result).to.deep.equal({
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: 'Rows matched: 1  Changed: 1  Warnings: 0',
      serverStatus: 2,
      warningStatus: 0,
      changedRows: 1,
    });
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
