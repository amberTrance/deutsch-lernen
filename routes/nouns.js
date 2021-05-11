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
  const {collectionName, inputList} = req.body

  inputList.forEach(async item => {
    let word = await Noun.findOne({ english: item.english })

    if (word) {
      return res.status(400).json(
        { msg: `${item.english} already exists in the ${word.category} collection`}
      )
    }

    word = new Noun ({
      category: collectionName,
      english: item.english,
      singular: item.singular,
      plural: item.plural
    })

    try {
      await word.save()
      res.json('Nouns successfully added!')
    } catch (err) {
      return res.status(400).json(`Error: ${err}`)
    }
  })

})

module.exports = router 