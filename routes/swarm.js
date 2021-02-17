var express = require('express');
var router = express.Router();
const pg = require('../store/postgres/index')
const { QueryTypes } = require('sequelize')
router.get('/', async (req, res) => {
  const os = require('os');
  const hostname = os.hostname();

  const query = await pg.query('SELECT * from prueba_swarm;', { type: QueryTypes.SELECT})

  return res.status(200).send({
    status: 'ok',
    hostname: hostname,
    body: "Hola! 😀",
    queryPostgres: query
  })
})


module.exports = router
