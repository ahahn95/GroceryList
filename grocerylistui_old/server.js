//server.js
'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3077;

mongoose.connect('mongodb://')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//TODO see if all this stuff is needed
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers", "Origin","Accept",
    "X-Requested-With", "Content-Type", "Access-Control-Request-Method", "Access-Control-Request-Headers");


    res.setHeader("Cache-Control", "no-cache");
    next();
});

router.get("/", function(req, res) {
res.json({ message: "API Initialized!"});
});

app.use("/api", router);

app.listen(port, function() {
    console.log(`api running on port ${port}`);
});