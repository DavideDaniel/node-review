'use strict';
const http = require('http'); // no mutating http - use let or const
let port = 3000;

function router(req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html'
  });
  res.end('<h1>Router up</h1>');
}

http.createServer(router).listen(port, () => {
  console.log('Listening on ' + port);
});
