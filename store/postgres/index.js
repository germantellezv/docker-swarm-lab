const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.js')[env]

const db = new Sequelize(`postgres://${config.pgUser}:${config.pgPassword}@${config.pgHost}:${config.pgPort}/${config.pgDbName}`,{ logging: false,pool: {"acquire": 240000,"max":30,"idle":20000} })
async function testConnection() {
  try {
    await db.authenticate();
    console.log('[DB] PostgreSQL - Conexión exitosa.');
  } catch (error) {
    console.error('[DB] Unable to connect to the database:', error);
  }
}
testConnection()

module.exports = db