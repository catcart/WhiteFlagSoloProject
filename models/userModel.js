var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var ClassSchema = new Schema({
    username: String,
    password: String
});

ClassSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('ClassName', ClassSchema);