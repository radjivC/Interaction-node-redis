var redis = require('redis').createClient();

var db = {
  "namespace": "unicorns",
  "configure": function (options) {
    if ('undefined' != typeof options.namespace) namespace = options.namespace;
  },
  "client": require('redis').createClient(),
  "close": function disconnect (callback) {
    if (this.client.connected) this.client.quit();
    if (callback) this.client.on('close', callback);
  },
};


db.save('unicorn').update(
  var data= {id:'2122129'};
  var unicorn =
  {
    "status":"sleepy"
  };
  db.save(id, function (err, unicorn, created) {
    if (err) {
      if (err.type == 'ENOTFOUND') res.respond(err, 404);
    } else console.log(bookmark);
});
