const express = require('express')
const router = express.Router()

const Noun = require('../models/Noun')

// Add nouns collection
router.post('/add', (req, res) => {
  console.log(req.body)
})

module.exports = router 