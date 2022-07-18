const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operacoes extends Model {
    static associate(models) {
      Operacoes.hasMany(
        models.TiposDeOperacoes,
        {
          foreignKey: 'cod_tipo_operacao',
          as: 'tiposDeOperacoes'
        }
      );
      Operacoes.hasMany(
        models.Contas,
        {
          foreignKey: 'cod_conta',
          as: 'contas'
        }
      );
    }
  }
  Operacoes.init({
    idOperacao:{
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_operacao'

    },
    codTipoOperacao: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      field: 'cod_tipo_operacao'
    },
    codConta: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      field: 'cod_conta'
    },
    valor: DataTypes.DECIMAL(19, 2),
    criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  },
   {
    sequelize,
    modelName: 'Operacoes',
    tableName: 'Operacoes',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: false,
    underscored: true
  });
  return Operacoes;
};