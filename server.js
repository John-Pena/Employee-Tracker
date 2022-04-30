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
      viewEmployees().then(data => {
        console.log(data);
      })
      let roles = await viewEmployees();
      console.log(roles);
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

// Will export to answer to queries and use answer in queries
// const promptDepartment = () => {
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'department',
//       message: 'What is the new department name?',
//       validate: department => {
//         if (department) {
//           return true;
//         } else {
//           console.log('You need to enter a department name!');
//           return false;
//         }
//       }
//     }
//   ])
// };

promptUser();