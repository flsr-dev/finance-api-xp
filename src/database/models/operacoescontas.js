'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OperacoesContas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OperacoesContas.init({
    cod_operacao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OperacoesContas',
  });
  return OperacoesContas;
};