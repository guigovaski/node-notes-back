'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('notes', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('notes');
  }
};
