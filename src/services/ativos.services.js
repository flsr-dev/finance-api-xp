const { Ativos } = require('../database/models');

const getAssetById = async ({ codAtivo }) => Ativos.findByPk(codAtivo);

module.exports = {
  getAssetById,
};
