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
        nombre : "Leonardo Guillermo",
        apellidos : "Falcón Choque",
        dni : "71793236",
        email : "lgfalconch@gmail.com",
        password : "2f4f13561f3e031d1b5a489627c170df87a132245feb64582e50880995f9c230",
        telefono : "964215941",        
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
