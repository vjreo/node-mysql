

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

    // insert data
    const sql = `INSERT INTO customers (name, email) VALUES ?`;
    let values = [
        ['Aspen Bear', 'test_email3@gmail.com'],
        ['Gio Varon', 'test_email4@gmail.com'],
        ['Caya Reo', 'test_email5@gmail.com'],
    ]
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log('Records inserted: ' + result.affectedRows);
    });
});
