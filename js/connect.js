const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "password",
    database: "bloggo",
    insecureAuth: true
});

connection.connect(err => {
    if (err) {
        return console.error(`Error: ${err.message}`);
    }

    console.log('Connected to the MySQL Server');
});