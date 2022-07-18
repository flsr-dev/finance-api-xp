module.exports = {
  async up (queryInterface, _Sequelize) {

      await queryInterface.bulkInsert('TiposDeOperacoes', 
        [
          {
            tipo_operacao: 'deposito'
          },
          {
            tipo_operacao: 'saque'
          }
        ], {});
 
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('TiposDeOperacoes', null, {});
     
  }
};
