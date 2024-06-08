"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "Promotions",
            [
                {
                    description: "10% discount",
                    discount_percentage: 0.1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    description: "5% discount",
                    discount_percentage: 0.2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Promotions", null, {});
    },
};
