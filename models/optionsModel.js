/**
 * Created by Amelia on 10/25/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reactionSchema = new Schema({
    feeling: String,
    clicks: Number
});

var Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;