const { expect } = require('chai');
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { stub } = require('sinon');
const proxyquire = require('proxyquire');
const { makeMockModels } = require('sequelize-test-helpers');
const {
  allAssets,
  ativoUpdateParameters,
  ativoUpdateOptionsParameters,
} = require('../../mocks/AtivosData');
const { validBody, invalidCodAtivo, invalidQtdeAtivo } = require('../../mocks/bodyRequest');
const { newTransaction, createTransaction } = require('../../mocks/TranscoesData');
const { foundClientAsset, ativosClienteUpdateParameter, ativosClienteUpdateOptionsParameter } = require('../../mocks/AtivosClientesData');

const AtivosClientes = { findOne: stub(), create: stub(), update: stub() };
const Transacoes = { create: stub() };
const Ativos = { findByPk: stub(), update: stub() };
const mockModels = makeMockModels({ AtivosClientes, Transacoes, Ativos });
const services = proxyquire(
  '../../../src/services/investimentos.services',
  { '../database/models': mockModels },
);

describe('tests investimentos.services when buying asset', () => {
  describe('when valid body is passed', () => {
    describe('when asset is already in user portfolio', () => {
      beforeEach(() => {
        mockModels.Ativos.findByPk.resolves(allAssets[0]);
        mockModels.Transacoes.create.resolves(newTransaction);
        mockModels.AtivosClientes.findOne.resolves(foundClientAsset);
        mockModels.AtivosClientes.create.resolves({});
        mockModels.AtivosClientes.update.resolves(1);
      });
      afterEach(() => {
        mockModels.Ativos.findByPk.resetHistory();
        mockModels.Transacoes.create.resetHistory();
        mockModels.AtivosClientes.findOne.resetHistory();
        mockModels.AtivosClientes.create.resetHistory();
        mockModels.AtivosClientes.update.resetHistory();
      });
      it('should return a new transaction register', async () => {
        const buyAssetReturn = await services.operateAsset(validBody, 'comprar');
        expect(buyAssetReturn).to.be.an('object');
        expect(buyAssetReturn).to.have.property('idTransacao');
        expect(buyAssetReturn).to.have.property('codCliente');
        expect(buyAssetReturn).to.have.property('codAtivo');
        expect(buyAssetReturn).to.have.property('valor');
        expect(buyAssetReturn).to.have.property('qtdeAtivo');
        expect(buyAssetReturn).to.have.property('codTipoTransacao');
        expect(buyAssetReturn).to.have.property('criacao');
        expect(buyAssetReturn).to.be.equal(newTransaction);
      }).timeout(10000);

      it('should call Ativos.findByPk with the correct params', async () => {
        await services.operateAsset(validBody, 'comprar');
        expect(mockModels.Ativos.findByPk.calledOnceWith(validBody.codAtivo)).to.have.equal(true);
      }).timeout(10000);

      it('should call Transacoes.create with the correct params', async () => {
        await services.operateAsset(validBody, 'comprar');
        const {
          qtdeAtivo, valor, codCliente, codTipoTransacao, codAtivo,
        } = mockModels.Transacoes.create.args[0][0];
        expect(qtdeAtivo).equal(createTransaction.qtdeAtivo);
        expect(valor).equal(createTransaction.valor);
        expect(codCliente).equal(createTransaction.codCliente);
        expect(codTipoTransacao).equal(createTransaction.codTipoTransacao);
        expect(codAtivo).equal(createTransaction.codAtivo);
      });
    });
    describe('when asset is not in user portfolio', () => {
      beforeEach(() => {
        mockModels.Ativos.findByPk.resolves(allAssets[0]);
        mockModels.Transacoes.create.resolves(newTransaction);
        mockModels.AtivosClientes.findOne.resolves(null);
        mockModels.AtivosClientes.create.resolves({});
        mockModels.AtivosClientes.update.resolves(1);
      });
      afterEach(() => {
        mockModels.Ativos.findByPk.resetHistory();
        mockModels.Transacoes.create.resetHistory();
        mockModels.AtivosClientes.findOne.resetHistory();
        mockModels.AtivosClientes.create.resetHistory();
        mockModels.AtivosClientes.update.resetHistory();
      });
      it('should return a new transaction register', async () => {
        const buyAssetReturn = await services.operateAsset(validBody, 'comprar');
        expect(buyAssetReturn).to.be.an('object');
        expect(buyAssetReturn).to.have.property('idTransacao');
        expect(buyAssetReturn).to.have.property('codCliente');
        expect(buyAssetReturn).to.have.property('codAtivo');
        expect(buyAssetReturn).to.have.property('valor');
        expect(buyAssetReturn).to.have.property('qtdeAtivo');
        expect(buyAssetReturn).to.have.property('codTipoTransacao');
        expect(buyAssetReturn).to.have.property('criacao');
        expect(buyAssetReturn).to.be.equal(newTransaction);
      });

      it('should call Ativos.findByPk with the correct params', async () => {
        await services.operateAsset(validBody, 'comprar');
        expect(mockModels.Ativos.findByPk.calledOnceWith(validBody.codAtivo)).equal(true);
      });

      it('should call Transacoes.create with the correct params', async () => {
        await services.operateAsset(validBody, 'comprar');
        const responseCreateParameter = mockModels.Transacoes.create.args[0][0];
        expect(responseCreateParameter).deep.equal(createTransaction);
      }).timeout(5000);
    });
  });
  describe('when invalid asset code is passed', () => {
    beforeEach(() => {
      mockModels.Ativos.findByPk.resolves(null);
    });
    afterEach(() => {
      mockModels.Ativos.findByPk.resetHistory();
    });
    it('tests if throws an error when a invalid asset is passed', async () => {
      try {
        await services.operateAsset(invalidCodAtivo, 'comprar');
      } catch (error) {
        expect(typeof error).to.be.equal('object');
        expect(error).to.have.property('message');
        expect(error).to.have.property('status');
        expect(error.status).to.be.equal(404);
        expect(error.message).to.be.equal('"codAtivo" not valid');
      }
    });
  });

  describe('when qtdeAtivo is larger than the asset quantity', () => {
    beforeEach(() => {
      mockModels.Ativos.findByPk.resolves(allAssets[0]);
    });

    afterEach(() => {
      mockModels.Ativos.findByPk.resetHistory();
    });
    it('tests if throws an error when qtdeAtivo is larger than the asset quantity', async () => {
      try {
        await services.operateAsset(invalidQtdeAtivo, 'comprar');
      } catch (error) {
        expect(typeof error).to.be.equal('object');
        expect(error).to.have.property('message');
        expect(error).to.have.property('status');
        expect(error.status).to.be.equal(422);
        expect(error.message).to.be.equal('Requested "qtdeAtivo" is not available');
      }
    });
  });
});
