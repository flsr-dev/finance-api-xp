const { expect } = require('chai');
const { describe, it } = require('mocha');
const { authenticateToken, createToken } = require('../../../src/utils/jwt');

describe('Test jwt', () => {
  const payload = {
    codCliente: 1,
    email: 'flsr.dev@email.com',
    name: 'Fernando',
  };
  describe('Test createToken', () => {
    it('tests if a token is created', () => {
      const token = createToken(payload);
      expect(token).to.be.a('string');
    });
  });
  describe('Test authenticateToken', () => {
    it('tests if throws an error when token is not provided', () => {
      try {
        authenticateToken();
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.message).to.equal('Invalid or not found token');
        expect(error.status).to.equal(401);
      }
    });
    it('tests if throws an error when token is invalid', () => {
      try {
        authenticateToken('invalid token');
      } catch (error) {
        expect(error).to.be.an('error');
        expect(error.message).to.equal('Invalid or not found token');
        expect(error.status).to.equal(401);
      }
    });
    it('tests if returns a user when token is valid', () => {
      const token = createToken(payload);
      const user = authenticateToken(token);
      expect(user).to.be.an('object');
      expect(user).to.have.property('codCliente');
      expect(user).to.have.property('email');
      expect(user).to.have.property('name');
    });
  });
});
