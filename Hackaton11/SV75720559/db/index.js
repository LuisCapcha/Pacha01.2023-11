const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host:  'localhost',
    port: 3306,
    database:'veterinaria',
    user: 'root',
    password:'Cristiano.2001'
});

module.exports = connection;