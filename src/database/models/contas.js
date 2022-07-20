const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contas extends Model {
    static associate(models) {
      Contas.belongsTo(
        models.Clientes,
        {foreignKey: "cod_cliente", as: 'cliente'}
      );

      Contas.hasMany(
        models.Operacoes,
        {foreignKey: "cod_conta", as: 'operacoes'}
      );
    }
  }
  Contas.init({
    codConta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'cod_conta',
    },
    codCliente: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'cod_cliente',
    },
    valor: DataTypes.DECIMAL(19, 2),
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'criacao',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'atualizacao'
    },
    ativo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Contas',
    tableName: 'Contas',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: 'atualizacao',
    underscored: true,
  });
  return Contas;
};