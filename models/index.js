mongoose = require('mongoose');

exports.PlaceSchema = require('./place');
exports.ThingSchema = require('./thing');
exports.UserSchema = require('./user');
exports.CommentSchema = require('./comment');
exports.PointSchema = require('./point');

console.log('Registering models…');

exports.Place = mongoose.model('Place', exports.PlaceSchema);
exports.Thing = mongoose.model('Thing', exports.ThingSchema);
exports.User = mongoose.model('User', exports.UserSchema);
exports.Comment = mongoose.model('Comment', exports.CommentSchema);
exports.Point = mongoose.model('Point', exports.PointSchema);