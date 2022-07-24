const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AtivosClientes extends Model {
    static associate(models) {
      models.Ativos.belongsToMany(
        models.Clientes,
        {
          as: 'clientes',
          through: AtivosClientes,
          foreignKey: 'codAtivo',
          otherKey: 'codCliente',
        }
      );
      models.Clientes.belongsToMany(
        models.Ativos,
        {
          as: 'ativos',
          through: AtivosClientes,
          foreignKey: 'codCliente',
          otherKey: 'codAtivo',
        }
      );
    }
  }
  AtivosClientes.init({
    codCliente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Clientes',
        key: 'cod_cliente'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      field: 'cod_cliente'
    },
    codAtivo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Ativos',
        key: 'cod_ativo'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      field: 'cod_ativo'
    },
    valor: {
      type: DataTypes.DECIMAL(19, 2),
      get() {
        const value = this.getDataValue('valor');
        return value === null ? null : parseFloat(value).toFixed(2);
      }
    },
    qtdeAtivo: {
      type: DataTypes.INTEGER,
      field: 'qtde_ativo'
    }
  }, {
    sequelize,
    modelName: 'AtivosClientes',
    tableName: 'AtivosClientes',
    timestamps: false,
    underscored: true,
  });
  return AtivosClientes;
};