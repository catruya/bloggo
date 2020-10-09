/**
 * @file posts.js
 * @author Catruya
 * @description contains logic for handling bloggo posts
 */

import * as model from './models.js';


/**
 * @todo Make logic for Post creation. Will probably need:
 * 1) A post creation page
 * 2) HTTP Requests
 * 3) A backend database system?
 */

 /**
  * @function createPost 
  * Creates a Bloggo post
  */
export function createPost(user, title, text) {
    // Creates a new post object
    let post = JSON.stringify(new model.Post(user, title, text, Date.now()));
    
}
