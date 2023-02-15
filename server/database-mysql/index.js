const mysql = require("mysql2");

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'user',
  database : 'mydb'
}).promise()
connection.connect().then(()=>console.log("db connected")).catch(err=>console.log(err))

module.exports = connection;
