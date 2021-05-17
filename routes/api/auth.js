const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
        id: user.id
      }
    }

    // Remove at deploy
    const jwtToken = "much-secret-wow"

    jwt.sign(
      payload, 
      jwtToken,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      })
})

module.exports = router