const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 5000
// const uri = config.get("mongoURI")
const uri = process.env.MONGODB_URI;

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



app.use('/api/nouns', require('./routes/api/nouns'))
app.use('/api/auth', require('./routes/api/auth'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}