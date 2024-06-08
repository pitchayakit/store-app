import { Sequelize } from "sequelize";
import sequelize from "../database/sequelize.js";
import MenuItem from "./menuItem.js";
import Promotion from "./promotion.js";
import Order from "./order.js";
import OrderItem from "./orderItem.js";
import Customer from "./customer.js";
import MenuItemPromotion from "./menuItemPromotion.js";

const models = {
    Customer: Customer(sequelize, Sequelize),
    Promotion: Promotion(sequelize, Sequelize),
    MenuItem: MenuItem(sequelize, Sequelize),
    Order: Order(sequelize, Sequelize),
    OrderItem: OrderItem(sequelize, Sequelize),
    MenuItemPromotion: MenuItemPromotion(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
    if ("associate" in models[key]) {
        models[key].associate(models);
    }
});

export default models;
