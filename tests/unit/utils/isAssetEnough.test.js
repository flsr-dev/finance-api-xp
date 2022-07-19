const { expect } = require('chai');
const { describe, it } = require('mocha');
const { stub } = require('sinon');
const proxyquire = require('proxyquire');
const { makeMockModels } = require('sequelize-test-helpers');
const { isAssetEnough } = require('../../../src/utils/isAssetEnough');
const { foundClientAsset } = require('../../mocks/AtivosClientesData');

const AtivosClientes = { findOne: stub(), create: stub(), update: stub() };
const Transacoes = { create: stub() };
const Ativos = { findByPk: stub(), update: stub() };
const mockModels = makeMockModels({ AtivosClientes, Transacoes, Ativos });
const assetMock = proxyquire(
  '../../../src/utils/isAssetEnough',
  { '../database/models': mockModels },
);

describe('Test isAssetEnough', () => {
  it('should return true when requested amount is less than broker amount', async () => {
    const body = { qtdeAtivo: 1 };
    const asset = { qtdeAtivo: 2 };
    const result = await isAssetEnough(body, asset, 'comprar');
    expect(result).equal(true);
  });
  it('should throw an error when requested amount is greater than broker amount', async () => {
    const body = { qtdeAtivo: 3 };
    const asset = { qtdeAtivo: 2 };
    try {
      await isAssetEnough(body, asset, 'comprar');
    } catch (error) {
      expect(error).to.be.an('error');
      expect(error.message).to.equal('Requested "qtdeAtivo" is not available');
      expect(error.status).to.equal(422);
    }
  });
  it('test when operation is "vender" and asset amount is available', async () => {
    mockModels.AtivosClientes.findOne.resolves(foundClientAsset);
    const body = { qtdeAtivo: 1 };
    const asset = { qtdeAtivo: 2 };
    const result = await assetMock.isAssetEnough(body, asset, 'vender');
    expect(result).equal(true);
    mockModels.AtivosClientes.findOne.resetHistory();
  });
  it('test when operation is "vender" and asset amount is not available', async () => {
    mockModels.AtivosClientes.findOne.resolves(foundClientAsset);
    const body = { qtdeAtivo: 3 };
    const asset = { qtdeAtivo: 2 };
    try {
      await assetMock.isAssetEnough(body, asset, 'vender');
    } catch (error) {
      expect(error).to.be.an('error');
      expect(error.message).to.equal('Requested "qtdeAtivo" is not available');
      expect(error.status).to.equal(422);
    }
    mockModels.AtivosClientes.findOne.resetHistory();
  });
});
