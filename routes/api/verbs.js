const express = require('express')
const router = express.Router()
const verifyJWT = require('../../middleware/verifyJWT')

const Verb = require('../../models/Verb')

router.post('/create', verifyJWT, (req, res) => {
  const id = req.user.id
  const verb = req.body
  verb.user = id

  const newVerb = new Verb(verb)

  newVerb.save()
    .then(result => res.json('Success'))
    .catch(err => console.log(err))
})


router.get('/', verifyJWT, async (req, res) => {
  const id = req.user.id

  try {
    let verbs = await Verb.find({user: id}, {createdAt: 0, updatedAt: 0, user: 0})
    let list = verbs.map(item => item.infinitive)

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


module.exports = router
