/* 
* 1. Make an interface for adding posts
* 2. 
* 3. 
* 4.  
*/

class Post {
    constructor(title, text, datePosted) {
        this.title = title;
        this.text = text;
        this.datePosted = new Date(datePosted);
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

// Testing adding a post
const content = document.querySelector('#main');

const testPost = new Post(
    'Added with JS',
    `This post brought to you by VanillaJS.
    VanillaJS - JavaScript without the BS
    `,
    Date.now()
);

content.insertAdjacentHTML(
    'beforebegin',
    `<div class="container">
    <div class="card">
        <div class="user-img">
            <img src="img/cat1.jpg" alt="test">
        </div>
        <div class="card-header">
            <div class="card-title">
                <h1>${testPost.getTitle()}</h1>
            </div>
            <div class="username">
                <h4><a href="#"><em>@demoncatcode</em></a></h4>
            </div>
            <hr>
        </div>
        <div class="card-txt">
            <p>
                ${testPost.getText()}
            </p>
            <hr>
        </div>
        <div class="card-footer">
            <div class="date">
                ${testPost.getDatePosted()}
            </div>
            <div class="like-cmt-share">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
            </div>
        </div>
    </div>
</div>
    
    `
);



// function createPost(title, text) {
//     const container = document.createElement('div');
//     container.setAttribute('class', 'container');
// }



