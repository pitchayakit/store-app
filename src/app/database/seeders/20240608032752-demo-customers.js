"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "Customers",
            [
                {
                    name: "John Doe",
                    hasMemberCard: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "James Smith",
                    hasMemberCard: true,
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
