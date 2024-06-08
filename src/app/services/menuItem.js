import models from "../models";
import Service from "./service";

const { MenuItem } = models;

class MenuItemService extends Service {
    constructor() {
        super(MenuItem);
    }
}

export default MenuItemService;
