const router = require('express').Router();
const itemController = require("../controllers/item.controller");


router.get("/milka/login", itemController.getOne);
router.post("/signUp", itemController.createAccount);
router.post("/createProduct", itemController.createProduct);
router.get("/getProduct", itemController.getProduct);
router.get("/getPriceProduct", itemController.getPriceProduct);
router.delete("/deleteuser/:iduser", itemController.DeleteUser);
 router.get("/selectAllUsers",itemController.selectAllUsers);
 router.post("/sendNotification", itemController.sendNotification);
 router.get("/getNotification", itemController.getNotification);


 
module.exports = router;
