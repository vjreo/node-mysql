

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
    const sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table has been altered.');
    });
});
