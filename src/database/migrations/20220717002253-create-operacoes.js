module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Operacoes', {
      idOperacao: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_operacao'
      },
      codConta: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Contas',
          key: 'cod_conta'
        },
        field: 'cod_conta',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      codTipoOperacao: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TiposDeOperacoes',
          key: 'cod_tipo_operacao'
        },
        field: 'cod_tipo_operacao',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      valor: {
        type: Sequelize.DECIMAL(19, 2),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'criacao',
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Operacoes');
  }
};