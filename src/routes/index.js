const express = require('express');
const investimentosRoute = require('./investimentos.routes');
const clientesRoute = require('./clientes.routes');
const ativosRoute = require('./assets.routes');

const router = express.Router();
router.use('/investimentos', investimentosRoute);
router.use('/clientes', clientesRoute);
router.use('/assets', ativosRoute);
module.exports = router;
