// Set up MySQL connection.
var mysql = require("mysql");

var keys = require("./keys.js");
console.log(keys.sqlKeys.host);
var connection = mysql.createConnection({
  host: keys.sqlKeys.host,
  user: keys.sqlKeys.user,
  password: keys.sqlKeys.password,
  database: "burgers_db",
  port: keys.sqlKeys.port
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
