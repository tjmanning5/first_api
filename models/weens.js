var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeensSchema = new Schema({
    name: String,
    hasBuddies: Boolean,
    hasPets: {type: Boolean, default: false},
    bootsNum: Number
});

var WeensModel = mongoose.model("WeensModel", WeensSchema);
module.exports = WeensModel;