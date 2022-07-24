const { expect } = require('chai');
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { stub } = require('sinon');
const proxyquire = require('proxyquire').noCallThru();

const mockJWt = { authenticateToken: stub() };

const Jwt = proxyquire(
  '../../../src/middlewares/authentication.middleware',
  { '../utils/jwt': mockJWt },
);

describe('Tests authentication middleware', () => {
  describe('when a valid token is provided', () => {
    let next;
    beforeEach(() => {
      mockJWt.authenticateToken.returns({
        codCliente: 1,
        nome: 'John',
        email: 'john@gmail.com',
      });
      next = stub();
    });
    afterEach(() => {
      mockJWt.authenticateToken.resetHistory();
      next.resetHistory();
    });
    it('should call next function', () => {
      const req = { headers: { authorization: 'validToken' } };
      const res = {};
      Jwt.authenticationMiddleware(req, res, next);
      expect(next.called).equal(true);
    });
    it('should assign the user to req.user', () => {
      const req = { headers: { authorization: 'validToken' } };
      const res = {};
      Jwt.authenticationMiddleware(req, res, next);
      expect(req).to.have.property('user');
      expect(req.user).to.have.property('codCliente');
      expect(req.user).to.have.property('nome');
      expect(req.user).to.have.property('email');
    });
  });
  describe('when authentication fails', () => {
    let next;
    beforeEach(() => {
      mockJWt.authenticateToken.returns(null);
      next = stub();
    });
    afterEach(() => {
      mockJWt.authenticateToken.resetHistory();
      next.resetHistory();
    });

    it('should throw an error if payload is not returned', () => {
      const req = { headers: { authorization: 'invalidToken' } };
      const res = {};
      try {
        Jwt.authenticationMiddleware(req, res, next);
      } catch (error) {
        expect(error).to.have.property('message');
        expect(error.message).equal('Invalid or not found token');
        expect(error).to.have.property('status');
        expect(error.status).equal(401);
      }
    });
  });
});
