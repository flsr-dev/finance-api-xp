const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { stub } = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');
const { CLIENT_WITHOUT_ASSETS_MSG } = require('../../../src/utils/errorMessages');
const { allAssets } = require('../../mocks/AtivosData');

const mockedClientsServices = { getAssetsByClient: stub() };

const ClientsController = proxyquire(
  '../../../src/controllers/clients.controller',
  { '../services/clients.services': mockedClientsServices },
);
describe('Tests clientes controller layer', () => {
  describe('When no asset is returned', () => {
    const response = {};
    const request = {};
    beforeEach(() => {
      response.status = stub().returns(response);
      response.json = stub().returns(CLIENT_WITHOUT_ASSETS_MSG);
      mockedClientsServices.getAssetsByClient.resolves([]);
    });

    afterEach(() => {
      mockedClientsServices.getAssetsByClient.resetHistory();
    });
    it('should return a 404 status code', async () => {
      await ClientsController.getAllClientsAssets(request, response);
      expect(response.status.calledWith(404)).equal(true);
    });

    it('should return asset not found message', async () => {
      await ClientsController.getAllClientsAssets(request, response);
      expect(response.json.calledWith({ message: CLIENT_WITHOUT_ASSETS_MSG })).equal(true);
    });
  });

  describe('When an asset is returned', () => {
    const response = {};
    const request = {};
    beforeEach(() => {
      response.status = stub().returns(response);
      response.json = stub().returns([{}]);
      mockedClientsServices.getAssetsByClient.resolves(allAssets);
    });

    afterEach(() => {
      mockedClientsServices.getAssetsByClient.resetHistory();
    });

    it('should return a 200 status code', async () => {
      await ClientsController.getAllClientsAssets(request, response);
      expect(response.status.calledWith(200)).equal(true);
    });

    it('should return the assets', async () => {
      await ClientsController.getAllClientsAssets(request, response);
      expect(response.json.calledWith(allAssets)).equal(true);
    });
  });
});
