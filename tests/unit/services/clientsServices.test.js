const { expect } = require('chai');
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { stub } = require('sinon');
const proxyquire = require('proxyquire');
const { makeMockModels } = require('sequelize-test-helpers');
const { clientAssets } = require('../../mocks/AtivosClientesData');
const { foundClient } = require('../../mocks/ClientesData');

const mockModels = makeMockModels({
  AtivosClientes: { findAll: stub() },
  Clientes: { findOne: stub() },
});

const services = proxyquire(
  '../../../src/services/clients.services',
  { '../database/models': mockModels },
);

describe('tests clients.services', () => {
  describe('when getting all assets by client', () => {
    describe('when client is authorized', () => {
      beforeEach(() => {
        mockModels.Clientes.findOne.resolves(foundClient);
        mockModels.AtivosClientes.findAll.resolves(clientAssets);
      });
      afterEach(() => {
        mockModels.Clientes.findOne.resetHistory();
        mockModels.AtivosClientes.findAll.resetHistory();
      });
      it('should return an array of assets', async () => {
        const assets = await services.getAssetsByClient({ codCliente: '123' }, { id: '123' });
        expect(assets).to.be.an('array');
        assets.forEach((asset) => {
          expect(asset).to.have.property('codAtivo');
          expect(asset).to.have.property('qtdeAtivo');
          expect(asset).to.have.property('valor');
          expect(asset).to.have.property('codCliente');
        });
      });
      it('should call Clientes.findOne with the correct params', async () => {
        await services.getAssetsByClient({ codCliente: 123 }, { id: 123 });
        const calledArgs = mockModels.Clientes.findOne.firstCall.args;
        expect(calledArgs[0]).to.have.property('where');
        expect(calledArgs[0].where).to.have.property('codCliente');
        expect(calledArgs[0].where.codCliente).to.have.equal(123);
      });
      it('should call AtivosClientes.findAll with the correct params', async () => {
        await services.getAssetsByClient({ codCliente: 123 }, { id: 123 });
        const calledArgs = mockModels.AtivosClientes.findAll.firstCall.args;
        expect(calledArgs[0]).to.have.property('where');
        expect(calledArgs[0].where).to.have.property('codCliente');
        expect(calledArgs[0].where.codCliente).to.have.equal(123);
      });
      describe('when client is not found', () => {
        beforeEach(() => {
          mockModels.Clientes.findOne.resolves(null);
        });
        afterEach(() => {
          mockModels.Clientes.findOne.resetHistory();
        });
        it('should throw an error', async () => {
          try {
            await services.getAssetsByClient({ codCliente: 123 }, { id: 123 });
          } catch (error) {
            expect(error).to.be.an('error');
            expect(error).to.have.property('status');
            expect(error.status).equal(404);
            expect(error).to.have.property('message');
            expect(error.message).to.have.equal('Client not found');
          }
        });
      });
    });
    describe('when client is not authorized', () => {
      beforeEach(() => {
        mockModels.Clientes.findOne.resolves(foundClient);
        mockModels.AtivosClientes.findAll.resolves(clientAssets);
      });
      afterEach(() => {
        mockModels.Clientes.findOne.resetHistory();
        mockModels.AtivosClientes.findAll.resetHistory();
      });

      it('should throw an error', async () => {
        try {
          await services.getAssetsByClient({ codCliente: '123' }, { id: '456' });
        } catch (error) {
          expect(error).to.be.an('error');
          expect(error).to.have.property('status');
          expect(error.status).equal(403);
          expect(error).to.have.property('message');
          expect(error.message).equal('Client not authorized to perform this action');
        }
      });
    });
  });
});
