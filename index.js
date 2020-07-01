const mysql = require("mysql");
const inquirer = require('inquirer');
//const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employeesDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  employeeMenu();
});

function employeeMenu() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add departments",
        "Add roles",
        "Add employees",
        "View departments",
        "View roles",
        "View employees",
        "Update employee roles"]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add departments":
          addDepartment();
          break;

        case "Add roles":
          addRole();
          break;

        case "Add employees":
          addEmployee();
          break;

        case "View departments":
          viewDepartments();
          break;

        case "View roles":
          viewRoles();
          break;

        case "View employees":
          viewEmployees();
          break;

        case "Update employee roles":
          updateEmployeeRole();
          break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "departmentName",
        type: "input",
        message: "Enter the department name",
      }
    ])
    .then(function (answer) {
      // based on their answer
      connection.query("INSERT INTO department SET ?",
        [{
          name: answer.departmentName
        }],
        function (err, results) {
          if (err) throw err;
          console.log('Department added')
        });
      employeeMenu();
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "roleTitle",
        type: "input",
        message: "Enter the role title",
      },
      {
        name: "roleSalary",
        type: "input",
        message: "Enter the role's salary",
      }
    ])
    .then(function (answer) {
      // based on their answer
      connection.query("INSERT INTO role SET ?",
        [{
          title: answer.roleTitle, salary: answer.roleSalary
        }],
        function (err, results) {
          if (err) throw err;
          console.log('Role added')
        })
      employeeMenu();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "employeeFirstName",
        type: "input",
        message: "Enter the employee's first name",
      },
      {
        name: "employeeLastName",
        type: "input",
        message: "Enter the employee's last name",
      },
      {
        name: "employeeRole",
        type: "input",
        message: "Enter the employee's role id",
      },
      {
        name: "employeeDepartment",
        type: "list",
        message: "Enter the employee's department number",
        choices: [1, 2, 3]
      }
      // use choices for department id and for manager id
      // reverse for looking up managers nd departments (select * from managers)
      // populate the array
      // then take that value and use in a function that looks upthe id's in each of those tables
    ])
    .then(function (answer) {
      // based on their answer
      connection.query("INSERT INTO employee SET ?",

        [{
          first_name: answer.employeeFirstName, last_name: answer.employeeLastName, role_id: Number(answer.employeeRole), department_id: Number(answer.employeeDepartment)
        }],
        function (err, results) {
          if (err) throw err;
          console.log('Employee added')
        })
      employeeMenu();
    });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    results.forEach(department => console.table(department))
    employeeMenu();
  }
  )
}
function viewRoles() {
  connection.query("SELECT * FROM role", function (err, results) {
    if (err) throw err;
    results.forEach(role => console.table(role))
    employeeMenu();
  }
  )
}
function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    results.forEach(employee => console.table(employee))
    results.map(function (result) {
      newResults.push(
        {
          "ID": result.id,
          "First Name": result.first_name,
          "Last Name": result.last_name
        })
    });
    console.table(newResults)
    employeeMenu();
  }
  )
}

// "Update employee roles"]

