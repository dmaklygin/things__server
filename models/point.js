
mongoose = require('mongoose');

Schema = mongoose.Schema

PointSchema = new Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    think_id: {
        type: Schema.ObjectId,
        ref: 'Think'
    },
    point: Number
});

module.exports = PointSchema;