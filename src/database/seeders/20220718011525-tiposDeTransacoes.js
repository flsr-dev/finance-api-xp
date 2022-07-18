module.exports = {
  async up (queryInterface, Sequelize) {
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TiposDeTransacoes', null, {});

  }
};
