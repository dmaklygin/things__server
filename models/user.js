
mongoose = require('mongoose');

Schema = mongoose.Schema

UserSchema = new Schema({
	name: {
		type: String,
		trim: true
	},
	photo: {
		type: String
	},
	reg_date: Date
});

module.exports = UserSchema;