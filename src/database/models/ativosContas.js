'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AtivosContas extends Model {
    static associate(models) {
      models.Ativos.belongsToMany(
        models.Contas,
        {
          as: 'contas',
          through: AtivosContas,
          foreignKey: 'cod_ativo',
          otherKey: 'cod_conta',
        }
      );
      models.Contas.belongsToMany(
        models.Ativos,
        {
          as: 'ativos',
          through: AtivosContas,
          foreignKey: 'cod_conta',
          otherKey: 'cod_ativo',
        }
      );
    }
  }
  AtivosContas.init({
    codConta: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Contas',
        key: 'cod_conta'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      field: 'cod_conta'
    },
    codAtivo: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Ativos',
        key: 'cod_ativo'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      field: 'cod_ativo'
    },
    valor: DataTypes.DECIMAL(19, 2),
    qtde_ativo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AtivosContas',
    tableName: 'AtivosContas',
    timestamps: false,
    underscored: true,
  });
  return AtivosContas;
};