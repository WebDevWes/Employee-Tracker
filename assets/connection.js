const mysql = require("mysql");

// Connection to mysql server, current setup is for local machine on port 3306
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employeesDB",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

// Exports connection function
module.exports = connection;
