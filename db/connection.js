const mysql = require('mysql2');


const connection = mysql.createConnection(
    {
        host: 'losthost',
        user: 'root',
        password: 'Shikari11!',
        database: 'employees_db'
    },
    console.log(`Connected to employees_db database.`)
);

//switch case?
//prompt array?


module.exports = connection 