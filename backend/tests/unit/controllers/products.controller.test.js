const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { 
  serviceSuccessProductById,
  getProductByIdFromModel,
  updatedProduct,
} = require('../mocks/products.mock');

describe('Testa requisição para os produtos - CONTROLLER:', function () {
  it('Recuperando um produto pelo seu ID com sucesso', async function () {
    sinon.stub(productsService, 'getProductById').withArgs(1).resolves(serviceSuccessProductById);

    // TESTE COM FALSO POSITIVO, VER PORQUE?

    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    
    await productsController.productById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getProductByIdFromModel);
  });

  it('Atualizando um produto com sucesso', async function () {
    sinon.stub(productsService, 'getProductById').withArgs(1).resolves(serviceSuccessProductById);

    const req = {
      params: { id: 1 },
      body: { name: 'Martelo do Batman' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.updateProduct(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updatedProduct);
  });
        
  afterEach(function () {
    sinon.restore();
  });
});
