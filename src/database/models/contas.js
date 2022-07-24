const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contas extends Model {
    static associate(models) {
      Contas.belongsTo(
        models.Clientes,
        {foreignKey: 'codCliente', as: 'cliente'}
      );
    }
  }
  Contas.init({
    codConta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cod_conta'
    },
    codCliente: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'Clientes',
        key: 'cod_cliente'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      field: 'cod_cliente',
    },
    saldo: {
      type: DataTypes.DECIMAL(19, 2),
      get() {
        const value = this.getDataValue('saldo');
        return value === null ? null : parseFloat(value);
      },
      field: "valor"
    },
    atualizacao: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    criacao: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
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