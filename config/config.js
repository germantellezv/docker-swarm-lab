require('dotenv').config()
module.exports = {
  development: {
    pgHost:process.env.PG_HOST,
    pgPort: process.env.PG_PORT,
    pgDbName:process.env.PG_DB_NAME,
    pgUser:process.env.PG_USER,
    pgPassword:process.env.PG_PASSWORD
  },
  production: {
    pgHost:process.env.PG_HOST,
    pgDbName:process.env.PG_DB_NAME,
    pgUser:process.env.PG_USER,
    pgPassword:process.env.PG_PASSWORD
  }
  
}