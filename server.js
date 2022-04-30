const inquirer = require('inquirer');
const db = require('./config/connection');

const { viewDepartments, viewRoles, } = require('./queries');

const promptUser = () => { 
  inquirer.prompt([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'Please make a selection:',
      choices: ['View departments', 'View roles', 'View employees', 'Add department', 'Add a role', 'Add an employee', 'Update an employee']
    },
  ])
  .then(async promptChoice => {
    let menuChoice = promptChoice.menuChoice
    // Takes prompt choices and runs associated function
    // View department choice
    if (menuChoice === 'View departments') {
      viewDepartments().then(data => {
        console.log(data);
      })
      let departments = await viewDepartments();
      console.log(departments);
    }
    // view role option
    else if (menuChoice === 'View roles') {
      viewRoles().then(data => {
        console.log(data);
      })
      let roles = await viewRoles();
      console.log(roles);
    }
    // view employee option
    else if (menuChoice === 'View employees') {
      
    }
    // Add department option
    else if (menuChoice === 'Add department') {
      
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