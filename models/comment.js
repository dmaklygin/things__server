
mongoose = require('mongoose');

Schema = mongoose.Schema

CommentSchema = new Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    think_id: {
        type: Schema.ObjectId,
        ref: 'Think'
    },
    comment: String,
    date: Date
});

module.exports = CommentSchema;