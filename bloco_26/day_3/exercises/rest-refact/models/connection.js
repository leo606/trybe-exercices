const mysql = require("mysql2/promise");

var pool = null;

module.exports = () => {
  return pool
    ? pool
    : (pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
      }));
};
