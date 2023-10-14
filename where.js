

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

    let name_query = '%Reo%';
    let id_query = 1;

    const sql = 'SELECT name FROM customers WHERE name LIKE ? OR id = ?';
    con.query(sql, [name_query, id_query], function (err, result, fields) {
        if (err) throw err;
            console.log(result);
    });
});
