function updateEmployeeRole() {
    connection.query("SELECT * FROM employee INNER JOIN title FROM roles", function(err, result){
      if(err) throw err;
  
      inquirer
        .prompt([
          {
            name: "employeeName",
            type: "rawlist",
            message: "Which employee's role would you like to update?",
            choices: function () {
                let choiceArray = results[0].map(choice => choice.name);
                return choiceArray;
            }
          },
          {
            name: "employeeRole",
            type: "list",
            message: "What is the employee's new role?",
            choices: function () {
                let choiceArray = results[1].map(choice => choice.title);
                return choiceArray;
            }
          }
        ]).then((answer) => {
            connection.query("UPDATE employee SET role_id WHERE department(name) = ?", function (err, results) {
            if (err) throw err;

            console.log("Role Changed!");
        })
    })
  }
)};

