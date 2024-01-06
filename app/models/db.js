const mysql = require('mysql2/promise');
const dbConfig = require('../../config/db.config');

const dbConn = mysql.createPool(dbConfig);

dbConn.query("SELECT 1")
    .then(() => {
        console.log('SQL database connection established successfully.')
    })
    .catch(err => console.log('Database connection failed \n' + err))

module.exports = dbConn;
