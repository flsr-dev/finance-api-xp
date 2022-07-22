const express = require('express');
const { operateAccountBalance, getClientBalance } = require('../controllers/contas.controller');
const requestValidation = require('../middlewares/requestValidation.middleware');
const { authenticationMiddleware } = require('../middlewares/authentication.middleware');
const { authorizationMiddleware } = require('../middlewares/authorization.middleware');

const router = express.Router();
router.use(authenticationMiddleware);
router.post('/deposito', requestValidation, operateAccountBalance);
router.post('/saque', authorizationMiddleware, requestValidation, operateAccountBalance);
router.get('/:codCliente', authorizationMiddleware, requestValidation, getClientBalance);

module.exports = router;
