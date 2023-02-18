// DELETE THIS LINE

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
require("dotenv").config();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// const getOne = (req, res) => {
//   let sql = `SELECT * from user WHERE username=${req.body.username}`;
//   try {
//     let result = db.query(sql);
//     if (req.body.password === result.password) {
//       res.status(200).send(result);
//     } else {
//       res.send("Wrong Password");
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };
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
    userName=req.body.userName
    firstName=req.body.firstName
    lastName=req.body.lastName
    password=req.body.password
    profilphoto=req.body.profilphoto
    role=req.body.role
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
              const add = "INSERT INTO user (e_mail,firstName,lastName,password,userName,profil_photo,role) VALUES (?,?,?,?,?,?,?);";
              const hashedPw = await bcrypt.hash(password, 10);
              const values=[e_mail,firstName,lastName,hashedPw,userName,profilphoto ,role]
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


const createProduct = (req, res) => {
  const sql = "INSERT INTO product SET ?";
  db.query(sql, { ...req.body }, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

// const createChefAccount=(req,res)=>{
//   const sql="INSERT INTO user (firstName,lastName,password,role,userName)VALUES ('haifa', 'gharrad', 'azerty123', 'chef', 'haifagharrad')"
//   db.query(sql, (err, items, fields) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(items);
//       }
//     });
// }
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

module.exports = {createAccount,selectAllUsers,createProduct,DeleteUser,getProduct, getPriceProduct,login,createToken};
