const router = require("express").Router();
const cartController = require("./controller");
router.post("/", cartController.addItem);
router.get("/", cartController.getCart);
// router.delete("/empty-cart", cartController.emptyCart);
module.exports = router;