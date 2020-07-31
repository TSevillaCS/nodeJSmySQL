var mysql = require('mysql');

var con = mysql.createConnection({
  host: "",
  user: "",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connect to mySQLServer Success");
  con.query("CREATE DATABASE firstDB", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
