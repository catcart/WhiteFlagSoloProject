var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reactionSchema = new Schema({
    feeling: String,
    clicks: []
});

var reaction = mongoose.model('reaction', reactionSchema);

module.exports = reaction;