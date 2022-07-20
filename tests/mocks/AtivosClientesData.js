const { foundAsset } = require('./AtivosData');
const { validBody } = require('./bodyRequest');

const allClientsAssets = [
  {
    codCliente: 1,
    codAtivo: 1,
    valor: 68.37,
    qtdeAtivo: 32,
  },
  {
    codCliente: 1,
    codAtivo: 2,
    valor: 27.96,
    qtdeAtivo: 102,
  },
  {
    codCliente: 2,
    codAtivo: 2,
    valor: 27.96,
    qtdeAtivo: 120,
  },
  {
    codCliente: 2,
    codAtivo: 1,
    valor: 68.37,
    qtdeAtivo: 100,
  },
];

const foundClientAsset = {
  codCliente: 1,
  codAtivo: 1,
  valor: 68.37,
  qtdeAtivo: 32,
};

const newAssetAmount = foundClientAsset.qtdeAtivo + validBody.qtdeAtivo;

const ativosClienteUpdateOptionsParameter = {
  where: {
    codCliente: validBody.codCliente,
    codAtivo: validBody.codAtivo,
  },
};

const ativosClienteUpdateParameter = {
  qtdeAtivo: newAssetAmount,
  valor: foundAsset.valor,
};

module.exports = {
  allClientsAssets,
  foundClientAsset,
  newAssetAmount,
  ativosClienteUpdateOptionsParameter,
  ativosClienteUpdateParameter,
};
