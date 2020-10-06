/**
 * @file models.js
 * @author Catruya
 * @description Contains the objects (models) needed
 * for site functionality
 */
//--------------------------------------------------
/** 
*   @todo 
* 1. Make a Post object to hold data about posts
* 2. Come up with a way to store posts on the server
* 3. Make a User object to hold data about users
* 4. Come up with a way to store users on the server
*/
//----------------------------------------------------

/**
 * Post class
 * Purpose:
 * Defines a Post object. Each Post is 
 * associated with a User (to be defined later).
 * A post has a title, text, and a date which it was posted.
 */

class Post {
    constructor(user, title, text, datePosted) {
        this.user = user;
        this.title = title;
        this.text = text;
        this.datePosted = new Date(datePosted);
    }

    getUser() {
        return this.user;
    }

    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }

    getDatePosted() {
        return this.datePosted.toLocaleString()
    }
}

/**
 * User class
 * Purpose: defines a user object.
 */

class User {
    constructor(name, profileImage, aboutText) {
        this.name = name;
        this.profileImage = profileImage;
        this.aboutText = aboutText;
    }

    getName() {
        return this.name;
    }

    getProfileImage() {
        return this.profileImage;
    }

    getAboutText() {
        return this.aboutText;
    }
}

export {Post, User};

// Testing adding a post
// const content = document.querySelector('#main');

// const testPost = new Post(
//     'Added with JS',
//     `This post brought to you by VanillaJS.
//     VanillaJS - JavaScript without the BS
//     `,
//     Date.now()
// );

// content.insertAdjacentHTML(
//     'beforebegin',
//     `<div class="container">
//     <div class="card">
//         <div class="user-img">
//             <img src="img/cat1.jpg" alt="test">
//         </div>
//         <div class="card-header">
//             <div class="card-title">
//                 <h1>${testPost.getTitle()}</h1>
//             </div>
//             <div class="username">
//                 <h4><a href="#"><em>@demoncatcode</em></a></h4>
//             </div>
//             <hr>
//         </div>
//         <div class="card-txt">
//             <p>
//                 ${testPost.getText()}
//             </p>
//             <hr>
//         </div>
//         <div class="card-footer">
//             <div class="date">
//                 ${testPost.getDatePosted()}
//             </div>
//             <div class="like-cmt-share">
//                 <button>Like</button>
//                 <button>Comment</button>
//                 <button>Share</button>
//             </div>
//         </div>
//     </div>
// </div>
    
//     `
// );



// function createPost(title, text) {
//     const container = document.createElement('div');
//     container.setAttribute('class', 'container');
// }



