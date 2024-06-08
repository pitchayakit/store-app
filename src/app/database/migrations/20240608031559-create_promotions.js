"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Promotions", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.STRING,
            },
            discount_percentage: {
                type: Sequelize.DECIMAL(3, 2),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Promotions");
    },
};
