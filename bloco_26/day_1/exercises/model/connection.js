const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "leo",
  password: "mysql-Le0",
  database: "users_crud",
});

module.exports = connection;
