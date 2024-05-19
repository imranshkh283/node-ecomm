const router = require('express').Router();
const productController = require('./controller');
const multerInstance = require('./multer');
router.post("/", productController.createProduct);


module.exports = router;