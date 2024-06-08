import { DataTypes } from "sequelize";

const OrderItem = (sequelize) => {
    const OrderItem = sequelize.define("OrderItems", {
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        menuItemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return OrderItem;
};

export default OrderItem;
