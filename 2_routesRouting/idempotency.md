###Idempotency
---
Idempotency means it should always get you the same result back.

Routes that are idempotent:
* GET - should get you the same data back
* PUT - if a title is being changed for an item, the result should be that it is changed (not the title itself)

#####Why POST is *not* idempotent:
Multiple POST requests CANNOT be the same - therefore it is not idempotent.

DELETE depends on the implementation (it should be, but it isn't always)
