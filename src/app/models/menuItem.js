import { DataTypes } from "sequelize";

const MenuItem = (sequelize) => {
    const MenuItem = sequelize.define("menuItems", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, {
        tableName: "MenuItems",
    });

    MenuItem.associate = (models) => {
        MenuItem.belongsToMany(models.Promotion, {
            through: "MenuItemPromotions",
            foreignKey: "menuItemId",
        });
    };    

    return MenuItem;
};


export default MenuItem;
