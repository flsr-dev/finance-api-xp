const allTransactions = [
  {
    idTransacao: 1,
    codCliente: 1,
    codTipoTransacao: 1,
    codAtivo: 1,
    valor: 68.37,
    qtdeAtivo: 32,
    criacao: new Date('2011-08-01T19:58:00.000Z'),
  },
  {
    idTransacao: 2,
    codCliente: 1,
    codTipoTransacao: 2,
    codAtivo: 2,
    valor: 27.96,
    qtdeAtivo: 10,
    criacao: new Date('2011-08-01T19:58:00.000Z'),
  },
  {
    idTransacao: 3,
    codCliente: 2,
    codTipoTransacao: 2,
    codAtivo: 2,
    valor: 27.96,
    qtdeAtivo: 12,
    criacao: new Date('2011-08-01T19:58:00.000Z'),
  },
  {
    idTransacao: 4,
    codCliente: 2,
    codTipoTransacao: 1,
    codAtivo: 1,
    valor: 68.37,
    qtdeAtivo: 100,
    criacao: new Date('2011-08-01T19:58:00.000Z'),
  },
];

const newTransaction = {
  idTransacao: 5,
  codCliente: 1,
  codTipoTransacao: 1,
  codAtivo: 1,
  valor: 68.37,
  qtdeAtivo: 20,
  criacao: '2022-07-19T13:23:25.633Z',
};

const sellTransaction = {
  idTransacao: 5,
  codCliente: 1,
  codTipoTransacao: 2,
  codAtivo: 1,
  valor: 68.37,
  qtdeAtivo: 20,
  criacao: '2022-07-19T13:23:25.633Z',
};

const createTransaction = {
  codCliente: 1,
  codTipoTransacao: 1,
  codAtivo: 1,
  valor: 68.37,
  qtdeAtivo: 20,
};

module.exports = {
  allTransactions,
  newTransaction,
  createTransaction,
  sellTransaction,
};
