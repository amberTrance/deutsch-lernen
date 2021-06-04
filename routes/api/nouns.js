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

    const count = data.length

    res.json({list, count})
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
  const {collectionName, inputList} = req.body
  
  // Add user property to each item in the array
  let userItemList = inputList.map(item => ({ ...item,'category': collectionName, 'user': req.user.id }))

  Noun.insertMany(userItemList)
    .then(result => {
      res.json('Success')
    })
    .catch(err => {
      res.status(400).json({errors: [{msg: `Your collection could not be saved. 
      Make sure all your fields are completed and that 
      none of the words you wrote already exists in another collection.`}]})
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
      res.status(400).json(`"${update.english}" edit failed`)
    } else {
      res.json(`"${update.english}" edit successful`)
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
