const db = require("../database-mysql");
const bcrypt = require("bcrypt");
//import cloudinary.js to use in the createAccount
const cloudinary = require("../cloudinary.js");



const selectAllIngredient = function (req, res) {
  try {  db.query("SELECT * FROM ingredient")
  res.status(200).send("done")
  }catch(err){
    console.error(err);
  }
}
const addIingredient = function (req, res) {
  const sql = "INSERT INTO ingredient SET ?";
  try {
    db.query(sql, { ...req.body });
    res.status(200).send("added");
  } catch (err) {
    console.log(err);
  }
};

const updateIngredient = function (req, res) {
  const update = "UPDATE ingredient SET quantity = ?  WHERE idingredient=?";
  try {
    db.query(update,[[req.body.quantity], [req.params.idingredient]]);
    console.log(req.body);
    res.status(200).send("updated");
  } catch (err) {
    console.log(err);
  }
};
const deleteIngredient = function (req, res) {
  const del = "DELETE FROM ingredient WHERE idingredient = ? ";
  try {
    db.query(del, [req.params.idingredient]);
    console.log(req.params);
    res.status(200).send("deleted");
  } catch (err) {
    console.log(err);
  }
};

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
  e_mail = req.body.e_mail;
  userName = req.body.userName;
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  password = req.body.password;
  profilphoto = req.body.profilphoto;
  role = req.body.role;
  try {
    const add =
      "INSERT INTO user (e_mail,firstName,lastName,password,userName,profil_photo,role) VALUES (?,?,?,?,?,?,?);";
    const hashedPw = await bcrypt.hash(password, 10);
    const values = [
      e_mail,
      firstName,
      lastName,
      hashedPw,
      userName,
      profilphoto,
      role,
    ];
    const user = await db.query(add, values);
    console.log("hope", user);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  selectAllIngredient,
  createAccount,
  getOne,
  addIingredient,
  deleteIngredient,
  updateIngredient,
};
