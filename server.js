const { prompt } = require("inquirer");
const db = require("./db");
const DB = require("./db/index.js");
require("console.table");

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

//prompt.then switch case. view all employee-fucntion. at the end of each function returns to prompt. Create employee
//needs prompt-list of departments-iterate through-

function promptOptions() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "view all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "view all roles",
          value: "VIEW_ROLES",
        },
        {
          name: "view all departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "add department",
          value: "CREATE_DEPARTMENT",
        },
        {
          name: "add role",
          value: "CREATE_ROLE",
        },
        {
          name: "add employee",
          value: "CREATE_EMPLOYEE",
        },
        {
          name: "update employee",
          value: "UPDATE_EMPLOYEE",
        },
        {
          name: "quit",
          value: "QUIT",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "CREATE_DEPARTMENT":
        createDepartment();
        break;
      case "CREATE_ROLE":
        createRole();
        break;
      case "CREATE_EMPLOYEE":
        createEmployee();
        break;
      case "UPDATE_EMPLOYEE":
        updateEmployee();
        break;
      case "QUIT":
        return;
    }
  });
}

//LEFT JOIN role on employee.role_id = role.id,

function viewEmployees() {
  const newDb = new DB();
  newDb.findAllEmployees().then(([rows]) => {
    let employees = rows;
    console.table(employees);
  });
  setTimeout(promptOptions, 500);
}

function viewRoles() {
  const newDb = new DB();
  newDb.findAllRoles().then(([rows]) => {
    let employees = rows;
    console.table(employees);
  });
  setTimeout(promptOptions, 500);
}

function viewDepartments() {
  const newDb = new DB();
  newDb.findAllDepartments().then(([rows]) => {
    let employees = rows;
    console.table(employees);
  });
  setTimeout(promptOptions, 500);
}

function createDepartment() {
  prompt([
    {
      type: "input",
      name: "createDepart",
      message: "What is the name of the Department?",
    },
  ]).then((data) => {
    const newDb = new DB();
    newDb.createDepartment(data.createDepart);
    setTimeout(promptOptions, 500);
  });
  
}

function createRole() {
  const newDb = new DB();
  newDb.createRole().then(([rows]) => {
    let employees = rows;
    console.table(employees);
  });
  setTimeout(promptOptions, 500);
}

function updateEmployee() {
  setTimeout(promptOptions, 500);
}

promptOptions();
