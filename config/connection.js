const mysql = require('mysql2');

require('dotenv').config();

// Connects to Database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySql username
    user: process.env.DB_USER,
    // 
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
  }
);

module.exports = db;