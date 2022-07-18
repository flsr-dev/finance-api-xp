module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TiposDeOperacoes', {
      codTipoOperacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'cod_tipo_operacao'
       
      },
      tipoOperacao: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'tipo_operacao'
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('TiposDeOperacoes');
  }
};