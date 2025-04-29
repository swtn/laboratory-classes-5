const Product = require('../models/Product');
const Cart = require('../models/Cart');

exports.addProductToCart = (req, res) => {
    try {
        Product.add({
            name: req.body.name,
            description: req.body.description, 
            price: parseFloat(req.body.price)
    });
        Cart.add(req.body.name);
        res.status(200).redirect('/products/new');
    } catch(error) {
        res.status(404).send(error.message);
    }
};

exports.getProductsCount = (req, res) => {
    const count = Cart.getProductsQuantity();
    res.json({ count });
}