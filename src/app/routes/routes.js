
const AuthController = require("@modules/auth/auth.controller");
const ProductController = require("@modules/product/product.controller");

module.exports = {
    registerRoutes(app) {
        new AuthController().init(app);
        new ProductController().init(app);
    }
}