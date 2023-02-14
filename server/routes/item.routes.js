const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.get("/milka/login", itemController.getOne);

module.exports = router;
