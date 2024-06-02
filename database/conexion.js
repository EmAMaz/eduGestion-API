const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "192.168.100.46",
  user: "santi",
  password: "H12n121e#",
  database: "cursos",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Base de datos conectada");
});

module.exports = db;
