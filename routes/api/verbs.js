const express = require('express')
const router = express.Router()

const Verb = require('../../models/Verb')

router.post('/create', (req, res) => {
  const verb = req.body

  const newVerb = new Verb(verb)

  newVerb.save()
    .then(result => console.log(result))
    .catch(err => console.log(err))
})

module.exports = router