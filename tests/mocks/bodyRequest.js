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

const newAccountOperation = {
  codCliente: 1,
  valor: 11.20,
};

module.exports = {
  validBody,
  invalidCodAtivo,
  invalidQtdeAtivo,
  newAccountOperation,
};
