const express = require('express')
const router = express.Router()
const verifyJWT = require('../../middleware/verifyJWT')

const Verb = require('../../models/Verb')

router.post('/create', verifyJWT, (req, res) => {
  const id = req.user.id
  const verb = req.body
  verb.user = id

  const newVerb = new Verb(verb)
  
  Verb.find({english: verb.english, infinitive: verb.infinitive, user: verb.user})
    .then(result => {
      if (result.length > 0) 
        return res.json({errors: [{msg: 'This verb exists already in your collection!'}]})
    })
    .then()

  newVerb.save()
    .then(result => res.json('Success'))
    .catch(err => {
      res.status(400)
        .json({errors: [{msg: 'Make sure you completed all the fields before sending!'}]})
    })
})


router.get('/', verifyJWT, async (req, res) => {
  const id = req.user.id

  try {
    let verbs = await Verb.find({user: id}, {createdAt: 0, updatedAt: 0, user: 0}).sort('infinitive')
    let list = verbs.map(item => item.infinitive)
    // Make separate arrays for each letter if unordered list length is larger than 0
    if (list.length > 0) {
      // Add the first item of the unordered list in the new list
      let ordList = [[list[0]]]

      let count = 0
      for (let i = 1; i < list.length; i++) {
        if (list[i][0] === list[i-1][0]) {
          ordList[count].push(list[i])
        } else {
          ordList.push([list[i]])
          count++
        }
      }
      list = ordList
    }

    res.json({list})
  } catch(err) {
    res.status(500).json('Server Error')
  }
   
})

// Returns one verb
router.get('/:verb', verifyJWT, async (req, res) => {
  const verbParam = req.params.verb
  const id = req.user.id

  try {
    const word = await Verb.find({ infinitive: verbParam, user: id })
    res.json({word})
  } catch(err) {
    res.status(401).json('Bad request')
  }
   
})

router.put('/', verifyJWT, (req, res) => {
  const { word } = req.body
  
  Verb.findOneAndUpdate({ _id: word._id }, word, (err, data) => {
    if (err) {
      res.status(400).json(`"${word.infinitive}" edit failed`)
    } else {
      res.json(`"${word.infinitive}" edit successful`)
    }
  })
  
})


router.delete('/:id', verifyJWT, (req, res) => {
  const id = req.params.id

  Verb.findByIdAndDelete(id)
    .then(result => res.json('Success'))
    .catch(err => res.status(400).json('delete failed'))
})

module.exports = router
