const mongoose = require('mongoose')

const VerbSchema = mongoose.Schema({
  english : {
    type: String,
    required: true,
    trim: true
  },

  infinitive : {
    type: String,
    required: true,
    trim: true
  },
  // Präsens
  present : {
    ich : {
      type: String,
      required: true,
      trim: true
    },
    du : {
      type: String,
      trim: true
    },
    er : {
      type: String,
      trim: true
    },
    wir : {
      type: String,
      trim: true
    },
    ihr : {
      type: String,
      trim: true
    },
    sie : {
      type: String,
      trim: true
    }
  },
  // Präteritum
  simplePast : {
    ich : {
      type: String,
      required: true,
      trim: true
    },
    du : {
      type: String,
      trim: true
    },
    er : {
      type: String,
      trim: true
    },
    wir : {
      type: String,
      trim: true
    },
    ihr : {
      type: String,
      trim: true
    },
    sie : {
      type: String,
      trim: true
    }
  },
  // Perfekt
  presentPerfect : {
    ich : {
      type: String,
      required: true,
      trim: true
    }
  },
  // Plusquamperfekt
  pastPerfect : {
    ich : {
      type: String,
      required: true,
      trim: true
    }
  },
  // Futur I
  future : {
    ich : {
      type: String,
      required: true,
      trim: true
    }
  },
  // Futur II
  futurePerfect : {
    ich : {
      type: String,
      required: true,
      trim: true
    }
  },
  // Konjunktiv II, Futur I (I would..)
  subjunctiveFuture : {
    ich : {
      type: String,
      required: true,
      trim: true
    }
  },
  // Konjunktiv II, Plusquamperfekt, (I would have..)
  subjunctivePastPerfect : {
    ich : {
      type: String,
      required: true,
      trim: true
    }
  },
  imperative : {
    du : {
      type: String,
      required: true,
      trim: true
    }
  },
  user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'user'
	}
}, { timestamps: true })

VerbSchema.index({english: 1, infinitive: 1, user: 1}, {unique: true})

const Verb = mongoose.model('Verb', VerbSchema)

module.exports = Verb
