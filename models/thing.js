
mongoose = require('mongoose');

Schema = mongoose.Schema

ThingSchema = new Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
	place: String,
	thing: String,
	description: String,
    tags: Array,
	coordinates: Array,
	anonymously: Boolean,
	created: {
        type: Date,
        default: {
            toString: function () {
                return (new Date()).toString();
            }
        }
    },
    comments: Array,
    point: {
        type: Number,
        default: 0
    }
});

module.exports = ThingSchema;