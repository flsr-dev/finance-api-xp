'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {

    await queryInterface.bulkInsert('Transacoes', 
      [
        {
          cod_conta: 1,
          cod_tipo_transacao: 1,
          cod_ativo: 1,
          valor: 68.37,
          qtde_ativo: 32,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          cod_conta: 1,
          cod_tipo_transacao: 2,
          cod_ativo: 2,
          valor: 27.96,
          qtde_ativo: 10,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          cod_conta: 2,
          cod_tipo_transacao: 2,
          cod_ativo: 2,
          valor: 27.96,
          qtde_ativo: 12,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          cod_conta: 2,
          cod_tipo_transacao: 1,
          cod_ativo: 1,
          valor: 68.37,
          qtde_ativo: 100,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
        }
      ], {});

  },
  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Transacoes', null, {});
  }
};
