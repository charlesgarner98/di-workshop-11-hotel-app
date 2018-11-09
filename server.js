var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')

// the port to listen on. choose whatever you want!
var port = 3000

// create a new express app:
var app = express()

// set up logging on our app:
app.use(morgan('dev'))
// turn JSON in requests to something we can work with:
app.use(bodyParser.json())
// turn forms in requests to something we can work with:
app.use(bodyParser.urlencoded({ extended: true }))

var words = ['hello', 'world']

// get list of words
app.get('/words', function(req, res) {
  res.json({
    words: words,
  })
})

// add a new word
app.post('/words', function(req, res) {
  var wordToAdd = req.body.word
  words.push(wordToAdd)
  res.json({
    addedWord: wordToAdd
  })
})

// get a specific word
app.get('/words/:id', function(req, res) {
  var wordIndex = req.params.id
  var word = words[wordIndex]
  res.json({
    word: word
  })
})

// start the app!
app.listen(port, function() {
  console.log('Server listening on http://localhost:' + port)
})
