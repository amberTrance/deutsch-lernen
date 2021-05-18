const express = require('express')
const router = express.Router()
const verifyJWT = require('../../middleware/verifyJWT')

const Noun = require('../../models/Noun')


// Returns a list with all the noun categories
router.get('/', verifyJWT, async (req, res) => {
  const id = req.user.id
  try {
    
    const data = await Noun.find({user: id},{createdAt:0, updatedAt:0})
    const filtered = data.map(item => item.category)
    const list = [...new Set(filtered)]

    res.json(list)
  } catch (err) {
    res.status(400).json('Server Error')
  }
})



// Returns the requested collection and also the data that populates the sidebar
router.get('/:collection', verifyJWT, async (req, res) => {
  const paramCollection = req.params.collection
  const id = req.user.id

  try {

    const data = await Noun.find({user: id},{createdAt:0, updatedAt:0})
    const filtered = data.map(item => item.category)
    const list = [...new Set(filtered)]

    const category = await Noun.find(
      {category: paramCollection, user: id }, {createdAt:0, updatedAt:0}
    )

    res.json({list, category})
  } catch (err) {
    res.status(400).json('Server Error')
  }
})



// Add nouns collection
router.post('/create', verifyJWT, (req, res) => {
  // Return an errors array if received data is incorrect
  const {collectionName, inputList} = req.body

  inputList.forEach(async item => {

    let english = item.english
    let singular = item.singular
    let plural = item.plural

    // Verifies if after triming, an input field is empty
    if (
      collectionName.trim() === '' ||
      english.trim() === '' ||
      singular.trim() === '' ||
      plural.trim() === ''
    ) {
      return res.status(400).json({errors: [{ msg: 'Fields cannot be empty!'}]})
    }

    let word = await Noun.findOne({ english: english })

    if (word) {
      return res.status(400).json(
        { errors: [{ msg: `The noun '${item.english}' already exists in the '${word.category}' collection!`}] }
      )
    }

    word = new Noun ({
      category: collectionName,
      english: english,
      singular: singular,
      plural: plural,
      user: req.user.id
    })

    try {
      await word.save()
    } catch (err) {
      return res.status(400).json({ errors: [{ msg: 'Server Error'}]})
    }
  })
})


// Edit noun route
router.put('/', (req, res) => {
  const { noun } = req.body
  const update = {
    english: noun.english,
    singular: noun.singular,
    plural: noun.plural
  }

  Noun.findOneAndUpdate({ _id: noun._id }, update, (err, data) => {
    if (err) {
      res.status(400).json(`${update.english} edit failed`)
    } else {
      res.json(`${update.english} edit successful`)
    }
  })
  
})

// Delete 
router.delete('/:id', (req, res) => {
  const id = req.params.id

  Noun.findByIdAndDelete(id)
    .then(result => res.json('Success'))
    .catch(err => res.status(400).json('delete failed'))
})

module.exports = router 