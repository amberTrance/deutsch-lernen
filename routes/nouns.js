const express = require('express')
const router = express.Router()

const Noun = require('../models/Noun')


// Returns a list with all the noun categories
router.get('/', async (req, res) => {
  try {
    const list = await Noun.distinct('category')

    res.json(list)
  } catch (err) {
    res.status(400).json('Server Error')
  }
})



// Returns the requested collection and also the data that populates the sidebar
router.get('/:collection', async (req, res) => {
  const paramCollection = req.params.collection

  try {
    const list = await Noun.distinct('category')
    const category = await Noun.find({category: paramCollection })

    res.json({list, category})
  } catch (err) {
    res.status(400).json('Server Error')
  }
})



// Add nouns collection
router.post('/create', async (req, res) => {
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
      plural: plural
    })

    try {
      await word.save()
      return res.json('Nouns successfully added!')
    } catch (err) {
      return res.status(400).json({ errors: [{ msg: 'Server Error'}]})
    }
  })

})

module.exports = router 