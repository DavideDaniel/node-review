'use strict';
const http = require('http'); // constant because we want http to be unique

http
  .createServer((req, res) => { // new syntax for anonymous function
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    res.end('<h1>Hey you...</h1>');
  })
  .listen(3000, () => console.log('Server running on port 3000'));
