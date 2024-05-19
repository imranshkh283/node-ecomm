const productRepository = require('./repository');

exports.createProduct = async (req, res) => {

    try {
        const payload = req.body;
        const product = await productRepository.createProduct(payload);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        let products = await productRepository.products();
        res.status(200).json({
            data: products
        });
    } catch (error) {

    }
}