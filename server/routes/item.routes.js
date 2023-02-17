const router = require('express').Router();
const itemController = require("../controllers/item.controller");
const cloudinary= require("../cloudinary.js")
const multer=require("multer")



router.get("/milka/login", itemController.getOne);
router.post("/signUp", itemController.createAccount);

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
 

module.exports = router;
