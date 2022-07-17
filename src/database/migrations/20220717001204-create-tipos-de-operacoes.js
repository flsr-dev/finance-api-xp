module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TiposDeOperacoes', {
      cod_operacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_operacao: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('TiposDeOPeracoes');
  }
};