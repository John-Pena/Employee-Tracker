const db = require('./config/connection');

function viewDepartment() {
  // open employee database
  return db.query(
    'SELECT * FROM `department`;'
  )
}

module.exports = {
  viewDepartment
};