import { DataTypes } from "sequelize";

const MenuItemPromotion = (sequelize) => {
    const MenuItemPromotion = sequelize.define("MenuItemPromotions", {
        menuItemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        promotionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return MenuItemPromotion;
}

export default MenuItemPromotion;