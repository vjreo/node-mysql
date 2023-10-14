

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
    const sql = 'SELECT * FROM customers';
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
            console.log(fields[1].name);
    });
});
