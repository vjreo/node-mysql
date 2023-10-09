

const mysql = require('mysql');

// create a connection
const con = mysql.createConnection({
    host:"127.0.0.1",
    user: "root",
    password: "root",
    database: "nodedb",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
})

// connect to mysql and create a database
con.connect(function(err){
    if (err) throw err;
    console.log("Connected to the database!");
    con.query('CREATE DATABASE nodedb', function(err, result){
        if (err) throw err;
        console.log('Database created!');
    });
});