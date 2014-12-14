var redis = require('redis');
var client = redis.createClient();

function fetchOne (id, callback) {
  client.get(_key_(id), function (err, value) {
    if (!err && !value) err = {"message": "Unicorn not found", "type":"ENOTFOUND"};
    if (err) return callback(err);
    var unicorn = null;
    try {
      unicorn = JSON.parse(value);
    } catch (e) {
      return callback(e);
    }
    return callback(undefined, unicorn);
  });
}
