const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { stub } = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');
const { ASSET_NOT_FOUND_MSG } = require('../../../src/utils/errorMessages');
const { foundAsset } = require('../../mocks/AtivosData');

const mockedAtivosServices = { getAssetById: stub() };

const AtivosController = proxyquire(
  '../../../src/controllers/ativos.controller',
  { '../services/ativos.services': mockedAtivosServices },
);
describe('Tests ativos controller layer', () => {
  describe('When no asset is returned', () => {
    const response = {};
    const request = {};
    beforeEach(() => {
      response.status = stub().returns(response);
      response.json = stub().returns(ASSET_NOT_FOUND_MSG);
      mockedAtivosServices.getAssetById.resolves(null);
    });

    afterEach(() => {
      mockedAtivosServices.getAssetById.resetHistory();
    });
    it('should return a 404 status code', async () => {
      await AtivosController.getAsset(request, response);
      expect(response.status.calledWith(404)).equal(true);
    });
    it('should return asset not found message', async () => {
      await AtivosController.getAsset(request, response);
      expect(response.json.calledWith({ message: ASSET_NOT_FOUND_MSG })).equal(true);
    });
  });
  describe('When an asset is returned', () => {
    const response = {};
    const request = {};
    beforeEach(() => {
      response.status = stub().returns(response);
      response.json = stub().returns(foundAsset);
      mockedAtivosServices.getAssetById.resolves(foundAsset);
    });

    afterEach(() => {
      mockedAtivosServices.getAssetById.resetHistory();
    });
    it('should return a 200 status code', async () => {
      await AtivosController.getAsset(request, response);
      console.log(response.status.args);
      console.log(response.json.args);

      expect(response.status.calledWith(200)).equal(true);
    });
    it('should return asset not found message', async () => {
      await AtivosController.getAsset(request, response);
      expect(response.json.calledWith(foundAsset)).equal(true);
    });
  });
});
