import { DataTypes } from "sequelize";

const OrderItem = (sequelize) => {
    const OrderItem = sequelize.define("orderItems", {
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
    }, {
        tableName: "OrderItems",
    });

    return OrderItem;
};

export default OrderItem;
