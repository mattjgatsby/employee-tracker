const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

const db = mysql.createConnection(
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
