'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('notes', [{
      title: 'Título de teste',
      body: 'Corpo da mensagem de teste bla bla bla bla',
      createdAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notes', null, {});
  }
};
