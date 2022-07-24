const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { Contas, Operacoes } = require('../database/models');
const { CLIENT_NOT_FOUND_MSG, INSUFICIENT_FUNDS_MSG } = require('../utils/errorMessages');
const operationCodes = require('../utils/operationCodes');

const getAccount = async (codCliente) => {
  const account = await Contas.findOne({ where: { codCliente } });
  if (!account) {
    throw new HttpException(StatusCodes.NOT_FOUND, CLIENT_NOT_FOUND_MSG);
  }
  return account;
};

const calcNewBalance = (account, valor, operationType) => {
  if (operationType === 'deposito') {
    return (parseFloat(account.saldo) + parseFloat(valor)).toFixed(2);
  }
  return (parseFloat(account.saldo) - parseFloat(valor)).toFixed(2);
};

const createNewAccountOperation = (account, valor, operationType, seqTransaction) => {
  const codTipoOperacao = operationCodes[operationType];
  const { codCliente } = account;
  return Operacoes.create({ valor, codCliente, codTipoOperacao }, { transaction: seqTransaction });
};

const updateBalance = async (codCliente, valor, operationType, seqTransaction) => {
  const account = await getAccount(codCliente);
  const newBalance = calcNewBalance(account, valor, operationType);
  if (newBalance < 0) {
    throw new HttpException(StatusCodes.BAD_REQUEST, INSUFICIENT_FUNDS_MSG);
  }
  account.saldo = newBalance;
  account.save({ transaction: seqTransaction });
  return account;
};

const accountBalanceOperation = async ({ codCliente, valor }, operationType, seqTransaction) => {
  const updatedAccount = await updateBalance(codCliente, valor, operationType, seqTransaction);
  return createNewAccountOperation(updatedAccount, valor, operationType, seqTransaction);
};

const getClientAccountBalance = async ({ codCliente }) => getAccount(codCliente);

module.exports = {
  accountBalanceOperation,
  getClientAccountBalance,
  calcNewBalance,
  updateBalance,
  getAccount,
};
