// Required dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');

//connection is setup for mySQL 
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'Unixer17*',
    database: 'DB',
});

connection.connect((err) => {
    if (err) throw err;
    conductSearch();
});

//callback function for 
const conductSearch = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What would you like to do?',
            choices: [
                'Find an employee',
                'Find a department',
                'Update an employee role history',
                'Add an employee',
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case 'Find an employee':
                    employeeSearch();
                    break;

                case 'Find a department':
                    dpartSearch();
                    break;
                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
};

const employeeSearch = () => {
    inquirer
        .prompt({
            name: 'employee',
            type: 'input',
            message: 'Who are you looking for? Please search by First Name',
        })
        .then((answer) => {
            const query = 'SELECT first, name,  role_id, manager year FROM employee WHERE ?';
            connection.query(query, { employee: answer.employee }, (err, res) => {
                res.forEach(({ first, role_id, manager }) => {
                    console.log(
                        `First: ${first} || name: ${name} ||Role_id: ${role_id} || Manager: ${manager}`
                    );
                });
                runSearch();
            });
        });
};

const dpartSearch = () => {
    inquirer
        .prompt({
            name: 'name',
            type: 'input',
            message: 'Who are you looking for? Please search by Name.',
        })
        .then((answer) => {
            const query = 'SELECT name, role_id, manager FROM departments WHERE ?';
            connection.query(query, { departments: answer.departments }, (err, res) => {
                res.forEach(({ name, role_id, manager }) => {
                    console.log(
                        `name: ${name} || Role_id: ${role_id} || Manager: ${manager}`
                    );
                });
                runSearch();
            });
        });
};
