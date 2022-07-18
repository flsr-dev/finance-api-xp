const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TiposDeTransacoes extends Model {
    static associate(models) {
      TiposDeTransacoes.hasMany(
        models.Transacoes,
        {
          foreignKey: 'cod_tipo_transacao',
          as: 'transacoes'
        }
      )
    }
  }
  TiposDeTransacoes.init({
    codTipoTransacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'cod_tipo_transacao',
    },
    tipoTransacao: {
      type: DataTypes.STRING,
      field: 'tipo_transacao'
    }
  }, {
    sequelize,
    modelName: 'TiposDeTransacoes',
    tableName: 'TiposDeTransacoes',
    timestamps: false,
    underscored: true,
  });
  return TiposDeTransacoes;
};