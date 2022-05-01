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
      
    }
    // Add employee option
    else if (menuChoice === 'Add an employee') {
      
    }
    // update employee option
    else if (menuChoice === 'Update an employee') {
      
    }
  })
}

promptUser();