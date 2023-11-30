const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');

const { allSalesFromModel, serviceSuccessAllSales } = require('../mocks/sales.mock');
  
describe('Testa requisição para os produtos - SERVICE:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando todos os produtos com sucesso', async function () {
    sinon.stub(salesModel, 'getSales').resolves(allSalesFromModel);

    const sales = await salesService.getAllSales();
  
    expect(sales).to.be.an('object');
    expect(sales).to.be.deep.equal(serviceSuccessAllSales);
  });
});
