module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TiposDeTransacoes', {
      codTipoTransacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'cod_tipo_transacao'
      },
      tipoTransacao: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'tipo_transacao'
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('TiposDeTransacoes');
  }
};