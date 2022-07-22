const { StatusCodes } = require('http-status-codes');
const { getAssetsByClient } = require('../services/clients.services');
const { CLIENT_WITHOUT_ASSETS_MSG } = require('../utils/errorMessages');

const getAllClientsAssets = async (req, res) => {
  const clientAssets = await getAssetsByClient(req.params);
  if (clientAssets.length === 0) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: CLIENT_WITHOUT_ASSETS_MSG });
  }
  return res.status(StatusCodes.OK).json(clientAssets);
};

module.exports = {
  getAllClientsAssets,
};
