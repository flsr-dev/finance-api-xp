'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransacoesClientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransacoesClientes.init({
    cod_transacao: DataTypes.INTEGER,
    cod_ativo: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
    qtde_ativo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransacoesClientes',
  });
  return TransacoesClientes;
};