import { DataTypes } from "sequelize";

const Customer = (sequelize) => {
    const Customer = sequelize.define("Customers", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hasMemberCard: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    return Customer;
};

export default Customer;
