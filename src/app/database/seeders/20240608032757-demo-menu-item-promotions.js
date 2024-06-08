"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "MenuItemPromotions",
            [
                {
                    menuItemId: 1,
                    promotionId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("MenuItemPromotions", null, {});
    },
};
