module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TiposDeTransacoes', {
      cod_tipo_transacao: {
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
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('TiposDeTransacoes');
  }
};