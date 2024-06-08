"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "MenuItemPromotions",
            [
                {
                    menuItemId: 7,
                    promotionId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    menuItemId: 5,
                    promotionId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    menuItemId: 2,
                    promotionId: 2,
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
