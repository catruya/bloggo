/**
 * @file database.js
 * @author Catruya
 * Facilitates database connection
 */
const mysql = require('mysql');

export const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "password",
    database: "bloggo",
    insecureAuth: true
});

// // Connect to the database
// connection.connect(err => {
//     if (err) {
//         return console.error(`Error: ${err.message}`);
//     }

//     console.log('Connected to the MySQL Server');
// });

