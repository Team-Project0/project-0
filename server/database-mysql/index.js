const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "haifa",
    database: "mydb",
  })
  

  connection.connect((err)=>{
    if (err) throw err
    else console.log("Sql Connected BOY!");
  })
module.exports = connection;
