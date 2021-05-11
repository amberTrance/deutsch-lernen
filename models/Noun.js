const mongoose = require('mongoose')

const NounSchema = mongoose.Schema({
  category: {
		type: String,
		required: true,
		trim: true
	},
	english: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	singular: {
		type: String,
		required: true,
		trim: true
	},
	plural: {
		type: String,
		required: true,
		trim: true
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

const Noun = mongoose.model('Noun', NounSchema)

module.exports = Noun
