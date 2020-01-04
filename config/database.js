const { createPool } = require('mysql');
const { Pool, Client } = require('pg');
/*const pool = createPool({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:15
}); */

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  }) 

  console.log(process.env.DATABASE_URL)


module.exports = pool;