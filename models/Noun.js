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
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'user'
	}
}, { timestamps: true })

NounSchema.index({ user: 1, english: 1 }, { unique: true })

const Noun = mongoose.model('Noun', NounSchema)

module.exports = Noun
