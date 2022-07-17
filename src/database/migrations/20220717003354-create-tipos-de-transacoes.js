module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TiposDeTransacoes', {
      cod_transacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_transacao: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TiposDeTransacoes');
  }
};