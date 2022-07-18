module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('TiposDeTransacoes', 
      [
        {
          tipo_transacao: 'compra'
        },
        {
          tipo_transacao: 'venda'
        }
      ], {});
    
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('TiposDeTransacoes', null, {});

  }
};
