const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routeNav = require('./src/routesNavigation.js')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routeNav)

app.get('*', (request, response) => {
  response.status(404).send('Path not found')
})
app.listen(1010, () => {
  console.log('Express app is listening on port 3001')
})
