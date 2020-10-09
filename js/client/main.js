const content = document.querySelector('#main');

let request = new XMLHttpRequest();
request.open('GET', './js/client/data/posts.json', true);

request.onload = function() {
    if (this.status === 200) {
        let posts = JSON.parse(this.responseText);
        posts.forEach(post => {
            content.insertAdjacentHTML(
                'beforebegin',
                `<div class="container container-fluid">
                <div class="card">
                    <div class="row">
                        <div class="col card-hdr">
                            <h1>${post.title}</h1>
                            <hr>
                            <h4>@${post.user}</h4>
                        </div>
                        <div class="col">
                            <img class="user-img" src="img/cat1.jpg">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col card-txt">
                            <p>
                                ${post.text}
                            </p>
                        </div>
                    </div>
                    <div class="row card-footer">
                        <div class="col">
                            <button class="btn-primary">Like</button>
                            <button class="btn-primary">ReBlog</button>
                        </div>
                        <div class="col date">
                            ${post.datePosted}
                        </div>
                    </div>
                </div>
            </div>`
            );
        });
    }
}

request.onerror = function() {
    console.log('Error with request.');
}

request.send();