const validBody = {
  codCliente: 1,
  codAtivo: 1,
  qtdeAtivo: 20,
};

const invalidCodAtivo = {
  codCliente: 1,
  codAtivo: 1909222,
  qtdeAtivo: 20,
};

const invalidQtdeAtivo = {
  codCliente: 1,
  codAtivo: 1,
  qtdeAtivo: 2000000000000,
};

module.exports = {
  validBody,
  invalidCodAtivo,
  invalidQtdeAtivo,
};
