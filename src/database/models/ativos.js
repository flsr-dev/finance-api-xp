'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ativos extends Model {
  }
  Ativos.init({
    codAtivo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
    qtdeAtivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'qtde_ativo',
    },
    valor: {
      type: DataTypes.DECIMAL(19, 2),
      get() {
        const value = this.getDataValue('valor');
        return value === null ? null : parseFloat(value);
      }
    }
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