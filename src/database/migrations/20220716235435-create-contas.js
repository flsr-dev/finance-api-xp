module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contas', {
      cod_conta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cod_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clientes',
          key: 'cod_cliente'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      valor: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: false
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'criacao',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'atualizacao'
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Contas');
  }
};