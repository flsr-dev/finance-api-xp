module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Operacoes', {
      id_operacao: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cod_conta: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Contas',
          key: 'cod_conta'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      cod_tipo_operacao: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TiposDeOperacoes',
          key: 'cod_tipo_operacao'
        },
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