const { Pool } = require('pg');

/*const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 
    'postgres://postgres:123@localhost:5432/ecommerce'
});*/
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce',
  password: 'Mam@ti21#',
  port: '5432'
})

module.exports = pool;