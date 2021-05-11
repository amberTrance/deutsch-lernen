const express = require('express')
const router = express.Router()

const Noun = require('../models/Noun')


// Get nouns collection
router.get('/', async (req, res) => {
  try {
    const nouns = await Noun.find()
    const list = await Noun.distinct('category')

    res.json({nouns, list})
  } catch (err) {
    console.log(err)
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