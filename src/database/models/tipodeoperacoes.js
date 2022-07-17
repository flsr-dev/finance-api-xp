'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TiposDeOPeracoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TiposDeOPeracoes.init({
    cod_operacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TiposDeOPeracoes',
  });
  return TiposDeOPeracoes;
};