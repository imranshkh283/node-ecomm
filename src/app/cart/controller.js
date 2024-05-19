const cartRepository = require('./repository')
const productRepository = require('../product/repository');

exports.addItem = async (req, res) => {
    const { productId } = req.body;
    const quantity = Number.parseInt(req.body.quantity);
    console.log(quantity);

    try {
        let cart = await cartRepository.cart();

        let productDetail = await productRepository.productById(productId);

        if (!productDetail) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (cart) {
            console.log('if');
            const indexFound = cart.items.findIndex(item => item.productId.id == productId);
            console.log(indexFound);
            if (indexFound !== -1 && quantity <= 0) {
                console.log(cart);
            } else if (indexFound !== -1) {
                console.log('else if');
                console.log(indexFound);
                console.log(cart);
                cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
                cart.items[indexFound].total = cart.items[indexFound].quantity * productDetail.price;
                cart.items[indexFound].price = productDetail.price;
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            } else if (quantity > 0) {
                cart.items.push({
                    productId: productId,
                    quantity: quantity,
                    price: productDetail.price,
                    total: parseInt(productDetail.price * quantity)
                })
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            } else {
                return res.status(400).json({
                    type: "Invalid",
                    msg: "Invalid request"
                })
            }
            let data = await cart.save();
        } else {
            console.log('else');
            const addCart = {
                items: [{
                    productId: productId,
                    quantity: quantity,
                    price: productDetail.price,
                    total: parseInt(productDetail.price * quantity),
                }],
                subTotal: parseInt(productDetail.price * quantity)
            }
            cart = await cartRepository.addItem(addCart);
            res.json(cart);

        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            type: "Invalid",
            msg: "Something Went Wrong",
            err: error
        })
    }
}

exports.getCart = async (req, res) => {
    try {
        let cart = await cartRepository.cart();
        if (!cart) {
            return res.status(400).json({
                type: "Invalid",
                msg: "Empty Cart",
            })
        }
        res.status(200).json({
            status: true,
            data: cart
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            msg: "Something Went Wrong",
            err: err
        })
    }
}