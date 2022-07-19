const { expect } = require('chai');
const { describe, it } = require('mocha');
const isAssetEnough = require('../../../src/utils/isAssetEnough');

describe('Test isAssetEnough', () => {
  it('should return true when requested amount is less than broker amount', () => {
    const body = { qtdeAtivo: 1 };
    const asset = { qtdeAtivo: 2 };
    const result = isAssetEnough(body, asset);
    expect(result).equal(true);
  });
  it('should throw an error when requested amount is greater than broker amount', () => {
    const body = { qtdeAtivo: 3 };
    const asset = { qtdeAtivo: 2 };
    try {
      isAssetEnough(body, asset);
    } catch (error) {
      expect(error).to.be.an('error');
      expect(error.message).to.equal('Requested "qtdeAtivo" is not available');
      expect(error.status).to.equal(422);
    }
  });
});
