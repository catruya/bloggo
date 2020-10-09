/**
 * @file create_db.js
 * @author Catruya
 * Creates the database tables
 */

const database = require('./database.js');

 database.connect(err => {
    if (err) {
        return console.error(`Error: ${err.message}`);
    }
    // Create the POSTS table
    let createPostTable = `
        CREATE TABLE IF NOT EXISTS POSTS (
            id INT PRIMARY KEY AUTO_INCREMENT,
            user VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            text VARCHAR(5000) NOT NULL,
            date_posted DATETIME
        )`;

    database.query(createPostTable, (err, results, fields) => {
        if (err) {
            console.log(err.message);
        }

        console.log('Created POSTS table successfully');
    });

    database.end(err => {
        if (err) {
            return console.log(err.message);
        }
    });

 });
