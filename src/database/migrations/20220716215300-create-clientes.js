module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      cod_cliente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sobrenome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'criacao',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'atualizacao'
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};