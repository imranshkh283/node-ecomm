const { Router } = require("express");
const BaseController = require("../BaseController");
const productRepository = require("./product.repository");
class ProductController extends BaseController {
    router = Router();
    constructor() {
        super();
    }

    init = app => {
        app.use('/api/product/', this.router)
        this.router.get('/', () => console.log('Product Route'));
    }
}

// exports.createProduct = async (req, res) => {

//     try {
//         const payload = req.body;
//         const product = await productRepository.createProduct(payload);
//         res.status(201).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// exports.getProducts = async (req, res) => {
//     try {
//         let products = await productRepository.products();
//         res.status(200).json({
//             data: products
//         });
//     } catch (error) {

//     }
// }

const productController = new ProductController();
module.exports = ProductController;