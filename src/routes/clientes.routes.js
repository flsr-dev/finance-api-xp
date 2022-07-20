const express = require('express');
const { getAllClientsAssets } = require('../controllers/clients.controller');
const authenticationMiddleware = require('../middlewares/auth.middleware');
const requestValidation = require('../middlewares/requestValidation.middleware');

const router = express.Router();
router.use(authenticationMiddleware);
router.get('/ativos/:codCliente', requestValidation, getAllClientsAssets);
module.exports = router;
