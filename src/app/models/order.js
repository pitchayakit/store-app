import { DataTypes } from "sequelize";

const Order = (sequelize) => {
    const Order = sequelize.define("Orders", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    return Order;
};

export default Order;
