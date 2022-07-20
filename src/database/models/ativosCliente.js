'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AtivosClientes extends Model {
    static associate(models) {
      models.Ativos.belongsToMany(
        models.Clientes,
        {
          as: 'clientes',
          through: AtivosClientes,
          foreignKey: 'cod_ativo',
          otherKey: 'cod_cliente',
        }
      );
      models.Clientes.belongsToMany(
        models.Ativos,
        {
          as: 'ativos',
          through: AtivosClientes,
          foreignKey: 'cod_cliente',
          otherKey: 'cod_ativo',
        }
      );
    }
  }
  AtivosClientes.init({
    codCliente: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Clientes',
        key: 'cod_cliente'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      field: 'cod_cliente'
    },
    codAtivo: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Ativos',
        key: 'cod_ativo'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      field: 'cod_ativo'
    },
    valor: DataTypes.DECIMAL(19, 2),
    qtdeAtivo: {
      type: DataTypes.INTEGER,
      field: 'qtde_ativo'
    }
  }, {
    sequelize,
    modelName: 'AtivosClientes',
    tableName: 'AtivosClientes',
    timestamps: false,
    underscored: true,
  });
  return AtivosClientes;
};