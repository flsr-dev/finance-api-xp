const userSideOperations = {
  comprar: (brokerAssetAmount, operationAmount) => brokerAssetAmount + operationAmount,
  vender: (brokerAssetAmount, operationAmount) => brokerAssetAmount - operationAmount,
};

const brokerSideOperations = {
  comprar: (brokerAssetAmount, operationAmount) => brokerAssetAmount - operationAmount,
  vender: (brokerAssetAmount, operationAmount) => brokerAssetAmount + operationAmount,
};

const calcUserAmount = (brokerAssetAmount, operationAmount, transactionType) => (
  userSideOperations[transactionType](brokerAssetAmount, operationAmount)
);

const calcBrokerAmount = (brokerAssetAmount, operationAmount, transactionType) => (
  brokerSideOperations[transactionType](brokerAssetAmount, operationAmount)
);
module.exports = {
  calcUserAmount,
  calcBrokerAmount,
};
