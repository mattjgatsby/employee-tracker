const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = 3001;

const db = mysql.createConnection(
    {
        host: 'losthost',
        user: 'root',
        password: 'Shikari11!',
        database: 'employees_db'
    },
    console.log(`Connected to employees_db database.`)
);
