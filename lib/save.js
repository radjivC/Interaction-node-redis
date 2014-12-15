var redis = require('redis');
var client = redis.createClient();

var newUnicorn ={
  "name":"robert",
  "birthday": "02/10/2010",
  "status":"sleepy"
};

function save (unicorn, callback) {
  var created = ('undefined' == typeof unicorn.id);
  var self = this;
  var onIdReady = function () {
    client.set(_key_(unicorn.id), JSON.stringify(unicorn), function (err) {
      callback(err, unicorn, created);
    });
  }
  if (created) { // No ID: generate one
    client.incr(_seq_(), function (err, id) {
      if (err) return callback(err);
      unicorn.id = id;
      onIdReady();
    });
  } else { // ID already defined: it's an update
    this.fetchOne(unicorn.id, function (err, old) {
      if (err) return callback(err);
      for (var attr in unicorn) {
        old[attr] = unicorn[attr];
      }
      unicorn = old;
      onIdReady();
    });
  }
}


