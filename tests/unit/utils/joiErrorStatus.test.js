const { expect } = require('chai');
const { describe, it } = require('mocha');
const joiErrorStatus = require('../../../src/utils/joiErrorStatus');

describe('Test joiErrorStatus', () => {
  it('should return the joiErrorStatus object', () => {
    const result = joiErrorStatus;
    expect(result).to.be.an('object');
  });
  it('should return all the correct status code', () => {
    const result = joiErrorStatus;
    expect(result).to.have.property('any.required', 400);
    expect(result).to.have.property('any.min', 422);
    expect(result).to.have.property('array.base', 422);
    expect(result).to.have.property('array.min', 422);
    expect(result).to.have.property('number.base', 422);
    expect(result).to.have.property('number.min', 422);
    expect(result).to.have.property('string.base', 422);
    expect(result).to.have.property('string.min', 422);
  });
});
