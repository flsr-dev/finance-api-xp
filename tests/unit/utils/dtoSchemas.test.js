const { expect } = require('chai');
const { describe, it } = require('mocha');
const dtoSchemas = require('../../../src/utils/dtoSchemas');

describe('Test dtoSchemas', () => {
  it('should return the dtoSchemas object', () => {
    const result = dtoSchemas;
    expect(result).to.be.an('object');
  });
  it('should have the investimentosComprar schema', () => {
    const result = dtoSchemas;
    expect(result).to.have.property('investimentosComprar');
  });
});
