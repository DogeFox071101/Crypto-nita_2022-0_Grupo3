'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert("Usuario",[
      {
        nombre : "Luis Manuel",
        apellidos : "Mondoñedo Cabanillas",
        dni : "70412766",
        email : "cliente@gmail.com",
        password : "3992792b4a8365953c5dd32122599864e5eaa858f1d631f04e6d51ee86c48031",
        telefono : "955758929",        
        estado : "Validado",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
