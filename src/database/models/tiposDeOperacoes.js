const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TiposDeOperacoes extends Model {

  }
  TiposDeOperacoes.init({
    codTipoOperacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'cod_tipo_operacao',
    },
    tipoOperacao: {
      type: DataTypes.STRING,
      field: 'tipo_operacao',
    }
  }, {
    sequelize,
    modelName: 'TiposDeOperacoes',
    tableName: 'TiposDeOperacoes',
    timestamps: false,
    underscored: true,
  });
  return TiposDeOperacoes;
};