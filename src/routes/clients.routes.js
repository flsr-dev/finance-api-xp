const express = require('express');
const requestValidation = require('../middlewares/requestValidation.middleware');

const router = express.Router();
router.get('/ativos', requestValidation, (req, res) => {
  res.send('Lista de ativos');
});

module.exports = router;
