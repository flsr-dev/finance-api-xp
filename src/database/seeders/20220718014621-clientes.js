'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Clientes', 
      [
        {
          nome: 'John',
          sobrenome: 'Doe',
          email: 'johndoe@email.com',
          senha: 'senhatemporaria',
          cpf: '12345677785',
          ativo: true,
          criacao: new Date('2011-08-01T19:58:00.000Z'),
          atualizacao: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          nome: 'Fernando',
          sobrenome: 'Ribeiro',
          email: 'fernandodev@email.com',
          senha: 'fernandoribeirosenha',
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
