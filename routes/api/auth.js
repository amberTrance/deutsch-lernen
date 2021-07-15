const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verifyJWT = require('../../middleware/verifyJWT')
const config = require('config')

// Register route
router.post('/signup',
  [
    check('email', 'Please provide a valid email!').isEmail(),
    check('password', 'Please enter a password that is at least 6 characters long!')
    .isLength({min: 6})
  ],
  async (req, res) => {
    const errors = validationResult(req)

    // If there are errors, send the errors array
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }

    const { username, email, password } = req.body

    // Verify if email is taken
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({errors: [{msg: 'This email address is already in use'}]})
    }

    user = new User({
      username,
      email,
      password
    })

    // Encrypt password
    const salt = await bcrypt.genSalt(10)

    user.password = await bcrypt.hash(password, salt)

    // Save user to db
    try {
      await user.save()
    } catch (err) {
      console.error(err.msg)
      res.status(500).send('Server Error')
    }

    const payload = {
      user: {
        id: user.id,
        username: user.username
      }
    }

    jwt.sign(
      payload, 
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      })
})

// POST Login route
router.post('/login',
  [
    check('email', 'Please provide a valid email!').isEmail(),
    check('password', 'Please enter a password').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)

    // If there are errors
    if (!errors.isEmpty) {
      return res.status(401).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      // Check if the user exists already
      let user = await User.findOne({ email })
  
      if (!user) {
        return res.status(400).json({ errors: [ { msg: 'Invalid credentials!'} ] })
      }
  
      // Check if passwords match
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ errors: [ { msg: 'Invalid credentials!'} ] })
      }
  
  
      //Return jsonwebtoken
      const payload = {
        user : {
          id : user.id,
          username: user.username
        }
      }
  
      jwt.sign(
        payload, 
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) { throw err }
          res.json({ token })
        })
    } catch(err) {
      console.error(err.message)
  
      res.status(500).send('Server error')
    }

})


// Get user route
router.get('/user', verifyJWT, (req, res) => {
  const username = req.user.username
  res.json({auth: true, username: username})
})

module.exports = router