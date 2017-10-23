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

module.exports = router;