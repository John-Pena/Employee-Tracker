const db = require('./config/connection');

function viewDepartments() {
  // open employee database
  // promise wrapper
  return new Promise(function (resolve, reject) {
    db.query(
      'SELECT * FROM `department`;',
      (error, res) => {
        resolve(res);
      }
    )
  })
}

function viewRoles() {
  // open employee database
  // promise wrapper
  return new Promise(function (resolve, reject) {
    db.query(
      'SELECT * FROM `role`;',
      (error, res) => {
        resolve(res);
      }
    )
  })
}

function viewEmployees() {
  // open employee database
  // promise wrapper
  return new Promise(function (resolve, reject) {
    db.query(
      'SELECT * FROM `employee`;',
      (error, res) => {
        resolve(res);
      }
    )
  })
}

function addDepartment() {
  return new Promise(function (resolve, reject) {
    db.query(
      'INSERT INTO `department` '
    )
  })
}

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
};