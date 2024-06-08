import { DataTypes } from "sequelize";

const Promotion = (sequelize) => {
    const Promotion = sequelize.define("Promotions", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discount_percentage: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    Promotion.associate = (models) => {
        Promotion.belongsToMany(models.MenuItem, {
            through: "MenuItemPromotions",
            foreignKey: "promotionId",
        });
    };

    return Promotion;
};

export default Promotion;
