const { describe, it } = require('mocha');
const { stub } = require('sinon');
const { expect } = require('chai');
const { authorizationMiddleware } = require('../../../src/middlewares/authorization.middleware');

describe('tests authorization middleware', () => {
  describe('when method is POST', () => {
    describe('when client is authorized', () => {
      it('should return next()', () => {
        const req = {
          user: {
            codCliente: 1,
          },
          method: 'POST',
          body: {
            codCliente: 1,
          },

        };
        const res = {};
        const next = stub();
        const returnValue = authorizationMiddleware(req, res, next);
        expect(returnValue).to.be.equal(next());
      });
    });
    describe('when client is not authorized', () => {
      it('should throw an error', () => {
        const req = {
          user: {
            codCliente: 1,
          },
          method: 'POST',
          body: {
            codCliente: 2,
          },

        };
        const res = {};
        const next = stub();
        try {
          authorizationMiddleware(req, res, next);
        } catch (error) {
          expect(error).have.property('status');
          expect(error).have.property('message');
          expect(error.status).to.be.equal(403);
          expect(error.message).to.be.equal('Client not authorized to perform this action');
        }
      });
    });
  });
  describe('when method is GET', () => {
    describe('when client is authorized', () => {
      it('should return next()', () => {
        const req = {
          user: {
            codCliente: 1,
          },
          method: 'GET',
          params: {
            codCliente: 1,
          },

        };
        const res = {};
        const next = stub();
        const returnValue = authorizationMiddleware(req, res, next);
        expect(returnValue).to.be.equal(next());
      });
    });
    describe('when client is not authorized', () => {
      it('should throw an error', () => {
        const req = {
          user: {
            codCliente: 1,
          },
          method: 'GET',
          params: {
            codCliente: 2,
          },

        };
        const res = {};
        const next = stub();
        try {
          authorizationMiddleware(req, res, next);
        } catch (error) {
          expect(error).have.property('status');
          expect(error).have.property('message');
          expect(error.status).to.be.equal(403);
          expect(error.message).to.be.equal('Client not authorized to perform this action');
        }
      });
    });
  });
});
