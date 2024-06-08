import { DataTypes } from "sequelize";

const Order = (sequelize) => {
    const Order = sequelize.define("Orders", {
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    return Order;
};

export default Order;
