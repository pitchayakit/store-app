"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "Customers",
            [
                {
                    name: "John Doe",
                    has_member_card: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "James Smith",
                    has_member_card: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Customers", null, {});
    },
};
