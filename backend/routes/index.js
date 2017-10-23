var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/grocerylist');

var Schema = mongoose.Schema;
var itemSchema = new Schema({
    name: {type: String, required: true},
    checked: {type: String, required: true},
}, {collection: 'list'})

var item = mongoose.model('list', itemSchema);

<<<<<<< HEAD

router.get('/', function(req, res) {
    res.send("API root directory")
});

router.route('/list')
    .get(function(req, res) {
    item.find()
        .then(function(response) {
            res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
            res.header("Access-Control-Allow-Credentials", "true");
            res.send(response)
        })
    })

    .post(function(req,res) {
        item.create(req.body,function(err,item) {
            if(err) {
                res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
                res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");
                res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
                res.header("Access-Control-Allow-Credentials", "true");
                res.send("Error saving item");
            } else {
                console.log(item);
                res.send(item);
            }
        })
    })

router.delete('/list' +'/:id', function(req,res) {
        console.log(req.params);
        item.remove({
            _id: req.params.id
        }, function(err) {
            if(err) {
                res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
                res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");
                res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
                res.header("Access-Control-Allow-Credentials", "true");
                return res.send(err);
            } else {
                console.log("sucess")
            }
        })
    })

=======
router.get('/list', function(req, res){

    // Get a Mongo client to work with the Mongo server
    var MongoClient = mongodb.MongoClient;

    // Define where the MongoDB server is
    var url = 'mongodb://localhost:27017/grocerylist';

    // Connect to the server
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the Server', err);
        } else {
            // We are connected
            console.log('Connection established to', url);

            // Get the documents collection
            var collection = db.collection('list');

            // Find all students
            collection.find({}).toArray(function (err, result) {
                if (err) {
                    res.send(err);
                } else if (result.length) {
                    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
                    res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");
                    res.send(result)
                } else {
                    res.send('No documents found');
                }
                //Close connection
                db.close();
            });
        }
    });
});
>>>>>>> parent of 3fbc5e0... update
module.exports = router;