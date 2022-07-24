const { expect } = require('chai');
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { stub } = require('sinon');
const proxyquire = require('proxyquire');
const { makeMockModels } = require('sequelize-test-helpers');
const { clientAccount } = require('../../mocks/ContasData');
const { newOperation } = require('../../mocks/OperacoesData');
const { newAccountOperation } = require('../../mocks/bodyRequest');
const contasServices = require('../../../src/services/contas.services');

const mockModels = makeMockModels({
  Contas: { findOne: stub() },
  Operacoes: { create: stub() },
});

const services = proxyquire(
  '../../../src/services/contas.services',
  { '../database/models': mockModels },
);

describe('tests contas.services', () => {
  describe('when making a deposit', () => {
    describe('when client is authorized', () => {
      beforeEach(() => {
        mockModels.Contas.findOne.resolves(clientAccount);
        mockModels.Operacoes.create.resolves(newOperation);
      });
      afterEach(() => {
        mockModels.Contas.findOne.resetHistory();
        mockModels.Operacoes.create.resetHistory();
      });

      it('should return the new operation register', async () => {
        const account = await services.accountBalanceOperation(newAccountOperation, 'deposito', stub());
        expect(account).to.have.property('valor');
        expect(account).to.have.property('codTipoOperacao');
        expect(account).to.have.property('codCliente');
        expect(account).to.have.property('criacao');
      });

      it('should call Contas.findOne with the correct params', async () => {
        await services.accountBalanceOperation(newAccountOperation, 'deposito', stub());
        const calledArgs = mockModels.Contas.findOne.firstCall.args;
        expect(calledArgs[0].where.codCliente).equal(newAccountOperation.codCliente);
      });

      it('should call Operacoes.create with the correct params', async () => {
        await services.accountBalanceOperation(newAccountOperation, 'deposito', stub());
        const calledArgs = mockModels.Operacoes.create.firstCall.args;
        expect(calledArgs[0].valor).equal(newAccountOperation.valor);
        expect(calledArgs[0].codCliente).equal(newAccountOperation.codCliente);
        expect(calledArgs[0].codTipoOperacao).equal(1);
      });
    });
  });
  describe('when making a withdrawal', () => {
    describe('when client is authorized', () => {
      beforeEach(() => {
        mockModels.Contas.findOne.resolves(clientAccount);
        mockModels.Operacoes.create.resolves(newOperation);
      });
      afterEach(() => {
        mockModels.Contas.findOne.resetHistory();
        mockModels.Operacoes.create.resetHistory();
      });

      it('should return the new operation register', async () => {
        const account = await services.accountBalanceOperation(newAccountOperation, 'saque', stub());
        expect(account).to.have.property('valor');
        expect(account).to.have.property('codTipoOperacao');
        expect(account).to.have.property('codCliente');
        expect(account).to.have.property('criacao');
      });

      it('should call Contas.findOne with the correct params', async () => {
        await services.accountBalanceOperation(newAccountOperation, 'saque', stub());
        const calledArgs = mockModels.Contas.findOne.firstCall.args;
        expect(calledArgs[0].where.codCliente).equal(newAccountOperation.codCliente);
      });

      it('should call Operacoes.create with the correct params', async () => {
        await services.accountBalanceOperation(newAccountOperation, 'saque', stub());
        const calledArgs = mockModels.Operacoes.create.firstCall.args;
        expect(calledArgs[0].valor).equal(newAccountOperation.valor);
        expect(calledArgs[0].codCliente).equal(newAccountOperation.codCliente);
        expect(calledArgs[0].codTipoOperacao).equal(2);
      });
    });
  });
  describe('when account is not found', () => {
    beforeEach(() => {
      mockModels.Contas.findOne.resolves(null);
    });
    afterEach(() => {
      mockModels.Contas.findOne.resetHistory();
    });
    it('should return an error', async () => {
      try {
        await services.accountBalanceOperation(newAccountOperation, 'deposito', stub());
      } catch (error) {
        expect(error).to.have.property('message');
        expect(error).to.have.property('status');
        expect(error.message).equal('Client not found');
        expect(error.status).equal(404);
      }
    });
  });
});

describe('tests calcNewBalance', () => {
  it('should return the sum when the operation is "deposito"', () => {
    const account = { saldo: '100.00' };
    const valor = '10.00';
    const operationType = 'deposito';
    const newBalance = contasServices.calcNewBalance(account, valor, operationType);
    expect(newBalance).equal('110.00');
  });
  it('should return the subtraction when the operation is "saque"', () => {
    const account = { saldo: '100.00' };
    const valor = '10.00';
    const operationType = 'saque';
    const newBalance = contasServices.calcNewBalance(account, valor, operationType);
    expect(newBalance).equal('90.00');
  });
});
