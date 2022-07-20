const express = require('express');
const investimentosRoute = require('./investimentos.routes');
const clientesRoute = require('./clientes.routes');
const ativosRoute = require('./assets.routes');
const contaRoute = require('./conta.routes');

const router = express.Router();
router.use('/investimentos', investimentosRoute);
router.use('/clientes', clientesRoute);
router.use('/assets', ativosRoute);
router.use('/conta', contaRoute);
module.exports = router;
