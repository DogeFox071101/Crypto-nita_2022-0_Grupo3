'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.createTable('Operacion', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        tipoCambio: {
          type: Sequelize.FLOAT
        },
        montoBtc: {
          type: Sequelize.FLOAT
        },
        tipoOperacion: {
          type: Sequelize.STRING
        },
        estado: {
          type: Sequelize.STRING
        },
        billeteraBtc: {
          type: Sequelize.STRING
        },
        cuentaBancaria: {
          type: Sequelize.STRING
        },
        idCliente: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Operacion');
  }
};
