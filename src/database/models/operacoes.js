const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operacoes extends Model {
    static associate(models) {
      Operacoes.hasMany(
        models.TiposDeOperacoes,
        {
          foreignKey: 'codTipoOperacao',
          as: 'tiposDeOperacoes'
        }
      );
      Operacoes.belongsTo(
        models.Clientes,
        {
          foreignKey: 'codCliente',
          as: 'cliente'
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
    codCliente: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      field: 'cod_cliente'
    },
    valor:{
      type: DataTypes.DECIMAL(19, 2),
      get() {
        const value = this.getDataValue('valor');
        return value === null ? null : parseFloat(value);
      }
    },
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