const { expect } = require('chai');
const sinon = require('sinon');

const { validateSales, validateSalesQuantity } = require('../../../src/middlewares/validateSalesField');
const { VALID_SALES,
  INVALID_SALES_1,
  INVALID_SALES_2,
  INVALID_SALES_3 } = require('../mocks/products.mock');

describe('Testa Middlewares para criação de vendas', function () {
  it('Deve chamar NEXT quando recebe os dados válidos', function () {
    const req = { body: VALID_SALES };
    const res = {};
    const next = sinon.stub().returns();

    validateSales(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Deve apresentar um erro quando "productId" estiver ausente', function () {
    const req = { body: INVALID_SALES_1 };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    validateSales(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"productId" is required' });
    expect(next).to.not.have.been.calledWith();
  });

  it('Deve apresentar um erro quando "quantity" estiver ausente', function () {
    const req = { body: INVALID_SALES_2 };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    validateSales(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
    expect(next).to.not.have.been.calledWith();
  });

  it('Deve apresentar um erro quando "quantity" for igual ou menor que 1', function () {
    const req = { body: INVALID_SALES_3 };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    validateSalesQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
    expect(next).to.not.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});