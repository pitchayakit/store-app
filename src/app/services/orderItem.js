import models from "../models";
import Service from "./service";

const { OrderItem } = models;

class OrderItemService extends Service {
    constructor() {
        super(OrderItem);
    }
}

export default OrderItemService;