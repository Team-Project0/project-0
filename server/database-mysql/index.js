const mysql = require("mysql2");

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
module.exports = connection;
