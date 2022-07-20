const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { Contas, Operacoes } = require('../database/models');
const { CLIENT_NOT_FOUND_MSG } = require('../utils/errorMessages');
const operationCodes = require('../utils/operationCodes');

const checkIfAccountExists = async (codConta) => {
  const account = await Contas.findOne({ where: { codConta } });
  if (!account) {
    throw new HttpException(StatusCodes.NOT_FOUND, CLIENT_NOT_FOUND_MSG);
  }
  return account;
};

const calcNewBalance = (account, valor, operationType) => {
  if (operationType === 'deposito') {
    return (parseFloat(account.valor) + parseFloat(valor)).toFixed(2);
  }
  return (parseFloat(account.valor) - parseFloat(valor)).toFixed(2);
};

const createNewAccountOperation = (account, valor, operationType, seqTransaction) => {
  const codTipoOperacao = operationCodes[operationType];
  const codConta = account.codCliente;
  return Operacoes.create({ valor, codConta, codTipoOperacao }, { transaction: seqTransaction });
};

const accountBalanceOperation = async ({ codCliente, valor }, operationType, seqTransaction) => {
  const account = await checkIfAccountExists(codCliente);
  account.valor = calcNewBalance(account, valor, operationType);
  account.save({ transaction: seqTransaction });
  return createNewAccountOperation(account, valor, operationType, seqTransaction);
};

module.exports = {
  accountBalanceOperation,
};
