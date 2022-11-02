const { prompt } = require("inquirer");
const db = require("./db");
const DB = require("./db/index.js");
require("console.table");

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
        process.exit(0);
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
    console.log(data.createDepart);
    setTimeout(promptOptions, 500);
  });
  
}

function createRole() {
  prompt([
    {
      type: "input",
      name: "createRole",
      message: "What is the name of the Role?",
    },
    {
      type: 'input',
      name: "salary",
      message: "what is the salary of this role?"
    },
    {
      type: "list",
      name: "department",
      message: "What department is this role in?",
      choices: [
        {
          name: "Sales",
          value: 1
        },
        {
          name: "Legal",
          value: 2
        },
        {
          name: "Engineering",
          value: 3
        },
        {
          name: "Fianace",
          value: 4
        }
      ]
    }
  ]).then((data) => {
    const newDb = new DB();
    newDb.createRole(data);
    console.log(data);
    setTimeout(promptOptions, 500);
  });
}

function createEmployee() {
  prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the employee?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee?"
    },
    {
      type: "list",
      name: "employeeRole",
      message: "What is the role the employee is in?",
      choices: [
        {
          name: "Sales Lead",
          value: 1
        },
        {
          name: "Salesperson",
          value: 2
        },
        {
          name: "lawyer",
          value: 3
        },
        {
          name: "Legal Team Lead",
          value: 4
        },
        {
          name: "Software Engineer",
          value: 5
        },
        {
          name: "Lead Engineer",
          value: 6
        },
        {
          name: "Accountant",
          value: 7
        },
        {
          name: "Account Manager",
          value: 8
        }
      ]
    },
    {
      type: "list",
      name: "employeeManager",
      message: "Who is the manager of this employee?",
      choices: [
        {
          name: "Louen Leoncoeur",
          value: 1
        },
        {
          name: "Karl Franz",
          value: 3
        },
        {
          name: "Thorek Ironbrow",
          value: 5
        },
        {
          name: "Mannfred von Carstein",
          value: 7
        }
      ]
    }
  ]).then((data) => {
    const newDb = new DB();
    newDb.createEmployee(data);
    console.log(data);
    setTimeout(promptOptions, 500);
  });
}


function updateEmployee() {
  setTimeout(promptOptions, 500);
}

promptOptions();
