const {prompt} = require('inquirer');
const db = require('./db');
require('console.table');


//prompt.then switch case. view all employee-fucntion. at the end of each function returns to prompt. Create employee
//needs prompt-list of departments-iterate through-


function promptOptions () {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'view all employees',
                    value: 'VIEW_EMPLOYEES'
                },
                {
                    name: 'view all roles',
                    value: 'VIEW_ROLES'
                },
                {
                    name: 'view all departments',
                    value: 'VIEW_DEPARTMENTS'
                },
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case 'VIEW_EMPLOYEES':
                viewEmployees();
                break;
                case 'VIEW_ROLES':
                viewRoles();
                break;
                case 'VIEW_DEPARTMENTS':
                viewDepartments();
                break;
        }
    })
}

function viewEmployees() {

}

function viewRoles(){

}

function viewDepartments(){
    
}