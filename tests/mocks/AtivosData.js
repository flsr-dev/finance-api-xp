const { validBody } = require('./bodyRequest');

const allAssets = [
  {
    codAtivo: 1,
    simboloAtivo: 'VALE3',
    valor: 68.37,
    criacao: new Date('2011-08-01T19:58:00.000Z'),
    atualizacao: new Date('2011-08-01T19:58:00.000Z'),
    qtdeAtivo: 20185,
  },
  {
    simboloAtivo: 'PETR4',
    valor: 27.96,
    criacao: new Date('2011-08-01T19:58:00.000Z'),
    atualizacao: new Date('2011-08-01T19:58:00.000Z'),
    qtdeAtivo: 2000,
  },
];

const foundAsset = {
  codAtivo: 1,
  simboloAtivo: 'VALE3',
  valor: 68.37,
  criacao: new Date('2011-08-01T19:58:00.000Z'),
  atualizacao: new Date('2011-08-01T19:58:00.000Z'),
  qtdeAtivo: 20185,
};

const foundClientAsset = {
  codCliente: 1,
  codAtivo: 1,
  valor: 68.37,
  qtdeAtivo: 32,
};

const newBrokerAssetAmount = foundAsset.qtdeAtivo - validBody.qtdeAtivo;

const ativoUpdateParameters = {
  qtdeAtivo: newBrokerAssetAmount,
};

const ativoUpdateOptionsParameters = {
  where: { codAtivo: validBody.codAtivo },
};

const newClientAssetAmount = foundClientAsset.qtdeAtivo - validBody.qtdeAtivo;
const ativoUpdateSellParameters = {
  qtdeAtivo: newClientAssetAmount,
  valor: foundAsset.valor,
};

const ativoUpdateSellOptionsParameters = {
  where: {
    codAtivo: validBody.codAtivo,
    codCliente: validBody.codCliente,
  },
};

module.exports = {
  allAssets,
  foundAsset,
  ativoUpdateOptionsParameters,
  ativoUpdateParameters,
  ativoUpdateSellParameters,
  ativoUpdateSellOptionsParameters,
};
