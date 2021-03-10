require('dotenv').config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "burgers_db",
});

connection.connect(() => {
  
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
