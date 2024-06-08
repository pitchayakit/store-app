import models from "../models";
import Service from "./service";

const { MenuItem, Promotion } = models;

class MenuItemService extends Service {
    constructor() {
        super(MenuItem);
    }

    async findAll(option = {}) {
        const where = option.where || {};
        const include = [
            {
                model: Promotion,
            },
        ]

        return super.findAll({ where, include });
    }
}

export default MenuItemService;
