import models from "../models";
import Service from "./service";

const { Promotion } = models;

class PromotionService extends Service {
    constructor() {
        super(Promotion);
    }
}

export default PromotionService;