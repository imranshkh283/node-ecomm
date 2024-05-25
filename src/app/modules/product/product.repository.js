const Product = require('./product.model');

class ProductRepository {
    constructor() { }

    static async products() {
        const products = await Product.find();
        return products;
    }
    static async productById(id) {
        const product = await Product.findById(id);
        return product;
    }

    static async createProduct(payload) {
        const newProduct = await Product.create(payload);
        return newProduct
    }

    static async removeProduct(id) {
        const product = await Product.findByIdAndRemove(id);
        return product
    }
}

module.exports = ProductRepository;
// exports.products = async () => {
//     const products = await Product.find();
//     return products;
// };
// exports.productById = async id => {
//     const product = await Product.findById(id);
//     return product;
// }
// exports.createProduct = async payload => {
//     const newProduct = await Product.create(payload);
//     return newProduct
// }
// exports.removeProduct = async id => {
//     const product = await Product.findByIdAndRemove(id);
//     return product
// }
