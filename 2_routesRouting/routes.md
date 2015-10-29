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
