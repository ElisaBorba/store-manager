const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { serviceSuccessProductById, getProductByIdFromModel } = require('../mocks/products.mock');

describe('Realizando testes Products - CONTROLLER:', function () {
  it('Recuperando um produto específico pelo seu ID com sucesso', async function () {
    sinon.stub(productsService, 'getProductById').withArgs(1).resolves(serviceSuccessProductById);

    // TESTE COM FALSO POSITIVO, VER PORQUE?

    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    
    await productsController.productById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getProductByIdFromModel);
  });
        
  afterEach(function () {
    sinon.restore();
  });
});
