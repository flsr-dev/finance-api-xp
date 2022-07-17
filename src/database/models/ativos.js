'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ativos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ativos.init({
    cod_ativo: DataTypes.INTEGER,
    simbolo_nome: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Ativos',
  });
  return Ativos;
};