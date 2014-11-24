var redis = require('redis');
var client = redis.createClient();

var unicorn ={
  "name":"robert",
  "birthday": "02/10/2010",
  "status":"sleepy"
};

var unicorn2 ={
  "name":"charlie",
  "birthday": "02/10/2010",
  "status":"angry"
};




client.on("connect", function () {
    client.set("unicorns", unicorn, redis.print);
    client.set("unicorns", unicorn2, redis.print);

    var data = client.get("unicorns", redis.print);
});
