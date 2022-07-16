const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');

const { expect } = chai;
const app = require('../src/index');

chai.use(chaiHttp);

describe('Initial setup test', () => {
  it('Tests the app', async () => {
    const response = await chai
      .request(app)
      .get('/');
    expect(response.text).to.be.equal('Hello, XP!');
  });
});
