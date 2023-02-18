const router = require('express').Router();
const itemController = require("../controllers/item.controller");
const middleware=require("../middleware/item.mid")


router.post('/login',itemController.login)
router.get("/allIngredient",itemController.selectAllIngredient)
router.post("/addingredient",itemController.addIingredient)

router.post("/signUp", itemController.createAccount);

router.put("/:idingredient",itemController.updateIngredient)
router.delete("/delete/:idingredient",itemController.deleteIngredient)


// router.post("/upload",   (req, res) => {
//     const upload =  cloudinary.uploader.upload(req.file.path);
//     return res.json({
//       success: true,
//       file: upload.secure_url,
//     });
//   });

router.post("/createProduct", itemController.createProduct);
router.get("/getProduct", itemController.getProduct);
router.get("/getPriceProduct",middleware.authenticateToken ,itemController.getPriceProduct);
router.delete("/deleteuser/:iduser", itemController.DeleteUser);
 router.get("/selectAllUsers",itemController.selectAllUsers);
router.get('/', middleware.authenticateToken);
router.post('/token', itemController.createToken);
module.exports = router;
