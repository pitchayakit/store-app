"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Orders", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            customerId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Customers",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },
            totalPrice: {
                type: Sequelize.DECIMAL(10, 2),
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
        await queryInterface.dropTable("Orders");
    },
};
