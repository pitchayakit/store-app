"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("MenuItemPromotions", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            menuItemId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "MenuItems",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            promotionId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Promotions",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
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
        await queryInterface.dropTable("MenuItemPromotions");
    },
};
