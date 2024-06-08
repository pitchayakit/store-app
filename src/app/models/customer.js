import { DataTypes } from "sequelize";

const Customer = (sequelize) => {
    const Customer = sequelize.define("Customers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        has_member_card: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    return Customer;
};

export default Customer;
