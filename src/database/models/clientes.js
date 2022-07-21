const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    static associate(models) {
      Clientes.hasMany(
        models.Contas,
        {foreignKey: 'codCliente', as: 'contas'},
      );
      Clientes.hasMany(
        models.Transacoes,
        {foreignKey: "codCliente", as: 'transacoes'}
      );
      Clientes.hasMany(
        models.Operacoes,
        {foreignKey: "codCliente", as: 'operacoes'}
      );
    }
  }
  Clientes.init({
    codCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cod_cliente'
    },
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    atualizacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Clientes',
    tableName: 'Clientes',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: 'atualizacao',
    underscored: true
  });
  return Clientes;
};