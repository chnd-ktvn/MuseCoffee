const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routeNav = require('./src/routesNavigation.js')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routeNav)

app.get('*', (request, response) => {
  response.status(404).send('Path not found')
})

app.use(cors())
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization'
  )
  next()
})

const port = process.env.PORT || 1010
app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`)
})
