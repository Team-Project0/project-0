const router = require('express').Router();
const itemController = require("../controllers/item.controller");



router.get("/allIngredient",itemController.selectAllIngredient)
router.post("/addingredient",itemController.addIingredient)
router.get("/milka/login", itemController.getOne);
router.post("/signUp", itemController.createAccount);
router.put("/:idingredient",itemController.updateIngredient)
router.delete("/delete/:idingredient",itemController.deleteIngredient)
module.exports = router;
