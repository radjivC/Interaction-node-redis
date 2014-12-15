Interaction Redis (V2.8) with node.js
=====================================

In lib folder you have different files with interaction example how to use redis with Nodejs.

Every files can work independant.

In Rest Api folder you have an example in a real case.

Don't forget to install the package for the REST Api:
```
npm install
```

In the lib folder you have separate example to show: how to use the each functions for Redis.

You have a Rest Api example in the folder RestAPiExample, this is a global example how to use MongoDb in a real case.
And of course the same Api with coffee Script syntax.

What is Redis?
================

Written in: C

Main point: Blazing fast

License: BSD

Protocol: Telnet-like, binary safe

Disk-backed in-memory database,
Dataset size limited to computer RAM (but can span multiple machines' RAM with clustering)
Master-slave replication, automatic failover
Simple values or data structures by keys
but complex operations like ZREVRANGEBYSCORE.
INCR & co (good for rate limiting or statistics)
Bit operations (for example to implement bloom filters)
Has sets (also union/diff/inter)
Has lists (also a queue; blocking pop)
Has hashes (objects of multiple fields)
Sorted sets (high score table, good for range queries)
Lua scripting capabilities (!)
Has transactions (!)
Values can be set to expire (as in a cache)
Pub/Sub lets one implement messaging

Best used: For rapidly changing data with a foreseeable database size (should fit mostly in memory).

For example: To store real-time stock prices. Real-time analytics. Leaderboards. Real-time communication. And wherever you used memcached before.



Tutorial
========

you can already use this tutorial

how to use redis with nodejs
http://naholyr.fr/2011/08/ecrire-service-rest-nodejs-express-partie-1/
