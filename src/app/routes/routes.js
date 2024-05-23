const AuthController = require("../modules/auth/auth.controller");

module.exports = {
    registerRoutes(app) {
        new AuthController().init(app);
    }
}