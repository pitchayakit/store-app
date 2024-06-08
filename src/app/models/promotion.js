import { DataTypes } from "sequelize";

const Promotion = (sequelize) => {
    const Promotion = sequelize.define("promotions", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discount_percentage: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, {
        tableName: "Promotions",
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
