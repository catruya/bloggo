/**
 * @file posts.js
 * @author Catruya
 * @description contains logic for handling bloggo posts
 */

const database = require('./database.js');
const model = require('./models.js')
const fs = require('fs');


/**
 * @todo Make logic for Post creation. Will probably need:
 * 1) A post creation page
 * 2) HTTP Requests
 * 3) A backend database system
 */

/**
 * @function datePosted
 * Returns the date in YYYY-MM-DD hh:mm:ss format
 * This is used because MySQL requires that formatting
 */

function datePosted() {
    const date = new Date(Date.now());
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
}

/**
 * @function insertPost 
 * Creates a Bloggo post - stores in database
 */
function insertPost(user, title, text) {
    // Creates a new post object
    // let post = new model.Post(user, title, text, Date.now());

    // Insert post into POSTS in database
    let sql = `
        INSERT INTO POSTS (user, title, text, date_posted)
        VALUES ('${user}', '${title}', '${text}', '${datePosted()}')
    `;

    database.query(sql);

    console.log('Inserted post in POSTS in DB.');

    database.end();


}

/**
 * @function writePosts
 * Puts the posts in JSON file - ./js/data/posts.json
 * This allows for easy use with the DOM
 */
function writePosts() {
    let posts = [];

    let sql = `SELECT * FROM POSTS`;
    database.query(sql, (err, results, fields) => {
        if (err) {
            return console.log(err.message);
        }

        results.forEach(result => {
            posts.push(new model.Post(result.id, result.user, result.title, result.text, result.date_posted));
        });

        let jsonPosts = JSON.stringify(posts);
        fs.writeFile('./js/data/posts.json', jsonPosts, 'utf8', err => {
            if (err) throw err;
        });

        console.log(posts);

    });
    database.end();
}



module.exports = { insertPost, writePosts };
