module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PortfolioUsuarios', {
      cod_conta: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Contas',
          key: 'cod_conta'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      cod_ativo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ativos',
          key: 'cod_ativo'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL(2)
      },
      qtde_ativo: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('PortfolioUsuarios');
  }
};