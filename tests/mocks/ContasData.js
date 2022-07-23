const { stub } = require('sinon');

const clientAccount = {
  codConta: 1,
  codCliente: 1,
  valor: 100000.00,
  ativo: true,
  criacao: new Date('2011-08-01T19:58:00.000Z'),
  atualizacao: new Date('2011-08-01T19:58:00.000Z'),
  save: stub(),
};

module.exports = {
  clientAccount,
};
