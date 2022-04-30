const inquirer = require('inquirer');
const db = require('./config/connection');

const promptUser = () => { 
  inquirer.prompt([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'Please make a selection',
      choices: ['View departments', 'View roles', 'View employees', 'Add department', 'Add a role', 'Add an employee', 'Update an employee']
    },
  ])
  .then()
}