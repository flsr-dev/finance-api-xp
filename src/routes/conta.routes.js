const express = require('express');
const { operateAccountBalance } = require('../controllers/contas.controller');
const requestValidation = require('../middlewares/requestValidation.middleware');

const router = express.Router();

router.post('/deposito', requestValidation, operateAccountBalance);
router.post('/saque', requestValidation, operateAccountBalance);

module.exports = router;
