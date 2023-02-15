const router = require('express').Router();
const itemController = require("../controllers/item.controller");


router.get("/milka/login", itemController.getOne);
router.post("/signUp", itemController.createAccount);
router.post("/createProduct", itemController.createProduct);

module.exports = router;
