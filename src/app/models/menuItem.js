import { DataTypes } from "sequelize";

const MenuItem = (sequelize) => {
    const MenuItem = sequelize.define("MenuItems", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    return MenuItem;
};

export default MenuItem;
