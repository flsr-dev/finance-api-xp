const userSideOperations = {
  comprar: (brokerAssetAmount, operationAmount) => brokerAssetAmount + operationAmount,
  vender: (brokerAssetAmount, operationAmount) => brokerAssetAmount - operationAmount,
};

const brokerSideOperations = {
  comprar: (assetAmount, operationAmount) => assetAmount - operationAmount,
  vender: (assetAmount, operationAmount) => assetAmount + operationAmount,
};

const calcUserAmount = ({ qtdeAtivo: userAssetAmount }, operationAmount, transactionType) => (
  userSideOperations[transactionType](userAssetAmount, operationAmount)
);

const calcBrokerAmount = (
  { qtdeAtivo: brokerAssetAmount },
  { qtdeAtivo: operationAmount },
  transactionType,
) => (
  brokerSideOperations[transactionType](brokerAssetAmount, operationAmount)
);

module.exports = {
  calcUserAmount,
  calcBrokerAmount,
};
