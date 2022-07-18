const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transacoes extends Model {
    static associate(models) {
      Transacoes.belongsTo(
        models.TiposDeTransacoes,
        {
          foreignKey: 'cod_tipo_transacao',
          as: 'tipoDeTransacao'
        }
      );
      Transacoes.belongsTo(
        models.Contas,
        {
          foreignKey: 'cod_conta',
          as: 'contas'
        }
      );
    }
  }
  Transacoes.init({
    idTransacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_transacao',
    },
    codTipoTransacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TiposDeTransacoes',
        key: 'cod_tipo_transacao'
      },
      field: 'cod_tipo_transacao',
    },
    codConta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Contas',
        key: 'cod_conta'
      },
      field: 'cod_conta',
    },
    codAtivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ativos',
        key: 'cod_ativo'
      },
      field: 'cod_ativo',
    },
    valor: DataTypes.DECIMAL(19, 2),
    qtde_ativo: DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'criacao',
    }
  }, {
    sequelize,
    modelName: 'Transacoes',
    tableName: 'Transacoes',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: false,
    underscored: true,
  });
  return Transacoes;
};