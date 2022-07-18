const express = require('express');
const investimentosRoute = require('./investimentos.routes');

const router = express.Router();
router.use('/investimentos', investimentosRoute);

module.exports = router;
