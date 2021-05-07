const mongoose = require('mongoose')

const NounSchema = mongoose.Schema({
  category: {
		type: String,
		required: true,
	},
	english: {
		type: String,
		required: true,
		unique: true
	},
	singular: {
		type: String,
		required: true
	},
	plural: {
		type: String,
		required: true
	},
	right: {
		type: Number,
		default: 0
	},
	wrong: {
		type: Number,
		default: 0
	}
}, { timestamps: true })

const Noun = mongoose.model('noun', NounSchema)

module.exports = Noun
