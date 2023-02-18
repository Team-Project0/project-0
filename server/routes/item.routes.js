const router = require('express').Router();
const itemController = require("../controllers/item.controller");



router.get("/allIngredient",itemController.selectAllIngredient)
router.post("/addingredient",itemController.addIingredient)
router.get("/milka/login", itemController.getOne);
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
router.get("/getPriceProduct", itemController.getPriceProduct);
router.delete("/deleteuser/:iduser", itemController.DeleteUser);
 router.get("/selectAllUsers",itemController.selectAllUsers);
 router.post("/sendNotification", itemController.sendNotification);
 router.get("/getNotification", itemController.getNotification);


 

module.exports = router;
