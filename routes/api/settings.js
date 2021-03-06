const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const Noun = require('../../models/Noun')
const Verb = require('../../models/Verb')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const verifyJWT = require('../../middleware/verifyJWT')


router.put('/changePass', verifyJWT,   
  [
    check('newPass', 'Please provide a password that is at least 6 characters long!')  
    .isLength({min: 6})
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }

    let id = req.user.id
    let {oldPass, newPass} = req.body

    let user = await User.findOne({ _id : id })

    const isMatch = await bcrypt.compare(oldPass, user.password)
    
    if (!isMatch) {
      return res.status(400).json({ errors: [ { msg: 'Old password is incorrect!'} ] })
    }

    // Encrypt password
    const salt = await bcrypt.genSalt(10)

    let pass = await bcrypt.hash(newPass, salt)

    User.findOneAndUpdate({ _id: id }, {password: pass}, (err, data) => {
      if (err) {
        res.status(500).json('Server Error')
      } else {
        res.json(`Your password was successfully changed. 
          Please log out and log in again for the change to take effect.`)
      }
    })
})


router.delete('/delete', verifyJWT, async (req, res) => {
  const {id} = req.user

  const {password} = req.body

  let user = await User.findOne({_id : id})
  

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return res.status(400).json({msg: 'Password is incorrect!'})
  }

  try {
    await Noun.deleteMany({user: id})
    await Verb.deleteMany({user: id})
    await User.deleteOne({_id: id})

    return res.json({msg: 'User and connected data successfully deleted!'})
  } catch (err) {
    console.log(err)
  }

})

module.exports = router