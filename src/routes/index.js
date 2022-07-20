const express = require('express');
const investimentosRoute = require('./investimentos.routes');
const clientsRoute = require('./clients.routes');

const router = express.Router();
router.use('/investimentos', investimentosRoute);
router.use('/clients', clientsRoute);
module.exports = router;
