const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'sadmedous',
  password : 'iLUVmFrlF<3',
  database : 'mvp'
});

module.exports = connection;