var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reactionSchema = new Schema({
    feeling: String,
    clicks: []
});

var Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;