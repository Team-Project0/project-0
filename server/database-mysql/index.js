const mysql = require("mysql2");

<<<<<<< HEAD
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'user',
  database : 'mydb'
}).promise()
connection.connect().then(()=>console.log("db connected")).catch(err=>console.log(err))

=======
const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "bedoui123",
    database: "mydb",
  })
  .promise();
connection
  .connect()
  .then(() => console.log("dataBase connected"))
  .catch((err) => console.log(err));
>>>>>>> 2c741df2080b5ca035ca9ed785f8ea5f577b617b
module.exports = connection;
