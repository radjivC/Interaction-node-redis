var redis = require('redis');
var client = redis.createClient();

var client = new Server();

});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving unicorn: ' + id);

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

};

exports.findAll = function(req, res) {
  function fetchAll (callback) {
    client.keys(_key_('*'), function (err, keys) {
      if (err) return callback(err);
      callback(undefined, keys.map(function (key) {
        return parseInt(key.substring(namespace.length+1));
      }));
    });
  }
};

exports.addUnicorn = function(req, res) {
    var unicorn = req.body;
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

}

exports.updateUnicorn = function(req, res) {
    var id = req.params.id;
    var unicorn = req.body;
    console.log('Updating unicorn: ' + id);
    console.log(JSON.stringify(unicorn));

}

exports.deleteUnicorn = function(req, res) {
    var id = req.params.id;
    function deleteOne (id, callback) {
      client.del(_key_(id), function (err, deleted) {
        if (!err && deleted == 0) err = {"message": "unicorn not found", "type":"ENOTFOUND"};
        callback(err, deleted > 0);
      });
    }
}

exports.deleteAll = function(req, res) {
    var id = req.params.id;
    function deleteOne (id, callback) {
      client.del(_key_(id), function (err, deleted) {
        if (!err && deleted == 0) err = {"message": "unicorn not found", "type":"ENOTFOUND"};
        callback(err, deleted > 0);
      });
    }
}








/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var unicorns = [
    {
      "name":"charlie",
      "birthday": "02/10/2010",
      "status":"sleepy"
    },
    {
        "name":"sam",
        "birthday": "02/10/2012",
        "status":"exited"
    }];



};
