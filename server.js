const inquirer = require('inquirer');
const db = require('./config/connection');

const { viewDepartments, viewRoles, viewEmployees } = require('./queries');

const promptUser = () => { 
  inquirer.prompt([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'Please make a selection:',
      choices: ['View departments', 'View roles', 'View employees', 'Add department', 'Add a role', 'Add an employee', 'Update an employee']
    },
  ])
  .then(promptChoice => {
    let menuChoice = promptChoice.menuChoice
    // Takes prompt choices and runs associated function
    // View department choice
    if (menuChoice === 'View departments') {
      viewDepartments().then(data => {
        console.log(data);
      })
    }
    // view role option
    else if (menuChoice === 'View roles') {
      viewRoles().then(data => {
        console.log(data);
      })
    }
    // view employee option
    else if (menuChoice === 'View employees') {
      viewEmployees().then(data => {
        console.log(data);
      })
    }
    // Add department option
    else if (menuChoice === 'Add department') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'What is the name of the department you would like to add?',
          validate: departmentName => {
            if (departmentName) {
              return true;
            } else {
              console.log('Please enter a department name!');
              return false;
            }
          }
        }
      ])
      .then(response => {
        const sql = `INSERT INTO department (name) VALUES (?);`;
    
        db.query(sql, response.departmentName, (err, result) => {
          if (err) throw err;
          console.log('Added ' + response.departmentName + ' to departments!');
    
          return promptUser();
        });
      });
    }
    // Add role option
    else if (menuChoice === 'Add a role') {
      addRole();
    }
    // Add employee option
    else if (menuChoice === 'Add an employee') {
      
    }
    // update employee option
    else if (menuChoice === 'Update an employee') {
      
    }
  })
}

function addRole() {
  db.query(`SELECT * FROM department;`, (err, results) => {
    // creates an array for departments in table
    let departments = [];
    if (err) {
      console.log(err);
    }
    // inserts user input for role name and unique id inside department table
    for (let i = 0; i < results.length; i++) {
      departments.push({ name: results[i].name, value: results[i].id });
    }

    inquirer.prompt([
      {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of this new role?',
        validate: roleName => {
          if (roleName) {
            return true;
          } else {
            console.log('Please insert the name of the new role!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of this new role (numbers only)?',
        validate: salary => {
          if (salary) {
            return true;
          } else {
            console.log('Please insert the salary of the new role!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'rolesDept',
        message: 'What  department does this role belong to?',
        choices: departments,
      }
    ])
    .then((response) => {
      db.query(
        `INSERT INTO role (title, salary, department_id)
        VALUES (?, ?, ?);`,
        [response.roleName, response.salary, response.rolesDept],
        (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log('New role added!');
          promptUser();
        }
      );
    });
  });
};

promptUser();