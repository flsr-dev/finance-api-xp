module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transacoes', {
      idTransacao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id_transacao'
      },
      codCliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'cod_cliente'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'cod_cliente'
      },
      codTipoTransacao: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TiposDeTransacoes',
          key: 'cod_tipo_transacao'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'cod_tipo_transacao'
      },
      codAtivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ativos',
          key:'cod_ativo'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'cod_ativo'
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL(19, 2)
      },
      qtdeAtivo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'qtde_ativo'
      },
      createdAt: {
        allowNull: false,
        field: 'criacao',
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Transacoes');
  }
};