const db = require("../database-mysql");
const bcrypt = require("bcrypt");
//import cloudinary.js to use in the createAccount
const cloudinary = require("../cloudinary.js");



const getOne = (req, res) => {
  let sql = `SELECT * from user WHERE username=${req.body.username}`;
  try {
    let result = db.query(sql);
    if (req.body.password === result.password) {
      res.status(200).send(result);
    } else {
      res.send("Wrong Password");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const createAccount = async (req, res) => {
  console.log(req.body);
  //saving hashed password in our database
  e_mail=req.body.e_mail
  userName=req.body.userName
  firstName=req.body.firstName
  lastName=req.body.lastName
  password=req.body.password
  profilphoto=req.body.profilphoto 
  role=req.body.role
try {
  const add = "INSERT INTO user (e_mail,firstName,lastName,password,userName,profil_photo,role) VALUES (?,?,?,?,?,?,?);";
  const hashedPw = await bcrypt.hash(password, 10);
  const values=[e_mail,firstName,lastName,hashedPw,userName,profilphoto ,role]
 const user= await db.query(add, values)
 console.log("hope",user)
 res.status(200).send(user);
}catch(err){
  console.log(err)


  }
  
};

module.exports = { createAccount, getOne };
