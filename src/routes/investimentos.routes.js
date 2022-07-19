const express = require('express');
const InvestimentosControllers = require('../controllers/investimentos.controller');
const authenticationMiddleware = require('../middlewares/auth.middleware');
const requestValidationMiddleware = require('../middlewares/requestValidation.middleware');

const router = express.Router();

router.use(authenticationMiddleware);
router.post('/comprar', requestValidationMiddleware, InvestimentosControllers.buyAsset);

module.exports = router;
