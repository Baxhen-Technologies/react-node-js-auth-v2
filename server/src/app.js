// Express App Setup
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const passport = require('passport');

class AppController {
  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(cors())
    this.express.use(morgan('combined'))
    this.express.use(bodyParser.json())
  }

  routes() {
    // eslint-disable-next-line
    this.express.use(require('./routes'))
  }
}

module.exports = new AppController().express
