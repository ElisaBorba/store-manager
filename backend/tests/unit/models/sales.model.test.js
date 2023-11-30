const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');

const { allSalesFromModel, saleByIdFromModel } = require('../mocks/sales.mock');

const INPUT_ID = 1;

describe('Testa requisição para as vendas - MODEL:', function () {
  it('Recuperando todas as vendas com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesFromModel]);

    const sales = await salesModel.getSales();
  
    expect(sales).to.be.an('array');
    expect(sales).to.be.deep.equal(allSalesFromModel);
  });

  it('Recuperando um produto pelo seu ID com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[saleByIdFromModel]]);

    const product = await salesModel.getSingleSale(INPUT_ID);
  
    expect(product).to.be.an('array');
    expect(product).to.be.deep.equal([saleByIdFromModel]);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
