var express = require('express');
var path = require('path');
var reactionSchema = require('../models/reactionModel');
var router = express.Router();
var index = path.resolve(__dirname, '../server/public/views/index.html');
var registerUser = path.resolve(__dirname, '../server/public/views/register.html');
var loginUser = path.resolve(__dirname, '../server/public/views/login.html');
var optionsPage = path.resolve(__dirname, '../server/public/views/options.html');


router.post('/reactions', function(req, res, next){
    console.log(req.body);
    reactionSchema.create(req.body, function(err, post){
        res.send('sent reaction');
    })
});

module.exports = router;