const express = require('express');
const { getAllClientsAssets } = require('../controllers/clients.controller');
const { authenticationMiddleware } = require('../middlewares/authentication.middleware');
const { authorizationMiddleware } = require('../middlewares/authorization.middleware');
const requestValidation = require('../middlewares/requestValidation.middleware');

const router = express.Router();
router.use(authenticationMiddleware);
router.get('/ativos/:codCliente', authorizationMiddleware, requestValidation, getAllClientsAssets);
module.exports = router;
