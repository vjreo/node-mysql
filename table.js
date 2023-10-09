

const mysql = require('mysql');

// create a connection
const con = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
})

// connect to mysql
con.connect(function(err){
    if (err) throw err;
    console.log('Connected to the database!');

    // create a table
    const sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table has been created.');
    });
});
