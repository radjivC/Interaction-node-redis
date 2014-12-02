function fetchAll (callback) {
  client.keys(_key_('*'), function (err, keys) {
    if (err) return callback(err);
    callback(undefined, keys.map(function (key) {
      return parseInt(key.substring(namespace.length+1));
    }));
  });
}
