module.exports = {
  async up (queryInterface, _Sequelize) {

    await queryInterface.bulkInsert('Ativos', 
      [
        {
          simbolo_ativo: 'VALE3',
          valor: 68.37,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
          atualizacao: new Date('2011-08-01T19:58:00.000Z'),
          qtde_ativo: 20185,
        },
        {
          simbolo_ativo: 'PETR4',
          valor: 27.96,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
          atualizacao: new Date('2011-08-01T19:58:00.000Z'),
          qtde_ativo: 2000,
        },
      ], {});

  },

  async down (queryInterface, _Sequelize) {

    await queryInterface.bulkDelete('Ativos', null, {});

  }
};
