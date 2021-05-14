const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 5000
const uri = "mongodb+srv://test:abcd1234@node.ul9of.mongodb.net/deutsch-lernen?retryWrites=true&w=majority"

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

app.use('/nouns', require('./routes/nouns'))
