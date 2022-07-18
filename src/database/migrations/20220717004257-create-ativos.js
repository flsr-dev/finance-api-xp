module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ativos', {
      codAtivo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'cod_ativo'
      },
      simboloAtivo: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'simbolo_ativo'
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL(19, 2)
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
    await queryInterface.dropTable('Ativos');
  }
};