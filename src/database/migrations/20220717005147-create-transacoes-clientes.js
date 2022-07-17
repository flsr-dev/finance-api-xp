'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransacoesClientes', {
      cod_conta: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Contas',
          key: 'cod_conta'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      cod_transacao: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'TiposDeTransacoes',
          key: 'cod_transacao'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      cod_ativo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ativos',
          key:'cod_ativo'
        }
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      qtde_ativo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        field: 'criacao',
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('TransacoesClientes');
  }
};