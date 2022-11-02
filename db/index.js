const  { createPool } = require("mysql2");

const connection = createPool(
    {
        host: 'localhost',
        user: 'root',
        password: 'Shikari11!',
        database: 'employees_db'
    },
    console.log(`Connected to employees_db database.`)
);

class DB {
    
        connection = connection;
    
    findAllDepartments() {
        return this.connection.promise().query('SELECT department.id, department.name FROM department;')
    }
    findAllRoles() {
        return this.connection.promise().query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;');
    }
    findAllEmployees() {
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, "", manager.last_name) AS manager FROM employee LEFT JOIN employee manager on manager.id = employee.manager_id INNER JOIN role ON role.id=employee.role_id INNER JOIN department ON department.id=role.department_id ORDER BY employee.id;');
    }
    createDepartment(department) {
        return this.connection.promise().query('INSERT INTO department SET ?', {name: department});
    }
    createRole(role) {
        return this.connection.promise().query('INSERT INTO role SET ?', {
            title: role.createRole,
            salary: role.salary,
            department_id: role.department
        } );
    }
    createEmployee(employee) {
        return this.connection.promise().query('INSERT INTO employee SET ?', employee);
    }
    updateEmployeeRole() {
        return this.connection.promise().query('');
    }
}

module.exports = DB;