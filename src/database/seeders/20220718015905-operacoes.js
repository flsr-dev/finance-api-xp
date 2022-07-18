'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Operacoes', 
      [
        {
          cod_conta: 1,
          cod_tipo_operacao: 1,
          valor: 20000.00,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          cod_conta: 2,
          cod_tipo_operacao: 1,
          valor: 15528.97,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
        }
      ], {});

  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Operacoes', null, {});
  }
};
