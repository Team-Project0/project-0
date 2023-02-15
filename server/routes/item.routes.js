const router = require('express').Router();
const itemController = require("../controllers/item.controller");


router.get("/milka/login", itemController.getOne);
router.post("/signUp", itemController.createAccount);

module.exports = router;
