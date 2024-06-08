import { DataTypes } from "sequelize";

const Customer = (sequelize) => {
    const Customer = sequelize.define("customers", {
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
    }, {
        tableName: "Customers",
    });

    return Customer;
};

export default Customer;
