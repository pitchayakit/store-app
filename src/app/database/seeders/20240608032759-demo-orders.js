"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "Orders",
            [
                {
                    customerId: 1,
                    totalPrice: 50,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Orders", null, {});
    },
};
