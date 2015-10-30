var express = require('express');
var passport = require('passport');
var path = require('path');
var ClassSchema = require('../models/userModel');
var router = express.Router();
var index = path.resolve(__dirname, '../server/public/views/index.html');
var registerUser = path.resolve(__dirname, '../server/public/views/register.html');
var loginUser = path.resolve(__dirname, '../server/public/views/login.html');
var optionsPage = path.resolve(__dirname, '../server/public/views/options.html');

router.get('/', function (req, res) {
    console.log('made it to index');
    res.sendFile(index, { user : req.user });
});

router.get('/register', function(req, res) {
    console.log('made it to first register');
    res.sendFile(registerUser, { });
});

router.post('/register', function(req, res, next) {
    console.log(req.body);
    ClassSchema.register(new ClassSchema({ username : req.body.username }), req.body.password, function(err, userModel) {
        if (err) {
            return  res.sendFile(registerUser, {info: "Be more creative, think of a new class name."});
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});

router.get('/options ', function (req, res) {
    console.log('made it to options');
    res.sendFile(optionsPage);
});

router.get('/login', function(req, res) {
    res.sendFile(loginUser, { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res, next) {
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.sendFile(optionsPage);
    });
});

//router.post('/login',
//    passport.authenticate('local', { successRedirect: 'optionsPage',
//        failureRedirect: '/login' }));



router.get('/logout', function(req, res, next) {
    req.logout();
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;