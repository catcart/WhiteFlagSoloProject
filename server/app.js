var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var User = require('../models/userModel');

//var index = require('../routes/index');
var routes = require('../routes/index');
var options = require('../routes/options');
var users = require('../routes/users');
var register = require('../routes/register');

var app = express();

var mongoURI = 'mongodb://localhost:27017/whiteflag';
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
    console.log('You must have angered Mongod. Seek retribution!', err);
});

mongoDB.once('open', function(){
    console.log('Praise be unto Mongod! It Works!');
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port: ' + port);
});

//app.get('/', function(request, response){
//    response.send('This shows up in terminal');
//});
app.use(session({
    secret: 'secret',
    key: 'user',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: 60000, secure: false}
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new localStrategy({passReqToCallback: true, usernameField: 'username'},
    function(req, username, password, done){
        User.findOne({username:username}, function(err, user){
            if(err) throw err;
            if(!user){
                return done(null, false, {message: 'Incorrect username or password'});
            }
            user.comparePassword(password, function(err, isMatch) {
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                } else {
                    done(null, false, {message: 'Incorrect username or password'});
                }
            })
        });
    }
));

passport.serializeUser(function(user, callback){
    callback(null, user.id);
});

passport.deserializeUser(function(id, callback){
    User.findById(id, function(err, user){
        if(err) callback(err);
        callback(null, user)
    });
});

app.use('/', routes);
app.use('/users', users);
app.use('/options', options);
app.use('/register', register);

module.exports = app;