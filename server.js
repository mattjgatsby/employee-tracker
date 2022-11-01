const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
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
        }
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
    }
  });
}

function viewEmployees() {

}

function viewRoles() {}

function viewDepartments() {}

function createDepartment() {}

function createRole() {}

function updateEmployee() {}

promptOptions()