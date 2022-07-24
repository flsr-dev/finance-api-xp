'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Clientes', 
      [
        {
          nome: 'Fernando',
          sobrenome: 'Lucas de Souza Ribeiro',
          email: 'flsr.dev@email.com',
          senha: 'placeholderdesenha',
          cpf: '12345677785',
          ativo: true,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
          atualizacao: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          nome: 'John',
          sobrenome: 'Doe',
          email: 'johndoe@gmail.com',
          senha: 'placeholderdesenha',
          cpf: '12568498865',
          ativo: true,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
          atualizacao: new Date('2011-08-01T19:58:00.000Z'),
        }
      ], {});

  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
