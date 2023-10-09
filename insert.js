

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
    const sql = `
    INSERT INTO customers
    (name, email)
    VALUES
    ('Mary Smith', 'test_email2@gmail.com');
    `;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table has been updated.');
    });
});
