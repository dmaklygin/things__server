
mongoose = require('mongoose');

Schema = mongoose.Schema

ThingSchema = new Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
	place_id: {
        type: Schema.ObjectId,
        ref: 'Place'
    },
	thing: String,
	description: String,
    tags: Array,
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