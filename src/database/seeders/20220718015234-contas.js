'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Contas', 
      [
        {
          cod_cliente: 1,
          valor: 0.00,
          ativo: true,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
          atualizacao: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          cod_cliente: 2,
          valor: 0.00,
          ativo: true,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
          atualizacao: new Date('2011-08-01T19:58:00.000Z'),
        }
      ], {});

  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Contas', null, {});
  }
};
