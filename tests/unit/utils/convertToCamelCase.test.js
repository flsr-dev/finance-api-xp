const { expect } = require('chai');
const { describe, it } = require('mocha');
const converToCamelCase = require('../../../src/utils/convertToCamelCase');

describe('Test convertToCamelCase', () => {
  it('should return the url converted to camel case', () => {
    const url = '/investimentos/comprar';
    const expected = 'investimentosComprar';
    const result = converToCamelCase(url);
    expect(result).to.equal(expected);
  });
});
