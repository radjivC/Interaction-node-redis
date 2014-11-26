var redis = require('redis');
var client = redis.createClient();

var client = new Server();

});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving unicorn: ' + id);

};

exports.findAll = function(req, res) {
    
};

exports.addUnicorn = function(req, res) {
    var unicorn = req.body;

}

exports.updateUnicorn = function(req, res) {
    var id = req.params.id;
    var unicorn = req.body;
    console.log('Updating unicorn: ' + id);
    console.log(JSON.stringify(unicorn));

}

exports.deleteUnicorn = function(req, res) {
    var id = req.params.id;
    console.log('Deleting unicorn: ' + id);
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
