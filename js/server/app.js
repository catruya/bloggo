const post = require('./posts.js');
const database = require('./database.js');

// post.createPost('Test', 'Test', 'Test');
// post.createPost('Test 2', 'Testing', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
// ex ea commodo consequat. Duis aute irure dolor in reprehenderit
// in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident,
// sunt in culpa qui officia deserunt mollit anim id est laborum.`);
post.insertPost('MegaTest', 'Testy', 'SUPREME TESTING');
post.insertPost('xhaa', 'Taco Bell', 'This is a really weird post, aint it?');
post.writePosts();

database.end();