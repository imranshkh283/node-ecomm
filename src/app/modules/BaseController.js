const { Router } = require("express");

// create abstract class
class BaseController {

    route;
    constructor() {
        this.route = Router();
    }
}
module.exports = BaseController;