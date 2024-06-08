import { DataTypes } from "sequelize";

const MenuItemPromotion = (sequelize) => {
    const MenuItemPromotion = sequelize.define("menuItemPromotions", {
        menuItemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        promotionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        tableName: "MenuItemPromotions",
    });

    return MenuItemPromotion;
}

export default MenuItemPromotion;