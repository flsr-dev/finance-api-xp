const express = require('express');
const InvestimentosControllers = require('../controllers/investimentos.controller');
const { authenticationMiddleware } = require('../middlewares/authentication.middleware');
const requestValidationMiddleware = require('../middlewares/requestValidation.middleware');
const { authorizationMiddleware } = require('../middlewares/authorization.middleware');

const router = express.Router();

router.use(authenticationMiddleware);
router.post('/comprar', requestValidationMiddleware, authorizationMiddleware, InvestimentosControllers.operateAsset);
router.post('/vender', requestValidationMiddleware, authorizationMiddleware, InvestimentosControllers.operateAsset);

module.exports = router;
