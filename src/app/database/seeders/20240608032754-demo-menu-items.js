"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "MenuItems",
            [
                {
                    name: "Red set",
                    price: 50,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Green set",
                    price: 40,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Blue set",
                    price: 30,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Yellow set",
                    price: 50,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Pink set",
                    price: 80,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Purple set",
                    price: 90,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Orange set",
                    price: 120,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("MenuItems", null, {});
    },
};
