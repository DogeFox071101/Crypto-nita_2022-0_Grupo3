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
     await queryInterface.bulkInsert("Admin",[
      {
        email : "20173617@aloe.ulima.edu.pe",
        password : "3992792b4a8365953c5dd32122599864e5eaa858f1d631f04e6d51ee86c48031",
        nombre : "Luis Manuel",
        apellido : "Mondoñedo Cabanillas",
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
