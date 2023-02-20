
const db = require("../database-mysql");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");



const selectAllIngredient =  function (req, res) {
  db.promise().query("SELECT * FROM ingredient").then((items,err)=>{
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  })
    
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
}

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

let refreshTokens = [];
const createToken =function (req,res){
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })
}
const createAccount = async function (req, res) {
    console.log(req.body);
    //saving hashed password in our database
    e_mail=req.body.e_mail

    firstName=req.body.firstName
    lastName=req.body.lastName
    password=req.body.password
    profilphoto=req.body.profil_photo
    role=req.body.role
    userName=req.body.userName

      try {
          const selected = "SELECT * FROM user WHERE userName=?;"
        values = userName
        //console.log(userName)
        const existedUser = await db.promise().query(selected, [userName])
        console.log("existed user",existedUser[0])
          if (existedUser[0].length) {
            res.status(409).send('user name already used');
        }
          else {

              const add = "INSERT INTO user (e_mail,firstName,lastName,password,profil_photo,role,userName) VALUES (?,?,?,?,?,?,?);";
              const hashedPw = await bcrypt.hash(password, 10);
              const values=[e_mail,firstName,lastName,hashedPw,profilphoto,role,userName]

             const user= await  db.promise().query(add, values)
             console.log("hope",user)
            res.status(200).send(user);
       }
  }catch(err){
    console.log(err)
    }
}

const login = async function (req, res) {
  console.log(req.body)
  e_mail = req.body.e_mail;
  userName = req.body.userName;
  password = req.body.password;
  const user={
    e_mail: e_mail,
    userName: userName,
    password:password
  }
        
        console.log('e',process.env.ACCESS_TOKEN_SECRET);
  try {
    
    const selected = "SELECT * FROM user WHERE e_mail=? AND userName=? "
    values = [e_mail, userName]
    const existedUser = await db.promise().query(selected, values)
    console.log("existed user", existedUser[0][0])
    const objuser = existedUser[0][0];
    
    if (objuser) {
      const comparedPassword = await bcrypt.compare(
        password,
        objuser.password,
        // process.env.ACCESS_TOKEN_SECRET
      );
      if (comparedPassword) { 
        const refreshToken = jwt.sign(objuser, process.env.ACCESS_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        res.status(200).send({refreshToken: refreshToken ,user:objuser});

      } else {
        res.status(401).send('wrong password');
      }
        
        
      
   
    }
    else {
      res.status(401).send('Invalid Credentials');
    }
  }catch(err){console.log(err);}

}



// const createProduct = (req, res) => {
//   const sql = "INSERT INTO product SET ?";
//   db.query(sql, { ...req.body }, (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };
const createProduct = function (req, res) {
  const sql = "INSERT INTO product SET ?";
  try {
    db.query(sql, { ...req.body });
    res.status(200).send("added");
  } catch (err) {
    console.log(err);
  }

};
const sendNotification = (req, res) => {
  const sql = "INSERT INTO notification SET ?";
  db.query(sql, { ...req.body }, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
const getNotification = function (req, res) {
  db.query("SELECT * FROM notification ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};


const selectAllUsers = function (req, res) {
  db.query("SELECT * FROM user ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

const getProduct = function (req, res) {
  db.query("SELECT * FROM product ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

const getPriceProduct = function (req, res) {
  db.query("SELECT price FROM product ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};


  
  const DeleteUser = function (req, res) {
    const id=req.params.iduser
    db.query("DELETE FROM user WHERE iduser = "+id,
     (err,fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("deleted");
      }
    });
  }
  const DeleteNotif = function (req, res) {
    const id=req.params.idnotification
    db.query("DELETE FROM notification WHERE idnotification = "+id,
     (err,fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("deleted");
      }
    });
  }
  const DeleteProduct = function (req, res) {
    const id=req.params.idProduct
    db.query("DELETE FROM product WHERE idProduct = "+id,
     (err,fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send("deleted");
      }
    });
  }


module.exports = {selectAllUsers,createProduct,DeleteUser,getProduct, getPriceProduct,login,createToken,

createAccount,selectAllUsers,DeleteUser,selectAllIngredient,addIingredient,updateIngredient,deleteIngredient,
sendNotification,getNotification,DeleteNotif,DeleteProduct};



