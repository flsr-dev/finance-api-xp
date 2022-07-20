'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('AtivosClientes', 
      [
        {
          cod_cliente: 1,
          cod_ativo: 1,
          valor: 68.37,
          qtde_ativo: 32,
        },
        {
          cod_cliente: 1,
          cod_ativo: 2,
          valor: 27.96,
          qtde_ativo: 102,
        },
        {
          cod_cliente: 2,
          cod_ativo: 2,
          valor: 27.96,
          qtde_ativo: 120,
        },
        {
          cod_cliente: 2,
          cod_ativo: 1,
          valor: 68.37,
          qtde_ativo: 100,
        }
      ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('AtivosClientes', null, {});
  }
};
