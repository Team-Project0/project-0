const router = require('express').Router();
const itemController = require("../controllers/item.controller");
const middleware=require("../middleware/item.mid")

router.post("/login", itemController.login);
router.post("/signUp", itemController.createAccount);
router.post("/createProduct",middleware.authenticateToken, itemController.createProduct);
router.get("/getProduct", itemController.getProduct);
router.get("/getPriceProduct",middleware.authenticateToken ,itemController.getPriceProduct);
router.delete("/deleteuser/:iduser", itemController.DeleteUser);
 router.get("/selectAllUsers",itemController.selectAllUsers);
router.get('/', middleware.authenticateToken);
router.post('/token', itemController.createToken);
module.exports = router;
