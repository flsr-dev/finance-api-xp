module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OperacoesContas', {
      cod_conta: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Contas',
          key: 'cod_conta'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true
      },
      cod_operacao: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TiposDeOperacoes',
          key: 'cod_operacao'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true
      },
      valor: {
        type: Sequelize.DECIMAL(2),
        allowNull: false
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('OperacoesContas');
  }
};