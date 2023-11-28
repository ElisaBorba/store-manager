const { expect } = require('chai');
const sinon = require('sinon');

const myMiddlewares = require('../../../src/middlewares/validateProductField');

const VALID_NAME = 'Barry';
const INVALID_NAME = 'Barr';

describe('valida Middleware para name', function () {
  it('Deve chamar NEXT se "name" foi válido', function () {
    const req = { body: { name: VALID_NAME } };
    const res = {};
    const next = sinon.stub().returns();

    myMiddlewares(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Deve retornar um erro se estiver faltando "name"', function () {
    const req = { body: {} };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    myMiddlewares(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
    expect(next).to.not.have.been.calledWith();
  });

  it('Deve retornar um erro se "name" for menor que 5 caractéres', function () {
    const req = { body: { name: INVALID_NAME } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    myMiddlewares(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
    expect(next).to.not.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});
