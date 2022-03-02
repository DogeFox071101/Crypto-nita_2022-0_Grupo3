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
        email : "admin_jd@gmail.com",
        password : "c7c646e5fd126873cfe4a44976cb6899a62cae1ac331e8f7ba07505bbc1fafe8",
        nombre : "Juan Diego",
        apellido : "Rojas Saldarriaga",
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
