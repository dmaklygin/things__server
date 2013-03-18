
mongoose = require('mongoose');

Schema = mongoose.Schema

PlaceSchema = new Schema({
    name: String,
    coordinates: Array,
    address: String,
    city: String,
    state: String,
    country: String
});

module.exports = PlaceSchema;