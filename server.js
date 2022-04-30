const inquirer = require('inquirer');
const db = require('./config/connection');

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
    if (menuChoice === 'View departments') {

    }
    else if (menuChoice === 'View roles') {
      
    }
    else if (menuChoice === 'View employees') {
      
    }
    else if (menuChoice === 'Add department') {
      
    }
    else if (menuChoice === 'Add a role') {
      
    }
    else if (menuChoice === 'Add an employee') {
      
    }
    else if (menuChoice === 'Update an employee') {
      
    }
  })
}

promptUser();