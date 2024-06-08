import models from "../models";
import Service from "./service";

const { Customer } = models;

class CustomerService extends Service {
    constructor() {
        super(Customer);
    }
}

export default CustomerService;
