const express = require('express');
const investimentosRoute = require('./investimentos.routes');
const clientsRoute = require('./clientes.routes');

const router = express.Router();
router.use('/investimentos', investimentosRoute);
router.use('/clientes', clientsRoute);
module.exports = router;
