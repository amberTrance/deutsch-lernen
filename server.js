const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

const PORT = process.env.PORT || 5000
const uri = config.get("mongoURI")

// Body parser
app.use(express.json({ extended: false }))

mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(result => {
    console.log('DB connection established')

    app.listen(PORT)
  })
  .catch (err => console.log(err))
// mongoose.set('debug', true);

app.use('/api/nouns', require('./routes/api/nouns'))
app.use('/api/auth', require('./routes/api/auth'))
