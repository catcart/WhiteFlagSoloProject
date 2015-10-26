var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.get('/', function(request, response, next){
    response.sendFile(path.join(__dirname, '../server/public/views/index.html'));
});

//router.post('/', passport.authenticate('local', {
//    successRedirect: '/users',
//    failureRedirect: '/'
//}));

module.exports = router;