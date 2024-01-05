const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

const dbConn = mysql.createConnection(dbConfig);

dbConn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database');
    }
});

module.exports = dbConn;
