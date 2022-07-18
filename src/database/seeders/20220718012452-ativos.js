module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Ativos', 
      [
        {
          simbolo_ativo: 'VALE3',
          valor: 68.37,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
          atualizacao: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          simbolo_ativo: 'PETR4',
          valor: 27.96,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
          atualizacao: new Date('2011-08-01T19:58:00.000Z'),
        },
      ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Ativos', null, {});

  }
};
