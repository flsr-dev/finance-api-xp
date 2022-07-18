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

    }
  }
  Ativos.init({
    codAtivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'cod_ativo',
    },
    simboloAtivo: {
      type: DataTypes.INTEGER,
      field: 'simbolo_ativo'
    },    
    criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    atualizacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    valor: DataTypes.DECIMAL(19, 2)
  }, {
    sequelize,
    modelName: 'Ativos',
    tableName: 'Ativos',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: 'atualizacao',
    underscored: true,
  });
  return Ativos;
};