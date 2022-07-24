const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { stub } = require('sinon');
const { expect } = require('chai');
const { AUTHENTICATION_ERROR_MSG, INTERNAL_ERROR_MSG } = require('../../../src/utils/errorMessages');
const errorMiddleware = require('../../../src/middlewares/error.middleware');

describe('tests error middleware when a status is passed', () => {
  const response = {};
  let request = {};
  beforeEach(() => {
    response.status = stub().returns(response);
    response.json = stub().returns(AUTHENTICATION_ERROR_MSG);
  });
  afterEach(() => {
    request = {};
  });
  it('should return the status code', () => {
    const error = new Error(AUTHENTICATION_ERROR_MSG);
    error.status = 403;
    const next = stub();
    errorMiddleware(error, request, response, next);
    expect(response.status.calledWith(403)).equal(true);
  });
  it('should return the error message', () => {
    const error = new Error(AUTHENTICATION_ERROR_MSG);
    error.status = 403;
    const next = stub();
    errorMiddleware(error, request, response, next);
    expect(response.json.calledWith({ message: AUTHENTICATION_ERROR_MSG })).equal(true);
  });
});

describe('tests error middleware when a status is not passed', () => {
  const response = {};
  let request = {};
  beforeEach(() => {
    response.status = stub().returns(response);
    response.json = stub().returns(AUTHENTICATION_ERROR_MSG);
  });
  afterEach(() => {
    request = {};
  });
  it('should return the status code 500', () => {
    const error = new Error(AUTHENTICATION_ERROR_MSG);
    const next = stub();
    errorMiddleware(error, request, response, next);
    expect(response.status.calledWith(500)).equal(true);
  });
  it('should return the error message', () => {
    const error = new Error(AUTHENTICATION_ERROR_MSG);
    const next = stub();
    errorMiddleware(error, request, response, next);
    expect(response.json.calledWith({ message: INTERNAL_ERROR_MSG })).equal(true);
  });
});

module.exports = { errorMiddleware };
