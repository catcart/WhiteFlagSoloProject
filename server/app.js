var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
//var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
//var bootstrap = require('bootstrap');

//var User = require('../models/userModel');

//var index = require('../routes/index');
var routes = require('../routes/index');
var users = require('../routes/users');
var Class = require('../models/userModel.js');

var app = express();

mongoose.connect('mongodb://localhost:27017/whiteflag');

//var mongoURI = 'mongodb://localhost:27017/whiteflag';
//var mongoDB = mongoose.connect(mongoURI).connection;


//mongoDB.on('error', function(err){
//    console.log('You must have angered Mongod. Seek retribution!', err);
//});
//
//mongoDB.once('open', function(){
//    console.log('Praise be unto Mongod! It Works!');
//});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port: ' + port);
});

var ClassSchema = require('../models/userModel');
passport.use(new LocalStrategy(ClassSchema.authenticate()));
passport.serializeUser(ClassSchema.serializeUser());
passport.deserializeUser(ClassSchema.deserializeUser());



module.exports = app;