const express = require('express');
const { getAsset } = require('../controllers/ativos.controller');
const { authenticationMiddleware } = require('../middlewares/authentication.middleware');
const requestValidation = require('../middlewares/requestValidation.middleware');

const router = express.Router();

router.use(authenticationMiddleware);
router.get('/ativos/:codAtivo', requestValidation, getAsset);

module.exports = router;
