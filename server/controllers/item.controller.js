// DELETE THIS LINE

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");

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
const createAccount = (req, res) => {
  const sql = "INSERT INTO user SET ?";
  // let sql=`INSERT into user userName=${req.body.username} firstName=${req.body.firstName} lastName=${req.body.lastName} password=${req.body.password} profil-photo=${req.body.profilphoto}  `
  db.query(sql, { ...req.body }, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
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


    // db.query("SELECT * FROM user ", (err, items, fields) => {
    //   if (err) {
    //     res.status(500).send(err);
    //   } else {
    //     res.status(200).send(items);
    //   }
    // });
  
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

module.exports = {createAccount,getOne,selectAllUsers,createProduct,DeleteUser,getProduct, getPriceProduct};
