// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const generateFuckword = require('./fuckword')
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extened: true }))
// setting routes

app.get('/', (req, res) => {

  res.render('index')
})
app.post('/', (req, res) => {
  const options = req.body
  const fuckword = generateFuckword(req.body)
  res.render('index', { fuckword: fuckword, options: options })

})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})