GET - cacheable
POST/PUT/DELETE - NOT cacheable because they should NOT be

Routes:
www.example.com/about
GET: fetching data

www.example.com/login
POST: sending username/pw which should not travel as URL parameter

www.example.com/signup
POST: new record created on the server

www.exampleapi.com/products/?id=007
GET: Reading data about a product from an API

Route handlers
---
functions creating route requests
ex:

```

Req methods
*req.url
*req.method
*req.headers

http://localhost:3000/api/products/?id=1
logging the baseURI we get:
requested method: GET
requested route: Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?id=1',
  query: { id: '1' },
  pathname: '/api/products/',
  path: '/api/products/?id=1',
  href: '/api/products/?id=1' }
