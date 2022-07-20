const { StatusCodes } = require('http-status-codes');
const { getAssetsByClient } = require('../services/clients.services');

const getAllClientsAssets = async (req, res) => {
  const clientAssets = await getAssetsByClient(req.params, req.user);
  if (clientAssets.length === 0) {
    return res.status(StatusCodes.NOT_FOUND).json({ SEM_ATIVOS: 'Não há ativos para o cliente' });
  }
  return res.status(200).json(clientAssets);
};

module.exports = {
  getAllClientsAssets,
};
