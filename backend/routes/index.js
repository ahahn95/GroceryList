var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/grocerylist');

var Schema = mongoose.Schema;
var itemSchema = new Schema({
    //_id: {type: String, required: true},
    name: {type: String, required: true},
    checked: {type: String, required: true},
}, {collection: 'list'})

var item = mongoose.model('list', itemSchema);

router.get('/', function(req, res) {
    res.send("API root directory")
});

router.get('/list', function(req, res) {
    item.find()
        .then(function(response) {
            res.send(response)
        })
})

router.post('/list', function(req,res) {
    item.create(req.body,function(err,item) {
        if(err) {
            res.send("Error saving item");
        } else {
            console.log(item);
            res.send(item);
        }
    })
})

router.delete('/list/:id',function(req,res) {
    item.remove({
        _id: req.params.id
    }, function(err) {
        if(err) {
            return res.send(err);
        }
    })
})

module.exports = router;