const router = require('express').Router();
const productController = require('./controller');
const multerInstance = require('./multer');
router.post("/", productController.createProduct);
router.get("/", productController.getProducts);


module.exports = router;