const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transacoes extends Model {
    static associate(models) {
      Transacoes.belongsTo(
        models.TiposDeTransacoes,
        {
          foreignKey: 'codTipoTransacao',
          as: 'tipoDeTransacao'
        }
      );
      Transacoes.belongsTo(
        models.Clientes,
        {
          foreignKey: 'codCliente',
          as: 'cliente'
        }
      );
    }
  }
  Transacoes.init({
    idTransacao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_transacao',
    },
    codTipoTransacao: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TiposDeTransacoes',
        key: 'cod_tipo_transacao'
      },
      field: 'cod_tipo_transacao',
    },
    codCliente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Clientes',
        key: 'cod_cliente'
      },
      field: 'cod_cliente',
    },
    codAtivo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Ativos',
        key: 'cod_ativo'
      },
      field: 'cod_ativo',
    },
    valor:{
      type: DataTypes.DECIMAL(19, 2), 
      get() {
        const value = this.getDataValue('valor');
        return value === null ? null : parseFloat(value).toFixed(2);
      }
      
    },
    qtdeAtivo: {
      type: DataTypes.INTEGER,
      field: 'qtde_ativo'
    },
    criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
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