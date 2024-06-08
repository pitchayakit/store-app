import models from "../models";
import Service from "./service";

const { Order } = models;

class OrderService extends Service {
    constructor() {
        super(Order);
    }
}

export default OrderService;