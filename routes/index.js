var express = require('express');
const swarmRoutes = require('./swarm')
var router = express.Router();

module.exports = (app) => {
  app.use('/swarm', swarmRoutes)
}
