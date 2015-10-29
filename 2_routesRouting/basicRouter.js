'use strict';
const http = require('http'); // no mutating http - use let or const
const url = require('url');
let port = 3000;

let routes = {
  'GET': {
    '/': (req, res) => {
      res.writeHead(200, {
        'Content-type': 'text/html'
      });
      res.end('<h1>Router up</h1>');
    },
    '/about': (req, res) => {
      res.writeHead(200, {
        'Content-type': 'text/html'
      });
      res.end('<h1>About...</h1>');
    }

  },
  'POST': {

  },
  'NA': (req, res) => {
    res.writeHead(404);
    res.end('Content not found');
  }
}

function router(req, res) {
  let baseURI = url.parse(req.url, true);
  let resolveRoute = routes[req.method][baseURI.pathname];

  if (resolveRoute != undefined) {
    resolveRoute(req, res);
  } else {
    routes['NA'](req, res);
  }
  console.log('requested route:', baseURI);
  console.log('requested method:', req.method);

}

http.createServer(router).listen(port, () => {
  console.log('Listening on ' + port);
});
