module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AtivosClientes', {
      codCliente: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'cod_cliente',
        references: {
          model: 'Clientes',
          key: 'cod_cliente'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      codAtivo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'cod_ativo',
        references: {
          model: 'Ativos',
          key: 'cod_ativo'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL(19, 2)
      },
      qtdeAtivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'qtde_ativo'
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('AtivosClientes');
  }
};