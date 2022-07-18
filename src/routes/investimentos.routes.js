const express = require('express');
const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/comprar', authenticationMiddleware);

module.exports = router;
