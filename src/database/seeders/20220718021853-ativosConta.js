'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('AtivosContas', 
      [
        {
          cod_conta: 1,
          cod_ativo: 1,
          valor: 68.37,
          qtde_ativo: 32,
        },
        {
          cod_conta: 1,
          cod_ativo: 2,
          valor: 27.96,
          qtde_ativo: 102,
        },
        {
          cod_conta: 2,
          cod_ativo: 2,
          valor: 27.96,
          qtde_ativo: 120,
        },
        {
          cod_conta: 2,
          cod_ativo: 1,
          valor: 68.37,
          qtde_ativo: 100,
        }
      ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('AtivosContas', null, {});
  }
};
